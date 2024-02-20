import React, {ReactNode, Suspense} from 'react';
import '@/styles/globals.css';
import {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {NextFont} from 'next/dist/compiled/@next/font';
import {Providers} from '@/app/providers';

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
                <Suspense>
                    <Providers>
                        <div className='flex h-screen flex-col'>
                            <div className='mb-auto'>{children}</div>
                        </div>
                    </Providers>
                </Suspense>
            </body>
        </html>
    );
}
