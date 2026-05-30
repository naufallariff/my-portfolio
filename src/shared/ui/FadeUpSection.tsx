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
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}