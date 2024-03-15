import React from 'react';
import {MenubarItem} from '@/shadcn/ui/menubar';
import {Label} from '@/shadcn/ui/label';
import {Input} from '@/shadcn/ui/input';
import {DataContext} from '@/app/(index)/flow/context/data-context';
import {Comment} from '@/app/(index)/components/menu-items/utils/comment';
import {toast} from 'sonner';

export const ImportButton = () => {
    const {setNodes, setEdges, setSettings} = React.useContext(DataContext);

    return (
        <MenubarItem
            onSelect={(event: Event): void => {
                event.preventDefault();
            }}
            className='grid w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='file_input_data_import'>Data Import</Label>
            <Comment comment='設定やバックアップ履歴、ノードの入力データなどを含むほぼ全てのデータが適用されます。現在のデータはなくなるものとして考えてください。' />
            <Input
                id='file_input_data_import'
                type='file'
                accept='.json'
                onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                    const file: File | undefined = event.target.files?.[0];
                    if (!file) {
                        console.error('No file selected');
                        toast.error('Error', {description: 'ファイルが選択されていません。'});
                        return;
                    }
                    if (file.type !== 'application/json') {
                        console.error('Invalid file type: ', file.type);
                        toast.error('Error', {description: 'JSONファイルを選択してください。'});
                        return;
                    }
                    const reader: FileReader = new FileReader();
                    reader.onload = (event: ProgressEvent<FileReader>): void => {
                        const data: string | ArrayBuffer | undefined | null = event.target?.result;
                        if (typeof data === 'string') {
                            try {
                                const file = JSON.parse(data);
                                setNodes(file.nodes);
                                setEdges(file.edges);
                                setSettings(file.settings);
                                localStorage.setItem('local_backup', JSON.stringify(file.localstorage));
                                toast.success('Success', {description: 'ファイルの読み込みに成功しました。'});
                            } catch (error) {
                                console.error('JSON parse error: ', error);
                                toast.error('Error', {description: 'JSONファイルのパースに失敗しました。'});
                            }
                        } else {
                            console.error('Invalid data type: ', data);
                            toast.error('Error', {description: 'ファイルの読み込みに失敗しました。'});
                        }
                    };

                    reader.onerror = (event: ProgressEvent<FileReader>): void => {
                        console.error('FileReader error: ', event);
                        toast.error('Error', {description: 'ファイルの読み込みに失敗しました。'});
                    };

                    reader.readAsText(file, 'utf-8');
                }}
            />
        </MenubarItem>
    );
};
