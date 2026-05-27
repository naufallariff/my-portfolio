import { NextRequest, NextResponse } from 'next/server';

const supportedLocales = ['en', 'id', 'zh', 'ar'];
const defaultLocale = 'en';

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Lewati file statis, API, dan asset internal Next.js
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/images') ||
        pathname.includes('.')
    ) {
        return NextResponse.next();
    }

    // Cek apakah pathname sudah diawali locale yang didukung
    const pathnameHasLocale = supportedLocales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
    );

    if (!pathnameHasLocale) {
        // Redirect ke default locale (EN)
        const newUrl = new URL(`/${defaultLocale}${pathname}`, request.url);
        return NextResponse.redirect(newUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};