'use client';

import {redirect} from 'next/navigation';
import {useToast} from '@/shadcn/ui/use-toast';
import React from 'react';

export default function Page() {
    const {toast} = useToast();

    React.useEffect((): void => {
        toast({
            title: 'アクセスしたページを閲覧する許可がありません。',
            description: 'ホームページへリダイレクトを行いました。',
        });
        redirect('/');
    }, [toast]);
}
