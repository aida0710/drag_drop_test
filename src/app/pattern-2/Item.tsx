import React from "react";
import { useSortable } from "@dnd-kit/sortable";

export const Item: React.FC<{ id: string; index: number }> = ({ id, index }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    return (
        <li
            ref={setNodeRef}
            style={{
                transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
                transition,
            }}
            {...attributes}
            {...listeners}
        >
            {id}
        </li>
    );
};