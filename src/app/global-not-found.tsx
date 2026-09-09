import type { Metadata } from "next";
import Link from "next/link";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import "./globals.css";

// Global 404 for any URL that matches no route. Next bypasses the layouts
// when rendering this, so it must return the whole <html> document itself
// (see next.config.ts for why a layout + not-found.tsx can't cover it).
// Unmatched URLs have no locale, so this falls back to the default one —
// the same locale "/" redirects to.
const dict = getDictionary(defaultLocale).notFound;

export const metadata: Metadata = {
  title: dict.metaTitle,
};

export default function GlobalNotFound() {
  return (
    <html lang={defaultLocale} className="h-full antialiased">
      <body className="min-h-full">
        <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-6 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-secondary">
            404
          </p>
          <h1 className="mt-4 text-[28px] font-medium text-on-surface-strong">
            {dict.heading}
          </h1>
          <p className="mt-4 text-[16px] leading-relaxed text-on-surface">
            {dict.body}
          </p>
          <Link
            href={`/${defaultLocale}`}
            className="mt-8 inline-block rounded-lg bg-primary px-6 py-3 text-[15px] font-medium text-on-primary transition-opacity hover:opacity-90"
          >
            {dict.cta}
          </Link>
        </main>
      </body>
    </html>
  );
}
