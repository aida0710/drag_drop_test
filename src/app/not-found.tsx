'use client';

import {redirect} from 'next/navigation';
import React from 'react';
import {useToast} from '@/shadcn/ui/use-toast';

export default function Page(): void {
    const {toast} = useToast();

    React.useEffect((): void => {
        toast({
            title: 'アクセスしたページを閲覧する許可がありません。',
            description: 'ホームページへリダイレクトを行いました。',
        });
        redirect('/');
    }, [toast]);
}
