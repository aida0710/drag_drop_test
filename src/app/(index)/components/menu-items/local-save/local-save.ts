import {toast} from 'sonner';
import {transformUtcDateToJstWithMinutes} from '@/app/(index)/utils/utils';
import {Edge, Node} from 'reactflow';
import {IDataSettings} from '@/app/(index)/flow/context/IDataSettings';

function time(): string {
    const time = transformUtcDateToJstWithMinutes();
    return `${time.year}年${time.month}月 ${time.day}日${time.hours}時${time.minutes}分${time.seconds}秒`;
}

export function localSave(nodes: Node[], edges: Edge[], settings: IDataSettings) {
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
}
