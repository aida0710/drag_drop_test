import React from 'react';
import {Button} from '@/shadcn/ui/button';
import Link from 'next/link';
import {MenubarItem} from '@/shadcn/ui/menubar';

export const FeedbackButtons = () => {
    return (
        <MenubarItem className='w-full'>
            <Link
                className='w-full'
                href='https://github.com/web-network-simulator/feedback/issues/new/choose'
                target='_blank'>
                <Button
                    className='w-full'
                    variant='hover_none'>
                    バグ報告 / 意見・要望
                </Button>
            </Link>
        </MenubarItem>
    );
};
