import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface Project {
    title: string;
    subtitle: string;
    tech: string;
    description: string;
    image: string;
}

interface ProjectSliderProps {
    dict: {
        projects: {
            list: Project[];
        };
    };
    lang: string;
}

function slugify(text: string): string {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export function ProjectSlider({ dict, lang }: ProjectSliderProps) {
    return (
        <div className="scroll-container" role="list">
            {dict.projects.list.map((project, index) => (
                <Link
                    key={index}
                    href={`/${lang}/projects/${slugify(project.title)}`}
                    className="scroll-item card-interactive pressable group block overflow-hidden"
                    role="listitem"
                >
                    <div className="w-full aspect-video relative overflow-hidden rounded-t-lg">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 85vw, 45vw"
                        />
                    </div>

                    <div className="p-6">
                        <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-semibold text-(--color-text-primary) group-hover:text-(--color-accent) transition-colors">
                                {project.title}
                            </h3>
                            <ArrowUpRight
                                size={18}
                                className="text-(--color-text-muted) group-hover:text-(--color-text-primary) transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0"
                                aria-hidden="true"
                            />
                        </div>

                        <p className="text-sm font-medium text-(--color-accent) mb-3">{project.subtitle}</p>

                        <div className="flex flex-wrap gap-1.5 mb-3">
                            {project.tech.split(',').map((tech, i) => (
                                <span
                                    key={i}
                                    className="inline-block rounded-full border border-(--color-border) px-2.5 py-0.5 text-xs font-medium text-(--color-text-secondary)"
                                >
                                    {tech.trim()}
                                </span>
                            ))}
                        </div>

                        <p className="text-sm text-(--color-text-secondary) leading-relaxed line-clamp-3">
                            {project.description}
                        </p>
                    </div>

                    <span className="sr-only">View project: {project.title}</span>
                </Link>
            ))}
        </div>
    );
}