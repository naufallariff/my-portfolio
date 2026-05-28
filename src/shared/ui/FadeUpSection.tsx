'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface FadeUpSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    id?: string;
}

export function FadeUpSection({ children, className = '', delay = 0, id }: FadeUpSectionProps) {
    return (
        <motion.div
            id={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}