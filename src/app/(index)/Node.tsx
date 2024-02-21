import {useDraggable} from '@dnd-kit/core';
import {Chip} from '@nextui-org/chip';
import {IDraggableNode} from '@/app/(index)/node/IDraggableNode';

interface BlockProps {
    node: IDraggableNode;
}

export const Node = ({node}: BlockProps) => {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({id: node.id});

    const {x: translateX, y: translateY} = transform || {x: 0, y: 0};

    const style = {
        position: 'absolute' as 'absolute',
        left: node.position.left + translateX,
        top: node.position.top + translateY,
    };

    return (
        <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
            className='block'>
            <Chip>{node.node_parameters + ' #' + node.id}</Chip>
        </div>
    );
};
