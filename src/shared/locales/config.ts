import 'server-only';

const dictionaries = {
    en: () => import('./dictionaries/en.json').then((module) => module.default),
    id: () => import('./dictionaries/id.json').then((module) => module.default),
    zh: () => import('./dictionaries/zh.json').then((module) => module.default),
    ar: () => import('./dictionaries/ar.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'en' | 'id' | 'zh' | 'ar') => {
    const dictionary = await dictionaries[locale]();
    return dictionary;
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;