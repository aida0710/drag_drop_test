export interface ISendEdge {
    id: string;
    source: string;
    target: string;
    data: {
        type: string;
    };
}
