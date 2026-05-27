'use client';

import { useSearchParams, useRouter } from 'next/navigation';

interface DomainFilterProps {
    dict: {
        domain: {
            all: string;
            ai: string;
            engineering: string;
            audit: string;
            education: string;
        };
    };
}

export function DomainFilter({ dict }: DomainFilterProps) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const active = searchParams.get('domain') || 'all';

    const domains = [
        { code: 'all', label: dict.domain.all },
        { code: 'ai', label: dict.domain.ai },
        { code: 'engineering', label: dict.domain.engineering },
        { code: 'audit', label: dict.domain.audit },
        { code: 'education', label: dict.domain.education },
    ];

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
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${active === d.code
                            ? 'bg-(--color-accent) text-white shadow-sm'
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