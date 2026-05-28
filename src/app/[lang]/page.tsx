import { getDictionary } from '@/shared/locales/config';
import { Header } from '@/widgets/header/ui/Header';
import { DomainFilter } from '@/features/domain-filter/ui/DomainFilter';
import { ExperienceTimeline } from '@/entities/experience/ui/ExperienceTimeline';
import { ProjectGrid } from '@/entities/experience/ui/ProjectGrid';
import { BentoAboutSkills } from '@/widgets/home-page/ui/BentoAboutSkills';
import { ContactSection } from '@/widgets/home-page/ui/ContactSection';
import { FadeUpSection } from '@/shared/ui/FadeUpSection';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { contactConfig } from '@/shared/config/contact';
import Link from 'next/link';

export default async function HomePage({
    params,
    searchParams,
}: {
    params: Promise<{ lang: string }>;
    searchParams: Promise<{ domain?: string }>;
}) {
    const { lang } = await params;
    const { domain: _domain } = await searchParams;
    const dict = await getDictionary(lang as 'en' | 'id' | 'zh' | 'ar');

    return (
        <>
            <Header lang={lang} dict={dict} />
            <main className="min-h-screen pt-24 pb-24 md:pt-32 md:pb-32">
                <div className="mx-auto max-w-6xl px-6">
                    {/* ========== HERO SECTION (2-Column Asymmetric) ========== */}
                    <FadeUpSection className="mb-24 md:mb-32">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            {/* Kolom Kiri: Teks & CTA */}
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

                                {/* Tombol CTA */}
                                <div className="flex flex-wrap gap-3 mb-8">
                                    <a href="#projects" className="btn-primary">
                                        View My Work
                                        <ArrowDown size={16} />
                                    </a>
                                    <a href="#contact" className="btn-secondary">
                                        Contact Me
                                    </a>
                                </div>

                                {/* Social Icons */}
                                <div className="flex items-center gap-3">
                                    <a
                                        href={contactConfig.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-icon"
                                        aria-label="GitHub"
                                    >
                                        <Github size={20} />
                                    </a>
                                    <a
                                        href={contactConfig.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-icon"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin size={20} />
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

                            {/* Kolom Kanan: Profile Image & Floating Card */}
                            <div className="relative flex justify-center lg:justify-end">
                                {/* Foto Profil Placeholder */}
                                <div className="surface-panel p-4 rounded-(--radius-xl) w-72 h-72 md:w-80 md:h-80 flex items-center justify-center relative z-10">
                                    <div className="w-full h-full rounded-(--radius-lg) bg-(--color-border) flex items-center justify-center">
                                        <span className="text-6xl opacity-30">👤</span>
                                    </div>
                                </div>

                                {/* Floating Metric Card */}
                                <div className="absolute -bottom-4 -left-4 md:-left-8 surface-panel p-4 rounded-(--radius-lg) shadow-lg z-20">
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

                    {/* ========== BENTO ABOUT & SKILLS ========== */}
                    <FadeUpSection className="mb-24 md:mb-32">
                        <BentoAboutSkills dict={dict} lang={lang} />
                    </FadeUpSection>

                    <hr className="border-(--color-border) my-16 md:my-24" />

                    {/* ========== EXPERIENCE ========== */}
                    <FadeUpSection className="mb-16">
                        <h2 className="section-title">{dict.experience.title}</h2>
                        <DomainFilter dict={dict} />
                    </FadeUpSection>
                    <FadeUpSection className="mb-24 md:mb-32">
                        <ExperienceTimeline dict={dict} />
                    </FadeUpSection>

                    <hr className="border-(--color-border) my-16 md:my-24" />

                    {/* ========== PROJECTS ========== */}
                    <FadeUpSection className="mb-24 md:mb-32" id="projects">
                        <h2 className="section-title">{dict.projects.title}</h2>
                        <ProjectGrid dict={dict} lang={lang} />
                    </FadeUpSection>

                    <hr className="border-(--color-border) my-16 md:my-24" />

                    {/* ========== CONTACT ========== */}
                    <FadeUpSection id="contact">
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