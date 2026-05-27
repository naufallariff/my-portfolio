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