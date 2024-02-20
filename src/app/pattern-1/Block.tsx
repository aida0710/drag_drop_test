'use client';

import {DragSourceMonitor, useDrag} from 'react-dnd';
import {ItemTypes} from '@/app/pattern-1/ItemTypes';
import React from 'react';

interface BlockProps {
    id: string;
    position: {left: number; top: number};
}

export const Block = ({id, position}: BlockProps) => {
    const [{isDragging}, drag] = useDrag({
        type: ItemTypes.BLOCK,
        item: {id, position},
        collect: (monitor: DragSourceMonitor<{id: string}>): {isDragging: boolean} => {
            return {isDragging: monitor.isDragging()};
        },
    });
    return (
        <div
            ref={drag}
            style={{
                position: 'absolute',
                left: position.left,
                top: position.top,
                opacity: isDragging ? 0.5 : 1,
                fontSize: 25,
                fontWeight: 'bold',
                cursor: 'move',
                background: 'red',
            }}>
            Block {id}
        </div>
    );
};
