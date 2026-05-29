import { getDictionary } from '@/shared/locales/config';
import { Header } from '@/widgets/header/ui/Header';
import { ExperienceTimeline } from '@/entities/experience/ui/ExperienceTimeline';
import { ProjectSlider } from '@/entities/experience/ui/ProjectSlider';
import { BentoAboutSkills } from '@/widgets/home-page/ui/BentoAboutSkills';
import { CompetenciesFilter } from '@/features/competencies-filter/ui/CompetenciesFilter';
import { EducationSection } from '@/widgets/home-page/ui/EducationSection';
import { MegaFooter } from '@/widgets/home-page/ui/MegaFooter';
import { FadeUpSection } from '@/shared/ui/FadeUpSection';
import { ArrowDown, Mail } from 'lucide-react';
import { contactConfig } from '@/shared/config/contact';
import Image from 'next/image';
import { GardenShowcase } from '@/widgets/home-page/ui/GardenShowcase';

export default async function HomePage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang as 'en' | 'id' | 'zh' | 'ar');

    return (
        <>
            <Header lang={lang} dict={dict} />
            <main className="min-h-screen pt-24 pb-24 md:pt-32 md:pb-32">
                <div className="mx-auto max-w-6xl px-6">
                    {/* ========== HERO ========== */}
                    <FadeUpSection className="mb-24 md:mb-32">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 rounded-full border border-(--color-border) px-4 py-1.5 text-xs font-medium text-(--color-accent) mb-6">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                                    </span>
                                    {dict.hero.status}
                                </div>

                                <h1 className="hero-title text-(--color-text-primary) mb-4">
                                    {dict.hero.name}
                                </h1>

                                <p className="text-lg md:text-xl text-(--color-text-secondary) font-medium mb-4">
                                    {dict.hero.role}
                                </p>

                                <p className="text-base text-(--color-text-secondary) leading-relaxed mb-8 max-w-lg">
                                    {dict.hero.valueProp}
                                </p>

                                <div className="flex flex-wrap gap-3 mb-8">
                                    <a href="#projects" className="btn-primary">
                                        View My Work
                                        <ArrowDown size={16} />
                                    </a>
                                    <a href="#contact" className="btn-secondary">
                                        Contact Me
                                    </a>
                                </div>

                                <div className="flex items-center gap-3">
                                    <a
                                        href={contactConfig.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-icon"
                                        aria-label="GitHub"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                    <a
                                        href={contactConfig.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-icon"
                                        aria-label="LinkedIn"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                    <a
                                        href={contactConfig.emailUrl}
                                        className="btn-icon"
                                        aria-label="Email"
                                    >
                                        <Mail size={20} />
                                    </a>
                                </div>
                            </div>

                            {/* Foto Profil */}
                            <div className="relative flex justify-center lg:justify-end">
                                <div className="surface-panel p-3 rounded-2xl w-72 h-72 md:w-80 md:h-80 relative z-10 overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                                        alt="Profile"
                                        fill
                                        className="object-cover rounded-xl"
                                        sizes="(max-width: 768px) 288px, 320px"
                                    />
                                </div>
                                <div className="absolute -bottom-4 -left-4 md:-left-8 surface-panel p-4 rounded-xl shadow-lg z-20">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs text-(--color-text-muted)">Role</p>
                                            <p className="text-sm font-semibold text-(--color-text-primary)">QA Specialist</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeUpSection>

                    <hr className="border-(--color-border) my-16 md:my-24" />

                    {/* ========== ABOUT ========== */}
                    <FadeUpSection className="mb-24 md:mb-32">
                        <BentoAboutSkills dict={dict} lang={lang} />
                    </FadeUpSection>

                    <hr className="border-(--color-border) my-16 md:my-24" />

                    {/* ========== EXPERIENCE ========== */}
                    <FadeUpSection className="mb-24 md:mb-32">
                        <h2 className="section-title">{dict.experience.title}</h2>
                        <ExperienceTimeline dict={dict} />
                    </FadeUpSection>

                    <hr className="border-(--color-border) my-16 md:my-24" />

                    {/* ========== PROJECTS ========== */}
                    <FadeUpSection className="mb-24 md:mb-32" id="projects">
                        <h2 className="section-title">{dict.projects.title}</h2>
                        <ProjectSlider dict={dict} lang={lang} />
                    </FadeUpSection>

                    <hr className="border-(--color-border) my-16 md:my-24" />

                    {/* ========== COMPETENCIES ========== */}
                    <FadeUpSection className="mb-24 md:mb-32">
                        <h2 className="section-title">{dict.competencies.title}</h2>
                        <CompetenciesFilter />
                    </FadeUpSection>

                    <hr className="border-(--color-border) my-16 md:my-24" />

                    {/* ========== EDUCATION & COURSES ========== */}
                    <FadeUpSection className="mb-24 md:mb-32">
                        <EducationSection dict={dict} />
                    </FadeUpSection>

                    <hr className="border-(--color-border) my-16 md:my-24" />

                    <FadeUpSection className="mb-24 md:mb-32">
                        <GardenShowcase lang={lang} />
                    </FadeUpSection>
                </div>
            </main>

            {/* ========== MEGA FOOTER ========== */}
            <MegaFooter dict={dict} />
        </>
    );
}