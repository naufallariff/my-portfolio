// src/widgets/header/ui/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useThemeStore } from '@/shared/stores/theme-store';
import { Sun, Moon, Globe, Settings } from 'lucide-react';

const languages = [
    { code: 'en', label: 'English' },
    { code: 'id', label: 'Bahasa Indonesia' },
    { code: 'zh', label: '中文' },
    { code: 'ar', label: 'العربية' },
];

interface HeaderProps {
    lang: string;
    // dict tidak digunakan di sini, bisa dihapus atau dipertahankan untuk masa depan
}

export function Header({ lang }: HeaderProps) {
    const router = useRouter();
    const pathname = usePathname();
    const { design, palette, setDesign, setPalette } = useThemeStore();
    const [scrolled, setScrolled] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);

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

    const toggleTheme = () => {
        setPalette(palette === 'light' ? 'dark' : 'light');
    };

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
                    ? 'backdrop-blur-xl bg-white/70 dark:bg-black/70 border-b border-black/5 dark:border-white/10'
                    : 'bg-transparent'
                }`}
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                {/* Logo / Nama */}
                <button
                    onClick={() => router.push(`/${lang}`)}
                    className="text-sm font-semibold tracking-tight text-(--color-text-primary)"
                >
                    M. Naufal Arif
                </button>

                {/* Kontrol Kanan */}
                <div className="flex items-center gap-4">
                    {/* Toggle Dark/Light */}
                    <button
                        onClick={toggleTheme}
                        className="rounded-full p-2 text-(--color-text-secondary) hover:text-(--color-text-primary) transition-colors"
                        aria-label={palette === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                    >
                        {palette === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                    </button>

                    {/* Language Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => { setLangOpen(!langOpen); setSettingsOpen(false); }}
                            className="flex items-center gap-1 rounded-full px-3 py-2 text-sm text-(--color-text-secondary) hover:text-(--color-text-primary) transition-colors"
                            aria-label="Select language"
                        >
                            <Globe size={16} />
                            <span className="hidden sm:inline">{lang.toUpperCase()}</span>
                        </button>
                        {langOpen && (
                            <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-2xl bg-white dark:bg-[#1C1C1E] shadow-xl border border-black/5 dark:border-white/10 p-2 backdrop-blur-xl">
                                {languages.map((l) => (
                                    <button
                                        key={l.code}
                                        onClick={() => switchLanguage(l.code)}
                                        className={`w-full rounded-xl px-4 py-2 text-left text-sm hover:bg-black/5 dark:hover:bg-white/10 transition-colors ${lang === l.code ? 'font-semibold text-(--color-accent)' : ''
                                            }`}
                                    >
                                        {l.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Settings (Design Mode) */}
                    <div className="relative">
                        <button
                            onClick={() => { setSettingsOpen(!settingsOpen); setLangOpen(false); }}
                            className="rounded-full p-2 text-(--color-text-secondary) hover:text-(--color-text-primary) transition-colors"
                            aria-label="Settings"
                        >
                            <Settings size={18} />
                        </button>
                        {settingsOpen && (
                            <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-2xl bg-white dark:bg-[#1C1C1E] shadow-xl border border-black/5 dark:border-white/10 p-2 backdrop-blur-xl">
                                <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-(--color-text-secondary)">
                                    Design Mode
                                </p>
                                <button
                                    onClick={() => setDesign('modern')}
                                    className={`w-full rounded-xl px-4 py-2 text-left text-sm hover:bg-black/5 dark:hover:bg-white/10 transition-colors ${design === 'modern' ? 'font-semibold text-(--color-accent)' : ''}`}
                                >
                                    Minimalist
                                </button>
                                <button
                                    onClick={() => setDesign('liquid')}
                                    className={`w-full rounded-xl px-4 py-2 text-left text-sm hover:bg-black/5 dark:hover:bg-white/10 transition-colors ${design === 'liquid' ? 'font-semibold text-(--color-accent)' : ''}`}
                                >
                                    Liquid Glass
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}