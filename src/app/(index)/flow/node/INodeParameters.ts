import {NodeTypes} from '@/app/(index)/flow/node/NodeTypes';

export interface INodeParameters {
    node_type: NodeTypes;
    picture: string;
    picture_width: number;
    picture_height: number;
    description: string;
}
