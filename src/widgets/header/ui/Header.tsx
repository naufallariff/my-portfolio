'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useThemeStore } from '@/shared/stores/theme-store';

const languages = [
    { code: 'en', label: 'English' },
    { code: 'id', label: 'Bahasa Indonesia' },
    { code: 'zh', label: '中文' },
    { code: 'ar', label: 'العربية' },
] as const;

interface HeaderProps {
    lang: string;
}

export function Header({ lang }: HeaderProps) {
    const router = useRouter();
    const pathname = usePathname();
    const { design, palette, setDesign, setPalette } = useThemeStore();
    const [scrolled, setScrolled] = useState(false);
    const [langOpen, setLangOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const switchLanguage = (code: string) => {
        const segments = pathname.split('/').filter(Boolean);
        segments[0] = code;
        router.push('/' + segments.join('/'));
        setLangOpen(false);
    };

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
                    ? 'backdrop-blur-xl bg-white/70 dark:bg-black/70 border-b border-black/5 dark:border-white/10'
                    : 'bg-transparent'
                }`}
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <button
                    onClick={() => router.push(`/${lang}`)}
                    className="text-sm font-semibold tracking-tight text-(--color-text-primary)"
                >
                    M. Naufal Arif
                </button>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setDesign(design === 'modern' ? 'liquid' : 'modern')}
                        className="btn-icon"
                        aria-label={`Switch to ${design === 'modern' ? 'Liquid Glass' : 'Modern'} design`}
                    >
                        {design === 'modern' ? '💧' : '◻'}
                    </button>

                    <button
                        onClick={() => setPalette(palette === 'light' ? 'dark' : 'light')}
                        className="btn-icon"
                        aria-label={`Switch to ${palette === 'light' ? 'Dark' : 'Light'} mode`}
                    >
                        {palette === 'light' ? '🌙' : '☀'}
                    </button>

                    <div className="relative">
                        <button
                            onClick={() => setLangOpen(!langOpen)}
                            className="btn-icon"
                            aria-label="Select language"
                        >
                            🌐
                        </button>
                        {langOpen && (
                            <div className="dropdown-menu absolute right-0 mt-2 w-48">
                                {languages.map((l) => (
                                    <button
                                        key={l.code}
                                        onClick={() => switchLanguage(l.code)}
                                        className={`dropdown-item ${lang === l.code ? 'font-semibold text-(--color-accent)' : ''}`}
                                    >
                                        {l.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}