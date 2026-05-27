'use client';

import { useRouter, usePathname } from 'next/navigation';

const locales = [
    { code: 'en', label: 'EN', native: 'English' },
    { code: 'id', label: 'ID', native: 'Indonesia' },
    { code: 'zh', label: '中文', native: '中文' },
    { code: 'ar', label: 'العربية', native: 'العربية' },
];

export function LanguageSwitcher({ currentLang }: { currentLang: string }) {
    const router = useRouter();
    const pathname = usePathname();

    const switchTo = (newLang: string) => {
        // Ganti segmen locale pertama di URL
        const segments = pathname.split('/').filter(Boolean);
        segments[0] = newLang;
        const newPath = '/' + segments.join('/');
        router.push(newPath);
    };

    return (
        <nav
            className="fixed top-4 end-4 z-50 flex gap-1.5 rounded-full bg-[var(--color-bg)] px-2 py-1.5 shadow-sm"
            aria-label="Language selection"
        >
            {locales.map((loc) => (
                <button
                    key={loc.code}
                    onClick={() => switchTo(loc.code)}
                    title={loc.native}
                    className={`rounded-full px-3 py-1 text-xs font-semibold transition-all ${currentLang === loc.code
                            ? 'bg-[var(--color-accent)] text-black'
                            : 'text-[var(--color-text)] hover:bg-[var(--color-border)]'
                        }`}
                    aria-current={currentLang === loc.code ? 'true' : undefined}
                >
                    {loc.label}
                </button>
            ))}
        </nav>
    );
}