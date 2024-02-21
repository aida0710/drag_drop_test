import React, {ReactNode} from 'react';
import '@/styles/globals.css';
import {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {NextFont} from 'next/dist/compiled/@next/font';
import {ThemeProvider} from '@/app/layout/theme-provider';
import {Toaster} from '@/shadcn/ui/toaster';

const site_name: string = 'Drag and drop test';
const site_description: string = 'Drag and drop test';

export const metadata: Metadata = {
    title: {
        default: `${site_name}`,
        template: `%s | ${site_name}`,
    },
    description: site_description,
};

const inter: NextFont = Inter({subsets: ['latin']});

export default async function RootLayout({children}: {children: ReactNode}) {
    return (
        <html lang='ja'>
            <body className={inter.className}>
                <Toaster />
                <ThemeProvider
                    attribute='class'
                    defaultTheme='dark'
                    enableSystem
                    disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
