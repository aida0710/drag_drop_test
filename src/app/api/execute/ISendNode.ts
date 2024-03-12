export interface ISendNode {
    id: string;
    type: string;
    data: {
        label: string;
        ip_address: string;
        subnet_mask: string;
    };
}
