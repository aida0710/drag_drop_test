import {LineTypes} from '@/app/(index)/flow/line/LineTypes';
import {NodeTypes} from '@/app/(index)/flow/node/NodeTypes';

/**
 * ドラッグ可能なノードの情報を保持します。
 * target_lineは接続先のラインの情報を保持します。
 * * idは接続先のノードがない場合のみ(typeがLineTypes.None)nullを許可します。
 */
export interface IDraggableNode {
    id: string;
    position: {left: number; top: number};
    node_parameters: NodeTypes;
    target_line: {
        type: LineTypes;
        id?: string;
    };
}
