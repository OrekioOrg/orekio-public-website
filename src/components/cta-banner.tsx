import Link from "next/link";
import type { Locale } from "@/i18n/config";

interface CtaBannerProps {
  lang: Locale;
  title: string;
  description: string;
  buttonLabel: string;
}

// Bandeau d'appel de fin de page, partage par l'accueil et Fonctionnalites :
// un seul rendu, pour qu'il reste identique des deux cotes.
export function CtaBanner({ lang, title, description, buttonLabel }: CtaBannerProps) {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h2 className="text-[26px] font-medium text-on-ink">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-on-ink/80">
          {description}
        </p>
        <Link
          href={`/${lang}/contact`}
          className="mt-8 inline-block rounded-lg bg-accent px-6 py-3 text-[15px] font-medium text-ink transition-opacity hover:opacity-90"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
