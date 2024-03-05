import React from 'react';
import {DataContext} from '@/app/(index)/flow/context/data-context';
import {PaletteIcon} from 'lucide-react';
import {Button, DropdownItem} from '@nextui-org/react';

export const ExportButton = () => {
    const {nodes, edges, settings} = React.useContext(DataContext);

    return (
        <DropdownItem
            key='data-export'
            startContent={<PaletteIcon />}>
            Data Export
            <Button
                onClick={(): void => {
                    const data: string = JSON.stringify({nodes, edges, settings});
                    const blob: Blob = new Blob([data], {type: 'application/json'});
                    const url: string = URL.createObjectURL(blob);
                    const link: HTMLAnchorElement = document.createElement('a');
                    link.href = url;
                    link.download = 'nw-sim ' + transformUtcDateToJstWithMinutes() + '.json';
                    link.click();
                    setTimeout(() => URL.revokeObjectURL(url), 1000);
                }}
                id='file_input_data_export'>
                Export
            </Button>
        </DropdownItem>
    );
};

export function transformUtcDateToJstWithMinutes(): string {
    let date: Date = new Date();
    let year: number = date.getFullYear();
    let month: string = ('0' + (date.getMonth() + 1)).slice(-2);
    let day: string = ('0' + date.getDate()).slice(-2);
    let hours: string = ('0' + date.getHours()).slice(-2);
    let minutes: string = ('0' + date.getMinutes()).slice(-2);
    let seconds: string = ('0' + date.getSeconds()).slice(-2);
    return `${year}年${month}月${day}日 ${hours}時${minutes}分${seconds}秒`;
}
