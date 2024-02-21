import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
} from '@/shadcn/ui/context-menu';
import React from 'react';
import {NodeTypes} from '@/app/(index)/node/NodeTypes';

interface RightClickMenuProps {
    children: React.ReactNode;
}

export const RightClickMenu = ({children}: RightClickMenuProps) => {
    return (
        <ContextMenu>
            <ContextMenuTrigger>{children}</ContextMenuTrigger>
            <ContextMenuContent className='w-64'>
                <ContextMenuSub>
                    <ContextMenuSubTrigger inset>Add Elements</ContextMenuSubTrigger>
                    <ContextMenuSubContent className='w-48'>
                        {Object.keys(NodeTypes).map((key: string) => {
                            return <ContextMenuItem key={key}>{NodeTypes[key as keyof typeof NodeTypes]}</ContextMenuItem>;
                        })}
                    </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuItem inset>Delete Elements</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem inset>
                    Copy
                    <ContextMenuShortcut>Ctrl+C</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem inset>
                    Paste
                    <ContextMenuShortcut>Ctrl+V</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem inset>
                    Undo
                    <ContextMenuShortcut>Ctrl+Z</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem inset>
                    Redo
                    <ContextMenuShortcut>Ctrl+Y</ContextMenuShortcut>
                </ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    );
};
