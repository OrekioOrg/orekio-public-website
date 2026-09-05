import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — Orekio",
  description:
    "Orekio est un carnet de bord numérique qui accompagne la relation entre un praticien et son patient, entre les consultations.",
};

export default function AProposPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-secondary">
        À propos
      </p>
      <h1 className="mt-4 text-[32px] font-medium text-on-surface-strong">
        Ce qu&apos;Orekio est, et ce qu&apos;il n&apos;est pas
      </h1>

      <div className="mt-8 space-y-6 text-[16px] leading-relaxed text-on-surface">
        <p>
          Orekio accompagne la relation entre un thérapeute (infirmier en
          pratique avancée, psychiatre, psychologue&hellip;) et son patient,
          dans l&apos;intervalle entre deux consultations. Le praticien invite
          son patient par email, puis débloque progressivement des outils au
          fil du suivi : agenda du sommeil, échelles cliniques, plan de
          sécurité, et une trentaine d&apos;autres modules.
        </p>
        <p>
          Le patient les utilise depuis son téléphone. Ce qu&apos;il saisit
          reste disponible pour la prochaine séance : Orekio ne fait que
          restituer les données, jamais les interpréter.
        </p>

        <div className="rounded-lg border border-outline bg-surface-container-low p-6">
          <h2 className="text-[16px] font-medium text-on-surface-strong">
            Un carnet de bord, pas un dispositif médical
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-on-surface-variant">
            Orekio a le statut de carnet de bord numérique, hors du champ du
            règlement (UE) 2017/745 relatif aux dispositifs médicaux. Aucune
            donnée saisie n&apos;est interprétée par l&apos;application : pas
            d&apos;alerte automatique, pas de label clinique, pas de
            comparaison à une norme. Ce qui s&apos;affiche est toujours un
            chiffre brut ou un historique neutre, à charge du praticien d&apos;en
            faire la lecture clinique.
          </p>
        </div>

        <p>
          Les données de santé saisies dans Orekio relèvent de l&apos;article
          9 du RGPD. Elles sont traitées avec le consentement explicite du
          patient, et un hébergement agréé données de santé (HDS) est prévu
          avant toute commercialisation à grande échelle.
        </p>
      </div>
    </div>
  );
}
