import {DndContext, DragEndEvent, KeyboardSensor, PointerSensor, useSensor, useSensors} from '@dnd-kit/core';
import {Block} from '@/app/pattern-2/Block';
import React, {useState} from 'react';

interface ItemInterface {
    id: string;
    position: {left: number; top: number};
}

export const DropZone = () => {
    const [blocks, setBlocks] = useState<ItemInterface[]>([
        {id: '1', position: {left: 100, top: 100}},
        {id: '2', position: {left: 200, top: 200}},
        {id: '3', position: {left: 300, top: 300}},
    ]);

    const sensors = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor));

    const handleDragEnd = (event: DragEndEvent) => {
        const {active, delta} = event;
        if (active) {
            const activeBlock: ItemInterface | undefined = blocks.find((block: ItemInterface): boolean => block.id === active.id);
            if (activeBlock) {
                const newBlockPosition: {top: any; left: any} = {
                    left: activeBlock.position.left + delta.x,
                    top: activeBlock.position.top + delta.y,
                };
                console.log(`BlockId[${active.id}]を移動させました:`, newBlockPosition);

                const activeBlockIndex: number = blocks.indexOf(activeBlock);
                const newBlocks: ItemInterface[] = [...blocks];
                newBlocks[activeBlockIndex] = {
                    ...activeBlock,
                    position: newBlockPosition,
                };
                setBlocks(newBlocks);
            }
        }
    };

    return (
        <DndContext
            sensors={sensors}
            onDragEnd={handleDragEnd}>
            <div className='relative h-full w-full overflow-hidden'>
                {blocks.map((block: ItemInterface, index: number) => (
                    <Block
                        key={block.id}
                        id={block.id}
                        index={index}
                        top={block.position.top}
                        left={block.position.left}
                    />
                ))}
            </div>
        </DndContext>
    );
};
