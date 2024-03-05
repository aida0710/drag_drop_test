import React, {ReactNode} from 'react';
import '@/styles/globals.css';
import {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {NextFont} from 'next/dist/compiled/@next/font';
import {Providers} from '@/app/providers';
import {CheckIcon, XIcon} from 'lucide-react';
import {Toaster} from 'react-hot-toast';

const site_name: string = 'Network Simulator';
const site_description: string = 'Web simulator for network study';

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
                <Toaster
                    position='bottom-right'
                    reverseOrder={false}
                    toastOptions={{
                        className: 'border border-default-200 bg-white dark:bg-default-50 dark:text-white',
                        success: {
                            icon: <CheckIcon color='#22c55e' />,
                        },
                        error: {
                            icon: <XIcon color='#ef4444' />,
                        },
                    }}
                />
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
