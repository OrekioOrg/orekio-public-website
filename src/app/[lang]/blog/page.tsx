import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hasLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/seo";
import { getArticles } from "@/blog";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/structured-data";
import { absoluteUrl } from "@/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang).blog;
  return pageMetadata({
    lang,
    suffix: "/blog",
    title: dict.pageTitle,
    description: dict.metaDescription,
  });
}

function formatDate(iso: string, lang: Locale): string {
  return new Intl.DateTimeFormat(lang, { dateStyle: "long" }).format(
    new Date(iso),
  );
}

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  if (!hasLocale(rawLang)) notFound();
  const lang: Locale = rawLang;
  const dict = getDictionary(lang).blog;
  const articles = getArticles(lang);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Orekio", url: absoluteUrl(lang) },
          { name: dict.pageTitle, url: absoluteUrl(lang, "/blog") },
        ])}
      />
      <h1 className="text-[32px] font-medium text-on-surface-strong">
        {dict.pageTitle}
      </h1>

      {articles.length === 0 ? (
        <p className="mt-12 text-[15px] text-on-surface-variant">{dict.empty}</p>
      ) : (
        <ul className="mt-12 space-y-10">
          {articles.map((article) => (
            <li key={article.slug}>
              <article>
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-on-surface-variant">
                  <time dateTime={article.date}>
                    {formatDate(article.date, lang)}
                  </time>
                  {" · "}
                  {article.readingMinutes} {dict.readingTime}
                </p>
                <h2 className="mt-2 text-[20px] font-medium text-on-surface-strong">
                  <Link
                    href={`/${lang}/blog/${article.slug}`}
                    className="hover:text-primary"
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-on-surface-variant">
                  {article.description}
                </p>
                <Link
                  href={`/${lang}/blog/${article.slug}`}
                  className="mt-3 inline-block text-[14px] font-medium text-primary hover:underline"
                >
                  {dict.readMore}
                </Link>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
