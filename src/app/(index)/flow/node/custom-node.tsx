import {Handle, Node, Position} from 'reactflow';
import React, {ChangeEvent} from 'react';
import {DataContext} from '@/app/(index)/flow/context/data-context';
import {Input} from '@nextui-org/input';
import {Select, SelectItem} from '@nextui-org/react';

interface CustomNodeProps {
    id: string;
    type: string;
    data: {
        label: string;
        ip_address: string;
        subnet_mask: string;
        permitted_communications?: string[];
    };
}

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
                <div className='flex items-center justify-center'>
                    <h3 className='text-sm'>{data.label}</h3>
                    <h4 className='ml-1 text-xs text-gray-400'>#{id}</h4>
                </div>
                <div>
                    <p className='text-sm'>IPアドレス</p>
                    <Input
                        aria-label='ip-address-input'
                        size='sm'
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
                </div>
                <div>
                    <p className='text-sm'>サブネットマスク</p>
                    <Input
                        aria-label='subnet-mask-input'
                        size='sm'
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
                </div>
                {data.permitted_communications && (
                    <div>
                        <p className='text-sm'>許可する通信内容</p>
                        <Select
                            aria-label='permitted-communications-select'
                            size='sm'
                            defaultSelectedKeys={[nodes.find((node: Node): boolean => node.id === id)?.data.permitted_communications]}
                            onChange={(event: React.ChangeEvent<HTMLSelectElement>): void => {
                                const node: Node | undefined = nodes.find((node: Node): boolean => node.id === id);
                                if (!node) return;
                                node.data.permitted_communications = event.target.value;
                                setNodes([...nodes]);
                                console.log(nodes);
                            }}>
                            <SelectItem
                                key='all'
                                value='All'>
                                All
                            </SelectItem>
                            <SelectItem
                                key='http'
                                value='http'>
                                http, https
                            </SelectItem>
                            <SelectItem
                                key='icmp'
                                value='icmp'>
                                icmp
                            </SelectItem>
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
