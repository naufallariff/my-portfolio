import { DomainFilter } from '@/features/domain-filter/ui/DomainFilter';
import { ExperienceGrid } from '@/entities/experience/ui/ExperienceGrid';
import { experiences } from '@/entities/experience/api/experiences';

export default async function HomePage({
    params,
    searchParams,
}: {
    params: Promise<{ lang: string }>;
    searchParams: Promise<{ domain?: string }>;
}) {
    const { lang } = await params;
    const { domain } = await searchParams;
    const dict = await getDictionary(lang as 'en' | 'id' | 'zh' | 'ar');

    // Filter experiences
    const filtered = domain && domain !== 'all'
        ? experiences.filter((e) => e.domain === domain)
        : experiences;

    return (
        <div className="min-h-screen px-4 py-20">
            <div className="mx-auto max-w-5xl">
                <div className="text-center">
                    <p className="text-xs tracking-[0.2em] text-[var(--color-accent)]">{dict.hero.status}</p>
                    <h1 className="mt-4 text-3xl font-bold sm:text-5xl">{dict.hero.title}</h1>
                    <p className="mt-2 text-sm opacity-70">{dict.hero.subtitle}</p>
                </div>

                <div className="mt-10 flex justify-center">
                    <DomainFilter />
                </div>

                <div className="mt-10">
                    <ExperienceGrid experiences={filtered} lang={lang} />
                </div>
            </div>
        </div>
    );
}