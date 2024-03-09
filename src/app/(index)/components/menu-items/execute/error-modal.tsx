'use client';

import React from 'react';
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from '@/shadcn/ui/dialog';

interface ErrorModalProps {
    message: string;
}

export const ErrorModal = ({message}: ErrorModalProps) => {
    return (
        <Dialog>
            <DialogTrigger>結果を表示する</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>正常に実行されました。</DialogTitle>
                    <DialogDescription>{message}</DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};
