import type { Metadata } from "next";
import { Outfit, IBM_Plex_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { basePath } from "@/base-path";
import { locales, hasLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import {
  BING_SITE_VERIFICATION,
  GOOGLE_SITE_VERIFICATION,
  SITE_NAME,
  SITE_URL,
} from "@/site";
import { LanguageSwitcher } from "@/components/language-switcher";
import { MobileMenu } from "@/components/mobile-menu";
import { JsonLd } from "@/components/json-ld";
import { organizationSchema, websiteSchema } from "@/structured-data";
import { pageMetadata } from "@/seo";
import "../globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

// This is the site's root layout: it renders <html>/<body> and, because it
// lives under the [lang] segment, it can set <html lang> to the real locale
// at build time (the "/" redirect stub has its own minimal root layout in
// app/(redirect)). Site-wide metadata defaults that every locale route
// inherits — metadataBase, OG image, Twitter card, robots, search-console
// verification — live in generateMetadata below; per-page canonical +
// hreflang + title come from each page's own generateMetadata (see src/seo.ts).

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    metadataBase: new URL(SITE_URL),
    ...pageMetadata({
      lang,
      suffix: "",
      title: dict.meta.title,
      description: dict.meta.description,
    }),
    // The locale home page keeps a title template for its child pages;
    // pageMetadata only sets a plain string title.
    title: {
      default: dict.meta.title,
      template: `%s — Orekio`,
    },
    applicationName: SITE_NAME,
    category: "health",
    keywords: [
      "Orekio",
      "carnet de bord numérique",
      "suivi thérapeutique",
      "agenda du sommeil",
      "échelles cliniques",
      "plan de sécurité",
      "PHQ-9",
      "GAD-7",
      "TCC",
      "psychiatre",
      "psychologue",
      "infirmier en pratique avancée",
    ],
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    formatDetection: { email: false, address: false, telephone: false },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    // Tokens live in src/site.ts. Emits <meta> tags only when a token is set.
    verification: {
      ...(GOOGLE_SITE_VERIFICATION ? { google: GOOGLE_SITE_VERIFICATION } : {}),
      ...(BING_SITE_VERIFICATION
        ? { other: { "msvalidate.01": BING_SITE_VERIFICATION } }
        : {}),
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  if (!hasLocale(rawLang)) notFound();
  const lang: Locale = rawLang;
  const dict = getDictionary(lang);

  const navLinks = [
    { href: `/${lang}/fonctionnalites`, label: dict.nav.features },
    { href: `/${lang}/tarifs`, label: dict.nav.pricing },
    { href: `/${lang}/a-propos`, label: dict.nav.about },
    { href: `/${lang}/blog`, label: dict.nav.blog },
    { href: `/${lang}/contact`, label: dict.nav.contact },
  ];

  const legalLinks = [
    { href: `/${lang}/mentions-legales`, label: dict.footer.legalNotice },
    { href: `/${lang}/confidentialite`, label: dict.footer.privacy },
    { href: `/${lang}/cgu`, label: dict.footer.terms },
    { href: `/${lang}/account-deletion`, label: dict.footer.accountDeletion },
  ];

  return (
    <html
      lang={lang}
      className={`${outfit.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={[organizationSchema(dict), websiteSchema(lang, dict)]} />
        <header className="relative bg-ink text-on-ink">
          <div className="mx-auto flex h-[58px] max-w-6xl items-center justify-between gap-6 px-6">
            <Link href={`/${lang}`} className="flex items-center gap-3">
              <Image
                src={`${basePath}/brand/orekio-symbole-nav.svg`}
                alt="Orekio"
                width={28}
                height={28}
              />
              <span className="text-[18px] font-normal">Orekio</span>
            </Link>
            <nav className="hidden gap-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[15px] text-on-ink/75 transition-colors hover:text-on-ink"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <LanguageSwitcher current={lang} />
              <Link
                href={`/${lang}/tarifs`}
                className="hidden rounded-lg bg-accent px-4 py-2 text-[15px] font-medium text-ink transition-opacity hover:opacity-90 md:inline-block"
              >
                {dict.nav.subscribe}
              </Link>
              <MobileMenu
                navLinks={navLinks}
                subscribeHref={`/${lang}/tarifs`}
                subscribeLabel={dict.nav.subscribe}
                openLabel={dict.nav.openMenu}
                closeLabel={dict.nav.closeMenu}
              />
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-outline bg-surface-container-low">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="flex flex-col gap-8 md:flex-row md:justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={`${basePath}/brand/orekio-symbole-mono-teal.svg`}
                  alt="Orekio"
                  width={24}
                  height={24}
                />
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-on-surface-variant">
                  {dict.footer.tagline}
                </span>
              </div>
              <nav className="flex flex-wrap gap-x-8 gap-y-3 text-[14px] text-on-surface-variant">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:text-on-surface-strong"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <p className="mt-8 max-w-3xl font-mono text-[11px] leading-relaxed text-on-surface-variant">
              {dict.footer.disclaimer}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] text-on-surface-variant">
              <span>© {new Date().getFullYear()} Orekio</span>
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="underline hover:text-on-surface-strong"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
