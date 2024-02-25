import ReactFlow, {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
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
import {BackgroundVariantChange} from '@/app/(index)/flow/background-variant-change';
import {DataContext} from '@/app/(index)/flow/context/data-context';

const initialNodes: Node[] = [
    {
        id: '1',
        data: {label: 'Hello'},
        position: {x: 0, y: 0},
    },
    {
        id: '2',
        data: {label: 'World'},
        position: {x: 100, y: 100},
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
            console.log(updatedNodes);
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
                key={JSON.stringify(nodes) + JSON.stringify(edges)}
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodesDraggable={true}
                fitView>
                <BackgroundVariantChange />
                <Controls />
            </ReactFlow>
        </div>
    );
};
