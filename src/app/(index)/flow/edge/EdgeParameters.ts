import {EnumEdgeTypes} from '@/app/(index)/flow/edge/EdgeTypes';

export interface EdgeParametersProps {
    stroke: string;
    strokeWidth: number;
}

export function EdgeParameters(type: EnumEdgeTypes): EdgeParametersProps {
    switch (type) {
        case EnumEdgeTypes.Category5:
            return {
                stroke: '#818cf8',
                strokeWidth: 2.0,
            };
        case EnumEdgeTypes.Category5e:
            return {
                stroke: '#38bdf8',
                strokeWidth: 2.5,
            };
        case EnumEdgeTypes.Category6:
            return {
                stroke: '#4ade80',
                strokeWidth: 3.0,
            };
        case EnumEdgeTypes.Category7:
            return {
                stroke: '#facc15',
                strokeWidth: 3.5,
            };
        case EnumEdgeTypes.Category8:
            return {
                stroke: '#fb923c',
                strokeWidth: 4.0,
            };
        case EnumEdgeTypes.NonLimited:
            return {
                stroke: '#fb7185',
                strokeWidth: 4.5,
            };
        default:
            throw new Error('Invalid LineType');
    }
}