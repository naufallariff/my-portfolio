import { getDictionary } from '@/shared/locales/config';

export default async function HomePage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang as 'en' | 'id' | 'zh' | 'ar');

    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-4">
            {/* Status Bar */}
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--color-accent)]">
                {dict.hero.status}
            </p>

            {/* Hero */}
            <h1 className="mt-6 text-center font-mono text-3xl font-bold tracking-tight sm:text-5xl">
                {dict.hero.title}
            </h1>
            <p className="mt-4 max-w-xl text-center text-sm opacity-70 sm:text-base">
                {dict.hero.subtitle}
            </p>

            {/* Domain Tags */}
            <div className="mt-10 flex flex-wrap justify-center gap-3">
                {Object.entries(dict.domain).map(([key, label]) => (
                    <span
                        key={key}
                        className="bento-card px-4 py-2 text-xs font-semibold uppercase tracking-wide"
                    >
                        {String(label)}
                    </span>
                ))}
            </div>

            {/* EN-Only Notice */}
            <p className="mt-12 max-w-md text-center font-mono text-[10px] italic opacity-50">
                {dict.enOnlyNotice}
            </p>
        </div>
    );
}