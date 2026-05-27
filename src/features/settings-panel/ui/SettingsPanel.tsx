'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useThemeStore } from '@/shared/stores/theme-store';

// --- Data Opsi ---
const languages = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'id', label: 'Indonesia', native: 'Bahasa Indonesia' },
    { code: 'zh', label: '中文', native: '中文' },
    { code: 'ar', label: 'العربية', native: 'العربية' },
];

const designThemes = [
    { code: 'modern' as const, label: 'Modern', desc: 'Solid & Clean' },
    { code: 'liquid' as const, label: 'Liquid Glass', desc: 'Translucent & Deep' },
];

const paletteThemes = [
    { code: 'light' as const, label: 'Light', desc: 'Apple Silver' },
    { code: 'dark' as const, label: 'Dark', desc: 'OLED Black' },
];

// --- Komponen Dropdown ---
function Dropdown<T extends string>({
    label,
    options,
    current,
    onChange,
}: {
    label: string;
    options: { code: T; label: string; desc?: string }[];
    current: T;
    onChange: (code: T) => void;
}) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const currentOption = options.find((o) => o.code === current) || options[0];

    return (
        <div ref={ref} className="relative">
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider opacity-50">
                {label}
            </label>
            <button
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between rounded-lg border border-(--color-border) bg-(--color-bg) px-3 py-2 text-sm transition-colors hover:border-(--color-accent)"
                aria-haspopup="listbox"
                aria-expanded={open}
            >
                <span>{currentOption.label}</span>
                <svg className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {open && (
                <ul
                    className="absolute inset-e-0 z-50 mt-1 w-full min-w-50 rounded-lg border border-(--color-border) bg-(--color-bg) py-1 shadow-lg"
                    role="listbox"
                >
                    {options.map((opt) => (
                        <li
                            key={opt.code}
                            onClick={() => {
                                onChange(opt.code);
                                setOpen(false);
                            }}
                            className={`flex cursor-pointer items-center justify-between px-3 py-2 text-sm hover:bg-(--color-border) ${opt.code === current ? 'text-(--color-accent)' : ''
                                }`}
                            role="option"
                            aria-selected={opt.code === current}
                        >
                            <span>{opt.label}</span>
                            {opt.desc && <span className="ml-2 text-xs opacity-40">{opt.desc}</span>}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

// --- Komponen Utama ---
export function SettingsPanel({ currentLang }: { currentLang: string }) {
    const { design, palette, setDesign, setPalette } = useThemeStore();
    const router = useRouter();
    const pathname = usePathname();

    const handleLanguageChange = (code: string) => {
        const segments = pathname.split('/').filter(Boolean);
        segments[0] = code;
        router.push('/' + segments.join('/'));
    };

    return (
        <div className="rounded-xl border border-(--color-border) bg-(--color-bg) p-4 shadow-sm">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest opacity-40">Settings</h3>
            <div className="space-y-4">
                <Dropdown label="Language" options={languages} current={currentLang} onChange={handleLanguageChange} />
                <Dropdown label="Design Theme" options={designThemes} current={design} onChange={setDesign} />
                <Dropdown label="Palette" options={paletteThemes} current={palette} onChange={setPalette} />
            </div>
        </div>
    );
}