import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hasLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/seo";
import {
  getArticle,
  getArticleLocales,
  getAllArticleParams,
} from "@/blog";
import { JsonLd } from "@/components/json-ld";
import { ShareButtons } from "@/components/share-buttons";
import { blogPostingSchema, breadcrumbSchema } from "@/structured-data";
import { absoluteUrl } from "@/site";

export function generateStaticParams() {
  return getAllArticleParams();
}

function formatDate(iso: string, lang: Locale): string {
  return new Intl.DateTimeFormat(lang, { dateStyle: "long" }).format(
    new Date(iso),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};
  const article = getArticle(lang, slug);
  if (!article) return {};
  return pageMetadata({
    lang,
    suffix: `/blog/${slug}`,
    title: article.title,
    description: article.description,
    image: article.cover,
    availableLocales: getArticleLocales(slug),
    article: {
      publishedTime: article.date,
      modifiedTime: article.updated,
      authors: article.author ? [article.author] : undefined,
      tags: article.tags,
    },
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: rawLang, slug } = await params;
  if (!hasLocale(rawLang)) notFound();
  const lang: Locale = rawLang;
  const article = getArticle(lang, slug);
  if (!article) notFound();

  const dict = getDictionary(lang).blog;
  const url = absoluteUrl(lang, `/blog/${slug}`);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <JsonLd
        data={[
          blogPostingSchema({
            url,
            headline: article.title,
            description: article.description,
            datePublished: article.date,
            dateModified: article.updated,
            authorName: article.author,
            image: article.cover,
            inLanguage: lang,
          }),
          breadcrumbSchema([
            { name: "Orekio", url: absoluteUrl(lang) },
            { name: dict.pageTitle, url: absoluteUrl(lang, "/blog") },
            { name: article.title, url },
          ]),
        ]}
      />

      <Link
        href={`/${lang}/blog`}
        className="font-mono text-[11px] uppercase tracking-[0.1em] text-secondary hover:text-primary"
      >
        ← {dict.backToList}
      </Link>

      <article className="mt-6">
        <header>
          <h1 className="text-[32px] font-medium leading-[1.2] text-on-surface-strong">
            {article.title}
          </h1>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.08em] text-on-surface-variant">
            <time dateTime={article.date}>
              {formatDate(article.date, lang)}
            </time>
            {" · "}
            {article.readingMinutes} {dict.readingTime}
            {article.author ? ` · ${dict.by} ${article.author}` : ""}
          </p>
          {article.updated ? (
            <p className="mt-1 font-mono text-[11px] text-on-surface-variant">
              {dict.updatedOn}{" "}
              <time dateTime={article.updated}>
                {formatDate(article.updated, lang)}
              </time>
            </p>
          ) : null}
          <div className="mt-6">
            <ShareButtons url={url} title={article.title} labels={dict} />
          </div>
        </header>

        <div
          className="prose mt-10"
          dangerouslySetInnerHTML={{ __html: article.html }}
        />
      </article>

      <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-outline pt-8">
        <Link
          href={`/${lang}/blog`}
          className="text-[14px] font-medium text-primary hover:underline"
        >
          ← {dict.allArticles}
        </Link>
        <ShareButtons url={url} title={article.title} labels={dict} />
      </div>
    </div>
  );
}
