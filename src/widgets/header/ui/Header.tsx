import Image from 'next/image';
import { MapPin, Globe, Code, Server, Database, Download } from 'lucide-react';
import { contactConfig } from '@/shared/config/contact';

interface BentoAboutSkillsProps {
    dict: {
        manifesto: {
            title: string;
            hook: string;
            narrative: string;
            valueProposition: string;
        };
    };
    lang: string;
}

export function BentoAboutSkills({ dict }: BentoAboutSkillsProps) {
    return (
        <div>
            {/* Asymmetric Hero */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-(--color-border) px-4 py-1.5 text-xs font-medium text-(--color-accent) mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                        </span>
                        Available for global opportunities
                    </div>

                    <h1 className="hero-title mb-4">Muhammad Naufal Arif</h1>
                    <p className="hero-subtitle mb-6">Data Quality Assurance Specialist & Software Engineer</p>
                    <p className="text-base text-(--color-text-secondary) leading-relaxed mb-8 max-w-lg">
                        Building zero-defect data architectures. Auditing autonomous systems. Engineering the web.
                    </p>

                    <div className="flex flex-wrap gap-3 mb-8">
                        <a href="#projects" className="btn-primary">View My Work</a>
                        <a href="#contact" className="btn-secondary">Contact Me</a>
                    </div>

                    <div className="flex items-center gap-3">
                        <a href={contactConfig.github} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="GitHub">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        </a>
                        <a href={contactConfig.linkedin} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="LinkedIn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                        <a href={contactConfig.emailUrl} className="btn-icon" aria-label="Email">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 7 10-7" /></svg>
                        </a>
                    </div>
                </div>

                <div className="relative flex justify-center lg:justify-end">
                    <div className="surface-panel p-3 rounded-2xl w-72 h-72 md:w-80 md:h-80 relative z-10 overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                            alt="Profile"
                            fill
                            className="object-cover rounded-xl"
                            sizes="(max-width: 768px) 288px, 320px"
                            priority
                        />
                    </div>
                    <div className="absolute -bottom-4 -left-4 surface-panel p-4 rounded-xl shadow-lg z-20">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <div>
                                <p className="text-xs text-(--color-text-muted)">Role</p>
                                <p className="text-sm font-semibold text-(--color-text-primary)">QA Specialist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bento Grid: About + Quick Contact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="surface-panel p-6 md:p-8 md:col-span-2">
                    <h2 className="text-2xl font-bold text-(--color-text-primary) mb-4">{dict.manifesto.title}</h2>
                    <p className="text-lg text-(--color-text-secondary) leading-relaxed mb-4">{dict.manifesto.hook}</p>
                    <p className="text-sm text-(--color-text-secondary) leading-relaxed">{dict.manifesto.narrative}</p>
                    <a href={contactConfig.resume} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">
                        <Download size={16} />
                        Download CV
                    </a>
                </div>

                <div className="surface-panel p-6 md:p-8 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <MapPin size={18} className="text-(--color-accent)" />
                        <div><p className="text-xs text-(--color-text-muted)">Location</p><p className="text-sm font-medium text-(--color-text-primary)">Jakarta, Indonesia</p></div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Globe size={18} className="text-(--color-accent)" />
                        <div><p className="text-xs text-(--color-text-muted)">Availability</p><p className="text-sm font-medium text-(--color-text-primary)">Global Remote</p></div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Code size={18} className="text-(--color-accent)" />
                        <div><p className="text-xs text-(--color-text-muted)">Focus</p><p className="text-sm font-medium text-(--color-text-primary)">AI Data QA & Software Architecture</p></div>
                    </div>
                </div>

                <div className="surface-panel p-6 md:p-8 md:col-span-3">
                    <h3 className="text-lg font-semibold text-(--color-text-primary) mb-4">Technologies I Work With</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                        {[{ icon: Code, label: 'React/Next.js' }, { icon: Server, label: 'Node.js/Go' }, { icon: Database, label: 'PostgreSQL' }, { icon: Globe, label: 'Vercel' }, { icon: Code, label: 'TypeScript' }, { icon: Server, label: 'Python' }].map((tech, i) => (
                            <div key={i} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-(--color-border) hover:bg-(--color-border-strong) transition-colors">
                                <tech.icon size={24} className="text-(--color-accent)" />
                                <span className="text-xs font-medium text-(--color-text-secondary) text-center">{tech.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}