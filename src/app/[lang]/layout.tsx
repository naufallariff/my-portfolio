import type { Metadata } from 'next';
import '../globals.css';
import { getDictionary } from '@/shared/locales/config';
import { ThemeProvider } from '@/features/theme-switcher/ui/ThemeProvider';
import { themeScript } from '@/shared/lib/theme-script';

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}