import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { pageMetadata } from "@/seo";

// Public account-deletion page. Google Play's Data Safety declaration requires a
// public URL (reachable without signing in) describing how a user deletes their
// account and what happens to their data. The deletion itself happens in the
// Orekio mobile app or by email; this page only documents it.
//
// The slug is English for both locales (the URL is submitted to Google Play),
// unlike the other routes whose slugs are French by design.

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang).accountDeletion;
  return pageMetadata({
    lang,
    suffix: "/account-deletion",
    title: dict.pageTitle,
    description: dict.metaDescription,
  });
}

export default async function AccountDeletionPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <LegalPage dict={getDictionary(lang).accountDeletion} />;
}
