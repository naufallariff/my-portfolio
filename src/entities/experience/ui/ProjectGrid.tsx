interface Project {
    title: string;
    subtitle: string;
    tech: string;
    description: string;
}

interface ProjectGridProps {
    dict: {
        projects: {
            list: Project[];
        };
    };
}

export function ProjectGrid({ dict }: ProjectGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dict.projects.list.map((project, i) => (
                <div
                    key={i}
                    className="glass p-6 md:p-8 rounded-(--radius-card) pressable"
                >
                    <h3 className="text-lg font-semibold text-(--color-text-primary)">
                        {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-(--color-accent) font-medium">
                        {project.subtitle}
                    </p>
                    <p className="mt-1 text-xs text-(--color-text-secondary)">{project.tech}</p>
                    <p className="mt-4 text-sm text-(--color-text-secondary) leading-relaxed">
                        {project.description}
                    </p>
                </div>
            ))}
        </div>
    );
}