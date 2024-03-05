'use client';

import React from 'react';
import {Label} from '@/shadcn/ui/label';
import {MenubarItem} from '@/shadcn/ui/menubar';
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from '@/shadcn/ui/dialog';
import {Button} from '@/shadcn/ui/button';

export const HelpModal = () => {
    return (
        <MenubarItem className='grid w-full max-w-sm items-center gap-1.5'>
            <Dialog>
                <DialogTrigger>
                    <Label>Help</Label>
                </DialogTrigger>
                <DialogContent className='sm:max-w-[425px]'>
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button type='submit'>Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </MenubarItem>
    );
};
