// Les services branchés sur le site. Tant qu'un bloc vaut `null`, rien ne se charge,
// rien ne s'affiche, et la politique de confidentialité n'en parle pas.

import type { Locale } from "@/i18n/config";

/**
 * La mesure d'audience. Uniquement un outil sans cookie : c'est ce qu'annonce la
 * politique de confidentialité. `script` reprend les attributs de la balise donnée
 * par l'outil (src, data-domain ou data-website-id…).
 */
export const ANALYTICS: {
  provider: string;
  /** Où les statistiques sont hébergées, en une phrase par langue. */
  hosting: Record<Locale, string>;
  script: { src: string; [attribute: `data-${string}`]: string };
} | null = null;

/** La page de réservation d'une démonstration. Sans elle, la demande part par e-mail. */
export const DEMO_BOOKING: { provider: string; url: string } | null = null;

/**
 * La vidéo de l'accueil, par langue : une langue sans vidéo n'en montre pas.
 * Les chemins partent de public/. `duration` au format ISO 8601, `captions` un
 * fichier .vtt (inutile quand les sous-titres sont dans l'image).
 */
export const HOME_VIDEO: Partial<
  Record<
    Locale,
    {
      src: string;
      poster: string;
      uploadDate: string;
      duration: string;
      captions?: string;
    }
  >
> = {
  // Sous-titres français incrustés.
  fr: {
    src: "/video/orekio-presentation.mp4",
    poster: "/video/orekio-presentation.jpg",
    uploadDate: "2026-11-26",
    duration: "PT1M2S",
  },
};
