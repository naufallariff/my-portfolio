'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Course {
    title: string;
    provider: string;
    date: string;
    description: string;
}

interface EducationSectionProps {
    dict: {
        education: {
            title: string;
            degree: { title: string; school: string; date: string; detail: string };
            certifications: string[];
        };
    };
}

const courses: Course[] = [
    { title: 'Code Generation and Optimization Using IBM Granite', provider: 'IBM SkillsBuild', date: '2025', description: 'Learned advanced code generation techniques using IBM Granite models.' },
    { title: 'Web Backend Developer', provider: 'Gamelab Indonesia', date: '2024', description: 'Intensive backend development covering REST API, database design, and deployment.' },
    { title: 'Web Development', provider: 'Infinite Learning', date: '2023', description: 'Full-stack web development bootcamp with hands-on projects.' },
];

export function EducationSection({ dict }: EducationSectionProps) {
    const [expandedCourse, setExpandedCourse] = useState<number | null>(null);

    return (
        <div>
            <h2 className="section-title">{dict.education.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="surface-panel p-6 md:p-8">
                    <h3 className="text-xl font-semibold text-(--color-text-primary) mb-3">{dict.education.degree.title}</h3>
                    <p className="text-sm text-(--color-accent) font-medium mb-2">{dict.education.degree.school}</p>
                    <p className="text-xs text-(--color-text-muted) mb-4">{dict.education.degree.date}</p>
                    <p className="text-sm text-(--color-text-secondary) leading-relaxed">{dict.education.degree.detail}</p>
                </div>
                <div className="surface-panel p-6 md:p-8">
                    <h3 className="text-xl font-semibold text-(--color-text-primary) mb-4">Professional Courses</h3>
                    <div className="space-y-3">
                        {courses.map((course, i) => (
                            <div key={i} className="border border-(--color-border) rounded-xl overflow-hidden">
                                <button onClick={() => setExpandedCourse(expandedCourse === i ? null : i)} className="w-full flex items-center justify-between p-4 text-left hover:bg-(--color-border) transition-colors">
                                    <div>
                                        <p className="text-sm font-medium text-(--color-text-primary)">{course.title}</p>
                                        <p className="text-xs text-(--color-text-muted) mt-1">{course.provider} · {course.date}</p>
                                    </div>
                                    {expandedCourse === i ? <ChevronUp size={18} className="text-(--color-text-muted) shrink-0" /> : <ChevronDown size={18} className="text-(--color-text-muted) shrink-0" />}
                                </button>
                                {expandedCourse === i && (
                                    <div className="px-4 pb-4 border-t border-(--color-border)">
                                        <p className="text-sm text-(--color-text-secondary) leading-relaxed pt-4">{course.description}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}