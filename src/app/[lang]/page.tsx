import Link from "next/link";
import Image from "next/image";
import { basePath } from "@/base-path";
import { hasLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { notFound } from "next/navigation";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  if (!hasLocale(rawLang)) notFound();
  const lang: Locale = rawLang;
  const dict = getDictionary(lang).home;

  return (
    <>
      <section className="bg-primary-container">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-secondary">
              {dict.eyebrow}
            </p>
            <h1 className="mt-4 text-[32px] font-medium leading-[1.15] text-on-primary-container md:text-[42px]">
              {dict.title}
            </h1>
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-on-surface">
              {dict.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={`/${lang}/tarifs`}
                className="rounded-lg bg-primary px-6 py-3 text-[15px] font-medium text-on-primary transition-opacity hover:opacity-90"
              >
                {dict.ctaSubscribe}
              </Link>
              <Link
                href={`/${lang}/fonctionnalites`}
                className="rounded-lg border border-outline px-6 py-3 text-[15px] font-medium text-on-surface-strong transition-colors hover:bg-surface"
              >
                {dict.ctaFeatures}
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src={`${basePath}/brand/orekio-symbole.svg`}
              alt=""
              width={200}
              height={200}
              className="h-40 w-40 md:h-56 md:w-56"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-[26px] font-medium text-on-surface-strong">
          {dict.section2Title}
        </h2>
        <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-on-surface">
          {dict.section2Description}
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {dict.highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-outline bg-surface p-6"
            >
              <h3 className="text-[16px] font-medium text-on-surface-strong">
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-on-surface-variant">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-[26px] font-medium text-on-ink">
            {dict.ctaSectionTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-on-ink/80">
            {dict.ctaSectionDescription}
          </p>
          <Link
            href={`/${lang}/tarifs`}
            className="mt-8 inline-block rounded-lg bg-accent px-6 py-3 text-[15px] font-medium text-ink transition-opacity hover:opacity-90"
          >
            {dict.ctaSectionButton}
          </Link>
        </div>
      </section>
    </>
  );
}
