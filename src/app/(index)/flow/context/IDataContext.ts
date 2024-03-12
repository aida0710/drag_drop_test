import {Edge, Node} from 'reactflow';
import {IDataSettings} from '@/app/(index)/flow/context/IDataSettings';

export interface IDataContext {
    nodes: Node[];
    edges: Edge[];
    settings: IDataSettings;
    setNodes: (data: Node[]) => void;
    setEdges: (data: Edge[]) => void;
    setSettings: (data: IDataSettings) => void;
}
