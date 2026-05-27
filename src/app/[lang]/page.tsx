import { getDictionary } from '@/shared/locales/config';
import { DomainFilter } from '@/features/domain-filter/ui/DomainFilter';

export default async function HomePage({ params, searchParams }: { params: Promise<{ lang: string }>; searchParams: Promise<{ domain?: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as 'en' | 'id' | 'zh' | 'ar');

    return (
        <div className="min-h-screen px-4 py-20">
            <div className="mx-auto max-w-4xl">
                <h1 className="text-3xl font-bold">{dict.hero.title}</h1>
                <div className="mt-8">
                    <DomainFilter />
                </div>
                <div className="mt-8">{/* Experience Cards akan ditaruh di sini */}</div>
            </div>
        </div>
    );
}