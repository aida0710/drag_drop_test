import React from 'react';
import {SideMenuItems} from '@/app/(index)/components/side-menu-items';

export const SideMenu = () => {
    const onDragStart = (event: React.DragEvent<HTMLDivElement>, nodeType: string):void => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <aside className='overflow-y-auto p-4'>
            <div className='mb-4 text-sm'>ノード 一覧</div>
            {SideMenuItems.map((item, index: number) => (
                <div
                    key={index}
                    className='input-node text-md mb-4 flex h-12 cursor-grab items-center justify-center rounded border p-2'
                    onDragStart={(event: React.DragEvent<HTMLDivElement>) => onDragStart(event, item.nodeType)}
                    draggable>
                    {item.label}
                </div>
            ))}
        </aside>
    );
};
