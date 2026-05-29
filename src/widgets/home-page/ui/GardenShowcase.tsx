import Link from 'next/link';
import { articles } from '#velite';
import { ArrowUpRight } from 'lucide-react';

interface GardenShowcaseProps {
    lang: string;
}

export function GardenShowcase({ lang }: GardenShowcaseProps) {
    // Ambil 3 artikel terbaru yang published
    const recentArticles = articles
        .filter((article) => article.published)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);

    if (recentArticles.length === 0) return null;

    return (
        <section className="mb-24 md:mb-32">
            <h2 className="section-title">Digital Garden</h2>
            <p className="text-sm text-(--color-text-secondary) mb-8">
                Technical articles on data quality, software architecture, and AI infrastructure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recentArticles.map((article) => (
                    <Link
                        key={article.slug}
                        href={`/${lang}/garden/${article.slug}`}
                        className="card-interactive pressable group block"
                    >
                        <div className="flex items-start justify-between mb-3">
                            <span className="text-xs font-medium text-(--color-text-muted)">
                                {new Date(article.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </span>
                            <ArrowUpRight
                                size={16}
                                className="text-(--color-text-muted) group-hover:text-(--color-text-primary) transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0"
                                aria-hidden="true"
                            />
                        </div>

                        <h3 className="text-lg font-semibold text-(--color-text-primary) group-hover:text-(--color-accent) transition-colors mb-2">
                            {article.title}
                        </h3>

                        <p className="text-sm text-(--color-text-secondary) line-clamp-3">
                            {article.description}
                        </p>

                        {article.tags.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-1.5">
                                {article.tags.slice(0, 3).map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-(--color-border) px-2.5 py-0.5 text-xs font-medium text-(--color-text-secondary)"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </Link>
                ))}
            </div>
        </section>
    );
}