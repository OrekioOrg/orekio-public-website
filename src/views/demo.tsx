import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { DEMO_BOOKING } from "@/integrations";
import { pageMetadata } from "@/seo";
import { routes } from "@/site";

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

const BUTTON =
  "mt-6 inline-block rounded-lg bg-primary px-6 py-3 text-[15px] font-medium text-on-primary transition-opacity hover:opacity-90";

export default async function DemoPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { demo: dict, contact } = getDictionary(lang);
  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(dict.mailSubject)}&body=${encodeURIComponent(dict.mailBody)}`;

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

      {/* Avec un outil de réservation, on choisit un créneau ; sinon, un e-mail
          déjà rempli. */}
      <div className="mt-10 rounded-lg border border-outline bg-surface-container-low p-6">
        <p className="text-[16px] leading-relaxed text-on-surface">
          {DEMO_BOOKING ? dict.bookText : dict.emailText}
        </p>
        {DEMO_BOOKING ? (
          <a href={DEMO_BOOKING.url} className={BUTTON}>
            {dict.bookButton}
          </a>
        ) : (
          <a href={mailto} className={BUTTON}>
            {dict.emailButton}
          </a>
        )}
        <p className="mt-4 text-[14px] leading-relaxed text-on-surface-variant">
          {dict.warning}
        </p>
      </div>
    </div>
  );
}
