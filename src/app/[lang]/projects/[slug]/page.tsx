import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getDictionary } from '@/shared/locales/config';
import { Github, Globe } from 'lucide-react';

function slugify(text: string): string {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

interface PageProps {
    params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
    const enDict = await import('@/shared/locales/dictionaries/en.json').then((m) => m.default);
    const params: { lang: string; slug: string }[] = [];
    const locales = ['en', 'id', 'zh', 'ar'];
    for (const locale of locales) {
        for (const project of enDict.projects.list) {
            params.push({ lang: locale, slug: slugify(project.title) });
        }
    }
    return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { lang, slug } = await params;
    const dict = await getDictionary(lang as 'en' | 'id' | 'zh' | 'ar');
    const project = dict.projects.list.find((p) => slugify(p.title) === slug);
    if (!project) return { title: 'Project Not Found' };
    return {
        title: `${project.title} — ${project.subtitle}`,
        description: project.description,
    };
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { lang, slug } = await params;
    const dict = await getDictionary(lang as 'en' | 'id' | 'zh' | 'ar');
    const project = dict.projects.list.find((p) => slugify(p.title) === slug);

    if (!project) notFound();

    return (
        <main className="min-h-screen px-6 pt-24 pb-24 md:pt-32 md:pb-32">
            <div className="mx-auto max-w-4xl">
                <a
                    href={`/${lang}`}
                    className="inline-flex items-center gap-2 text-sm text-(--color-text-secondary) hover:text-(--color-text-primary) transition-colors mb-8"
                >
                    ← Back to Home
                </a>

                <header className="mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient">
                        {project.title}
                    </h1>
                    <p className="mt-4 text-lg text-(--color-text-secondary) font-medium">
                        {project.subtitle}
                    </p>
                    <p className="mt-2 text-sm text-(--color-text-muted)">{project.tech}</p>
                </header>

                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-10 surface-panel">
                    <Image
                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 800px"
                    />
                </div>

                <article className="surface-panel p-6 md:p-10 mb-10">
                    <p className="text-base text-(--color-text-secondary) leading-relaxed whitespace-pre-line">
                        {project.description}
                    </p>
                </article>

                <div className="flex flex-wrap gap-4">
                    <a href="#" className="btn-primary" target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        View Source Code
                    </a>
                    <a href="#" className="btn-secondary" target="_blank" rel="noopener noreferrer">
                        <Globe size={16} />
                        Live Demo
                    </a>
                </div>
            </div>
        </main>
    );
}