export interface CustomNodeProps {
    id: string;
    type: string;
    data: {
        label: string;
        ip_address: string;
        subnet_mask: string;
        permitted_communications?: string[];
    };
}
