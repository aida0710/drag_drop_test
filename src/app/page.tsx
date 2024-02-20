import React from 'react';
import {Card, CardBody, CardHeader} from '@nextui-org/react';
import Link from 'next/link';
import {Chip} from '@nextui-org/chip';

export default async function Page() {
    return (
        <div className='mt-32 flex justify-center'>
            <div className='border-default-200 space-x-3 rounded border p-12'>
                <Link href={'/pattern-1'}>
                    <Card radius='sm'>
                        <CardHeader>
                            <h3>パターン 1へ</h3>
                        </CardHeader>
                        <CardBody className="space-y-3">
                            <Chip>react-dnd</Chip>
                            <Chip>react-dnd-html5-backend</Chip>
                        </CardBody>
                    </Card>
                </Link>
                <Link href={'/pattern-2'}>
                    <Card radius='sm'>
                        <CardHeader>
                            <h3>パターン 2へ</h3>
                        </CardHeader>
                        <CardBody>
                            <Chip>dnd-kit</Chip>
                        </CardBody>
                    </Card>
                </Link>
            </div>
        </div>
    );
}
