// SortableContainer.tsx
import React from 'react';
import {Item} from '@/app/pattern-2/Item';

const SortableContainer: React.FC<{id: string; items: string[]}> = ({id, items}) => {
    return (
        <ul>
            {items.map((item, index) => (
                <Item
                    key={item}
                    id={item}
                    index={index}
                />
            ))}
        </ul>
    );
};

export default SortableContainer;
