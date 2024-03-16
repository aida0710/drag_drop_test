'use client';

import React, {useEffect, useState} from 'react';
import {Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle} from '@/shadcn/ui/drawer';
import {Button} from '@/shadcn/ui/button';

interface ScreenSizeCheckProps {
    children: React.ReactNode;
}

export const ScreenSizeCheck = ({children}: ScreenSizeCheckProps): React.JSX.Element => {
    const MIN_SCREEN_WIDTH: number = 1024;

    const [windowWidth, setWindowWidth] = useState<number | null>(null);
    const [drawerOpen, setDrawerOpen] = useState(true);

    useEffect(() => {
        setWindowWidth(window.innerWidth);

        function handleResize(): void {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return (): void => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (windowWidth === null) return <></>;

    return (
        <div>
            {windowWidth < MIN_SCREEN_WIDTH ? (
                <Drawer open={drawerOpen}>
                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle>Warning Message</DrawerTitle>
                            <div className='text-lg'>
                                <h2>
                                    お使いの端末のスクリーンサイズが {MIN_SCREEN_WIDTH}px より小さいことが検出されました。(横 {windowWidth}px)
                                </h2>
                                <p>このwebアプリケーションは画面の小さい端末に最適化が行われていません。</p>
                                <p>一部機能が使えないなどの問題が発生する恐れがあります。</p>
                            </div>
                        </DrawerHeader>
                        <DrawerFooter>
                            <DrawerClose>
                                <Button
                                    onClick={(): void => {
                                        setDrawerOpen(false);
                                    }}
                                    variant='outline'>
                                    続行する
                                </Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            ) : (
                <></> //desktop user
            )}
            {children}
        </div>
    );
};
