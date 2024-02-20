'use client';

import React, {useState} from 'react';
import {Container} from '@/app/pattern-2/Container';

export default function Page() {
    const [positions, setPositions] = useState<{[key: string]: {x: number; y: number}}>({});

    return (
        <div className='h-screen w-full'>
            <h1>Sortable Containers</h1>
            <Container />
        </div>
    );
}
