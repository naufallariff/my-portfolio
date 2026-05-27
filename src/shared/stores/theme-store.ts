import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type DesignTheme = 'minimal' | 'glass';
export type ColorTheme = 'clinical' | 'oled' | 'determinate';

interface ThemeState {
    design: DesignTheme;
    color: ColorTheme;
    setDesign: (design: DesignTheme) => void;
    setColor: (color: ColorTheme) => void;
}

export const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            design: 'minimal',
            color: 'clinical',
            setDesign: (design) => set({ design }),
            setColor: (color) => set({ color }),
        }),
        {
            name: 'theme-storage',
        },
    ),
);