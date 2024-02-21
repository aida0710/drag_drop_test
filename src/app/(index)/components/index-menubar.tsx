import {Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger} from '@/shadcn/ui/menubar';
import {LineTypes} from '@/app/(index)/line/LineTypes';
import {NodeTypes} from '@/app/(index)/node/NodeTypes';

export const IndexMenubar = () => {
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>Data Import</MenubarItem>
                    <MenubarItem>Data Export</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Data Reset</MenubarItem>
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
        </Menubar>
    );
};
