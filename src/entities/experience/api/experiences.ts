import { Experience } from '../model/types';

export const experiences: Experience[] = [
    {
        id: '4d-tsr',
        domain: 'ai',
        title: '4D Traffic Sign Reflectivity Annotation',
        period: 'Feb 2026',
        role: 'Data Annotator',
        summary: 'Anotasi bounding box rambu lalu lintas dari fusi LiDAR-kamera.',
        fullDescription: 'Terpilih ke dalam tim 10 orang untuk proyek 4D TSR...',
        metrics: [
            { label: 'Target', value: '18+ data/hari' },
            { label: 'Akurasi', value: '100%' },
        ],
        tags: ['LiDAR', 'Camera Fusion', 'TSR', 'Xiaomi'],
    },
    {
        id: 'semantic-occ',
        domain: 'ai',
        title: 'Semantic OCC Quality Assurance',
        period: 'Mar – Mei 2026',
        role: 'QA Specialist',
        summary: 'Audit segmentasi 3D Point Cloud 40+ kategori objek urban.',
        fullDescription: 'Dipromosikan sebagai salah satu dari 5 QA pertama...',
        metrics: [
            { label: 'Kategori', value: '40+' },
            { label: 'Waktu', value: '2-5 jam/data' },
        ],
        tags: ['Point Cloud', 'QA', 'Edge Bleeding', '3D'],
    },
    {
        id: 'odn-temporal',
        domain: 'ai',
        title: 'ODN Temporal Tracking & ID-Switch Mitigation',
        period: 'Mei 2026',
        role: 'QA – ODN',
        summary: 'Kawal konsistensi temporal ribuan objek dalam 20+ frame.',
        fullDescription: 'Diperbantukan ke proyek Object Detection Network...',
        metrics: [
            { label: 'Frame', value: '20+' },
            { label: 'Objek', value: 'Ribuan' },
        ],
        tags: ['ODN', 'Temporal', 'ID-Switch', '360°'],
    },
    {
        id: 'uwais-telur',
        domain: 'engineering',
        title: 'Uwais Telur – Full-Stack Transaction System',
        period: 'Jan – Jul 2025',
        role: 'Full-Stack Developer',
        summary: 'Sistem transaksi penjualan dengan React, Node.js, MySQL.',
        fullDescription: 'Proyek puncak akademik...',
        metrics: [
            { label: 'Stack', value: 'React/Node/MySQL' },
            { label: 'Status', value: 'Migrasi ke React' },
        ],
        tags: ['Full-Stack', 'MySQL', 'React', 'Bisnis'],
    },
    {
        id: 'credia-fsd',
        domain: 'engineering',
        title: 'Credia System – Feature-Sliced Design in Practice',
        period: 'Ongoing',
        role: 'Software Architect',
        summary: 'Basis kode dengan struktur FSD ketat untuk skalabilitas.',
        fullDescription: 'Credia System adalah proyek pribadi...',
        metrics: [
            { label: 'Struktur', value: 'FSD Penuh' },
            { label: 'CI/CD', value: 'GitHub Actions' },
        ],
        tags: ['FSD', 'Architecture', 'TypeScript'],
    },
];