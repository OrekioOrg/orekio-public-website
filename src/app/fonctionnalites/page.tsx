import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fonctionnalités — Orekio",
  description:
    "Plus de 30 modules thérapeutiques : agenda du sommeil, échelles cliniques validées, plan de sécurité, roue des émotions, et plus.",
};

const CATEGORIES = [
  {
    title: "Suivi au quotidien",
    modules: [
      "Agenda du sommeil",
      "Suivi de l'humeur",
      "Journal des envies (craving)",
      "Suivi de chronobiologie",
      "Observance médicamenteuse",
    ],
  },
  {
    title: "Échelles cliniques validées",
    modules: [
      "PHQ-9 (dépression)",
      "GAD-7 (anxiété)",
      "EPDS (dépression post-natale)",
      "BSL-23",
      "RCADS",
      "ASRS",
      "SNAP-IV",
    ],
  },
  {
    title: "Thérapies cognitivo-comportementales",
    modules: [
      "Colonnes de Beck",
      "Balance décisionnelle",
      "Activation comportementale",
      "Exposition graduée",
      "Distorsions cognitives",
    ],
  },
  {
    title: "Gestion de crise et régulation",
    modules: [
      "Plan de sécurité",
      "Roue des émotions",
      "Techniques de respiration",
      "Ancrage (grounding)",
      "Tolérance à la détresse",
    ],
  },
] as const;

export default function FonctionnalitesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-secondary">
        Fonctionnalités
      </p>
      <h1 className="mt-4 text-[32px] font-medium text-on-surface-strong">
        Plus de 30 modules thérapeutiques
      </h1>
      <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-on-surface">
        Le praticien débloque les outils au fil des consultations, à son
        rythme. Chaque module affiche des données brutes : Orekio ne les
        interprète jamais, ne déclenche aucune alerte et ne pose aucun
        diagnostic.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="rounded-lg border border-outline bg-surface p-6"
          >
            <h2 className="text-[18px] font-medium text-on-surface-strong">
              {category.title}
            </h2>
            <ul className="mt-4 space-y-2">
              {category.modules.map((module) => (
                <li
                  key={module}
                  className="flex items-start gap-2 text-[15px] text-on-surface"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  {module}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
