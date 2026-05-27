import type { Metadata } from 'next';
import '../globals.css';
import { getDictionary } from '@/shared/locales/config';
import { LanguageSwitcher } from '@/features/language-switcher/ui/LanguageSwitcher';

/**
 * Generate static paths untuk semua locale yang didukung.
 * Ini memastikan SSG menghasilkan 4 set halaman statis: /en, /id, /zh, /ar.
 */
export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'id' }, { lang: 'zh' }, { lang: 'ar' }];
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang as 'en' | 'id' | 'zh' | 'ar');
    return {
        title: dict.meta.title,
        description: dict.meta.description,
        icons: {
            icon: '/favicon.ico',
        },
    };
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const isRTL = lang === 'ar';

    return (
        <html lang={lang} dir={isRTL ? 'rtl' : 'ltr'} suppressHydrationWarning>
            <head>
                {/* Preconnect untuk performa loading font */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                {/* JetBrains Mono (Latin, CJK) + Noto Naskh Arabic (RTL) */}
                <link
                    href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Noto+Naskh+Arabic:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body
                className={`antialiased ${isRTL ? 'font-arabic leading-relaxed' : 'font-mono'
                    }`}
            >
                <LanguageSwitcher currentLang={lang} />
                <main className="min-h-screen">{children}</main>
            </body>
        </html>
    );
}