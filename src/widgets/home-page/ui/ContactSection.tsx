import { contactConfig } from '@/shared/config/contact';

interface ContactDict {
    title: string;
    subtitle: string;
    emailLabel: string;
    phoneLabel: string;
    linkedinLabel: string;
    githubLabel: string;
    resumeLabel: string;
}

interface ContactSectionProps {
    dict: {
        contact: ContactDict;
    };
}

export function ContactSection({ dict }: ContactSectionProps) {
    const { contact } = dict;

    return (
        <section className="section-contact" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="section-title">
                {contact.title}
            </h2>

            <p className="mt-4 text-lg text-(--color-text-secondary) max-w-2xl mx-auto">
                {contact.subtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
                {/* Tombol utama: Email */}
                <a href={contactConfig.emailUrl} className="btn-primary">
                    {contact.emailLabel}
                </a>

                {/* Tombol utama: Resume */}
                <a
                    href={contactConfig.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                >
                    {contact.resumeLabel}
                </a>

                {/* Tombol sekunder: WhatsApp/Phone */}
                <a
                    href={contactConfig.phoneUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                >
                    {contact.phoneLabel}
                </a>

                {/* Tombol ghost: LinkedIn */}
                <a
                    href={contactConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                >
                    {contact.linkedinLabel}
                </a>

                {/* Tombol ghost: GitHub */}
                <a
                    href={contactConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                >
                    {contact.githubLabel}
                </a>
            </div>
        </section>
    );
}