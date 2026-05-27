'use client';

import { ExperienceCard } from './ExperienceCard';
import { Experience } from '../model/types';

export function ExperienceGrid({
    experiences,
    lang,
}: {
    experiences: Experience[];
    lang: string;
}) {
    if (experiences.length === 0) {
        return (
            <p className="py-20 text-center text-sm opacity-50">
                No experiences in this domain yet.
            </p>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} lang={lang} />
            ))}
        </div>
    );
}