import {CustomNode} from "@/app/(index)/flow/node/custom-node";

export const NodeTypes = {
    Gateway: CustomNode,
    L3Switch: CustomNode,
    L2Switch: CustomNode,
    Server: CustomNode,
    Firewall: CustomNode,
};