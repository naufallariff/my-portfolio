'use client';

import { useEffect } from 'react';
import { useThemeStore } from '@/shared/stores/theme-store';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const { design, palette } = useThemeStore();

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', design);
        document.documentElement.setAttribute('data-palette', palette);
    }, [design, palette]);

    return (
        <>
            <div id="grain-overlay" aria-hidden="true" />
            {children}
        </>
    );
}