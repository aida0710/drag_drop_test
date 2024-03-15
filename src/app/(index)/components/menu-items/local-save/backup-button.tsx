import React from 'react';
import {Label} from '@/shadcn/ui/label';
import {MenubarItem} from '@/shadcn/ui/menubar';
import {DataContext} from '@/app/(index)/flow/context/data-context';
import {Comment} from '@/app/(index)/components/menu-items/utils/comment';
import {Button} from '@/shadcn/ui/button';
import {localSave} from '@/app/(index)/components/menu-items/local-save/local-save';

export const BackupButton = () => {
    const {nodes, edges, settings} = React.useContext(DataContext);

    return (
        <MenubarItem className='grid w-full max-w-sm items-center gap-1.5'>
            <Label>Local Backup</Label>
            <Comment comment='現在の状態をローカルに書き込みます。' />
            <Comment comment='ブラウザをリロードしても自動で最終バックアップデータを復元します。' />
            <Comment comment='任意のバックアップデータを復元したい場合は、「Local Save」の「Backup History」を参照ください。' />
            <Button
                variant='hover_none'
                onClick={(): void => {
                    localSave(nodes, edges, settings);
                }}>
                データをセーブ
            </Button>
        </MenubarItem>
    );
};
