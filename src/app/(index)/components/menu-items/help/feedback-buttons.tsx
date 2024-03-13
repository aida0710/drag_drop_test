import React from 'react';
import {Button} from '@/shadcn/ui/button';
import Link from 'next/link';
import {MenubarItem} from '@/shadcn/ui/menubar';

interface FeedbackLink {
    label: string;
    href: string;
}

const FeedbackLinks: FeedbackLink[] = [
    {
        label: 'バグ報告',
        href: '',
    },
    {
        label: '意見・要望',
        href: '',
    },
];

export const FeedbackButtons = () => {
    return (
        <div>
            {FeedbackLinks.map((feedback: FeedbackLink, index: number) => {
                return (
                    <MenubarItem>
                        <Link
                            key={index}
                            className='w-full'
                            href={feedback.href}
                            target='_blank'>
                            <Button
                                className='w-full'
                                variant='hover_none'>
                                {feedback.label}
                            </Button>
                        </Link>
                    </MenubarItem>
                );
            })}
        </div>
    );
};
