import React from 'react';
import {Label} from '@/shadcn/ui/label';
import {MenubarItem} from '@/shadcn/ui/menubar';
import {DataContext} from '@/app/(index)/flow/context/data-context';
import {Comment} from '@/app/(index)/components/menu-items/utils/comment';
import {Input} from '@/shadcn/ui/input';

export const BackupIntervalInput = () => {
    const {settings, setSettings} = React.useContext(DataContext);

    return (
        <MenubarItem className='grid w-full max-w-sm items-center gap-1.5'>
            <Label>Backups Interval</Label>
            <Comment comment='0~25まで設定可能。単位は分です。' />
            <Comment comment='0の場合は自動バックアップを行いません。' />
            <Input
                onClick={(event: React.MouseEvent<HTMLInputElement>): void => {
                    event.stopPropagation();
                }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                    if (event.target.value === '') {
                        setSettings({
                            ...settings,
                            localBackupsInterval: '0',
                        });
                        return;
                    }

                    if (parseInt(event.target.value) > 25) {
                        setSettings({
                            ...settings,
                            localBackupsInterval: '25',
                        });
                        return;
                    }

                    setSettings({
                        ...settings,
                        localBackupsInterval: event.target.value,
                    });
                }}
                type='number'
                min={0}
                max={25}
                placeholder={'Backup Interval'}
                value={settings.localBackupsInterval}
            />
        </MenubarItem>
    );
};
