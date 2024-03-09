import {Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger} from '@/shadcn/ui/menubar';
import {ExportButton} from '@/app/(index)/components/menu-items/file/export-button';
import {ImportButton} from '@/app/(index)/components/menu-items/file/import-button';
import {DataResetButton} from '@/app/(index)/components/menu-items/file/data-reset-button';
import {ThemeButton} from '@/app/(index)/components/menu-items/setting/theme-button';
import {BackgroundVariantButton} from '@/app/(index)/components/menu-items/setting/background-variant-button';
import {MiniMapButton} from '@/app/(index)/components/menu-items/setting/mini-map-button';
import React from 'react';
import {ExecuteModal} from '@/app/(index)/components/menu-items/execute/execute-modal';

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
            <ExecuteModal />
        </Menubar>
    );
};
