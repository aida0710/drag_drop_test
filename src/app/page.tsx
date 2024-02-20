"use client";

import React from 'react';
import {DndProvider} from "react-dnd";
import {DropZone} from "@/app/index/DropZone";
import {HTML5Backend} from "react-dnd-html5-backend";

export default function Page() {
    return (
        <div className="w-full h-screen">
            <DndProvider backend={HTML5Backend}>
                <DropZone/>
            </DndProvider>
        </div>

    );
}
