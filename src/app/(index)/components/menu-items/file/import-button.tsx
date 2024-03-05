import React from 'react';
import {DataContext} from '@/app/(index)/flow/context/data-context';
import {PaletteIcon} from 'lucide-react';
import {DropdownItem} from '@nextui-org/react';
import {Input} from '@nextui-org/input';
import toast from 'react-hot-toast';

export const ImportButton = () => {
    const {setNodes, setEdges, setSettings} = React.useContext(DataContext);

    return (
        <DropdownItem
            key='data-import'
            startContent={<PaletteIcon />}>
            Data Import
            <Input
                id='file_input_data_import'
                type='file'
                accept='.json'
                onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                    const file: File | undefined = event.target.files?.[0];
                    if (!file) {
                        console.error('No file selected');
                        toast.error('ファイルが選択されていません。');
                        return;
                    }
                    if (file.type !== 'application/json') {
                        console.error('Invalid file type: ', file.type);
                        toast.error('JSONファイルを選択してください。');
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
                                toast.success('ファイルの読み込みに成功しました。');
                            } catch (error) {
                                console.error('JSON parse error: ', error);
                                toast.error('JSONファイルのパースに失敗しました。');
                            }
                        } else {
                            console.error('Invalid data type: ', data);
                            toast.error('ファイルの読み込みに失敗しました。');
                        }
                    };

                    reader.onerror = (event: ProgressEvent<FileReader>): void => {
                        console.error('FileReader error: ', event);
                        toast.error('ファイルの読み込みエラーが発生しました。');
                    };

                    reader.readAsText(file, 'utf-8');
                }}
            />
        </DropdownItem>
    );
};
