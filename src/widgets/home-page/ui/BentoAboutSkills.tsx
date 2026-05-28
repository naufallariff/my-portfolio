import { MapPin, Globe, Download, Code, Database, Server } from 'lucide-react';
import { contactConfig } from '@/shared/config/contact';

interface BentoAboutSkillsProps {
    dict: {
        manifesto: {
            title: string;
            hook: string;
            narrative: string;
            valueProposition: string;
        };
        competencies: {
            title: string;
            ai: { title: string; skills: string[] };
            engineering: {
                title: string;
                frontend: string;
                backend: string;
                architecture: string;
                databases: string;
            };
            tools: { title: string; list: string[] };
        };
    };
    lang: string;
}

export function BentoAboutSkills({ dict }: BentoAboutSkillsProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* About Me (Lebar 2 kolom di md) */}
            <div className="surface-panel p-6 md:p-8 md:col-span-2 flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-(--color-text-primary) mb-4">
                        {dict.manifesto.title}
                    </h2>
                    <p className="text-lg text-(--color-text-secondary) leading-relaxed mb-4">
                        {dict.manifesto.hook}
                    </p>
                    <p className="text-sm text-(--color-text-secondary) leading-relaxed">
                        {dict.manifesto.narrative}
                    </p>
                </div>
                <a
                    href={contactConfig.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-6 self-start"
                >
                    <Download size={16} />
                    Download CV
                </a>
            </div>

            {/* Quick Contact (Sempit kanan) */}
            <div className="surface-panel p-6 md:p-8 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-(--color-accent)" />
                    <div>
                        <p className="text-xs text-(--color-text-muted)">Location</p>
                        <p className="text-sm font-medium text-(--color-text-primary)">Jakarta, Indonesia</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Globe size={18} className="text-(--color-accent)" />
                    <div>
                        <p className="text-xs text-(--color-text-muted)">Availability</p>
                        <p className="text-sm font-medium text-(--color-text-primary)">Global Remote</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Code size={18} className="text-(--color-accent)" />
                    <div>
                        <p className="text-xs text-(--color-text-muted)">Focus</p>
                        <p className="text-sm font-medium text-(--color-text-primary)">AI Data QA & Software Architecture</p>
                    </div>
                </div>
            </div>

            {/* Technologies (Baris penuh di bawah) */}
            <div className="surface-panel p-6 md:p-8 md:col-span-3">
                <h3 className="text-lg font-semibold text-(--color-text-primary) mb-4">
                    Technologies I Work With
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                    {[
                        { icon: Code, label: 'React/Next.js' },
                        { icon: Server, label: 'Node.js/Go' },
                        { icon: Database, label: 'PostgreSQL' },
                        { icon: Globe, label: 'Vercel' },
                        { icon: Code, label: 'TypeScript' },
                        { icon: Server, label: 'Python' },
                    ].map((tech, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center gap-2 p-3 rounded-(--radius-md) bg-(--color-border) hover:bg-(--color-border-strong) transition-colors"
                        >
                            <tech.icon size={24} className="text-(--color-accent)" />
                            <span className="text-xs font-medium text-(--color-text-secondary) text-center">
                                {tech.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}