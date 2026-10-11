import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hasLocale, locales, type Locale } from "@/i18n/config";
import { basePath } from "@/base-path";
import { legacyRedirects, pathTo, routes, type RouteKey } from "@/site";
import * as about from "@/views/about";
import * as features from "@/views/features";
import * as legalNotice from "@/views/legal-notice";
import * as pricing from "@/views/pricing";
import * as privacy from "@/views/privacy";
import * as terms from "@/views/terms";

// Pages dont l'adresse change d'une langue a l'autre (/fr/tarifs, /en/pricing).
// Un dossier par slug ne peut pas se limiter a une locale ; ce segment
// dynamique genere exactement les couples { lang, page } de la table `routes`,
// plus les anciennes adresses anglaises, servies en redirection.
type View = {
  default: (props: { params: Promise<{ lang: string }> }) => Promise<React.ReactNode>;
  generateMetadata: (props: { params: Promise<{ lang: string }> }) => Promise<Metadata>;
};

const views: Partial<Record<RouteKey, View>> = {
  features,
  pricing,
  about,
  legalNotice,
  privacy,
  terms,
};

export const dynamicParams = false;

function slugOf(key: RouteKey, lang: Locale): string {
  return routes[key][lang].slice(1);
}

type Match = { view: View } | { redirectTo: string };

function resolve(lang: Locale, page: string): Match | null {
  for (const key of Object.keys(views) as RouteKey[]) {
    if (slugOf(key, lang) === page) return { view: views[key]! };
  }
  const target = legacyRedirects[lang]?.[page];
  return target ? { redirectTo: pathTo(lang, target) } : null;
}

export function generateStaticParams() {
  const params: { lang: Locale; page: string }[] = [];
  for (const lang of locales) {
    for (const key of Object.keys(views) as RouteKey[]) {
      params.push({ lang, page: slugOf(key, lang) });
    }
    for (const page of Object.keys(legacyRedirects[lang] ?? {})) {
      params.push({ lang, page });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; page: string }>;
}): Promise<Metadata> {
  const { lang, page } = await params;
  if (!hasLocale(lang)) return {};
  const match = resolve(lang, page);
  if (!match) return {};
  if ("redirectTo" in match) {
    // L'ancienne adresse ne s'indexe pas : toute son autorite va a la nouvelle.
    return {
      alternates: { canonical: match.redirectTo },
      robots: { index: false, follow: true },
    };
  }
  return match.view.generateMetadata({ params: Promise.resolve({ lang }) });
}

export default async function LocalizedPage({
  params,
}: {
  params: Promise<{ lang: string; page: string }>;
}) {
  const { lang, page } = await params;
  if (!hasLocale(lang)) notFound();
  const match = resolve(lang, page);
  if (!match) notFound();
  if ("redirectTo" in match) {
    // Meme mecanisme que les anciens articles du blog : rafraichissement
    // immediat, honore sans JavaScript, et un lien de repli.
    return (
      <>
        <meta httpEquiv="refresh" content={`0; url=${basePath}${match.redirectTo}`} />
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p>
            <Link href={match.redirectTo} className="text-[16px] font-medium text-primary hover:underline">
              {match.redirectTo}
            </Link>
          </p>
        </div>
      </>
    );
  }
  const View = match.view.default;
  return <View params={Promise.resolve({ lang })} />;
}
