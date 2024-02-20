import React, {useState} from 'react';
import {IDraggableNode} from '@/app/pattern-2/node/IDraggableNode';
import {LineParameters} from '@/app/pattern-2/line/LineParameters';
import {NodeParameters} from '@/app/pattern-2/node/NodeParameters';
import {INodeParameters} from '@/app/pattern-2/node/INodeParameters';
import {ILineParameters} from '@/app/pattern-2/line/ILineParameters';

interface LineProps {
    nodes: IDraggableNode[];
}

export const Lines = ({nodes}: LineProps) => {

    return (
        <svg style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
            {nodes.map((sourceNode: IDraggableNode, index: number) => {
                const connectedNode: IDraggableNode = nodes[index + 1];
                if (!connectedNode) {
                    return null;
                }
                if (sourceNode.target_line.type === 'None') {
                    return null;
                }
                const nodeParameters: INodeParameters = NodeParameters(sourceNode.node_parameters);
                const lineParameters: ILineParameters = LineParameters(sourceNode.target_line.type);

                return (
                    <line
                        key={sourceNode.id}
                        x1={sourceNode.position.left + nodeParameters.picture_width / 2}
                        y1={sourceNode.position.top + nodeParameters.picture_height / 2}
                        x2={connectedNode.position.left + nodeParameters.picture_width / 2}
                        y2={connectedNode.position.top + nodeParameters.picture_height / 2}
                        strokeWidth={lineParameters.thickness}
                        stroke={lineParameters.color}
                    />
                );
            })}
        </svg>
    );
};
