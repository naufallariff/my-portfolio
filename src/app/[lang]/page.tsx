import { getDictionary } from '@/shared/locales/config';
import { Header } from '@/widgets/header/ui/Header';
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

    const filtered =
        domain && domain !== 'all'
            ? experiences.filter((e) => e.domain === domain)
            : experiences;

    return (
        <>
            <Header lang={lang} />
            <main className="min-h-screen px-6 pt-24 pb-24 md:pt-32 md:pb-32">
                <div className="mx-auto max-w-6xl">
                    {/* Hero Section — ala Apple Keynote */}
                    <section className="mb-24 md:mb-32 text-center">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-(--color-text-primary) leading-tight">
                            {dict.hero.name}
                        </h1>
                        <p className="mt-4 text-lg md:text-2xl text-(--color-text-secondary) font-medium">
                            {dict.hero.role}
                        </p>
                        <p className="mt-6 mx-auto max-w-2xl text-base md:text-lg text-(--color-text-secondary) leading-relaxed">
                            {dict.hero.valueProp}
                        </p>
                        <p className="mt-6 text-sm text-(--color-text-secondary) opacity-70">
                            {dict.hero.location}
                        </p>
                    </section>

                    {/* Domain Filter — di tengah */}
                    <section className="mb-16">
                        <DomainFilter />
                    </section>

                    {/* Experience Bento Grid */}
                    <section>
                        <ExperienceGrid experiences={filtered} lang={lang} />
                    </section>

                    {/* Footer minimal */}
                    <footer className="mt-32 text-center text-xs text-(--color-text-secondary) opacity-50">
                        <p>© {new Date().getFullYear()} Muhammad Naufal Arif. All rights reserved.</p>
                    </footer>
                </div>
            </main>
        </>
    );
}