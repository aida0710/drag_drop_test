import React, {ChangeEvent, useCallback} from 'react';
import {Handle, Position} from 'reactflow';
import {Label} from "@/shadcn/ui/label";
import {Input} from "@/shadcn/ui/input";

interface GatewayNodeProps {
    id: string;
    data: {
        label: string;
        ip_address: string;
        subnet_mask: string;
    };
}

export const GatewayNode = ({id,data}: GatewayNodeProps) => {

    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
        console.log(event.target.value);
    }, []);

    return (
        <div className="px-4 py-1 shadow-md rounded-md bg-white border border-black">
            <Handle type="target" position={Position.Top} className="w-3 h-3 !bg-blue-400 rounded-sm"/>
            <div className="text-black mb-2">
                <div>
                    <Label className="text-xs">{data.label}</Label>
                    <Label className="text-xs ml-1 text-gray-400">#{id}</Label>
                </div>
                <p className="text-sm">IPアドレス</p>
                <Input
                    autoComplete='off'
                    id="text"
                    name="text"
                    onChange={onChange}
                    className="nodrag h-5 bg-white"/>
                <p className="text-sm">サブネットマスク</p>
                <Input
                    autoComplete='off'
                    id="text"
                    name="text"
                    onChange={onChange}
                    className="nodrag h-5 bg-white"/>
            </div>
            <Handle type="source" position={Position.Bottom} className="w-3 h-3 !bg-teal-500 rounded-sm"/>
        </div>
    );
};
