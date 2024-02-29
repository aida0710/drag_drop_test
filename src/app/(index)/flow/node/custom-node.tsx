import {Handle, Node, Position} from 'reactflow';
import React, {ChangeEvent} from 'react';
import {Input} from '@/shadcn/ui/input';
import {Label} from '@/shadcn/ui/label';
import {CustomNodeProps} from '@/app/(index)/flow/node/CustomNodeProps';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/shadcn/ui/select';
import {DataContext} from '@/app/(index)/flow/context/data-context';

export const CustomNode = ({id, type, data}: CustomNodeProps) => {
    const {nodes, setNodes} = React.useContext(DataContext);

    return (
        <div className='rounded-md border border-black bg-white px-4 py-1 shadow-md'>
            <Handle
                type='target'
                position={Position.Top}
                className='h-3 w-3 rounded-sm !bg-blue-400'
            />
            <div className='mb-2 text-black'>
                <div className="flex justify-center items-center">
                    <Label className='text-sm'>{data.label}</Label>
                    <Label className='ml-1 text-xs text-gray-400'>#{id}</Label>
                </div>
                <p className='text-sm'>IPアドレス</p>
                <Input
                    defaultValue={nodes.find((node: Node): boolean => node.id === id)?.data.ip_address}
                    autoComplete='off'
                    id='text'
                    name='text'
                    onChange={(event: ChangeEvent<HTMLInputElement>): void => {
                        const node: Node | undefined = nodes.find((node: Node): boolean => node.id === id);
                        if (!node) return;
                        node.data.ip_address = event.target.value;
                        setNodes([...nodes]);
                        console.log(nodes);
                    }}
                    className='nodrag h-5 bg-white'
                />
                <p className='text-sm'>サブネットマスク</p>
                <Input
                    defaultValue={nodes.find((node: Node): boolean => node.id === id)?.data.subnet_mask}
                    autoComplete='off'
                    id='text'
                    name='text'
                    onChange={(event: ChangeEvent<HTMLInputElement>): void => {
                        const node: Node | undefined = nodes.find((node: Node): boolean => node.id === id);
                        if (!node) return;
                        node.data.subnet_mask = event.target.value;
                        setNodes([...nodes]);
                        console.log(nodes);
                    }}
                    className='nodrag h-5 bg-white'
                />
                {data.permitted_communications && (
                    <div>
                        <p className='text-sm'>許可する通信内容</p>
                        <Select
                            defaultValue={nodes.find((node: Node): boolean => node.id === id)?.data.permitted_communications}
                            onValueChange={(value: string): void => {
                                const node: Node | undefined = nodes.find((node: Node): boolean => node.id === id);
                                if (!node) return;
                                node.data.permitted_communications = value;
                                setNodes([...nodes]);
                                console.log(nodes);
                            }}>
                            <SelectTrigger className='h-5 bg-white'>
                                <SelectValue placeholder='通信' />
                            </SelectTrigger>
                            <SelectContent className='bg-white text-black'>
                                <SelectItem value='all'>全て</SelectItem>
                                <SelectItem value='http'>Http</SelectItem>
                                <SelectItem value='https'>Https</SelectItem>
                                <SelectItem value='icmp'>ICMP</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                )}
            </div>

            {type != 'Server' && (
                <Handle
                    type='source'
                    position={Position.Bottom}
                    className='h-3 w-3 rounded-sm !bg-teal-500'
                />
            )}
        </div>
    );
};
