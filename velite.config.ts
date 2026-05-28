import { defineConfig, defineCollection, s } from 'velite';

const articles = defineCollection({
    name: 'Article',
    pattern: 'garden/**/*.mdx',
    schema: s
        .object({
            title: s.string().max(120),
            description: s.string().max(260),
            date: s.isodate(),
            published: s.boolean().default(true),
            tags: s.array(s.string()).default([]),
            // ✅ Ganti s.text() dengan s.raw()
            body: s.raw(),
        })
        .transform((data) => ({
            ...data,
            slug: data.title
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^a-z0-9-]/g, ''),
            permalink: `/garden/${data.title
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^a-z0-9-]/g, '')}`,
        })),
});

export default defineConfig({
    collections: { articles },
});