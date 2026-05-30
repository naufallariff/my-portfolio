import { getDictionary } from '@/shared/locales/config';
import { Header } from '@/widgets/header/ui/Header';
import { BentoAboutSkills } from '@/widgets/home-page/ui/BentoAboutSkills';
import { ExperienceTimeline } from '@/entities/experience/ui/ExperienceTimeline';
import { ProjectSlider } from '@/entities/experience/ui/ProjectSlider';
import { EducationSection } from '@/widgets/home-page/ui/EducationSection';
import { MegaFooter } from '@/widgets/home-page/ui/MegaFooter';
import { FadeUpSection } from '@/shared/ui/FadeUpSection';

export default async function HomePage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang as 'en' | 'id' | 'zh' | 'ar');

    return (
        <>
            <Header lang={lang} />
            <main className="min-h-screen pt-24 pb-24 md:pt-32 md:pb-32">
                <div className="mx-auto max-w-6xl px-6">
                    <FadeUpSection className="mb-24 md:mb-32">
                        <BentoAboutSkills dict={dict} lang={lang} />
                    </FadeUpSection>
                    <hr className="divider my-16 md:my-24" />
                    <FadeUpSection className="mb-24 md:mb-32">
                        <h2 className="section-title">{dict.experience.title}</h2>
                        <ExperienceTimeline dict={dict} />
                    </FadeUpSection>
                    <hr className="divider my-16 md:my-24" />
                    <FadeUpSection className="mb-24 md:mb-32" id="projects">
                        <h2 className="section-title">{dict.projects.title}</h2>
                        <ProjectSlider dict={dict} lang={lang} />
                    </FadeUpSection>
                    <hr className="divider my-16 md:my-24" />
                    <FadeUpSection className="mb-24 md:mb-32">
                        <EducationSection dict={dict} />
                    </FadeUpSection>
                </div>
            </main>
            <MegaFooter dict={dict} />
        </>
    );
}