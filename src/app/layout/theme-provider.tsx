'use client';

import * as React from 'react';
import {ReactNode} from 'react';
import {ThemeProvider as NextThemesProvider} from 'next-themes';

interface Props {
    attribute: string;
    defaultTheme: string;
    enableSystem: boolean;
    disableTransitionOnChange: boolean;
    children: ReactNode;
}

export const ThemeProvider = ({attribute, defaultTheme, enableSystem, disableTransitionOnChange, children}: Props) => {
    return (
        <NextThemesProvider
            attribute={attribute}
            defaultTheme={defaultTheme}
            enableSystem={enableSystem}
            disableTransitionOnChange={disableTransitionOnChange}>
            {children}
        </NextThemesProvider>
    );
};
