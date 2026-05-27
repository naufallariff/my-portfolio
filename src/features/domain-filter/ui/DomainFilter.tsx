'use client';

import { useSearchParams, useRouter } from 'next/navigation';

const domains = [
    { code: 'all', label: 'All' },
    { code: 'ai', label: 'AI & Data' },
    { code: 'engineering', label: 'Engineering' },
    { code: 'audit', label: 'Audit' },
    { code: 'education', label: 'Education' },
];

export function DomainFilter() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const active = searchParams.get('domain') || 'all';

    const handleChange = (code: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (code === 'all') params.delete('domain');
        else params.set('domain', code);
        router.push(`?${params.toString()}`, { scroll: false });
    };

    return (
        <div className="flex flex-wrap justify-center gap-2" role="tablist">
            {domains.map((d) => (
                <button
                    key={d.code}
                    onClick={() => handleChange(d.code)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${active === d.code
                            ? 'bg-(--color-accent) text-white'
                            : 'text-(--color-text-secondary) hover:text-(--color-text-primary) hover:bg-(--color-border)'
                        }`}
                    role="tab"
                    aria-selected={active === d.code}
                >
                    {d.label}
                </button>
            ))}
        </div>
    );
}