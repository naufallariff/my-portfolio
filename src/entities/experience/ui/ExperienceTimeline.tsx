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
        <div className="relative">
            {/* Garis Vertikal */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-(--color-border)" />

            <div className="space-y-12">
                {dict.experience.jobs.map((job, i) => (
                    <div key={i} className="relative pl-12 md:pl-16">
                        {/* Bulatan Indikator */}
                        <div className="absolute left-2.5 md:left-6.5 top-1.5 w-3 h-3 rounded-full bg-(--color-accent) ring-4 ring-(--color-bg-base)" />

                        {/* Konten */}
                        <div className="card-interactive p-5 md:p-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                                <h3 className="text-lg font-semibold text-(--color-text-primary)">{job.title}</h3>
                                <span className="text-xs font-medium text-(--color-text-muted) whitespace-nowrap">
                                    {job.date} — {job.endDate}
                                </span>
                            </div>
                            <p className="text-sm font-medium text-(--color-accent) mb-3">{job.company}</p>
                            <p className="text-sm text-(--color-text-secondary) leading-relaxed">{job.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}