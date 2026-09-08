import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { pageMetadata } from "@/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang).mentionsLegales;
  return pageMetadata({
    lang,
    suffix: "/mentions-legales",
    title: dict.pageTitle,
    description: dict.metaDescription,
    // Placeholder draft (bracketed content); flip to indexable once finalised.
    index: false,
  });
}

export default async function MentionsLegalesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <LegalPage dict={getDictionary(lang).mentionsLegales} />;
}
