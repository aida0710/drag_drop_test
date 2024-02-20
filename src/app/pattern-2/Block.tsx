import {useDraggable} from '@dnd-kit/core';
import {Chip} from '@nextui-org/chip';

interface BlockProps {
    id: string;
    index: number;
    top: number;
    left: number;
}

export const Block = ({id, index, top, left}: BlockProps) => {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({id});

    const {x: translateX, y: translateY} = transform || {x: 0, y: 0};

    const style = {
        position: 'absolute' as 'absolute',
        left: left + translateX,
        top: top + translateY,
    };

    return (
        <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
            className='block'>
            <Chip>Block {index + 1}</Chip>
        </div>
    );
};
