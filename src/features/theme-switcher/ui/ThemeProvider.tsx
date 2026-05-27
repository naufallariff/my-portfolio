'use client';

import { useEffect } from 'react';
import { useThemeStore } from '@/shared/stores/theme-store';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const { design, color } = useThemeStore();

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', design);
        document.documentElement.setAttribute('data-color', color);
    }, [design, color]);

    return <>{children}</>;
}