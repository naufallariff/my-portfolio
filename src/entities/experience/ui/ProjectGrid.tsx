import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface Project {
    title: string;
    subtitle: string;
    tech: string;
    description: string;
}

interface ProjectGridProps {
    dict: {
        projects: {
            list: Project[];
        };
    };
    lang: string; // tambahkan prop lang
}

function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
}

export function ProjectGrid({ dict, lang }: ProjectGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
            {dict.projects.list.map((project, index) => (
                <Link
                    key={index}
                    href={`/${lang}/projects/${slugify(project.title)}`}
                    className="card-interactive pressable group block"
                    role="listitem"
                >
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-(--color-text-primary) mb-1 group-hover:text-(--color-accent) transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-sm font-medium text-(--color-accent) mb-2">
                                {project.subtitle}
                            </p>
                            <p className="text-xs text-(--color-text-muted) mb-4">{project.tech}</p>
                            <p className="text-sm text-(--color-text-secondary) leading-relaxed line-clamp-3">
                                {project.description}
                            </p>
                        </div>
                        <ArrowUpRight
                            size={20}
                            className="text-(--color-text-muted) group-hover:text-(--color-text-primary) transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0"
                            aria-hidden="true"
                        />
                    </div>
                    <span className="sr-only">
                        View project: {project.title} — {project.subtitle}
                    </span>
                </Link>
            ))}
        </div>
    );
}