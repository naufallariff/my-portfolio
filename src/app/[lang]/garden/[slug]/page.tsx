import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { articles } from '#velite';
import { getDictionary } from '@/shared/locales/config';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface PageProps {
    params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
    return articles
        .filter((article) => article.published)
        .flatMap((article) => [
            { lang: 'en', slug: article.slug },
            { lang: 'id', slug: article.slug },
            { lang: 'zh', slug: article.slug },
            { lang: 'ar', slug: article.slug },
        ]);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);
    if (!article) return { title: 'Article Not Found' };
    return {
        title: `${article.title} — Digital Garden`,
        description: article.description,
    };
}

export default async function GardenArticlePage({ params }: PageProps) {
    const { lang, slug } = await params;
    const dict = await getDictionary(lang as 'en' | 'id' | 'zh' | 'ar');
    const article = articles.find((a) => a.slug === slug && a.published);

    if (!article) notFound();

    return (
        <main className="min-h-screen px-6 pt-24 pb-24 md:pt-32 md:pb-32">
            <div className="mx-auto max-w-3xl">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-(--color-border) px-4 py-1.5 text-xs font-medium text-(--color-text-secondary)">
                    <span className="font-semibold text-(--color-accent)">[EN-Only]</span>
                    <span>{dict.enOnlyNotice}</span>
                </div>

                <header className="mb-10">
                    <time dateTime={article.date} className="text-sm text-(--color-text-muted) font-medium">
                        {new Date(article.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </time>
                    <h1 className="mt-2 text-4xl font-bold tracking-tight text-(--color-text-primary) md:text-5xl">
                        {article.title}
                    </h1>
                    <p className="mt-4 text-lg text-(--color-text-secondary) leading-relaxed">
                        {article.description}
                    </p>
                    {article.tags.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-2">
                            {article.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-(--color-border) px-3 py-1 text-xs font-medium text-(--color-text-secondary)"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </header>

                <article className="surface-panel p-6 md:p-10 prose prose-lg max-w-none">
                    <MDXRemote source={article.body} />
                </article>
            </div>
        </main>
    );
}