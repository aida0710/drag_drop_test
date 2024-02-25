import {IDraggableNode} from '@/app/(index)/flow/node/IDraggableNode';
import {LineTypes} from '@/app/(index)/flow/line/LineTypes';

export enum NodeTypes {
    Gateway = 'Gateway',
    L3Switch = 'L3Switch',
    L2Switch = 'L2Switch',
    Hub = 'Hub',
    WiFiRouter = 'WiFiRouter',
    Firewall = 'Firewall',
    Server = 'Server',
}

const initialNodes: IDraggableNode[] = [
    {
        id: '1',
        position: {left: 100, top: 100},
        node_parameters: NodeTypes.Gateway,
        target_line: {
            type: LineTypes.Category5e,
            id: '2',
        },
    },
    {
        id: '2',
        position: {left: 200, top: 200},
        node_parameters: NodeTypes.L3Switch,
        target_line: {
            type: LineTypes.NonLimited,
            id: '3',
        },
    },
    {
        id: '3',
        position: {left: 300, top: 300},
        node_parameters: NodeTypes.Server,
        target_line: {
            type: LineTypes.None,
        },
    },
];
