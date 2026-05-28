import { getDictionary } from '@/shared/locales/config';
import { Header } from '@/widgets/header/ui/Header';
import { DomainFilter } from '@/features/domain-filter/ui/DomainFilter';
import { ExperienceTimeline } from '@/entities/experience/ui/ExperienceTimeline';
import { ProjectGrid } from '@/entities/experience/ui/ProjectGrid';
import { CompetenciesSection } from '@/widgets/competencies/ui/CompetenciesSection';
import { ContactSection } from '@/widgets/home-page/ui/ContactSection';
import { FadeUpSection } from '@/shared/ui/FadeUpSection';

export default async function HomePage({
    params,
}: {
    params: Promise<{ lang: string }>;
    searchParams: Promise<{ domain?: string }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang as 'en' | 'id' | 'zh' | 'ar');

    return (
        <>
            <Header lang={lang} dict={dict} />
            <main className="min-h-screen pt-24 pb-24 md:pt-32 md:pb-32">
                <div className="mx-auto max-w-6xl px-6">
                    {/* Hero Section dengan text-gradient */}
                    <FadeUpSection className="mb-24 md:mb-32 text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-(--color-border) px-4 py-1.5 text-xs font-medium text-(--color-accent) mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                            </span>
                            {dict.hero.status}
                        </div>
                        <h1 className="hero-title text-gradient">
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
                    </FadeUpSection>

                    <hr className="border-(--color-border) my-16 md:my-24" />

                    {/* Manifesto */}
                    <FadeUpSection className="mb-24 md:mb-32">
                        <h2 className="section-title">{dict.manifesto.title}</h2>
                        <p className="text-lg text-(--color-text-secondary) leading-relaxed mb-6">
                            {dict.manifesto.hook}
                        </p>
                        <p className="text-base text-(--color-text-secondary) leading-relaxed mb-6">
                            {dict.manifesto.narrative}
                        </p>
                        <p className="text-base font-medium text-(--color-text-primary)">
                            {dict.manifesto.valueProposition}
                        </p>
                    </FadeUpSection>

                    <hr className="border-(--color-border) my-16 md:my-24" />

                    {/* Competencies */}
                    <FadeUpSection>
                        <CompetenciesSection dict={dict} />
                    </FadeUpSection>

                    <hr className="border-(--color-border) my-16 md:my-24" />

                    {/* Experience Filter + Timeline */}
                    <FadeUpSection className="mb-16">
                        <h2 className="section-title">{dict.experience.title}</h2>
                        <DomainFilter dict={dict} />
                    </FadeUpSection>
                    <FadeUpSection className="mb-24 md:mb-32">
                        <ExperienceTimeline dict={dict} />
                    </FadeUpSection>

                    <hr className="border-(--color-border) my-16 md:my-24" />

                    {/* Projects */}
                    <FadeUpSection className="mb-24 md:mb-32">
                        <h2 className="section-title">{dict.projects.title}</h2>
                        <ProjectGrid dict={dict} lang={lang} />
                    </FadeUpSection>

                    <hr className="border-(--color-border) my-16 md:my-24" />

                    {/* Education */}
                    <FadeUpSection className="mb-24 md:mb-32">
                        <h2 className="section-title">{dict.education.title}</h2>
                        <div className="surface-panel p-6 md:p-8">
                            <h3 className="text-xl font-semibold text-(--color-text-primary)">
                                {dict.education.degree.title}
                            </h3>
                            <p className="mt-1 text-sm text-(--color-text-secondary)">
                                {dict.education.degree.school}
                            </p>
                            <p className="mt-1 text-sm text-(--color-text-secondary)">
                                {dict.education.degree.date}
                            </p>
                            <p className="mt-4 text-sm text-(--color-text-secondary) leading-relaxed">
                                {dict.education.degree.detail}
                            </p>
                            <div className="mt-6 space-y-2">
                                {dict.education.certifications.map((cert: string, index: number) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-2 text-sm text-(--color-text-secondary)"
                                    >
                                        <span className="text-(--color-accent) mt-1 shrink-0">•</span>
                                        <span>{cert}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeUpSection>

                    {/* Contact Section */}
                    <FadeUpSection>
                        <ContactSection dict={dict} />
                    </FadeUpSection>

                    {/* Footer */}
                    <footer className="text-center text-xs text-(--color-text-secondary) opacity-50 pt-16 pb-8 border-t border-(--color-border)">
                        <p>{dict.footer.copyright}</p>
                    </footer>
                </div>
            </main>
        </>
    );
}