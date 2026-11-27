import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { BlurredPrices } from "@/components/blurred-prices";
import { PlanCard } from "@/components/plan-card";
import { SegmentText } from "@/components/segment-text";
import { pageMetadata } from "@/seo";
import { PRICES_FINAL, routes } from "@/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang).pricing;
  return pageMetadata({
    lang,
    suffix: routes.pricing,
    title: dict.pageTitle,
    description: PRICES_FINAL
      ? dict.metaDescription
      : dict.metaDescriptionProvisional,
  });
}

export default async function TarifsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang).pricing;

  return (
    <>
    {/* Seul titre de la page : le h1 garde le style d'eyebrow. */}
    <div className="mx-auto max-w-6xl px-6 py-8">
      <h1 className="font-mono text-[11px] font-normal uppercase tracking-[0.1em] text-secondary">
        {dict.eyebrow}
      </h1>
    </div>

    {/* Le titre de chaque carte deborde au-dessus de sa bordure : pt-20 et gap-20
        lui laissent la place. Une colonne jusqu'au grand ecran, ou les prix
        tiennent enfin sur une ligne. */}
    <section className="bg-primary-container">
      <div className="mx-auto grid max-w-[460px] gap-20 px-6 pt-20 pb-14 lg:max-w-[880px] lg:grid-cols-2 lg:gap-8">
        {dict.plans.map((plan) => (
          <PlanCard
            key={plan.name}
            plan={plan}
            ctaLabel={dict.subscribeButton}
          />
        ))}
      </div>
    </section>

    {/* Un seul produit : tout ce qui est commun aux offres vit ici, une fois.
        Une ligne separee par des points medians sur grand ecran, une liste sur
        mobile. */}
    <section>
    <div className="mx-auto max-w-6xl px-6 py-14">
      <div>
        <h2 className="text-[16px] font-medium text-on-surface-strong">
          {dict.included.title}
        </h2>
        <ul className="mt-3 flex flex-col gap-y-1 text-[15px] text-on-surface-variant md:flex-row md:flex-wrap md:items-center">
          {dict.included.items.map((item, index) => (
            <li key={item} className="flex items-center">
              {item}
              {index < dict.included.items.length - 1 ? (
                <span aria-hidden="true" className="mx-3 hidden md:inline">
                  ·
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </div>

      <dl className="mt-10 max-w-3xl space-y-4 text-[15px] leading-relaxed text-on-surface-variant">
        {dict.details.map((detail) => (
          <div key={detail.label}>
            <dt className="inline font-medium text-on-surface-strong">
              {detail.label}.{" "}
            </dt>
            <dd className="inline">
              <BlurredPrices text={detail.text} />
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-10 max-w-2xl text-[14px] leading-relaxed text-on-surface-variant">
        {dict.footerNote.map((segment, index) => (
          typeof segment === "string" ? (
            <BlurredPrices key={index} text={segment} />
          ) : (
            <SegmentText key={index} segment={segment} />
          )
        ))}
      </p>
    </div>
    </section>
    </>
  );
}
