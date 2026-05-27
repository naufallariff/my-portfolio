import type { Metadata } from 'next';
import '../globals.css';
import { getDictionary } from '@/shared/locales/config';
import { LanguageSwitcher } from '@/features/language-switcher/ui/LanguageSwitcher';
import { SettingsPanel } from '@/features/settings-panel/ui/SettingsPanel';

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

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const isRTL = lang === 'ar';

    return (
        <html lang={lang} dir={isRTL ? 'rtl' : 'ltr'} suppressHydrationWarning>
            <head>...</head>
            <body className={`antialiased ${isRTL ? 'font-arabic leading-relaxed' : 'font-mono'}`}>
                <div className="fixed top-4 end-4 z-50">
                    <SettingsPanel currentLang={lang} />
                </div>
                <main className="min-h-screen">{children}</main>
            </body>
        </html>
    );
}