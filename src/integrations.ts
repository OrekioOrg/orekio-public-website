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
} | null = {
  provider: "Umami Cloud",
  hosting: {
    fr: "Les serveurs d'Umami Cloud se trouvent dans l'Union européenne et aux États-Unis.",
    en: "Umami Cloud servers are located in the European Union and the United States.",
  },
  script: {
    src: "https://cloud.umami.is/script.js",
    "data-website-id": "336b77db-4764-404a-a54e-2ba4f75d5ab9",
    // Le site publié seul : ni les postes de développement, ni les copies.
    "data-domains": "orekio.fr,www.orekio.fr",
  },
};

/**
 * La demande de démonstration : la route de l'API de l'application qui l'envoie par
 * e-mail à l'équipe (OrekioOrg/Orekio, `modules/support/demo.ts`), et l'adresse à
 * qui écrire quand le formulaire échoue.
 */
export const DEMO_FORM = {
  endpoint: "https://orekio-api.onrender.com/v1/support/demo",
  email: "contact@orekio.fr",
} as const;

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
