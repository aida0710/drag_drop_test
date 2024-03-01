import {BezierEdge, Edge, EdgeLabelRenderer, EdgeProps, getStraightPath, useReactFlow} from 'reactflow';
import React from 'react';
import {EdgeParameters} from '@/app/(index)/flow/edge/EdgeParameters';
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from '@/shadcn/ui/select';
import {EnumEdgeTypes, EnumEdgeTypesMap} from '@/app/(index)/flow/edge/EdgeTypes';

/**
 * CustomEdgeは、Nodeに比べ制約が多く、EdgePropsを使用する必要がある
 * また、typeがないため、dataにtypeを追加する必要がある
 * @param id
 * @param data
 * @param sourceX
 * @param sourceY
 * @param targetX
 * @param targetY
 * @constructor
 */
export const CustomEdge = ({id, data, sourceX, sourceY, targetX, targetY}: EdgeProps) => {
    const {setEdges} = useReactFlow();
    const [edgePath, labelX, labelY] = getStraightPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
    });

    return (
        <>
            <BezierEdge
                id={id}
                source={data.source}
                style={EdgeParameters(data.type)}
                target={data.target}
                sourceX={sourceX}
                sourceY={sourceY}
                targetX={targetX}
                targetY={targetY}
                targetPosition={data.targetPosition}
                sourcePosition={data.sourcePosition}
            />
            <EdgeLabelRenderer>
                <div
                    style={{
                        position: 'absolute',
                        transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                        fontSize: 12,
                        pointerEvents: 'all',
                    }}
                    className='nodrag nopan'>
                    <Select
                        onValueChange={(value: EnumEdgeTypes | 'delete'): void => {
                            if (value === 'delete') {
                                setEdges((edges: Edge[]) => edges.filter((edge: Edge): boolean => edge.id !== id));
                            } else {
                                setEdges((edges: Edge[]) =>
                                    edges.map((edge: Edge): Edge => {
                                        if (edge.id === id) {
                                            return {
                                                ...edge,
                                                data: {
                                                    ...edge.data,
                                                    type: value,
                                                },
                                            };
                                        }
                                        return edge;
                                    }),
                                );
                            }
                        }}>
                        <SelectTrigger>
                            <SelectValue placeholder={data.type} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {Object.keys(EnumEdgeTypesMap).map((key: string, index: number) => {
                                    return (
                                        <SelectItem
                                            key={index}
                                            value={key}>
                                            {key}
                                        </SelectItem>
                                    );
                                })}
                                <SelectItem
                                    value='delete'
                                    className='text-red-400'>
                                    Delete Line
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </EdgeLabelRenderer>
        </>
    );
};
