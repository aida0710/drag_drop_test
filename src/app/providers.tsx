'use client';

import * as React from 'react';
import {ReactNode} from 'react';
import {ThemeProvider as NextThemesProvider} from 'next-themes';
import {NextUIProvider} from '@nextui-org/react';

interface Props {
    children: ReactNode;
}

export const Providers = ({children}: Props) => {
    return (
        <NextUIProvider>
            <NextThemesProvider
                attribute='class'
                defaultTheme='dark'>
                {children}
            </NextThemesProvider>
        </NextUIProvider>
    );
};
