import React, {ReactNode} from 'react';
import '@/styles/globals.css';
import {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {NextFont} from 'next/dist/compiled/@next/font';
import {ThemeProvider} from '@/app/layout/theme-provider';
import {Toaster} from '@/shadcn/ui/toaster';

const site_name: string = 'Network Simulator';
const site_description: string = 'Web simulator for network study';
const url: string = 'https://www.nw-sim.net';
const image: string = `public_image.png`;

export const metadata: Metadata = {
    title: {
        default: `${site_name}`,
        template: `%s | ${site_name}`,
    },
    description: site_description,
    keywords: ['network', 'simulator', 'web', 'study', "network simulator", "education", "web simulator"],
    openGraph: {
        type: 'website',
        locale: 'ja_JP',
        title: site_name,
        description: site_description,
        siteName: site_name,
        url: url,
        images: {
            url: image,
            type: 'image/png',
            width: 1200,
            height: 630,
            alt: 'Simulator Image',
        },
    },
    twitter: {
        title: `${site_name}`,
        description: site_description,
        card: 'summary_large_image',
        images: {
            url: image,
            type: 'image/png',
            width: 1200,
            height: 630,
            alt: 'Simulator Image',
        },
    },
    metadataBase: new URL(url),
    icons: [{ rel: 'icon', url: '/favicon.ico' }],
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
