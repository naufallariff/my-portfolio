import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import '../globals.css';
import { ThemeProvider } from '@/features/theme-switcher/ui/ThemeProvider';

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

    // Membaca preferensi tema langsung dari Cookies di server
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
        >
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="antialiased">
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}