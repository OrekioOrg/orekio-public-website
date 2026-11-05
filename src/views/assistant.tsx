import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AssistantAnswer, AssistantChart, AssistantQuestion } from "@/components/assistant-answer";
import { AssistantDemo } from "@/components/assistant-demo";
import { CtaBanner } from "@/components/cta-banner";
import { Fragment } from "react";
import { hasLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import type { SectionCopy } from "@/i18n/dictionaries/assistant/types";
import { pageMetadata } from "@/seo";
import { pathTo, routes } from "@/site";

const TILE_WIDTH = {
  wide: "md:col-span-2",
  full: "md:col-span-2 lg:col-span-3",
} as const;

const PANEL_ON_INK = "rounded-2xl border border-on-ink/15 p-5";
const EYEBROW = "font-mono text-[11.5px] font-medium uppercase tracking-[0.1em]";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang).assistantPage;
  return pageMetadata({
    lang,
    suffix: routes.assistant,
    title: dict.pageTitle,
    description: dict.metaDescription,
  });
}

function SectionHead({ copy: { eyebrow, title, description }, dark = false }: { copy: SectionCopy; dark?: boolean }) {
  return (
    <div className="grid items-end gap-4 md:grid-cols-2 md:gap-8">
      <div>
        <p className={`${EYEBROW} ${dark ? "text-accent" : "text-secondary"}`}>{eyebrow}</p>
        <h2 className={`mt-3 text-[28px] font-medium leading-tight md:text-[36px] ${dark ? "text-on-ink" : "text-on-surface-strong"}`}>
          {title}
        </h2>
      </div>
      <p className={`max-w-xl text-[16px] font-light leading-relaxed ${dark ? "text-on-ink/80" : "text-on-surface"}`}>{description}</p>
    </div>
  );
}

export default async function AssistantPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  if (!hasLocale(rawLang)) notFound();
  const lang: Locale = rawLang;
  const fullDict = getDictionary(lang);
  const dict = fullDict.assistantPage;
  const cta = fullDict.home;

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 md:pb-24">
        <div>
          <p className={`${EYEBROW} text-secondary`}>{dict.eyebrow}</p>
          <h1 className="mt-4 text-[40px] font-medium leading-[1.08] tracking-[-0.02em] text-on-surface-strong md:text-[60px]">
            {dict.headingLine1}
            <br />
            <span className="text-primary">{dict.headingLine2}</span>
          </h1>
          <p className="mt-6 max-w-xl text-[18px] font-light leading-relaxed text-on-surface md:text-[20px]">
            {dict.lede} <strong className="font-normal text-on-surface-strong">{dict.ledeStrong}</strong>
          </p>
          <p className="mt-6 text-[13.5px] font-light text-on-surface-variant">{dict.scope}</p>
        </div>
        <AssistantDemo copy={dict.demo} />
      </section>

      <section className="bg-surface-container-low">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <SectionHead copy={dict.capabilities} />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {dict.capabilities.tiles.map((tile) => (
              <article
                key={tile.title}
                className={`flex min-w-0 flex-col gap-4 rounded-2xl border border-outline bg-surface p-5 ${tile.width ? TILE_WIDTH[tile.width] : ""}`}
              >
                <header>
                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-primary">{tile.tag}</p>
                  <h3 className="mt-2 text-[20px] font-medium leading-snug text-on-surface-strong">{tile.title}</h3>
                  <p className="mt-1.5 text-[14.5px] font-light leading-relaxed text-on-surface-variant">{tile.description}</p>
                </header>
                <div className="grid min-w-0 flex-1 gap-4 rounded-xl bg-surface-container-low p-4 text-[14px] leading-normal md:auto-cols-fr md:grid-flow-col">
                  {tile.examples.map((example) => (
                    <Fragment key={example.question}>
                      <div className="flex min-w-0 flex-col gap-2.5">
                        <AssistantQuestion question={example.question} patientChip={example.patient ? dict.demo.patientChip : undefined} />
                        <AssistantAnswer answer={example.answer} />
                      </div>
                      {example.chart ? <div className="min-w-0 self-center"><AssistantChart chart={dict.demo.chart} /></div> : null}
                    </Fragment>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHead copy={dict.actions} />
        <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {dict.actions.items.map((item) => (
            <li key={item.title} className="border-t border-outline pt-5">
              <h3 className="text-[17px] font-medium text-on-surface-strong">{item.title}</h3>
              <p className="mt-1.5 text-[15px] font-light leading-relaxed text-on-surface-variant">{item.description}</p>
            </li>
          ))}
        </ul>

        <div className="mt-24">
          <SectionHead copy={dict.information} />
          <ul className="mt-12 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {dict.information.items.map((item) => (
              <li key={item} className="rounded-xl border border-outline px-4 py-3 text-[14.5px] text-on-surface">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* La seule section de rupture de la page (charte, section 1). */}
      <section className="bg-ink text-on-ink">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <SectionHead dark copy={dict.privacy} />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <div className={PANEL_ON_INK}>
              <h3 className="text-[17px] font-medium">{dict.privacy.typedTitle}</h3>
              <p className="mt-3 font-mono text-[13px] leading-relaxed">
                {dict.privacy.question.map((part) =>
                  part.replacedBy ? (
                    <s key={part.text} className="text-on-ink/70 decoration-accent decoration-2">{part.text}</s>
                  ) : (
                    <span key={part.text}>{part.text}</span>
                  ),
                )}
              </p>
            </div>
            <div className={PANEL_ON_INK}>
              <h3 className="text-[17px] font-medium">{dict.privacy.sentTitle}</h3>
              <p className="mt-3 font-mono text-[13px] leading-relaxed">
                {dict.privacy.question.map((part) =>
                  part.replacedBy ? (
                    <span key={part.text} className="rounded bg-on-ink/10 px-1 text-accent">{part.replacedBy}</span>
                  ) : (
                    <span key={part.text}>{part.text}</span>
                  ),
                )}
              </p>
            </div>
            <div className={PANEL_ON_INK}>
              <h3 className="text-[17px] font-medium">{dict.privacy.returnedTitle}</h3>
              <p className="mt-3 text-[14.5px] font-light leading-relaxed text-on-ink/80">{dict.privacy.returned}</p>
            </div>
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div className={PANEL_ON_INK}>
              <h3 className={`${EYEBROW} text-accent`}>{dict.privacy.receivedTitle}</h3>
              <p className="mt-3 text-[14.5px] font-light leading-relaxed text-on-ink/80">{dict.privacy.received}</p>
            </div>
            <div className={PANEL_ON_INK}>
              <h3 className={`${EYEBROW} text-accent`}>{dict.privacy.neverTitle}</h3>
              <p className="mt-3 text-[14.5px] font-light leading-relaxed text-on-ink/80">{dict.privacy.never}</p>
            </div>
          </div>
          <div className="mt-8 border-t border-on-ink/15 pt-6">
            <h3 className="text-[17px] font-medium">{dict.privacy.limitTitle}</h3>
            <p className="mt-2 max-w-3xl text-[15px] font-light leading-relaxed text-on-ink/80">{dict.privacy.limit}</p>
            <p className="mt-4 text-[14px] font-light text-on-ink/80">
              {dict.privacy.provider}{" "}
              <Link href={pathTo(lang, "privacy")} className="text-accent underline-offset-2 hover:underline">
                {dict.privacy.privacyLink}
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHead copy={dict.goldenRule} />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {[
            { title: dict.goldenRule.doesTitle, items: dict.goldenRule.does, sign: "✓", tone: "text-primary" },
            { title: dict.goldenRule.refusesTitle, items: dict.goldenRule.refuses, sign: "×", tone: "text-on-surface-variant" },
          ].map((column) => (
            <div key={column.title} className="rounded-2xl border border-outline p-6">
              <h3 className="text-[20px] font-medium text-on-surface-strong">{column.title}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {column.items.map((item) => (
                  <li key={item} className="grid grid-cols-[20px_minmax(0,1fr)] gap-2.5 text-on-surface">
                    <span aria-hidden="true" className={column.tone}>{column.sign}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-5 flex max-w-xl flex-col gap-2.5 rounded-2xl border border-outline bg-surface-container-low p-4 text-[14px] leading-normal">
          <AssistantQuestion question={dict.goldenRule.example.question} patientChip={dict.demo.patientChip} />
          <AssistantAnswer answer={dict.goldenRule.example.answer} />
        </div>
      </section>

      <section className="bg-surface-container-low">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <SectionHead copy={dict.safeguards} />
          <ul className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {dict.safeguards.items.map((item) => (
              <li key={item.title} className="border-t border-outline pt-5">
                <h3 className="text-[16px] font-medium text-on-surface-strong">{item.title}</h3>
                <p className="mt-1.5 text-[14px] font-light leading-relaxed text-on-surface-variant">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        tone="light"
        title={cta.ctaSectionTitle}
        description={cta.ctaSectionDescription}
        buttonLabel={cta.ctaSectionButton}
      />
    </>
  );
}
