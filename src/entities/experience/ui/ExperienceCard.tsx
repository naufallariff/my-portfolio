'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Experience } from '../model/types';

export function ExperienceCard({ experience }: { experience: Experience }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div
            layout
            onClick={() => setExpanded(!expanded)}
            className={`glass cursor-pointer overflow-hidden transition-all duration-300 pressable ${expanded ? 'col-span-full row-span-2' : ''
                }`}
            style={{ borderRadius: 'var(--radius-card)' }}
        >
            <motion.div layout="position" className="p-6 md:p-8">
                <div className="flex items-start justify-between">
                    <div>
                        <span className="text-xs font-medium uppercase tracking-widest text-(--color-accent)">
                            {experience.period}
                        </span>
                        <h3 className="mt-2 text-xl font-semibold text-(--color-text-primary)">
                            {experience.title}
                        </h3>
                        <p className="mt-1 text-sm text-(--color-text-secondary)">
                            {experience.role}
                        </p>
                    </div>
                    <motion.button
                        className="rounded-full border border-(--color-border) p-2 text-xs"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={expanded ? 'Collapse' : 'Expand'}
                    >
                        {expanded ? '✕' : '↗'}
                    </motion.button>
                </div>

                <motion.p layout="position" className="mt-3 text-sm text-(--color-text-secondary) leading-relaxed">
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
                            <div className="mt-6 border-t border-(--color-border) pt-6">
                                <p className="text-sm leading-relaxed text-(--color-text-primary)">
                                    {experience.fullDescription}
                                </p>

                                <div className="mt-6 grid grid-cols-2 gap-3">
                                    {experience.metrics.map((m, i) => (
                                        <div
                                            key={i}
                                            className="rounded-xl border border-(--color-border) p-4 text-center"
                                        >
                                            <p className="text-2xl font-bold font-mono text-(--color-accent)">
                                                {m.value}
                                            </p>
                                            <p className="mt-1 text-xs text-(--color-text-secondary)">
                                                {m.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {experience.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-(--color-border) px-3 py-1 text-xs font-medium text-(--color-text-secondary)"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}