'use client';

import {DropTargetMonitor, useDrop} from 'react-dnd';
import {ItemTypes} from '@/app/pattern-1/ItemTypes';
import React, {useState} from 'react';
import {Block} from '@/app/pattern-1/Block';
import {useWindowSize} from '@/app/pattern-1/useWindowSize';

interface ItemInterface {
    id: string;
    position: {left: number; top: number};
}

export const DropZone = () => {
    const [width, height] = useWindowSize();

    const [blocks, setBlocks] = useState<ItemInterface[]>([
        {id: '1', position: {left: 0, top: 0}},
        {id: '2', position: {left: 0, top: 0}},
        {id: '3', position: {left: 0, top: 0}},
    ]);

    const BLOCK_WIDTH: number = 50;
    const BLOCK_HEIGHT: number = 50;

    const [{isOver}, drop] = useDrop(
        () => ({
            accept: ItemTypes.BLOCK,
            drop: (item: ItemInterface, monitor: DropTargetMonitor<ItemInterface, any>): void => {
                console.log('Dropped:', item);
                const delta: {x: number; y: number} = monitor.getDifferenceFromInitialOffset() as {
                    x: number;
                    y: number;
                };
                let left: number = Math.round(item.position.left + delta.x);
                let top: number = Math.round(item.position.top + delta.y);
                left = Math.min(Math.max(left, 0), width - BLOCK_WIDTH);
                top = Math.min(Math.max(top, 0), height - BLOCK_HEIGHT);
                setBlocks((blocks: ItemInterface[]) =>
                    blocks.map((block: ItemInterface): ItemInterface => {
                        if (block.id === item.id) {
                            const newBlock: ItemInterface = {...block, position: {left, top}};
                            console.log('移動先の座標:', newBlock);
                            return newBlock;
                        }
                        return block;
                    }),
                );
            },
            collect: (monitor): {isOver: boolean} => ({
                isOver: monitor.isOver(),
            }),
        }),
        [],
    );
    return (
        <div
            ref={drop}
            className='relative h-full w-full overflow-hidden bg-white'
            style={{border: isOver ? '2px solid #000' : '2px dashed #000'}}>
            {blocks.map((block: ItemInterface) => (
                <Block
                    key={block.id}
                    id={block.id}
                    position={block.position}
                />
            ))}
        </div>
    );
};
