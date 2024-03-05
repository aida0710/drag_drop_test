'use client';

import React from 'react';
import {NavbarMenu} from '@/app/(index)/components/navbar-menu';
import 'reactflow/dist/style.css';
import {FlowContents} from '@/app/(index)/flow-contents';
import {DataContext} from '@/app/(index)/flow/context/data-context';
import {Edge, Node} from 'reactflow';
import {IDataSettings} from '@/app/(index)/flow/context/IDataSettings';
import {initialSettings} from '@/app/(index)/utils/InitialData';

export default function Page() {
    const [nodes, setNodes] = React.useState<Node[]>([]);
    const [edges, setEdges] = React.useState<Edge[]>([]);
    const [settings, setSettings] = React.useState<IDataSettings>(initialSettings);

    return (
        <DataContext.Provider value={{nodes, edges, settings, setNodes, setEdges, setSettings}}>
            <div className='w-full'>
                <NavbarMenu />
                <FlowContents />
            </div>
        </DataContext.Provider>
    );
}
