import {ISendNode} from '@/app/api/execute/ISendNode';
import {ISendEdge} from '@/app/api/execute/ISendEdge';
import {EnumExecuteTypes} from '@/app/api/execute/EnumExecuteTypes';

export interface ISendData {
    execute: {
        type: EnumExecuteTypes;
        to_node_id: string;
        from_node_id: string;
    };
    nodes: ISendNode[];
    edges: ISendEdge[];
}