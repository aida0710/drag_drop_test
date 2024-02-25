import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from '@/shadcn/ui/select';
import {Background, BackgroundVariant, Panel} from 'reactflow';
import React, {useState} from 'react';

export const BackgroundVariantChange = () => {
    const [variant, setVariant] = useState<BackgroundVariant>(BackgroundVariant.Lines);

    return (
        <div>
            <Background
                color='#696969'
                variant={variant}
            />
            <Panel position='top-left'>
                <Select onValueChange={(value: BackgroundVariant) => setVariant(value)}>
                    <SelectTrigger className='w-[180px]'>
                        <SelectValue placeholder='背景デザインを変更' />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value={BackgroundVariant.Lines}>Lines</SelectItem>
                            <SelectItem value={BackgroundVariant.Dots}>Dots</SelectItem>
                            <SelectItem value={BackgroundVariant.Cross}>Cross</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </Panel>
        </div>
    );
};
