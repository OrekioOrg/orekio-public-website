import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import { locales, type Locale } from "@/i18n/config";

// Server-only: articles are Markdown files read from disk at build time
// (output: "export" prerenders everything, so nothing hits the filesystem
// at runtime). One file per locale: src/content/blog/<slug>.<lang>.md
const BLOG_DIR = join(process.cwd(), "src/content/blog");

const IS_PROD = process.env.NODE_ENV === "production";

marked.setOptions({ gfm: true, breaks: false });

export interface ArticleFrontmatter {
  title: string;
  description: string;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  /** ISO date of the last meaningful edit, if any. */
  updated?: string;
  author?: string;
  tags?: string[];
  /** Absolute-from-root path to a 1200×630 cover, e.g. /blog/foo.png. */
  cover?: string;
  /** Hidden from listings and sitemap; still reachable by direct URL in dev. */
  draft?: boolean;
}

export interface Article extends ArticleFrontmatter {
  slug: string;
  lang: Locale;
  /** Rendered HTML body. */
  html: string;
  /** Plain-text reading time in minutes (rounded up, min 1). */
  readingMinutes: number;
}

interface ParsedFile {
  slug: string;
  lang: Locale;
  data: ArticleFrontmatter;
  content: string;
}

function parseFilename(file: string): { slug: string; lang: Locale } | null {
  const match = /^(.+)\.([a-z]{2})\.md$/.exec(file);
  if (!match) return null;
  const [, slug, lang] = match;
  if (!(locales as readonly string[]).includes(lang)) return null;
  return { slug, lang: lang as Locale };
}

function readAll(): ParsedFile[] {
  let files: string[];
  try {
    files = readdirSync(BLOG_DIR);
  } catch {
    return [];
  }
  const parsed: ParsedFile[] = [];
  for (const file of files) {
    const meta = parseFilename(file);
    if (!meta) continue;
    const raw = readFileSync(join(BLOG_DIR, file), "utf8");
    const { data, content } = matter(raw);
    parsed.push({
      ...meta,
      data: data as ArticleFrontmatter,
      content,
    });
  }
  return parsed;
}

function toArticle({ slug, lang, data, content }: ParsedFile): Article {
  const words = content.split(/\s+/).filter(Boolean).length;
  return {
    ...data,
    slug,
    lang,
    html: marked.parse(content, { async: false }) as string,
    readingMinutes: Math.max(1, Math.round(words / 200)),
  };
}

function isVisible(a: ParsedFile): boolean {
  return !IS_PROD || !a.data.draft;
}

/** All articles for a locale, newest first, drafts hidden in production. */
export function getArticles(lang: Locale): Article[] {
  return readAll()
    .filter((a) => a.lang === lang && isVisible(a))
    .map(toArticle)
    .sort((a, b) => b.date.localeCompare(a.date));
}

/** One article, or null if it doesn't exist / is a hidden draft. */
export function getArticle(lang: Locale, slug: string): Article | null {
  const file = readAll().find(
    (a) => a.lang === lang && a.slug === slug && isVisible(a),
  );
  return file ? toArticle(file) : null;
}

/** { lang, slug } pairs for generateStaticParams across every locale. */
export function getAllArticleParams(): { lang: Locale; slug: string }[] {
  return readAll()
    .filter(isVisible)
    .map(({ lang, slug }) => ({ lang, slug }));
}

/** Locales in which a given slug exists (for hreflang on an article). */
export function getArticleLocales(slug: string): Locale[] {
  return readAll()
    .filter((a) => a.slug === slug && isVisible(a))
    .map((a) => a.lang);
}
