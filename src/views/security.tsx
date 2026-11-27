import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/cta-banner";
import { SegmentText } from "@/components/segment-text";
import { hasLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/seo";
import { demoHref, routes } from "@/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang).security;
  return pageMetadata({
    lang,
    suffix: routes.security,
    title: dict.pageTitle,
    description: dict.metaDescription,
  });
}

const H2 = "text-[28px] font-medium leading-tight text-on-surface-strong md:text-[32px]";
const H3 = "text-[17px] font-medium text-on-surface-strong";
const TEXT = "mt-2 text-[15px] font-light leading-relaxed text-on-surface-variant";

function Items({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.title} className="border-t border-outline pt-5">
          <h3 className={H3}>{item.title}</h3>
          <p className={TEXT}>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default async function SecurityPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  if (!hasLocale(rawLang)) notFound();
  const lang: Locale = rawLang;
  const fullDict = getDictionary(lang);
  const dict = fullDict.security;
  // Le bandeau reprend mot pour mot celui de l'accueil : memes cles.
  const cta = fullDict.home;

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-16 md:pb-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-secondary">
          {dict.eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-[32px] font-medium leading-tight text-on-surface-strong md:text-[40px]">
          {dict.heading}
        </h1>
        <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-on-surface">
          {dict.intro}
        </p>
        <h2 className={`mt-16 ${H2}`}>{dict.access.title}</h2>
        <Items items={dict.access.items} />
      </section>

      <section className="bg-surface-container-low">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className={H2}>{dict.protection.title}</h2>
          <Items items={dict.protection.items} />
        </div>
      </section>

      {/* Ce qui est vrai aujourd'hui, à côté de ce qui se prépare : jamais l'un
          pour l'autre. */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className={H2}>{dict.hosting.title}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[dict.hosting.today, dict.hosting.next].map((block) => (
            <div key={block.label} className="rounded-lg border border-outline p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-secondary">
                {block.label}
              </p>
              <p className="mt-3 text-[16px] font-light leading-relaxed text-on-surface">
                {block.text}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-[15px] font-light leading-relaxed text-on-surface-variant">
          {dict.hosting.providers.map((segment, index) => (
            <SegmentText key={index} segment={segment} />
          ))}
        </p>
      </section>

      <section className="bg-surface-container-low">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className={H2}>{dict.retention.title}</h2>
          <dl className="mt-10 border-t border-outline">
            {dict.retention.rows.map((row) => (
              <div
                key={row.data}
                className="grid gap-2 border-b border-outline py-5 md:grid-cols-12 md:gap-8"
              >
                <dt className={`${H3} md:col-span-4`}>{row.data}</dt>
                <dd className="text-[15px] font-light leading-relaxed text-on-surface-variant md:col-span-8">
                  {row.duration}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 max-w-3xl text-[15px] leading-relaxed text-on-surface">
            {dict.rights.map((segment, index) => (
              <SegmentText key={index} segment={segment} />
            ))}
          </p>
          <p className="mt-4">
            <Link
              href={`/${lang}/faq#section-data`}
              className="text-[15px] font-medium text-secondary underline"
            >
              {dict.faqLink}
            </Link>
          </p>
        </div>
      </section>

      <CtaBanner
        title={cta.ctaSectionTitle}
        description={cta.ctaSectionDescription}
        buttonLabel={cta.ctaSectionButton}
        demo={{ href: demoHref(lang), label: cta.ctaDemo }}
      />
    </>
  );
}
