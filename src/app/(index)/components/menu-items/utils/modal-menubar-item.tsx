import React from 'react';
import {MenubarItem} from '@/shadcn/ui/menubar';
import {Label} from '@/shadcn/ui/label';
import {Comment} from '@/app/(index)/components/menu-items/utils/comment';

interface ModalMenubarItemProps {
    label: string;
    comments: string[];
    children: React.ReactNode;
}

export const ModalMenubarItem = ({label, comments, children}: ModalMenubarItemProps) => {
    return (
        <div className='rounded-sm hover:bg-accent hover:text-accent-foreground'>
            <MenubarItem className='grid w-full max-w-sm items-center gap-1.5'>
                <Label>{label}</Label>
                {comments.map((comment: string, index: number) => (
                    <Comment
                        key={index}
                        comment={comment}
                    />
                ))}
            </MenubarItem>
            <div className='mx-2 pb-1.5'>{children} </div>
        </div>
    );
};
