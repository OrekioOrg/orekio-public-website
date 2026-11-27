import Link from "next/link";
import { FaqItem } from "@/components/faq-item";
import type { Dictionary } from "@/i18n/dictionaries";

// Les questions reprises sur l'accueil, par leur ancre, dans cet ordre. Leurs
// textes restent ceux de la page FAQ : une seule rédaction.
const HOME_QUESTIONS = [
  "price",
  "free-trial",
  "patient-price",
  "tools",
  "getting-started",
  "hds",
] as const;

export function HomeFaq({ dict, href }: { dict: Dictionary; href: string }) {
  const all = dict.faqPage.sections.flatMap((section) => section.questions);
  const questions = HOME_QUESTIONS.map((id) => {
    const question = all.find((candidate) => candidate.id === id);
    // Une ancre renommée casse la construction du site plutôt que de disparaître.
    if (!question) throw new Error(`Question absente de la FAQ : ${id}`);
    return question;
  });
  const copy = dict.home.faq;

  return (
    <section className="mx-auto max-w-3xl border-t border-outline px-6 py-20 md:py-24">
      <div className="text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-secondary">
          {copy.eyebrow}
        </p>
        <h2 className="mt-4 text-[28px] font-medium leading-tight text-on-surface-strong md:text-[32px]">
          {copy.title}
        </h2>
      </div>
      <div className="mt-10 border-t border-outline">
        {questions.map((question) => (
          <FaqItem key={question.id} question={question} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <p className="text-[15px] text-on-surface-variant">{copy.more}</p>
        <Link
          href={href}
          className="mt-4 inline-block rounded-lg border border-outline bg-surface px-6 py-3 text-[15px] font-medium text-on-surface-strong transition-colors hover:bg-primary-container"
        >
          {copy.link}
        </Link>
      </div>
    </section>
  );
}
