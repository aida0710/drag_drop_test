import {Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger} from '@/shadcn/ui/menubar';
import {ExportButton} from '@/app/(index)/components/menu-items/file/export-button';
import {ImportButton} from '@/app/(index)/components/menu-items/file/import-button';
import {DataResetButton} from '@/app/(index)/components/menu-items/file/data-reset-button';
import {ThemeButton} from '@/app/(index)/components/menu-items/setting/theme-button';
import {BackgroundVariantButton} from '@/app/(index)/components/menu-items/setting/background-variant-button';
import {MiniMapButton} from '@/app/(index)/components/menu-items/setting/mini-map-button';
import React from 'react';
import {ExecuteComponents} from '@/app/(index)/components/menu-items/execute/execute-components';
import {BackupEnableButton} from '@/app/(index)/components/menu-items/local-save/backup-enable-button';
import {BackupIntervalInput} from '@/app/(index)/components/menu-items/local-save/backup-interval-input';
import {BackupButton} from '@/app/(index)/components/menu-items/local-save/backup-button';
import {BackupHistoryModal} from '@/app/(index)/components/menu-items/local-save/backup-history-modal';
import {Label} from '@/shadcn/ui/label';
import {Comment} from '@/app/(index)/components/menu-items/utils/comment';

export const IndexMenubar = () => {
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                    <ImportButton />
                    <ExportButton />
                    <MenubarSeparator />
                    <DataResetButton />
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Local Save</MenubarTrigger>
                <MenubarContent>
                    <BackupEnableButton />
                    <BackupIntervalInput />
                    <BackupButton />
                    <div className='rounded-sm hover:bg-accent hover:text-accent-foreground'>
                        <MenubarItem className='grid w-full max-w-sm items-center gap-1.5'>
                            <Label>Backup History</Label>
                            <Comment comment='最大25個までバックアップを閲覧出来ます。' />
                            <Comment comment='バックアップを選択すると、そのバックアップが復元されます。' />
                        </MenubarItem>
                        <div className='mx-2 pb-1.5'>
                            <BackupHistoryModal />
                        </div>
                    </div>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Settings</MenubarTrigger>
                <MenubarContent>
                    <ThemeButton />
                    <BackgroundVariantButton />
                    <MiniMapButton />
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Help</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>Documentation</MenubarItem>
                    <MenubarItem>Feedback</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <ExecuteComponents />
        </Menubar>
    );
};
