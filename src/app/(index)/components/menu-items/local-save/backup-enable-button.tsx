import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from '@/shadcn/ui/select';
import React from 'react';
import {Label} from '@/shadcn/ui/label';
import {MenubarItem} from '@/shadcn/ui/menubar';
import {DataContext} from '@/app/(index)/flow/context/data-context';
import {ILocalBackup} from '@/app/(index)/flow/context/ILocalBackup';
import {Comment} from '@/app/(index)/components/menu-items/utils/comment';

export const BackupEnableButton = () => {
    const {settings, setSettings} = React.useContext(DataContext);

    return (
        <MenubarItem className='grid w-full max-w-sm items-center gap-1.5'>
            <Label>Local Backups</Label>
            <Comment comment='バックアップの有効化/無効化。' />
            <Comment comment='複数ウィンドウで開くとデータの損失につながる場合があります。' />
            <Select
                defaultValue={settings.localBackups}
                onValueChange={(value: ILocalBackup) =>
                    setSettings({
                        ...settings,
                        localBackups: value,
                    })
                }>
                <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Local Backup' />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value={ILocalBackup.Enable}>Enable</SelectItem>
                        <SelectItem value={ILocalBackup.Disable}>Disable</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </MenubarItem>
    );
};
