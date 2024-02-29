import {BezierEdge, Edge, EdgeLabelRenderer, EdgeProps, getStraightPath, useReactFlow} from 'reactflow';
import React from 'react';
import {EdgeParameters} from '@/app/(index)/flow/edge/EdgeParameters';
import {EnumEdgeTypes, EnumEdgeTypesMap} from '@/app/(index)/flow/edge/EdgeTypes';
import {Button} from '@/shadcn/ui/button';

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

    const onEdgeClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        setEdges((prevEdges: Edge[]): Edge[] => {
            return prevEdges.map((edge: Edge): Edge => {
                if (edge.id === id) {
                    const edgeKeys = Object.keys(EnumEdgeTypesMap);
                    const currentTypeIndex = edgeKeys.indexOf(edge.data.type);

                    if (currentTypeIndex < edgeKeys.length - 1) {
                        // Update to next EnumEdgeTypes if current type is not the last element
                        edge.data.type = EnumEdgeTypesMap[edgeKeys[currentTypeIndex + 1] as keyof typeof EnumEdgeTypesMap];
                    } else {
                        // If current type is the last element of EnumEdgeTypes, then update to EnumEdgeTypes.Category5
                        edge.data.type = EnumEdgeTypes.Category5;
                    }
                }
                return {...edge};
            });
        });
    };

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
                    <Button
                        onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
                            onEdgeClick(event);
                        }}>
                        {data.type}
                    </Button>
                </div>
            </EdgeLabelRenderer>
        </>
    );
};
