'use client';

import { useState } from 'react';
import { Code, Database, GitBranch, Terminal, Globe, Cloud, Cpu, Layers } from 'lucide-react';

interface Skill {
    name: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    category: string;
}

const skills: Skill[] = [
    { name: 'TypeScript', icon: Code, category: 'Web' },
    { name: 'JavaScript', icon: Code, category: 'Web' },
    { name: 'React', icon: Code, category: 'Web' },
    { name: 'Next.js', icon: Globe, category: 'Web' },
    { name: 'Node.js', icon: Terminal, category: 'Web' },
    { name: 'Express.js', icon: Terminal, category: 'Web' },
    { name: 'Tailwind CSS', icon: Layers, category: 'Web' },
    { name: 'PostgreSQL', icon: Database, category: 'Database' },
    { name: 'MySQL', icon: Database, category: 'Database' },
    { name: 'SQLite', icon: Database, category: 'Database' },
    { name: 'Go (Gin)', icon: Cloud, category: 'Backend' },
    { name: 'Python (Flask)', icon: Terminal, category: 'Backend' },
    { name: 'Git', icon: GitBranch, category: 'Tools' },
    { name: 'Docker', icon: Cpu, category: 'Tools' },
    { name: 'Figma', icon: Layers, category: 'Tools' },
];

const categories = ['All', 'Web', 'Backend', 'Database', 'Tools'];

export function CompetenciesFilter() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filtered = activeCategory === 'All' ? skills : skills.filter((s) => s.category === activeCategory);

    return (
        <div>
            <div className="flex flex-wrap justify-center gap-2 mb-8" role="tablist">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${activeCategory === cat
                                ? 'bg-(--color-accent) text-(--color-accent-text)'
                                : 'text-(--color-text-secondary) hover:text-(--color-text-primary) hover:bg-(--color-border)'
                            }`}
                        role="tab"
                        aria-selected={activeCategory === cat}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {filtered.map((skill, i) => (
                    <div
                        key={i}
                        className="surface-panel p-4 flex flex-col items-center gap-2 rounded-xl text-center hover:scale-105 transition-transform"
                    >
                        <skill.icon size={28} className="text-(--color-accent)" />
                        <span className="text-xs font-medium text-(--color-text-secondary)">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}