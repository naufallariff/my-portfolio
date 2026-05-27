interface Job {
    title: string;
    company: string;
    date: string;
    endDate: string;
    description: string;
}

interface ExperienceTimelineProps {
    dict: {
        experience: {
            jobs: Job[];
        };
    };
}

export function ExperienceTimeline({ dict }: ExperienceTimelineProps) {
    return (
        <div className="space-y-8">
            {dict.experience.jobs.map((job, i) => (
                <div key={i} className="glass p-6 md:p-8 rounded-(--radius-card)">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <h3 className="text-lg font-semibold text-(--color-text-primary)">{job.title}</h3>
                        <span className="text-xs font-medium text-(--color-text-secondary)">{job.date} — {job.endDate}</span>
                    </div>
                    <p className="mt-1 text-sm text-(--color-accent) font-medium">{job.company}</p>
                    <p className="mt-4 text-sm text-(--color-text-secondary) leading-relaxed">{job.description}</p>
                </div>
            ))}
        </div>
    );
}