import { getDictionary } from '@/shared/locales/config';
import { Header } from '@/widgets/header/ui/Header';
import { DomainFilter } from '@/features/domain-filter/ui/DomainFilter';
import { ExperienceTimeline } from '@/entities/experience/ui/ExperienceTimeline';
import { ProjectGrid } from '@/entities/experience/ui/ProjectGrid';
import { CompetenciesSection } from '@/widgets/competencies/ui/CompetenciesSection';

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

    return (
        <>
            <Header lang={lang} dict={dict} />
            <main className="min-h-screen px-6 pt-24 pb-24 md:pt-32 md:pb-32">
                <div className="mx-auto max-w-6xl">
                    {/* Hero */}
                    <section className="mb-24 md:mb-32 text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-(--color-border) px-4 py-1.5 text-xs font-medium text-(--color-accent) mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            {dict.hero.status}
                        </div>
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

                    {/* Manifesto */}
                    <section className="mb-24 md:mb-32">
                        <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-primary) mb-8">{dict.manifesto.title}</h2>
                        <p className="text-lg text-(--color-text-secondary) leading-relaxed mb-6">{dict.manifesto.hook}</p>
                        <p className="text-base text-(--color-text-secondary) leading-relaxed mb-6">{dict.manifesto.narrative}</p>
                        <p className="text-base font-medium text-(--color-text-primary)">{dict.manifesto.valueProposition}</p>
                    </section>

                    {/* Competencies */}
                    <CompetenciesSection dict={dict} />

                    {/* Domain Filter */}
                    <section className="mb-16 mt-24 md:mt-32">
                        <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-primary) mb-8">{dict.experience.title}</h2>
                        <DomainFilter dict={dict} />
                    </section>

                    {/* Experience Timeline */}
                    <section className="mb-24 md:mb-32">
                        <ExperienceTimeline dict={dict} />
                    </section>

                    {/* Projects */}
                    <section className="mb-24 md:mb-32">
                        <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-primary) mb-8">{dict.projects.title}</h2>
                        <ProjectGrid dict={dict} />
                    </section>

                    {/* Education */}
                    <section className="mb-24 md:mb-32">
                        <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-primary) mb-8">{dict.education.title}</h2>
                        <div className="glass p-6 md:p-8 rounded-(--radius-card)">
                            <h3 className="text-xl font-semibold text-(--color-text-primary)">{dict.education.degree.title}</h3>
                            <p className="mt-1 text-sm text-(--color-text-secondary)">{dict.education.degree.school}</p>
                            <p className="mt-1 text-sm text-(--color-text-secondary)">{dict.education.degree.date}</p>
                            <p className="mt-4 text-sm text-(--color-text-secondary)">{dict.education.degree.detail}</p>
                            <div className="mt-6 space-y-2">
                                {dict.education.certifications.map((cert, i) => (
                                    <div key={i} className="flex items-start gap-2 text-sm text-(--color-text-secondary)">
                                        <span className="text-(--color-accent) mt-1">•</span>
                                        <span>{cert}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="text-center text-xs text-(--color-text-secondary) opacity-50">
                        <p>{dict.footer.copyright}</p>
                    </footer>
                </div>
            </main>
        </>
    );
}