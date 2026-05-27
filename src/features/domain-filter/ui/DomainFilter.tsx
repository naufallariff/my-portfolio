'use client';

import { motion } from 'framer-motion';
import { useSearchParams, useRouter } from 'next/navigation';

const domains = [
    { code: 'all', label: 'All', icon: '⊞' },
    { code: 'ai', label: 'AI & Data', icon: '◈' },
    { code: 'engineering', label: 'Engineering', icon: '⌨' },
    { code: 'audit', label: 'Audit', icon: '◎' },
    { code: 'education', label: 'Education', icon: '♢' },
];

export function DomainFilter() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const active = searchParams.get('domain') || 'all';

    const handleChange = (code: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (code === 'all') {
            params.delete('domain');
        } else {
            params.set('domain', code);
        }
        router.push(`?${params.toString()}`, { scroll: false });
    };

    return (
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter domain">
            {domains.map((d) => (
                <button
                    key={d.code}
                    onClick={() => handleChange(d.code)}
                    className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${active === d.code
                            ? 'bg-[var(--color-accent)] text-black'
                            : 'border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-accent)]'
                        }`}
                    role="tab"
                    aria-selected={active === d.code}
                >
                    <span className="mr-1">{d.icon}</span>
                    {d.label}
                    {active === d.code && (
                        <motion.div
                            layoutId="activeDomainTab"
                            className="absolute inset-0 rounded-full bg-[var(--color-accent)]"
                            style={{ zIndex: -1 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                        />
                    )}
                </button>
            ))}
        </div>
    );
}