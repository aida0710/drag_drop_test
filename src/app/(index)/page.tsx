'use client';

import React from 'react';
import {DropZone} from '@/app/(index)/DropZone';
import {IndexMenubar} from '@/app/(index)/components/index-menubar';
import {RightClickMenu} from '@/app/(index)/components/right-click-menu';

export default function Page() {
    return (
        <div className='h-screen w-full'>
            <IndexMenubar />
            <RightClickMenu>
                <DropZone />
            </RightClickMenu>
        </div>
    );
}
