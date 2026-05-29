import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Inter, JetBrains_Mono } from 'next/font/google';
import '../globals.css';
import { ThemeProvider } from '@/features/theme-switcher/ui/ThemeProvider';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
    display: 'swap',
});

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'id' }, { lang: 'zh' }, { lang: 'ar' }];
}

export const metadata: Metadata = {
    title: 'The System Workspace | Muhammad Naufal Arif',
    description: 'System Builder — AI Data Infrastructure, Software Architecture, Audit.',
    icons: { icon: '/favicon.ico' },
    openGraph: {
        title: 'Muhammad Naufal Arif — Software Architect & QA Specialist',
        description: 'Ensuring spatial data precision for autonomous AI and building scalable web systems.',
        url: 'https://muhammad-naufal-arif.vercel.app',
        siteName: 'The System Workspace',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
                width: 1200,
                height: 630,
                alt: 'Muhammad Naufal Arif — Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Muhammad Naufal Arif — Software Architect & QA Specialist',
        description: 'Ensuring spatial data precision for autonomous AI and building scalable web systems.',
        images: ['https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop'],
    },
};

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const isRTL = lang === 'ar';

    const cookieStore = await cookies();
    const design = cookieStore.get('theme-design')?.value || 'modern';
    const palette = cookieStore.get('theme-palette')?.value || 'light';

    return (
        <html
            lang={lang}
            dir={isRTL ? 'rtl' : 'ltr'}
            data-theme={design}
            data-palette={palette}
            suppressHydrationWarning
            className={`${inter.variable} ${jetbrainsMono.variable}`}
        >
            <head />
            <body className="antialiased font-sans">
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}