import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from '@/shadcn/ui/select';
import React from 'react';
import {Label} from '@/shadcn/ui/label';
import {MenubarItem} from '@/shadcn/ui/menubar';
import {DataContext} from '@/app/(index)/flow/context/data-context';
import {IMiniMapValue} from '@/app/(index)/flow/context/IMiniMapValue';

export const MiniMapButton = () => {
    const {settings, setSettings} = React.useContext(DataContext);

    return (
        <MenubarItem className='grid w-full max-w-sm items-center gap-1.5'>
            <Label>MiniMap View</Label>
            <Select
                onValueChange={(value: IMiniMapValue) =>
                    setSettings({
                        ...settings,
                        miniMap: value,
                    })
                }>
                <SelectTrigger className='w-[180px]'>
                    <SelectValue placeholder='Minimap View Change' />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value={IMiniMapValue.Indicate}>Indicate</SelectItem>
                        <SelectItem value={IMiniMapValue.Hidden}>Hidden</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </MenubarItem>
    );
};
