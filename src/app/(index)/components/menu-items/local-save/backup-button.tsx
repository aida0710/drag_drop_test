import React from 'react';
import {Label} from '@/shadcn/ui/label';
import {MenubarItem} from '@/shadcn/ui/menubar';
import {DataContext} from '@/app/(index)/flow/context/data-context';
import {Comment} from '@/app/(index)/components/menu-items/utils/comment';
import {Button} from '@/shadcn/ui/button';
import {transformUtcDateToJstWithMinutes} from '@/app/(index)/utils/utils';
import {ILocalBackup} from '@/app/(index)/flow/context/ILocalBackup';
import {toast} from 'sonner';

export const BackupButton = () => {
    const {nodes, edges, settings} = React.useContext(DataContext);

    function time(): string {
        const time = transformUtcDateToJstWithMinutes();
        return `${time.year}年${time.month}月 ${time.day}日${time.hours}時${time.minutes}分${time.seconds}秒`;
    }

    return (
        <MenubarItem className='grid w-full max-w-sm items-center gap-1.5'>
            <Label>Local Backup</Label>
            <Comment comment='現在の状態をローカルに書き込みます。' />
            <Comment comment='ブラウザをリロードしても自動で最終バックアップデータを復元します。' />
            <Comment comment='任意のバックアップデータを復元したい場合は、「Local Save」の「Backup History」を参照ください。' />
            <Button
                variant='hover_none'
                onClick={(): void => {
                    if (settings.localBackups === ILocalBackup.Disable) {
                        toast.error('Error', {description: 'ローカルストレージのバックアップが無効化されています。'});
                        return;
                    }
                    try {
                        let fileName: string = time();
                        const currentBackup = {nodes, edges, settings};

                        // ローカルストレージから既存のバックアップを取得します
                        let storageItem: string | null = localStorage.getItem('local_backup');
                        let existingBackups = storageItem ? JSON.parse(storageItem) : {};

                        // バックアップリストが26個以上あれば、最も古いものを削除します
                        if (Object.keys(existingBackups).length >= 25) {
                            let oldestBackup: string = Object.keys(existingBackups).sort()[0];
                            delete existingBackups[oldestBackup];
                            toast.warning('Notice', {
                                description: 'ローカルストレージのバックアップが25個を超えました。最も古いバックアップを削除しました。' + oldestBackup,
                            });
                        }

                        // 新しいバックアップをリストに追加します
                        existingBackups[fileName] = currentBackup;

                        // バックアップリストをローカルストレージに再保存します
                        localStorage.setItem('local_backup', JSON.stringify(existingBackups));

                        //console.log('Local storage backup: ', localStorage.getItem('local_backup'));

                        toast.success('Success ' + Object.keys(existingBackups).length + '/25', {description: 'ローカルストレージにバックアップしました。'});
                    } catch (error: any) {
                        console.error('Local storage backup error: ', error);
                        toast.error('Error', {description: 'ローカルストレージのバックアップに失敗しました。'});
                    }
                }}>
                データをセーブ
            </Button>
        </MenubarItem>
    );
};
