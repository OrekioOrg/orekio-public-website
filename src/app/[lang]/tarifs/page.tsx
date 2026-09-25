import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SegmentText } from "@/components/segment-text";
import { pageMetadata } from "@/seo";

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
    suffix: "/tarifs",
    title: dict.pageTitle,
    description: dict.metaDescription,
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
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-secondary">
        {dict.eyebrow}
      </p>
      <h1 className="mt-4 text-[32px] font-medium text-on-surface-strong">
        {dict.heading}
      </h1>
      <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-on-surface">
        {dict.description}
      </p>

      {/* Les trois cartes partagent les mêmes rangées (grille parente + subgrid) :
          nom, prix, description, liste et bouton tombent à la même hauteur d'une
          carte à l'autre, quelle que soit la longueur des textes. */}
      <div className="mt-12 grid gap-6 md:grid-cols-3 md:grid-rows-[auto_auto_auto_1fr_auto] md:gap-y-0">
        {dict.plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col rounded-lg border p-8 md:row-span-5 md:grid md:grid-rows-subgrid ${
              plan.highlighted
                ? "border-primary bg-primary-container"
                : "border-outline bg-surface"
            }`}
          >
            <h2 className="flex flex-wrap items-center gap-3 text-[18px] font-medium text-on-surface-strong">
              {plan.name}
              {plan.highlighted ? (
                <span className="rounded-full bg-primary px-2.5 py-0.5 font-mono text-[11px] font-normal uppercase tracking-[0.06em] text-on-primary">
                  {dict.highlightLabel}
                </span>
              ) : null}
            </h2>
            {/* Prix et période sur deux lignes : les prix s'alignent entre cartes. */}
            <p className="mt-4">
              <span className="block text-[32px] font-medium leading-tight text-on-surface-strong">
                {plan.price}
              </span>
              <span className="mt-1 block text-[14px] text-on-surface-variant">
                {plan.period}
              </span>
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-on-surface-variant">
              {plan.description}
            </p>
            <div className="mt-6 flex flex-1 flex-col">
            <ul className="flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-[15px] text-on-surface"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  {feature}
                </li>
              ))}
            </ul>
            {/* Fin d'essai : ce qui arrive aux donnees si l'on ne souscrit pas.
                Portee par la seule carte Essai, sous ses points, au-dessus du bouton. */}
            {plan.note ? (
              <p className="mt-4 text-[15px] leading-relaxed text-on-surface-variant">
                {plan.note}
              </p>
            ) : null}
            </div>
            <Link
              href={`/${lang}/contact`}
              title={dict.subscribeButtonTitle}
              className="mt-8 rounded-lg bg-primary px-6 py-3 text-center text-[15px] font-medium text-on-primary transition-opacity hover:opacity-90"
            >
              {dict.subscribeButton}
            </Link>
          </div>
        ))}
      </div>

    </div>

    {/* Un seul produit : tout ce qui est commun aux trois cartes vit ici, une fois,
        sur le fond teinté qui rythme la page. Une ligne separee par des points
        medians sur grand ecran, une liste sur mobile. */}
    <section className="bg-surface-container-low">
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

      <p className="mt-10 max-w-2xl text-[14px] leading-relaxed text-on-surface-variant">
        {dict.footerNote.map((segment, index) => (
          <SegmentText key={index} segment={segment} />
        ))}
      </p>
    </div>
    </section>
    </>
  );
}
