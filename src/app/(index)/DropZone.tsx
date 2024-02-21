import {DndContext, DragEndEvent, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors} from '@dnd-kit/core';
import {Node} from '@/app/(index)/Node';
import React, {useState} from 'react';
import {IDraggableNode} from '@/app/(index)/node/IDraggableNode';
import {Lines} from '@/app/(index)/Lines';
import {NodeTypes} from '@/app/(index)/node/NodeTypes';
import {LineTypes} from '@/app/(index)/line/LineTypes';
import {restrictToFirstScrollableAncestor, restrictToParentElement, restrictToWindowEdges} from '@dnd-kit/modifiers';

export const DropZone = () => {
    const [node, setNode] = useState<IDraggableNode[]>([
        {
            id: '1',
            position: {left: 100, top: 100},
            node_parameters: NodeTypes.Gateway,
            target_line: {
                type: LineTypes.Category5e,
                id: '2',
            },
        },
        {
            id: '2',
            position: {left: 200, top: 200},
            node_parameters: NodeTypes.L3Switch,
            target_line: {
                type: LineTypes.NonLimited,
                id: '3',
            },
        },
        {
            id: '3',
            position: {left: 300, top: 300},
            node_parameters: NodeTypes.Server,
            target_line: {
                type: LineTypes.None,
            },
        },
    ]);

    const sensors = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor), useSensor(TouchSensor));

    const handleDragEnd = (event: DragEndEvent): void => {
        const {active, delta} = event;
        if (active) {
            const activeNode: IDraggableNode | undefined = node.find((block: IDraggableNode): boolean => block.id === active.id);
            if (activeNode) {
                const newBlockPosition: {top: any; left: any} = {
                    left: activeNode.position.left + delta.x,
                    top: activeNode.position.top + delta.y,
                };
                console.log(`NodeId #${active.id}を移動させました:`, newBlockPosition);

                const activeBlockIndex: number = node.indexOf(activeNode);
                const newBlocks: IDraggableNode[] = [...node];
                newBlocks[activeBlockIndex] = {
                    ...activeNode,
                    position: newBlockPosition,
                };
                setNode(newBlocks);
            }
        }
    };

    return (
        <DndContext
            autoScroll={false}
            modifiers={[restrictToWindowEdges, restrictToParentElement, restrictToFirstScrollableAncestor]}
            sensors={sensors}
            onDragEnd={handleDragEnd}>
            <div className='relative h-full w-full overflow-hidden'>
                <Lines nodes={node} />
                {node.map((node: IDraggableNode, index: number) => (
                    <Node
                        key={index}
                        node={node}
                    />
                ))}
            </div>
        </DndContext>
    );
};
