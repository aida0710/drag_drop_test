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
    ReactFlowProvider,
} from 'reactflow';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {DataContext} from '@/app/(index)/flow/context/data-context';
import {NodeTypes} from '@/app/(index)/flow/node/NodeTypes';
import ContextMenu, {ContextMenuProps} from './flow/components/context-menu';
import {SideMenu} from '@/app/(index)/components/side-menu';

const initialNodes: Node[] = [
    {
        id: '1',
        type: 'Gateway',
        position: {x: 0, y: 0},
        data: {
            label: 'Gateway',
            ip_address: '0.0.0.0',
            subnet_mask: '255.255.255.0',
        },
    },
];

const initialEdges: Edge[] = [];

let id: number = 2;
const getId = (): string => `${id++}`;

export const FlowContents = () => {
    const ref = useRef<HTMLDivElement>(null);
    const {nodes, edges, settings, setNodes, setEdges} = React.useContext(DataContext);
    const [menu, setMenu] = useState<ContextMenuProps | null>(null);

    // ドラッグアンドドロップ
    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState<any | null>(null);

    useEffect((): void => {
        setNodes(initialNodes);
        setEdges(initialEdges);
    }, [setEdges, setNodes]);

    // ノードの変更
    const onNodesChange: OnNodesChange = useCallback(
        (changes: NodeChange[]): void => {
            const updatedNodes: Node[] = applyNodeChanges(changes, nodes);
            setNodes(updatedNodes);
        },
        [setNodes, nodes],
    );

    // エッジの変更
    const onEdgesChange: OnEdgesChange = useCallback(
        (changes: EdgeChange[]): void => {
            const updatedEdges: Edge[] = applyEdgeChanges(changes, edges);
            setEdges(updatedEdges);
        },
        [setEdges, edges],
    );

    // ノードの接続
    const onConnect: OnConnect = useCallback(
        (connection: Connection): void => {
            const newEdge: Edge[] = addEdge(connection, edges);
            setEdges(newEdge);
        },
        [setEdges, edges],
    );

    // ノードの右クリック
    const onNodeContextMenu = useCallback(
        (event: React.MouseEvent, node: Node): void => {
            event.preventDefault();
            const pane: DOMRect | undefined = ref.current?.getBoundingClientRect();
            pane &&
                setMenu({
                    id: node.id,
                    top: event.clientY < pane.height - 200 ? event.clientY : undefined,
                    left: event.clientX < pane.width - 200 ? event.clientX : undefined,
                    right: event.clientX >= pane.width - 200 ? pane.width - event.clientX : undefined,
                    bottom: event.clientY >= pane.height - 200 ? pane.height - event.clientY : undefined,
                });
        },
        [setMenu],
    );

    const onPaneClick = useCallback(() => setMenu(null), [setMenu]);

    // サイドバーのドラッグアンドドロップ
    const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>): void => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event: React.DragEvent<HTMLDivElement>): void => {
            event.preventDefault();
            const type: string = event.dataTransfer.getData('application/reactflow');

            if (typeof type === 'undefined' || !type) return;
            if (!reactFlowInstance) return;
            const position = reactFlowInstance.screenToFlowPosition({
                x: event.clientX,
                y: event.clientY,
            });

            const newNode: Node = {
                id: getId(),
                type,
                position,
                data: {
                    label: `${type}`,
                    ip_address: '0.0.0.0',
                    subnet_mask: '255.255.255.0',
                    ...(type === 'Firewall' ? {permitted_communications: 'none'} : {}),
                },
            };
            setNodes(nodes.concat(newNode));
        },
        [reactFlowInstance, setNodes, nodes],
    );

    return (
        <div className='dndflow h-screen'>
            <ReactFlowProvider>
                <div
                    className='reactflow-wrapper grid h-screen grid-cols-12'
                    ref={reactFlowWrapper}>
                    <div className='col-span-2'>
                        <SideMenu />
                    </div>
                    <div className='col-span-10'>
                        <ReactFlow
                            nodes={nodes}
                            edges={edges}
                            onNodesChange={onNodesChange}
                            onEdgesChange={onEdgesChange}
                            onConnect={onConnect}
                            nodesDraggable={true}
                            nodeTypes={NodeTypes}
                            onPaneClick={onPaneClick}
                            onNodeContextMenu={onNodeContextMenu}
                            onInit={setReactFlowInstance}
                            onDrop={onDrop}
                            onDragOver={onDragOver}
                            fitView>
                            <Background
                                color='#696969'
                                variant={settings.backgroundVariant}
                            />
                            {menu && (
                                <ContextMenu
                                    onClick={onPaneClick}
                                    {...menu}
                                />
                            )}
                            <Controls />
                        </ReactFlow>
                    </div>
                </div>
            </ReactFlowProvider>
        </div>
    );
};
