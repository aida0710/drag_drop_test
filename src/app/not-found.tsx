'use client';

import {redirect} from 'next/navigation';
import React from 'react';
import {toast} from 'sonner';

export default function Page(): void {
    React.useEffect((): void => {
        toast.error('Error', {description: 'アクセスしたページを閲覧する許可がありません。'});
        redirect('/');
    }, [toast]);
}
