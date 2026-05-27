import { ExperienceCard } from './ExperienceCard';
import { Experience } from '../model/types';

interface Props {
    experiences: Experience[];
    lang?: string;
}

export function ExperienceGrid({ experiences }: Props) {
    if (experiences.length === 0) {
        return (
            <p className="py-20 text-center text-sm text-(--color-text-secondary)">
                No experiences found.
            </p>
        );
    }

    return (
        <div className="bento-grid">
            {experiences.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
            ))}
        </div>
    );
}
