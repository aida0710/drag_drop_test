import {NodeTypes} from '@/app/pattern-2/node/NodeTypes';
import {match} from 'ts-pattern';
import {INodeParameters} from '@/app/pattern-2/node/INodeParameters';

/**
 * INodeParametersを返します。
 * @param nodeType
 * @constructor
 */
export function NodeParameters(nodeType: NodeTypes): INodeParameters {
    return match(nodeType)
        .with(NodeTypes.Gateway, (): INodeParameters => {
            return {
                node_type: NodeTypes.Gateway,
                picture: '/images/devices/gateway.png',
                picture_width: 80,
                picture_height: 20,
                description: 'Gateway',
            };
        })
        .with(NodeTypes.L3Switch, (): INodeParameters => {
            return {
                node_type: NodeTypes.L3Switch,
                picture: '/images/devices/switch.png',
                picture_width: 80,
                picture_height: 20,
                description: 'L3 Switch',
            };
        })
        .with(NodeTypes.L2Switch, (): INodeParameters => {
            return {
                node_type: NodeTypes.L2Switch,
                picture: '/images/devices/switch.png',
                picture_width: 80,
                picture_height: 20,
                description: 'L2 Switch',
            };
        })
        .with(NodeTypes.Hub, (): INodeParameters => {
            return {
                node_type: NodeTypes.Hub,
                picture: '/images/devices/hub.png',
                picture_width: 80,
                picture_height: 20,
                description: 'Hub',
            };
        })
        .with(NodeTypes.WiFiRouter, (): INodeParameters => {
            return {
                node_type: NodeTypes.WiFiRouter,
                picture: '/images/devices/wifi-router.png',
                picture_width: 80,
                picture_height: 20,
                description: 'WiFi Router',
            };
        })
        .with(NodeTypes.Firewall, (): INodeParameters => {
            return {
                node_type: NodeTypes.Firewall,
                picture: '/images/devices/firewall.png',
                picture_width: 80,
                picture_height: 20,
                description: 'Firewall',
            };
        })
        .with(NodeTypes.Server, (): INodeParameters => {
            return {
                node_type: NodeTypes.Server,
                picture: '/images/devices/server.png',
                picture_width: 80,
                picture_height: 20,
                description: 'Server',
            };
        })
        .otherwise(() => {
            throw new Error('Invalid NodeType');
        });
}
