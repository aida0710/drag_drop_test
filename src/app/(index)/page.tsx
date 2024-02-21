'use client';

import React from 'react';
import {DropZone} from '@/app/(index)/DropZone';
import {IndexMenubar} from '@/app/(index)/components/index-menubar';

export default function Page() {
    return (
        <div className='h-screen w-full'>
            <IndexMenubar />
            <DropZone />
        </div>
    );
}
