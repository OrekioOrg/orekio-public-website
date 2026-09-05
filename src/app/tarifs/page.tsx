import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tarifs — Orekio",
  description:
    "Choisissez l'offre Orekio adaptée à votre pratique : praticien seul ou cabinet.",
};

const PLANS = [
  {
    name: "Découverte",
    price: "Gratuit",
    period: "pendant 30 jours",
    description: "Pour tester Orekio avec quelques patients avant de s'engager.",
    features: [
      "Jusqu'à 5 patients",
      "Tous les modules thérapeutiques",
      "Application mobile patient incluse",
    ],
    highlighted: false,
  },
  {
    name: "Praticien",
    price: "39,99 €",
    period: "par mois",
    description: "Pour un praticien qui suit ses patients au long cours.",
    features: [
      "Patients illimités",
      "Tous les modules thérapeutiques",
      "Historique complet et export",
      "Support par email",
    ],
    highlighted: true,
  },
  {
    name: "Cabinet",
    price: "Sur devis",
    period: "plusieurs praticiens",
    description: "Pour un cabinet ou une structure avec plusieurs praticiens.",
    features: [
      "Tout Praticien, pour chaque membre",
      "Gestion des accès par l'administrateur",
      "Accompagnement au déploiement",
    ],
    highlighted: false,
  },
] as const;

export default function TarifsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-secondary">
        Tarifs
      </p>
      <h1 className="mt-4 text-[32px] font-medium text-on-surface-strong">
        Une offre par pratique
      </h1>
      <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-on-surface">
        Chaque offre donne accès à l&apos;ensemble des modules thérapeutiques.
        Ce qui change, c&apos;est le nombre de patients suivis et
        l&apos;accompagnement autour.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col rounded-lg border p-8 ${
              plan.highlighted
                ? "border-primary bg-primary-container"
                : "border-outline bg-surface"
            }`}
          >
            <h2 className="text-[18px] font-medium text-on-surface-strong">
              {plan.name}
            </h2>
            <p className="mt-4">
              <span className="text-[32px] font-medium text-on-surface-strong">
                {plan.price}
              </span>
              <span className="ml-2 text-[14px] text-on-surface-variant">
                {plan.period}
              </span>
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-on-surface-variant">
              {plan.description}
            </p>
            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-[15px] text-on-surface"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              type="button"
              disabled
              title="Le paiement en ligne arrive bientôt"
              className="mt-8 cursor-not-allowed rounded-lg bg-primary/40 px-6 py-3 text-[15px] font-medium text-on-primary"
            >
              S&apos;abonner (bientôt)
            </button>
          </div>
        ))}
      </div>

      <p className="mt-10 max-w-2xl text-[14px] leading-relaxed text-on-surface-variant">
        L&apos;abonnement en ligne n&apos;est pas encore ouvert : le paiement
        sécurisé arrive prochainement. En attendant,{" "}
        <Link href="/contact" className="text-secondary underline">
          contactez-nous
        </Link>{" "}
        pour être averti de l&apos;ouverture ou pour un accès anticipé.
      </p>
    </div>
  );
}
