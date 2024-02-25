'use client';

import React from 'react';
import {IndexMenubar} from '@/app/(index)/components/index-menubar';
import 'reactflow/dist/style.css';
import {FlowContents} from '@/app/(index)/flow-contents';

export default function Page() {
    return (
        <div className='w-full'>
            <IndexMenubar />
            <FlowContents />
        </div>
    );
}
