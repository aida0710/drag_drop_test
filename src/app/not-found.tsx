'use client';

import {redirect} from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

export default function Page() {
    React.useEffect((): void => {
        toast.error('アクセスしたページを閲覧する許可がありません。');
        redirect('/');
    }, [toast]);
}
