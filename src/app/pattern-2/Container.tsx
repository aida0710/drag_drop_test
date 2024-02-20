// Container.tsx
import React, {useState} from 'react';
import {closestCorners, DndContext, DragOverlay, KeyboardSensor, PointerSensor, useDraggable, useSensor, useSensors} from '@dnd-kit/core';
import {sortableKeyboardCoordinates} from '@dnd-kit/sortable';
import SortableContainer from './SortableContainer';
import {Item} from '@/app/pattern-2/Item';

export const Container = () => {
    // ドラッグ&ドロップでソート可能なリスト
    const [items, setItems] = useState<{
        [key: string]: string[];
    }>({
        container1: ['A', 'B', 'C'],
        container2: ['D', 'E', 'F'],
        // 他のコンテナも同様に定義
    });

    // ドラッグの開始、移動、終了などにどのような入力を許可するかを決めるprops
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    );

    const {active} = useDraggable({id: 'item-id'}); // replace 'item-id' with the actual id of the item

    // 以下、ドラッグ&ドロップの処理を実装していく部分です

    return (
        <div className='mx-auto flex flex-row'>
            <DndContext
                sensors={sensors}
                collisionDetection={closestCorners}>
                {/* 各SortableContainerを配置 */}
                <SortableContainer
                    id='container1'
                    items={items.container1}
                />
                <SortableContainer
                    id='container2'
                    items={items.container2}
                />
                {/* 他のコンテナも同様に配置 */}
                {/* DragOverlay */}
                <DragOverlay>
                    {active ? (
                        <Item
                            id={'item-id'}
                            index={0}
                        />
                    ) : null}
                </DragOverlay>
                {/* replace 'item-id' with the actual id of the item */}
            </DndContext>
        </div>
    );
};
