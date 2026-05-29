import { Mail, ArrowUpRight } from 'lucide-react';
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
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a
                                href={contactConfig.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary p-3"
                                aria-label="LinkedIn"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
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