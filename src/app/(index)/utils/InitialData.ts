import {BackgroundVariant, Edge, Node} from 'reactflow';
import {ThemeValue} from '@/app/(index)/flow/context/IThemeValue';
import {IMiniMapValue} from '@/app/(index)/flow/context/IMiniMapValue';
import {IDataSettings} from '@/app/(index)/flow/context/IDataSettings';
import {genNodeId} from '@/app/(index)/utils/utils';
import {ILocalBackup} from '@/app/(index)/flow/context/ILocalBackup';

export const initialNodes: Node[] = [
    {
        id: genNodeId(),
        type: 'Gateway',
        position: {x: 0, y: 0},
        data: {
            label: 'Gateway',
            ip_address: '0.0.0.0',
            subnet_mask: '255.255.255.0',
        },
    },
];

export const initialEdges: Edge[] = [];

export const initialSettings: IDataSettings = {
    backgroundVariant: BackgroundVariant.Dots,
    pageTheme: ThemeValue.Dark,
    miniMap: IMiniMapValue.Hidden,
    localBackups: ILocalBackup.Disable,
    localBackupsInterval: '0',
};
