import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DemoForm } from "@/components/demo-form";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/seo";
import { pathTo, routes } from "@/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang).demo;
  return pageMetadata({
    lang,
    suffix: routes.demo,
    title: dict.pageTitle,
    description: dict.metaDescription,
  });
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang).demo;

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-secondary">
        {dict.eyebrow}
      </p>
      <h1 className="mt-4 text-[32px] font-medium leading-tight text-on-surface-strong md:text-[40px]">
        {dict.heading}
      </h1>
      <p className="mt-4 text-[16px] leading-relaxed text-on-surface">
        {dict.intro}
      </p>

      <h2 className="mt-10 text-[18px] font-medium text-on-surface-strong">
        {dict.pointsTitle}
      </h2>
      <ul className="mt-3 border-t border-outline">
        {dict.points.map((point) => (
          <li
            key={point}
            className="border-b border-outline py-4 text-[16px] font-light leading-relaxed text-on-surface"
          >
            {point}
          </li>
        ))}
      </ul>

      <div className="relative mt-10 rounded-lg border border-outline bg-surface-container-low p-6">
        <DemoForm copy={dict.form} privacyHref={pathTo(lang, "privacy")} />
      </div>
    </div>
  );
}
