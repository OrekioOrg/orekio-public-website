import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { basePath } from "@/base-path";
import { locales, hasLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { LanguageSwitcher } from "@/components/language-switcher";
import { SetHtmlLang } from "@/components/set-html-lang";

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
    title: {
      default: dict.meta.title,
      template: `%s — Orekio`,
    },
    description: dict.meta.description,
  };
}

export default async function LangLayout({
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
    { href: `/${lang}/contact`, label: dict.nav.contact },
  ];

  const legalLinks = [
    { href: `/${lang}/mentions-legales`, label: dict.footer.legalNotice },
    { href: `/${lang}/confidentialite`, label: dict.footer.privacy },
    { href: `/${lang}/cgu`, label: dict.footer.terms },
  ];

  return (
    <>
      <SetHtmlLang lang={lang} />
      <header className="bg-ink text-on-ink">
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
              className="rounded-lg bg-accent px-4 py-2 text-[15px] font-medium text-ink transition-opacity hover:opacity-90"
            >
              {dict.nav.subscribe}
            </Link>
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
    </>
  );
}
