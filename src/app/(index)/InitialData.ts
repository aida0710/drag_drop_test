import {BackgroundVariant, Edge, Node} from 'reactflow';
import {ThemeValue} from '@/app/(index)/flow/context/IThemeValue';
import {IMiniMapValue} from '@/app/(index)/flow/context/IMiniMapValue';
import {IDataSettings} from '@/app/(index)/flow/context/IDataSettings';
import {EnumEdgeTypes} from '@/app/(index)/flow/edge/EdgeTypes';

export const initialNodes: Node[] = [
    {
        id: '1',
        type: 'Gateway',
        position: {x: 0, y: 0},
        data: {
            label: 'Gateway',
            ip_address: '0.0.0.0',
            subnet_mask: '255.255.255.0',
        },
    },
    {
        id: '2',
        type: 'L3Switch',
        position: {x: 0, y: 0},
        data: {
            label: 'L3Switch',
            ip_address: '0.0.0.0',
            subnet_mask: '255.255.255.0',
        },
    },
];

export const initialEdges: Edge[] = [
    {
        id: 'e1-2',
        type: 'CustomEdge',
        data: {
            type: EnumEdgeTypes.Category5,
        },
        source: '1',
        target: '2',
    },
    {
        id: 'e2-1',
        type: 'CustomEdge',
        data: {
            type: EnumEdgeTypes.Category8,
        },
        source: '2',
        target: '1',
    },
];

export const initialSettings: IDataSettings = {
    backgroundVariant: BackgroundVariant.Lines,
    pageTheme: ThemeValue.Dark,
    miniMap: IMiniMapValue.Hidden,
};
