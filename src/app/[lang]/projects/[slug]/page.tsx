import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/shared/locales/config';

// Fungsi bantu untuk menghasilkan slug dari judul proyek
function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
}

interface PageProps {
    params: Promise<{ lang: string; slug: string }>;
}

// Generate halaman statis untuk semua kombinasi bahasa dan proyek
export async function generateStaticParams() {
    // Kita gunakan data dari kamus bahasa Inggris sebagai basis
    const enDict = await import('@/shared/locales/dictionaries/en.json').then(m => m.default);
    const params: { lang: string; slug: string }[] = [];
    const locales = ['en', 'id', 'zh', 'ar'];

    for (const locale of locales) {
        for (const project of enDict.projects.list) {
            params.push({
                lang: locale,
                slug: slugify(project.title),
            });
        }
    }
    return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { lang, slug } = await params;
    const dict = await getDictionary(lang as 'en' | 'id' | 'zh' | 'ar');
    const project = dict.projects.list.find((p) => slugify(p.title) === slug);

    if (!project) {
        return { title: 'Project Not Found' };
    }

    return {
        title: `${project.title} — ${project.subtitle}`,
        description: project.description,
    };
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { lang, slug } = await params;
    const dict = await getDictionary(lang as 'en' | 'id' | 'zh' | 'ar');
    const project = dict.projects.list.find((p) => slugify(p.title) === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen px-6 pt-24 pb-24 md:pt-32 md:pb-32">
            <div className="mx-auto max-w-3xl">
                {/* Back link */}
                <a
                    href={`/${lang}`}
                    className="inline-flex items-center gap-2 text-sm text-(--color-text-secondary) hover:text-(--color-text-primary) transition-colors mb-8"
                >
                    ← Back to Home
                </a>

                {/* Project Hero */}
                <header className="mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient">
                        {project.title}
                    </h1>
                    <p className="mt-4 text-lg text-(--color-text-secondary) font-medium">
                        {project.subtitle}
                    </p>
                    <p className="mt-2 text-sm text-(--color-text-muted)">{project.tech}</p>
                </header>

                {/* Project Description */}
                <article className="surface-panel p-6 md:p-10">
                    <p className="text-base text-(--color-text-secondary) leading-relaxed whitespace-pre-line">
                        {project.description}
                    </p>
                </article>

                {/* Placeholder untuk detail lebih lanjut (jika ada) */}
                <div className="mt-10 text-center text-xs text-(--color-text-muted)">
                    More detailed case study coming soon.
                </div>
            </div>
        </main>
    );
}