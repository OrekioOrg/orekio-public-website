"use client";

import { useEffect, useState } from "react";
import { SegmentText } from "@/components/segment-text";
import type { FaqCopy, FaqQuestion } from "@/i18n/dictionaries/faq/types";

/** Minuscules, sans accents, apostrophes unifiées : « hebergement » trouve « Hébergement ». */
function normalize(text: string): string {
  return text
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/’/g, "'")
    .toLowerCase();
}

function searchableText({ question, answer }: FaqQuestion): string {
  const body = answer
    .flat()
    .map((segment) => (typeof segment === "string" ? segment : segment.text))
    .join(" ");
  return normalize(`${question} ${body}`);
}

/*
 * Les questions, rangées par thème, avec une recherche. Tout le contenu est dans
 * le HTML exporté (les réponses sont repliées par <details>, qui marche sans
 * JavaScript) ; le script n'ajoute que le filtre et l'ouverture par l'ancre.
 */
export function FaqList({ copy }: { copy: FaqCopy }) {
  const [query, setQuery] = useState("");
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  const matches = (question: FaqQuestion) => {
    if (terms.length === 0) return true;
    const text = searchableText(question);
    return terms.every((term) => text.includes(term));
  };
  const sections = copy.sections.map((section) => {
    const items = section.questions.map((question) => ({
      question,
      shown: matches(question),
    }));
    return { ...section, items, shown: items.some((item) => item.shown) };
  });
  const found = sections.reduce(
    (total, section) => total + section.items.filter((item) => item.shown).length,
    0,
  );
  const status =
    terms.length === 0
      ? ""
      : found === 0
        ? copy.noResult
        : (found === 1 ? copy.resultOne : copy.resultMany).replace("{n}", String(found));

  // Un lien vers /faq#hds ouvre la réponse, pas seulement la ligne.
  useEffect(() => {
    const openTarget = () => {
      const target = document.getElementById(window.location.hash.slice(1));
      if (target instanceof HTMLDetailsElement) {
        target.open = true;
        target.scrollIntoView();
      }
    };
    openTarget();
    window.addEventListener("hashchange", openTarget);
    return () => window.removeEventListener("hashchange", openTarget);
  }, []);

  return (
    <>
      {/* La recherche passe avant les thèmes : sur téléphone, elle reste en tête.
          Sur ordinateur, elle s'aligne sur la colonne des réponses (220 + 64 px). */}
      <div className="max-w-3xl lg:ml-[284px]">
        <label htmlFor="faq-search" className="sr-only">
          {copy.searchLabel}
        </label>
        <input
          id="faq-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={copy.searchPlaceholder}
          autoComplete="off"
          className="h-12 w-full rounded-lg border border-outline bg-surface px-4 text-[16px] text-on-surface-strong placeholder:text-on-surface-variant focus:border-primary"
        />
        <p aria-live="polite" className="mt-2 min-h-6 text-[14px] text-on-surface-variant">
          {status}
        </p>
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
        <nav aria-label={copy.categoriesLabel} className="lg:sticky lg:top-8 lg:self-start">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-secondary">
            {copy.categoriesLabel}
          </p>
          <ul className="mt-3 flex flex-wrap gap-2 lg:flex-col lg:gap-0">
            {sections.map((section) => (
              <li key={section.id} hidden={!section.shown}>
                <a
                  href={`#section-${section.id}`}
                  className="flex min-h-11 items-center rounded-lg border border-outline px-3 text-[15px] text-on-surface transition-colors hover:bg-primary-container lg:border-0"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="min-w-0 max-w-3xl [&>section:first-child]:pt-0">
          {sections.map((section) => (
            <section
              key={section.id}
              id={`section-${section.id}`}
              hidden={!section.shown}
              className="scroll-mt-6 pt-8"
            >
              <h2 className="text-[24px] font-medium leading-tight text-on-surface-strong">
                {section.title}
              </h2>
              <div className="mt-4 border-t border-outline">
                {section.items.map(({ question, shown }) => (
                  <details
                    key={question.id}
                    id={question.id}
                    hidden={!shown}
                    className="group scroll-mt-6 border-b border-outline"
                  >
                    <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 [&::-webkit-details-marker]:hidden">
                      <h3 className="text-[17px] font-medium text-on-surface-strong">
                        {question.question}
                      </h3>
                      <span
                        aria-hidden="true"
                        className="shrink-0 text-[22px] font-light leading-none text-secondary transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <div className="space-y-3 pb-5 pr-8 text-[16px] font-light leading-relaxed text-on-surface">
                      {question.answer.map((line, lineIndex) => (
                        <p key={lineIndex}>
                          {line.map((segment, segmentIndex) => (
                            <SegmentText key={segmentIndex} segment={segment} />
                          ))}
                        </p>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
