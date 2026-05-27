'use client';

import { useEffect } from 'react';
import { useThemeStore } from '@/shared/stores/theme-store';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const { design, palette } = useThemeStore();

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', design);
        document.cookie = `theme-design=${design}; path=/; max-age=31536000`;
    }, [design]);

    useEffect(() => {
        document.documentElement.setAttribute('data-palette', palette);
        document.cookie = `theme-palette=${palette}; path=/; max-age=31536000`;
    }, [palette]);

    return <>{children}</>;
}