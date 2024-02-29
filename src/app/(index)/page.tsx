'use client';

import React from 'react';
import {IndexMenubar} from '@/app/(index)/components/index-menubar';
import 'reactflow/dist/style.css';
import {FlowContents} from '@/app/(index)/flow-contents';
import {DataContext} from '@/app/(index)/flow/context/data-context';
import {BackgroundVariant, Edge, Node} from 'reactflow';
import {IDataSettings} from '@/app/(index)/flow/context/IDataSettings';
import {ThemeValue} from '@/app/(index)/flow/context/IThemeValue';
import {IMiniMapValue} from '@/app/(index)/flow/context/IMiniMapValue';
import {initialSettings} from '@/app/(index)/InitialData';

export default function Page() {
    const [nodes, setNodes] = React.useState<Node[]>([]);
    const [edges, setEdges] = React.useState<Edge[]>([]);
    const [settings, setSettings] = React.useState<IDataSettings>(initialSettings);

    return (
        <DataContext.Provider value={{nodes, edges, settings, setNodes, setEdges, setSettings}}>
            <div className='w-full'>
                <IndexMenubar />
                <FlowContents />
            </div>
        </DataContext.Provider>
    );
}
