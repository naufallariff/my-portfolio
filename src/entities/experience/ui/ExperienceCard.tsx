'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Experience } from '../model/types';

export function ExperienceCard({ experience, lang }: { experience: Experience; lang: string }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div
            layout
            onClick={() => setExpanded(!expanded)}
            className={`bento-card cursor-pointer overflow-hidden ${expanded ? 'col-span-full row-span-2' : ''
                }`}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        >
            <motion.div layout="position" className="flex items-start justify-between">
                <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                        {experience.period}
                    </span>
                    <h3 className="mt-1 text-lg font-bold">{experience.title}</h3>
                    <p className="mt-1 text-sm opacity-60">{experience.role}</p>
                </div>
                <motion.button
                    className="rounded-full border border-[var(--color-border)] p-2 text-xs"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {expanded ? '✕' : '↗'}
                </motion.button>
            </motion.div>

            <motion.p layout="position" className="mt-2 text-sm opacity-80">
                {experience.summary}
            </motion.p>

            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="mt-4 border-t border-[var(--color-border)] pt-4">
                            <p className="text-sm leading-relaxed">{experience.fullDescription}</p>

                            {/* Metrics */}
                            <div className="mt-4 grid grid-cols-2 gap-2">
                                {experience.metrics.map((m, i) => (
                                    <div key={i} className="rounded-lg border border-[var(--color-border)] p-2 text-center">
                                        <p className="text-lg font-bold text-[var(--color-accent)]">{m.value}</p>
                                        <p className="text-xs opacity-60">{m.label}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Tags */}
                            <div className="mt-3 flex flex-wrap gap-1">
                                {experience.tags.map((tag) => (
                                    <span key={tag} className="rounded-full border border-[var(--color-border)] px-2 py-0.5 text-xs">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}