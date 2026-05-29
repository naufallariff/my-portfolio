import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { contactConfig } from '@/shared/config/contact';

interface MegaFooterProps {
    dict: {
        footer: {
            copyright: string;
        };
        hero: {
            status: string;
        };
    };
}

export function MegaFooter({ dict }: MegaFooterProps) {
    return (
        <footer className="border-t border-(--color-border) mt-24">
            {/* CTA */}
            <div className="py-16 md:py-24 text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-(--color-text-primary) mb-4">
                    Have a project in mind?
                </h2>
                <p className="text-lg text-(--color-text-secondary) mb-8">
                    Let&apos;s build something great together.
                </p>
                <a href={`mailto:${contactConfig.email}`} className="btn-primary text-lg px-8 py-4">
                    Get in Touch
                    <ArrowUpRight size={20} />
                </a>
            </div>

            {/* Grid Footer */}
            <div className="max-w-6xl mx-auto px-6 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-(--color-border)">
                    {/* Kolom 1: Status */}
                    <div>
                        <h3 className="text-sm font-semibold text-(--color-text-primary) mb-3">Availability</h3>
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                            </span>
                            <span className="text-sm text-(--color-text-secondary)">{dict.hero.status}</span>
                        </div>
                    </div>

                    {/* Kolom 2: Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-(--color-text-primary) mb-3">Quick Links</h3>
                        <ul className="space-y-2">
                            {['Home', 'Projects', 'Digital Garden'].map((link) => (
                                <li key={link}>
                                    <a
                                        href={link === 'Home' ? '/' : `/${link.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="text-sm text-(--color-text-secondary) hover:text-(--color-accent) transition-colors"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Kolom 3: Social */}
                    <div>
                        <h3 className="text-sm font-semibold text-(--color-text-primary) mb-3">Connect</h3>
                        <div className="flex gap-3">
                            <a
                                href={contactConfig.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary p-3"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href={contactConfig.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary p-3"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a href={contactConfig.emailUrl} className="btn-secondary p-3" aria-label="Email">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center pt-8 border-t border-(--color-border)">
                    <p className="text-xs text-(--color-text-muted)">{dict.footer.copyright}</p>
                </div>
            </div>
        </footer>
    );
}