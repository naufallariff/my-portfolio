export interface Experience {
    id: string;
    domain: 'ai' | 'engineering' | 'audit' | 'education';
    title: string;
    period: string;
    role: string;
    summary: string;
    fullDescription: string;
    metrics: { label: string; value: string }[];
    tags: string[];
}