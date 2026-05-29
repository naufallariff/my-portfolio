'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';

interface Course {
    title: string;
    provider: string;
    date: string;
    description: string;
    certificateImage: string;
}

interface EducationSectionProps {
    dict: {
        education: {
            title: string;
            degree: {
                title: string;
                school: string;
                date: string;
                detail: string;
            };
            certifications: string[];
        };
    };
}

const courses: Course[] = [
    {
        title: 'Code Generation and Optimization Using IBM Granite',
        provider: 'IBM SkillsBuild',
        date: '2025',
        description: 'Learned advanced code generation techniques using IBM Granite models for enterprise applications.',
        certificateImage: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=800&auto=format&fit=crop',
    },
    {
        title: 'Web Backend Developer',
        provider: 'Gamelab Indonesia',
        date: '2024',
        description: 'Intensive backend development program covering REST API, database design, and server deployment.',
        certificateImage: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=800&auto=format&fit=crop',
    },
    {
        title: 'Web Development',
        provider: 'Infinite Learning',
        date: '2023',
        description: 'Full-stack web development bootcamp with hands-on projects and industry mentorship.',
        certificateImage: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=800&auto=format&fit=crop',
    },
];

export function EducationSection({ dict }: EducationSectionProps) {
    const [expandedCourse, setExpandedCourse] = useState<number | null>(null);

    const toggleCourse = (index: number) => {
        setExpandedCourse(expandedCourse === index ? null : index);
    };

    return (
        <div>
            <h2 className="section-title">{dict.education.title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Pendidikan Formal */}
                <div className="surface-panel p-6 md:p-8">
                    <h3 className="text-xl font-semibold text-(--color-text-primary) mb-3">
                        {dict.education.degree.title}
                    </h3>
                    <p className="text-sm text-(--color-accent) font-medium mb-2">{dict.education.degree.school}</p>
                    <p className="text-xs text-(--color-text-muted) mb-4">{dict.education.degree.date}</p>
                    <p className="text-sm text-(--color-text-secondary) leading-relaxed">{dict.education.degree.detail}</p>
                </div>

                {/* Courses — Akordeon */}
                <div className="surface-panel p-6 md:p-8">
                    <h3 className="text-xl font-semibold text-(--color-text-primary) mb-4">
                        Professional Courses
                    </h3>
                    <div className="space-y-3">
                        {courses.map((course, i) => (
                            <div key={i} className="border border-(--color-border) rounded-xl overflow-hidden">
                                <button
                                    onClick={() => toggleCourse(i)}
                                    className="w-full flex items-center justify-between p-4 text-left hover:bg-(--color-border) transition-colors"
                                >
                                    <div>
                                        <p className="text-sm font-medium text-(--color-text-primary)">{course.title}</p>
                                        <p className="text-xs text-(--color-text-muted) mt-1">
                                            {course.provider} · {course.date}
                                        </p>
                                    </div>
                                    {expandedCourse === i ? (
                                        <ChevronUp size={18} className="text-(--color-text-muted) shrink-0" />
                                    ) : (
                                        <ChevronDown size={18} className="text-(--color-text-muted) shrink-0" />
                                    )}
                                </button>

                                {expandedCourse === i && (
                                    <div className="px-4 pb-4 border-t border-(--color-border)">
                                        <p className="text-sm text-(--color-text-secondary) leading-relaxed mb-4 pt-4">
                                            {course.description}
                                        </p>
                                        <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden border border-(--color-border)">
                                            <Image
                                                src={course.certificateImage}
                                                alt={`Certificate: ${course.title}`}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 400px"
                                            />
                                        </div>
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