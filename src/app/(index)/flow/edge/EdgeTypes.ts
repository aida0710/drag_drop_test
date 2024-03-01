import {CustomEdge} from '@/app/(index)/flow/edge/custom-edge';

export const EdgeTypes = {
    CustomEdge: CustomEdge,
};

export enum EnumEdgeTypes {
    Category5 = 'Category5',
    Category5e = 'Category5e',
    Category6 = 'Category6',
    Category7 = 'Category7',
    Category8 = 'Category8',
    NonLimited = 'NonLimited',
}

export const EnumEdgeTypesMap = {...EnumEdgeTypes};
