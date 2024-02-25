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
import React, {useCallback, useEffect} from 'react';
import {DataContext} from '@/app/(index)/flow/context/data-context';

const initialNodes: Node[] = [
    {
        id: '1',
        data: {label: 'ルータ'},
        position: {x: 0, y: 0},
        type: 'input',
    },
    {
        id: '2',
        data: {label: 'L3Switch'},
        position: {x: 50, y: 50},
        type: 'default',
    },
    {
        id: '3',
        data: {label: 'サーバ'},
        position: {x: 100, y: 100},
        type: 'output',
    },
];

const initialEdges: Edge[] = [];

export const FlowContents = () => {
    const {nodes, edges, settings, setNodes, setEdges, setSettings} = React.useContext(DataContext);

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
    return (
        <div className='h-screen'>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodesDraggable={true}
                fitView>
                <Background
                    color='#696969'
                    variant={settings.backgroundVariant}
                />
                <Controls />
            </ReactFlow>
        </div>
    );
};
