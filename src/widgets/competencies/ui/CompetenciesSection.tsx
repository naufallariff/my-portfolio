interface CompetenciesSectionProps {
    dict: {
        competencies: {
            title: string;
            ai: {
                title: string;
                skills: string[];
            };
            engineering: {
                title: string;
                frontend: string;
                backend: string;
                architecture: string;
                databases: string;
            };
            tools: {
                title: string;
                list: string[];
            };
        };
    };
}

export function CompetenciesSection({ dict }: CompetenciesSectionProps) {
    return (
        <section className="mb-24 md:mb-32">
            <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-primary) mb-8">{dict.competencies.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass p-6 rounded-(--radius-card)">
                    <h3 className="text-lg font-semibold text-(--color-accent) mb-4">{dict.competencies.ai.title}</h3>
                    <ul className="space-y-2">
                        {dict.competencies.ai.skills.map((skill, i) => (
                            <li key={i} className="text-sm text-(--color-text-secondary)">• {skill}</li>
                        ))}
                    </ul>
                </div>
                <div className="glass p-6 rounded-(--radius-card)">
                    <h3 className="text-lg font-semibold text-(--color-accent) mb-4">{dict.competencies.engineering.title}</h3>
                    <p className="text-sm text-(--color-text-secondary) mb-2">{dict.competencies.engineering.frontend}</p>
                    <p className="text-sm text-(--color-text-secondary) mb-2">{dict.competencies.engineering.backend}</p>
                    <p className="text-sm text-(--color-text-secondary) mb-2">{dict.competencies.engineering.architecture}</p>
                    <p className="text-sm text-(--color-text-secondary)">{dict.competencies.engineering.databases}</p>
                </div>
                <div className="glass p-6 rounded-(--radius-card)">
                    <h3 className="text-lg font-semibold text-(--color-accent) mb-4">{dict.competencies.tools.title}</h3>
                    <ul className="space-y-2">
                        {dict.competencies.tools.list.map((tool, i) => (
                            <li key={i} className="text-sm text-(--color-text-secondary)">• {tool}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}