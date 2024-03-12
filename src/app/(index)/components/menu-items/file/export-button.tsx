import {MenubarItem} from '@/shadcn/ui/menubar';
import {Label} from '@/shadcn/ui/label';
import {Button} from '@/shadcn/ui/button';
import React from 'react';
import {DataContext} from '@/app/(index)/flow/context/data-context';
import {transformUtcDateToJstWithMinutes} from '@/app/(index)/utils/utils';
import {Comment} from '@/app/(index)/components/menu-items/utils/comment';

export const ExportButton = () => {
    const {nodes, edges, settings} = React.useContext(DataContext);

    return (
        <MenubarItem className='grid w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='file_input_data_export'>Data Export</Label>
            <Comment comment='設定やバックアップ履歴、ノードの入力データなどを含むほぼ全てのデータをエクスポートできます。' />
            <Button
                onClick={(): void => {
                    const data: string = JSON.stringify({nodes, edges, settings});
                    const blob: Blob = new Blob([data], {type: 'application/json'});
                    const url: string = URL.createObjectURL(blob);
                    const link: HTMLAnchorElement = document.createElement('a');

                    const time = transformUtcDateToJstWithMinutes();

                    link.href = url;
                    link.download = 'nw-sim_' + `${time.year}-${time.month}-${time.day}_${time.hours}-${time.minutes}-${time.seconds}` + '.json';
                    link.click();
                    setTimeout(() => URL.revokeObjectURL(url), 1000);
                }}
                variant='hover_none'
                id='file_input_data_export'>
                Export
            </Button>
        </MenubarItem>
    );
};
