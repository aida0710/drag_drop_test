import ReactFlow, {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
    Background,
    Connection,
    Controls,
    Edge,
    EdgeChange,
    Node,
    NodeChange,
    OnConnect,
    OnEdgesChange,
    OnNodesChange,
} from 'reactflow';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {DataContext} from '@/app/(index)/flow/context/data-context';
import {NodeTypes} from "@/app/(index)/flow/node/NodeTypes";
import ContextMenu, {ContextMenuProps} from './flow/components/ContextMenu';

const initialNodes: Node[] = [
    {
        id: '1',
        data: {label: 'ルータ'},
        position: {x: 0, y: 0},
        type: 'input',
    },
    {
        id: '2',
        data: {
            label: 'L3Switch',
            nodeParameters: 'L3Switch',
        },
        position: {x: 50, y: 50},
        type: 'default',
    },
    {
        id: '3',
        data: {label: 'サーバ'},
        position: {x: 100, y: 100},
        type: 'output',
    },
    {
        id: '4',
        data: {label: 'ゲートウェイ'},
        position: {x: 150, y: 150},
        type: 'Gateway',
    }
];

const initialEdges: Edge[] = [];

export const FlowContents = () => {
    const {nodes, edges, settings, setNodes, setEdges} = React.useContext(DataContext);
    const [menu, setMenu] = useState<ContextMenuProps | null>(null);
    const ref = useRef<HTMLDivElement>(null);

    useEffect((): void => {
        setNodes(initialNodes);
        setEdges(initialEdges);
    }, [setEdges, setNodes]);

    const onNodesChange: OnNodesChange = useCallback(
        (changes: NodeChange[]): void => {
            const updatedNodes: Node[] = applyNodeChanges(changes, nodes);
            setNodes(updatedNodes);
        },
        [setNodes, nodes],
    );

    const onEdgesChange: OnEdgesChange = useCallback(
        (changes: EdgeChange[]): void => {
            const updatedEdges: Edge[] = applyEdgeChanges(changes, edges);
            setEdges(updatedEdges);
        },
        [setEdges, edges],
    );

    const onConnect: OnConnect = useCallback(
        (connection: Connection): void => {
            const newEdge: Edge[] = addEdge(connection, edges);
            setEdges(newEdge);
        },
        [setEdges, edges],
    );

    const onNodeContextMenu = useCallback(
        (event: React.MouseEvent, node: Node): void => {
            event.preventDefault();
            const coordinate: DOMRect | undefined = ref.current?.getBoundingClientRect();
            coordinate && setMenu({
                id: node.id,
                top: event.clientY < coordinate.height - 200 ? event.clientY : undefined,
                left: event.clientX < coordinate.width - 200 ? event.clientX : undefined,
                right: event.clientX >= coordinate.width - 200 ? coordinate.width - event.clientX : undefined,
                bottom: event.clientY >= coordinate.height - 200 ? coordinate.height - event.clientY : undefined,
            });
        },
        [setMenu],
    );

    const onPaneClick = useCallback(() => setMenu(null), [setMenu]);

    return (
        <div className='h-screen'>
            <ReactFlow
                ref={ref}
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodesDraggable={true}
                nodeTypes={NodeTypes}
                onPaneClick={onPaneClick}
                onNodeContextMenu={onNodeContextMenu}
                fitView>
                <Background
                    color='#696969'
                    variant={settings.backgroundVariant}
                />
                {menu && <ContextMenu onClick={onPaneClick} {...menu} />}
                <Controls/>
            </ReactFlow>
        </div>
    );
};
