import Link from "next/link";
import type { Locale } from "@/i18n/config";

interface CtaBannerProps {
  lang: Locale;
  title: string;
  description: string;
  buttonLabel: string;
  /**
   * `ink` : aplat vert profond (défaut). `light` : fond clair, pour une page
   * dont la section de rupture vert profond est déjà prise ailleurs (la charte
   * n'en admet qu'une par page, hors en-tête et pied de page).
   */
  tone?: "ink" | "light";
}

// Bandeau d'appel de fin de page, partage par l'accueil et Fonctionnalites :
// un seul rendu, pour qu'il reste identique des deux cotes.
export function CtaBanner({
  lang,
  title,
  description,
  buttonLabel,
  tone = "ink",
}: CtaBannerProps) {
  const light = tone === "light";
  return (
    <section className={light ? "bg-surface-container-low" : "bg-ink"}>
      <div className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h2
          className={`text-[26px] font-medium ${light ? "text-on-surface-strong" : "text-on-ink"}`}
        >
          {title}
        </h2>
        <p
          className={`mx-auto mt-4 max-w-xl text-[16px] leading-relaxed ${light ? "text-on-surface" : "text-on-ink/80"}`}
        >
          {description}
        </p>
        <Link
          href={`/${lang}/contact`}
          className={`mt-8 inline-block rounded-lg px-6 py-3 text-[15px] font-medium transition-opacity hover:opacity-90 ${
            light ? "bg-primary text-on-primary" : "bg-accent text-ink"
          }`}
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
