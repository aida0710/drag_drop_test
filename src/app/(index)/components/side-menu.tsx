import React from 'react';

export const SideMenu = () => {
    const onDragStart = (event: React.DragEvent<HTMLDivElement>, nodeType: string) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <aside className='overflow-y-auto p-4'>
            <div className='mb-4 text-sm'>アイテム一覧</div>
            <div
                className='input-node text-md mb-4 flex h-12 cursor-grab items-center justify-center rounded border p-2'
                onDragStart={(event: React.DragEvent<HTMLDivElement>) => onDragStart(event, 'Gateway')}
                draggable>
                Gateway Node
            </div>
            <div
                className='input-node text-md mb-4 flex h-12 cursor-grab items-center justify-center rounded border p-2'
                onDragStart={(event: React.DragEvent<HTMLDivElement>) => onDragStart(event, 'L3Switch')}
                draggable>
                L3 Switch Node
            </div>
            <div
                className='input-node text-md mb-4 flex h-12 cursor-grab items-center justify-center rounded border p-2'
                onDragStart={(event: React.DragEvent<HTMLDivElement>) => onDragStart(event, 'L2Switch')}
                draggable>
                L2 Switch Node
            </div>
            <div
                className='input-node text-md mb-4 flex h-12 cursor-grab items-center justify-center rounded border p-2'
                onDragStart={(event: React.DragEvent<HTMLDivElement>) => onDragStart(event, 'Server')}
                draggable>
                Server Node
            </div>
            <div
                className='input-node text-md mb-4 flex h-12 cursor-grab items-center justify-center rounded border p-2'
                onDragStart={(event: React.DragEvent<HTMLDivElement>) => onDragStart(event, 'Firewall')}
                draggable>
                Firewall Node
            </div>
        </aside>
    );
};