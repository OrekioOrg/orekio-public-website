import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/seo";
import { CtaBanner } from "@/components/cta-banner";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang).about;
  return pageMetadata({
    lang,
    suffix: "/a-propos",
    title: dict.pageTitle,
    description: dict.metaDescription,
  });
}

export default async function AProposPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  if (!hasLocale(rawLang)) notFound();
  const lang: Locale = rawLang;
  const fullDict = getDictionary(lang);
  const dict = fullDict.about;
  // Le bandeau reprend mot pour mot celui de l'accueil : memes cles.
  const cta = fullDict.home;

  return (
    <>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-secondary">
          {dict.eyebrow}
        </p>
        <h1 className="mt-4 text-[32px] font-medium text-on-surface-strong">
          {dict.heading}
        </h1>

        {/* L'origine, ce qu'Orekio fait, qui est derriere, l'encadre, les donnees. */}
        <div className="mt-8 space-y-6 text-[16px] leading-relaxed text-on-surface">
          <p>{dict.paragraph1}</p>
          <p>{dict.paragraph2}</p>
          <p>{dict.paragraph3}</p>

          <div className="rounded-lg border border-outline bg-surface-container-low p-6">
            <h2 className="text-[16px] font-medium text-on-surface-strong">
              {dict.boxTitle}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-on-surface-variant">
              {dict.boxText}
            </p>
          </div>

          <p>{dict.paragraph4}</p>
        </div>
      </div>

      <CtaBanner
        lang={lang}
        title={cta.ctaSectionTitle}
        description={cta.ctaSectionDescription}
        buttonLabel={cta.ctaSectionButton}
      />
    </>
  );
}
