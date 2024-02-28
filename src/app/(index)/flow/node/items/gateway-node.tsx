import React, {ChangeEvent, useCallback} from 'react';
import {Handle, Position} from 'reactflow';
import {Label} from "@/shadcn/ui/label";
import {Input} from "@/shadcn/ui/input";

interface GatewayNodeProps {
    data: {
        label: string;
        input_data: string;
    };
}

export const GatewayNode = ({data}: GatewayNodeProps) => {
    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
        console.log(event.target.value);
    }, []);

    return (
        <div className="px-4 py-1 shadow-md rounded-md bg-white border border-black">
            <Handle type="target" position={Position.Top} className="w-3 h-3 !bg-blue-400 rounded-sm"/>
            <div className="text-black">
                <Label className="text-xs">{data.label}</Label>
                <Input
                    autoComplete='off'
                    id="text"
                    name="text"
                    onChange={onChange}
                    className="nodrag h-5"/>
            </div>
            <Handle type="source" position={Position.Bottom} className="w-3 h-3 !bg-teal-500 rounded-sm"/>
        </div>
    );
};
