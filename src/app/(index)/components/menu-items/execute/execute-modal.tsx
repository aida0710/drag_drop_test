import {Button} from '@/shadcn/ui/button';
import axios, {AxiosResponse} from 'axios';
import React from 'react';
import {DataContext} from '@/app/(index)/flow/context/data-context';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from '@/shadcn/ui/dialog';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/shadcn/ui/select';
import {ErrorModal} from '@/app/(index)/components/menu-items/execute/error-modal';
import {BackgroundVariant, Node} from 'reactflow';
import {EnumExecuteTypes} from '@/app/api/execute/EnumExecuteTypes';
import {toast} from 'sonner';

interface ExecuteModalProps {
    selectedSourceNode: string;
    setSelectedSourceNode: (node: string) => void;
    selectedDestinationNode: string;
    setSelectedDestinationNode: (node: string) => void;
    selectedMethod: string;
    setSelectedMethod: (method: string) => void;
}

export const ExecuteModal = ({
    selectedSourceNode,
    setSelectedSourceNode,
    selectedDestinationNode,
    setSelectedDestinationNode,
    selectedMethod,
    setSelectedMethod,
}: ExecuteModalProps) => {
    const {nodes, edges} = React.useContext(DataContext);

    async function execute(): Promise<void> {
        toast.promise(
            axios.post('/api/execute', {
                execute: {
                    to_node_id: selectedSourceNode,
                    from_node_id: selectedDestinationNode,
                    type: selectedMethod,
                },
                nodes,
                edges,
            }),
            {
                loading: 'バックエンドサーバーに問い合わせています...',
                success: async (res: AxiosResponse): Promise<React.JSX.Element> => {
                    return <ErrorModal message={res.data} />;
                },
                error: (error: any): any | string => {
                    console.error('Error: ', error.response.data);
                    if (error.response) {
                        return error.response.data;
                    } else {
                        return 'Unknown error occurred';
                    }
                },
            },
        );
    }

    return (
        <Dialog>
            <DialogTrigger className='p-2'>実行</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>シミュレータ</DialogTitle>
                    <DialogDescription>
                        初期地点と終点を設定してください。
                        <div className='my-3 flex gap-3'>
                            <Select
                                defaultValue={selectedSourceNode}
                                onValueChange={(value: BackgroundVariant) => setSelectedSourceNode(value)}>
                                <SelectTrigger className='w-full'>
                                    <SelectValue placeholder='送信元を選択してください。' />
                                </SelectTrigger>
                                <SelectContent>
                                    {nodes.map((node: Node) => (
                                        <SelectItem
                                            key={node.id}
                                            value={node.id}>
                                            {node.data.ip_address}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Select
                                defaultValue={selectedDestinationNode}
                                onValueChange={(value: BackgroundVariant) => setSelectedDestinationNode(value)}>
                                <SelectTrigger className='w-full'>
                                    <SelectValue placeholder='送信先を選択してください。' />
                                </SelectTrigger>
                                <SelectContent>
                                    {nodes.map((node: Node) => (
                                        <SelectItem
                                            key={node.id}
                                            value={node.id}>
                                            {node.data.ip_address}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <Select
                            defaultValue={selectedMethod}
                            onValueChange={(value: string) => setSelectedMethod(value)}>
                            <SelectTrigger className='w-full'>
                                <SelectValue placeholder='送信方法を選択してください' />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value={EnumExecuteTypes.Ping}>Ping</SelectItem>
                            </SelectContent>
                        </Select>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className='justify-end'>
                    <DialogClose asChild>
                        <Button
                            variant='ghost'
                            onClick={(): void => {
                                execute().then();
                            }}>
                            実行
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
