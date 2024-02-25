'use client';

import React from 'react';
import {BackgroundVariant, Edge, Node} from 'reactflow';
import {IDataContext} from '@/app/(index)/flow/context/IDataContext';
import {IDataSettings} from '@/app/(index)/flow/context/IDataSettings';

const initialContext: IDataContext = {
    nodes: [],
    edges: [],
    settings: {
        backgroundVariant: BackgroundVariant.Lines,
    },
    setNodes: (_data: Node[]): void => {},
    setEdges: (_data: Edge[]): void => {},
    setSettings: (_data: IDataSettings): void => {},
};

//全てのデータを保持するコンテキスト
export const DataContext: React.Context<IDataContext> = React.createContext(initialContext);
