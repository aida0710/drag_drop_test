import {Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger} from '@/shadcn/ui/drawer';
import React from 'react';
import {Button} from '@/shadcn/ui/button';

export const BackupHistoryModal = () => {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button
                    className='w-full'
                    variant='hover_none'>
                    バックアップ履歴を見る
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Local Backup History</DrawerTitle>
                    <DrawerDescription>
                        <p>バックアップは最大で25個保存されます。</p>
                        <p>26個以上バックアップ生成された場合は、一番古いバックアップから順に削除されていきます。</p>
                        <p>以下のボタンを押したらバックアップが復元されます。</p>
                    </DrawerDescription>
                </DrawerHeader>
                <div className='max-h-80 overflow-y-scroll'>
                    {localStorage.getItem('local_backup') ? (
                        <div className='mx-5'>
                            {Object.keys(JSON.parse(localStorage.getItem('local_backup') as string))
                                .reverse()
                                .map((key: string, index: number) => (
                                    <Button
                                        variant='outline'
                                        className='my-1 w-full p-6'
                                        key={key}>
                                        <p className='text-lg'>
                                            [ {index + 1} ] {key}
                                        </p>
                                    </Button>
                                ))}
                        </div>
                    ) : (
                        <p>No backup history</p>
                    )}
                </div>
                <DrawerFooter>
                    <DrawerClose>
                        <Button variant='outline'>Close</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};
