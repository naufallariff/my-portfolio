import { getDictionary } from '@/shared/locales/config';
import { notFound } from 'next/navigation';

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ lang: string; slug: string }>;
}) {
    const { lang, slug } = await params;
    const dict = await getDictionary(lang as 'en' | 'id' | 'zh' | 'ar');

    // Cari proyek dari dictionary
    const project = dict.projects.list.find(
        (p: { title: string }) => p.title.toLowerCase().replace(/\s+/g, '-') === slug
    );

    if (!project) notFound();

    return (
        <div className="min-h-screen py-24 px-6 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            {/* detail lainnya */}
        </div>
    );
}