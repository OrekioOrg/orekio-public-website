import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/cta-banner";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { SegmentText } from "@/components/segment-text";
import { hasLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/seo";
import { absoluteUrl, demoHref, routes } from "@/site";
import { faqPageSchema } from "@/structured-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang).faqPage;
  return pageMetadata({
    lang,
    suffix: routes.faq,
    title: dict.pageTitle,
    description: dict.metaDescription,
  });
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  if (!hasLocale(rawLang)) notFound();
  const lang: Locale = rawLang;
  const fullDict = getDictionary(lang);
  const dict = fullDict.faqPage;
  // Le bandeau reprend mot pour mot celui de l'accueil : memes cles.
  const cta = fullDict.home;

  return (
    <>
      <JsonLd data={faqPageSchema(lang, absoluteUrl(lang, routes.faq[lang]), dict)} />
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-secondary">
          {dict.eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-[32px] font-medium leading-tight text-on-surface-strong md:text-[40px]">
          {dict.heading}
        </h1>
        <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-on-surface">
          {dict.intro}
        </p>

        <div className="mt-12">
          <FaqList copy={dict} />
        </div>

        <div className="mt-16 rounded-lg border border-outline bg-surface-container-low p-6">
          <h2 className="text-[18px] font-medium text-on-surface-strong">
            {dict.contact.title}
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-on-surface-variant">
            {dict.contact.text.map((segment, index) => (
              <SegmentText key={index} segment={segment} />
            ))}
          </p>
        </div>
      </div>

      <CtaBanner
        title={cta.ctaSectionTitle}
        description={cta.ctaSectionDescription}
        buttonLabel={cta.ctaSectionButton}
        demo={{ href: demoHref(lang), label: cta.ctaDemo }}
      />
    </>
  );
}
