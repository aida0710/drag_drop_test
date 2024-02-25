import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from '@/shadcn/ui/select';
import {BackgroundVariant} from 'reactflow';
import React from 'react';
import {Label} from '@/shadcn/ui/label';
import {MenubarItem} from '@/shadcn/ui/menubar';
import {DataContext} from '@/app/(index)/flow/context/data-context';

export const BackgroundVariantButton = () => {
    const {settings, setSettings} = React.useContext(DataContext);

    return (
        <MenubarItem className='grid w-full max-w-sm items-center gap-1.5'>
            <Label>Background Design</Label>
            <Select
                onValueChange={(value: BackgroundVariant) =>
                    setSettings({
                        ...settings,
                        backgroundVariant: value,
                    })
                }>
                <SelectTrigger className='w-[180px]'>
                    <SelectValue placeholder='Design Change' />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value={BackgroundVariant.Lines}>Lines</SelectItem>
                        <SelectItem value={BackgroundVariant.Dots}>Dots</SelectItem>
                        <SelectItem value={BackgroundVariant.Cross}>Cross</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </MenubarItem>
    );
};
