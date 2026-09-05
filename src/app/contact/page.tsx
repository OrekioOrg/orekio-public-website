import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Orekio",
  description: "Contactez l'équipe Orekio pour une question ou une démonstration.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-secondary">
        Contact
      </p>
      <h1 className="mt-4 text-[32px] font-medium text-on-surface-strong">
        Une question, une démonstration&nbsp;?
      </h1>
      <p className="mt-4 text-[16px] leading-relaxed text-on-surface">
        Le formulaire de contact arrive bientôt. En attendant, écrivez-nous
        directement :
      </p>

      <a
        href="mailto:contact@orekio.app"
        className="mt-8 inline-block rounded-lg bg-primary px-6 py-3 text-[15px] font-medium text-on-primary transition-opacity hover:opacity-90"
      >
        contact@orekio.app
      </a>
    </div>
  );
}
