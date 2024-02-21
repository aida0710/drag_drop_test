import {useDraggable} from '@dnd-kit/core';
import {IDraggableNode} from '@/app/(index)/node/IDraggableNode';
import {Checkbox} from '@/shadcn/ui/checkbox';
import {Badge} from '@/shadcn/ui/badge';
import React, {useState} from 'react';

interface BlockProps {
    node: IDraggableNode;
}

export const Node = ({node}: BlockProps) => {
    const [isChecked, setIsChecked] = useState(false);
    const {attributes, listeners, setNodeRef, transform} = useDraggable({id: node.id});
    const [mouseDownTime, setMouseDownTime] = useState(0);

    const {x: translateX, y: translateY} = transform || {x: 0, y: 0};

    const style = {
        position: 'absolute' as 'absolute',
        left: node.position.left + translateX,
        top: node.position.top + translateY,
    };

    const handleMouseDown = (event: React.MouseEvent): void => {
        setMouseDownTime(event.timeStamp);
    };

    const handleMouseUp = (event: React.MouseEvent): void => {
        const elapsed: number = event.timeStamp - mouseDownTime;
        if (elapsed < 200) {
            console.log('Clicked');
            setIsChecked(!isChecked);
        }
    };

    return (
        <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}>
            <Badge
                onClick={(): void => {
                    console.log('Clicked');
                    setIsChecked(!isChecked);
                }}
                variant='secondary'
                className='flex items-center space-x-2 rounded p-1'>
                <Checkbox
                    className='mr-2'
                    checked={isChecked}
                    id={node.id}
                />
                {node.node_parameters + ' #' + node.id}
            </Badge>
        </div>
    );
};
