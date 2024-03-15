import {Menubar, MenubarContent, MenubarMenu, MenubarTrigger} from '@/shadcn/ui/menubar';
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
import {ModalMenubarItem} from '@/app/(index)/components/menu-items/utils/modal-menubar-item';
import {FeedbackButtons} from '@/app/(index)/components/menu-items/help/feedback-buttons';
import Image from 'next/image';

export const IndexMenubar = () => {
    return (
        <Menubar>
            <Image src="/icon-s512-background-none.svg" alt="icon" width={32} height={32} className="rounded" />
            <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                    <ImportButton />
                    <ExportButton />
                    <BackupButton />
                    <ModalMenubarItem
                        label='Local Data Reset'
                        comments={['ローカルデータのバックアップをすべて削除します。']}>
                        <DataResetButton />
                    </ModalMenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Local Save</MenubarTrigger>
                <MenubarContent>
                    <BackupEnableButton />
                    <BackupIntervalInput />
                    <ModalMenubarItem
                        label='Backup History'
                        comments={['最大25個までバックアップを閲覧出来ます。', 'バックアップを選択すると、そのバックアップが復元されます。']}>
                        <BackupHistoryModal />
                    </ModalMenubarItem>
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
                <MenubarTrigger>Feedback</MenubarTrigger>
                <MenubarContent>
                    <ModalMenubarItem
                        label='Feedback'
                        comments={['Github Issueにてバグ報告、意見・要望を受け付けています。']}>
                        <FeedbackButtons />
                    </ModalMenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <ExecuteComponents />
        </Menubar>
    );
};
