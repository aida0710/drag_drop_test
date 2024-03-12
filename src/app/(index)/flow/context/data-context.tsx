'use client';

import React from 'react';
import {BackgroundVariant, Edge, Node} from 'reactflow';
import {IDataContext} from '@/app/(index)/flow/context/IDataContext';
import {IDataSettings} from '@/app/(index)/flow/context/IDataSettings';
import {ThemeValue} from '@/app/(index)/flow/context/IThemeValue';
import {IMiniMapValue} from '@/app/(index)/flow/context/IMiniMapValue';
import {ILocalBackup} from '@/app/(index)/flow/context/ILocalBackup';

const initialContext: IDataContext = {
    nodes: [],
    edges: [],
    settings: {
        backgroundVariant: BackgroundVariant.Lines,
        pageTheme: ThemeValue.Dark,
        miniMap: IMiniMapValue.Hidden,
        localBackups: ILocalBackup.Disable,
        localBackupsInterval: '0',
    },
    localBackups: [],
    setNodes: (_data: Partial<Node[]>): void => {},
    setEdges: (_data: Partial<Edge[]>): void => {},
    setSettings: (_data: Partial<IDataSettings>): void => {},
    setLocalBackups: (_data: {nodes: Node[]; edges: Edge[]}[]): void => {},
};

//全てのデータを保持するコンテキスト
export const DataContext: React.Context<IDataContext> = React.createContext(initialContext);
