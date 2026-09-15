import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang).features;
  return pageMetadata({
    lang,
    suffix: "/fonctionnalites",
    title: dict.pageTitle,
    description: dict.metaDescription,
  });
}

export default async function FonctionnalitesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang).features;

  return (
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

      {/* Cinq familles sur deux colonnes, la cinquieme centree (2 + 2 + 1),
          comme les cinq cartes de l'accueil. */}
      <div className="mt-12 flex flex-wrap justify-center gap-8">
        {dict.categories.map((category) => (
          <div
            key={category.title}
            className="w-full rounded-lg border border-outline bg-surface p-6 md:w-[calc(50%-1rem)]"
          >
            <h2 className="text-[18px] font-medium text-on-surface-strong">
              {category.title}
            </h2>
            <ul className="mt-4 space-y-2">
              {category.modules.map((module) => (
                <li
                  key={module}
                  className="flex items-start gap-2 text-[15px] text-on-surface"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  <span>
                    {module}
                    {/* Six modules ouverts a l'ouverture, revus de bout en bout ;
                        le reste est construit mais s'ouvre au fil des mois. */}
                    {dict.openAtLaunch.includes(module) ? (
                      <span className="ml-2 rounded-full bg-primary-container px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.05em] text-primary">
                        {dict.openBadge}
                      </span>
                    ) : null}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
