import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type DesignTheme = 'modern' | 'liquid';
export type PaletteTheme = 'light' | 'dark';

interface ThemeState {
    design: DesignTheme;
    palette: PaletteTheme;
    setDesign: (design: DesignTheme) => void;
    setPalette: (palette: PaletteTheme) => void;
}

export const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            design: 'modern',
            palette: 'light',
            setDesign: (design) => set({ design }),
            setPalette: (palette) => set({ palette }),
        }),
        {
            name: 'theme-storage',
        },
    ),
);