import {Edge, Node} from 'reactflow';
import {IDataSettings} from '@/app/(index)/flow/context/IDataSettings';

export interface IDataContext {
    nodes: Node[];
    edges: Edge[];
    settings: IDataSettings;
    localBackups: Array<{nodes: Node[]; edges: Edge[]}>;
    setNodes: (data: Node[]) => void;
    setEdges: (data: Edge[]) => void;
    setSettings: (data: IDataSettings) => void;
    setLocalBackups: (data: {nodes: Node[]; edges: Edge[]}[]) => void;
}
