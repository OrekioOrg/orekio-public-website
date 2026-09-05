import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang).about;
  return { title: dict.pageTitle, description: dict.metaDescription };
}

export default async function AProposPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang).about;

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-secondary">
        {dict.eyebrow}
      </p>
      <h1 className="mt-4 text-[32px] font-medium text-on-surface-strong">
        {dict.heading}
      </h1>

      <div className="mt-8 space-y-6 text-[16px] leading-relaxed text-on-surface">
        <p>{dict.paragraph1}</p>
        <p>{dict.paragraph2}</p>

        <div className="rounded-lg border border-outline bg-surface-container-low p-6">
          <h2 className="text-[16px] font-medium text-on-surface-strong">
            {dict.boxTitle}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-on-surface-variant">
            {dict.boxText}
          </p>
        </div>

        <p>{dict.paragraph3}</p>
      </div>
    </div>
  );
}
