interface SubRole {
    title: string;
    date: string;
    endDate: string;
    description: string;
}

interface ConsolidatedJob {
    company: string;
    period: string;
    roles: SubRole[];
}

interface ExperienceTimelineProps {
    dict: {
        experience: {
            jobs: {
                title: string;
                company: string;
                date: string;
                endDate: string;
                description: string;
            }[];
        };
    };
}

function consolidateJobs(
    jobs: ExperienceTimelineProps['dict']['experience']['jobs']
): ConsolidatedJob[] {
    const companyMap = new Map<string, ConsolidatedJob>();
    jobs.forEach((job) => {
        const existing = companyMap.get(job.company);
        if (existing) {
            existing.roles.push({ title: job.title, date: job.date, endDate: job.endDate, description: job.description });
        } else {
            companyMap.set(job.company, {
                company: job.company,
                period: '',
                roles: [{ title: job.title, date: job.date, endDate: job.endDate, description: job.description }],
            });
        }
    });
    return Array.from(companyMap.values()).map((c) => ({
        ...c,
        period: c.roles.length > 1
            ? `${c.roles[c.roles.length - 1].date} — ${c.roles[0].endDate || 'Present'}`
            : `${c.roles[0].date} — ${c.roles[0].endDate || 'Present'}`,
    }));
}

export function ExperienceTimeline({ dict }: ExperienceTimelineProps) {
    const consolidated = consolidateJobs(dict.experience.jobs);

    return (
        <div className="relative">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-(--color-border)" />
            <div className="space-y-16">
                {consolidated.map((company, i) => (
                    <div key={i} className="relative pl-12 md:pl-16">
                        <div className="absolute left-2 md:left-6 top-2 w-4 h-4 rounded-full bg-(--color-accent) ring-4 ring-(--color-bg-base) z-10" />
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-(--color-text-primary)">{company.company}</h3>
                            <p className="text-sm text-(--color-text-muted) mt-1">{company.period}</p>
                        </div>
                        <div className="relative pl-8 md:pl-12 border-l border-dashed border-(--color-border) ml-2 space-y-8">
                            {company.roles.map((role, j) => (
                                <div key={j} className="relative group">
                                    <div className="absolute -left-[17px] md:-left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-(--color-border) group-hover:bg-(--color-accent) transition-colors ring-2 ring-(--color-bg-base)" />
                                    <div className="card-interactive p-5 md:p-6 group-hover:border-(--color-accent) transition-colors">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                                            <h4 className="text-lg font-semibold text-(--color-text-primary)">{role.title}</h4>
                                            <span className="text-xs font-medium text-(--color-text-muted) whitespace-nowrap">{role.date} — {role.endDate}</span>
                                        </div>
                                        <p className="text-sm text-(--color-text-secondary) leading-relaxed">{role.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}