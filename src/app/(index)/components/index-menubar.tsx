import {Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger} from '@/shadcn/ui/menubar';
import {LineTypes} from '@/app/(index)/flow/line/LineTypes';
import {NodeTypes} from '@/app/(index)/flow/node/NodeTypes';
import {ExportButton} from '@/app/(index)/components/menu-items/file/export-button';
import {ImportButton} from '@/app/(index)/components/menu-items/file/import-button';
import {DataResetButton} from '@/app/(index)/components/menu-items/file/data-reset-button';
import {ThemeButton} from '@/app/(index)/components/menu-items/setting/theme-button';
import {BackgroundVariantButton} from '@/app/(index)/components/menu-items/setting/background-variant-button';

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
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        Undo
                        <MenubarShortcut>Ctrl+Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                        Redo
                        <MenubarShortcut>Ctrl+Y</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                        Cut
                        <MenubarShortcut>Ctrl+X</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                        Copy
                        <MenubarShortcut>Ctrl+C</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                        Paste
                        <MenubarShortcut>Ctrl+V</MenubarShortcut>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Add Element</MenubarTrigger>
                <MenubarContent>
                    {Object.keys(NodeTypes).map((key: string) => {
                        return <MenubarItem key={key}>{NodeTypes[key as keyof typeof NodeTypes]}</MenubarItem>;
                    })}
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Add Line</MenubarTrigger>
                <MenubarContent>
                    {Object.keys(LineTypes).map((key: string) => {
                        return <MenubarItem key={key}>{LineTypes[key as keyof typeof LineTypes]}</MenubarItem>;
                    })}
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Settings</MenubarTrigger>
                <MenubarContent>
                    <ThemeButton />
                    <BackgroundVariantButton />
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Help</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>Documentation</MenubarItem>
                    <MenubarItem>Feedback</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
};
