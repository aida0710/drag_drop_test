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

    const onNodesChange: OnNodesChange = useCallback((changes: NodeChange[]) => setNodes((nds: Node[]) => applyNodeChanges(changes, nds)), [setNodes]);
    const onEdgesChange: OnEdgesChange = useCallback((changes: EdgeChange[]) => setEdges((eds: Edge[]) => applyEdgeChanges(changes, eds)), [setEdges]);
    const onConnect: OnConnect = useCallback((connection: Connection) => setEdges((eds: Edge[]) => addEdge(connection, eds)), [setEdges]);

    return (
        <DataContext.Provider value={{nodes, edges, settings, setNodes, setEdges, setSettings}}>
            <div className='h-screen'>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    fitView>
                    <BackgroundVariantChange />
                    <Controls />
                </ReactFlow>
            </div>
        </DataContext.Provider>
    );
};
