import React, {useCallback} from 'react';
import {Edge, Node, useReactFlow} from 'reactflow';
import {genNodeId} from '@/app/(index)/utils/utils';
import {Button} from '@nextui-org/react';

export interface ContextMenuProps {
    id: string;
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;

    [x: string]: any;
}

const ContextMenu: React.FC<ContextMenuProps> = ({id, top, left, right, bottom, ...props}) => {
    const {getNode, setNodes, addNodes, setEdges} = useReactFlow();

    const duplicateNode = useCallback((): void => {
        const node: Node | undefined = getNode(id);
        if (!node) return;
        const position: {x: number; y: number} = {
            x: node.position.x + 50,
            y: node.position.y + 50,
        };
        addNodes({...node, id: genNodeId(), position});
    }, [id, getNode, addNodes]);

    const deleteNode = useCallback((): void => {
        setNodes((nodes: Node[]) => nodes.filter((node: Node): boolean => node.id !== id));
        setEdges((edges: Edge[]) => edges.filter((edge: Edge) => edge.source !== id && edge.target !== id));
    }, [id, setNodes, setEdges]);

    return (
        <div
            className='absolute z-10 rounded-md border border-black bg-white shadow-md'
            style={{top, left, right, bottom}}
            {...props}>
            <div className='grid grid-cols-1 p-2 text-black'>
                <p className='text-xxs'>Node ID: {id}</p>
                <Button
                    className='hover:bg-gray-200'
                    onClick={(): void => {
                        duplicateNode();
                    }}>
                    選択ノードを複製
                </Button>
                <Button
                    className='hover:bg-gray-200'
                    onClick={(): void => {
                        deleteNode();
                    }}>
                    選択ノードを削除
                </Button>
            </div>
        </div>
    );
};

export default ContextMenu;
