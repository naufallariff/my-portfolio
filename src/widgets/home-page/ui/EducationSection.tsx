'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
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
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

    return (
        <div>
            <h2 className="section-title">{dict.education.title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="surface-panel p-6 md:p-8">
                    <h3 className="text-xl font-semibold text-(--color-text-primary) mb-3">
                        {dict.education.degree.title}
                    </h3>
                    <p className="text-sm text-(--color-accent) font-medium mb-2">{dict.education.degree.school}</p>
                    <p className="text-xs text-(--color-text-muted) mb-4">{dict.education.degree.date}</p>
                    <p className="text-sm text-(--color-text-secondary) leading-relaxed">{dict.education.degree.detail}</p>
                </div>

                <div className="surface-panel p-6 md:p-8">
                    <h3 className="text-xl font-semibold text-(--color-text-primary) mb-4">
                        Professional Courses
                    </h3>
                    <div className="space-y-4">
                        {courses.map((course, i) => (
                            <button
                                key={i}
                                onClick={() => setSelectedCourse(course)}
                                className="w-full text-left p-3 rounded-xl border border-(--color-border) hover:border-(--color-accent) transition-colors group"
                            >
                                <p className="text-sm font-medium text-(--color-text-primary) group-hover:text-(--color-accent)">
                                    {course.title}
                                </p>
                                <p className="text-xs text-(--color-text-muted) mt-1">
                                    {course.provider} · {course.date}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {selectedCourse && (
                <div className="overlay-backdrop" onClick={() => setSelectedCourse(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-semibold text-(--color-text-primary)">{selectedCourse.title}</h3>
                            <button
                                onClick={() => setSelectedCourse(null)}
                                className="btn-icon"
                                aria-label="Close modal"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <p className="text-sm text-(--color-accent) font-medium mb-2">{selectedCourse.provider}</p>
                        <p className="text-xs text-(--color-text-muted) mb-4">{selectedCourse.date}</p>
                        <p className="text-sm text-(--color-text-secondary) leading-relaxed mb-6">{selectedCourse.description}</p>
                        <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden border border-(--color-border)">
                            <Image
                                src={selectedCourse.certificateImage}
                                alt={`Certificate: ${selectedCourse.title}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 600px"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}