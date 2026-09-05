import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation — Orekio",
  description:
    "Conditions générales d'utilisation du service Orekio pour les praticiens et leurs patients.",
};

export default function CguPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-secondary">
        CGU
      </p>
      <h1 className="mt-4 text-[32px] font-medium text-on-surface-strong">
        Conditions générales d&apos;utilisation
      </h1>

      <div className="mt-6 rounded-lg border border-outline bg-surface-container-low p-6">
        <p className="text-[15px] leading-relaxed text-on-surface-variant">
          Cette page est un brouillon de structure, à faire rédiger et
          valider par un professionnel du droit avant l&apos;ouverture du
          service au public &mdash; en particulier les sections
          responsabilité et résiliation, compte tenu du caractère sensible
          des données traitées.
        </p>
      </div>

      <div className="mt-10 space-y-8 text-[16px] leading-relaxed text-on-surface">
        <section>
          <h2 className="text-[18px] font-medium text-on-surface-strong">
            1. Objet
          </h2>
          <p className="mt-3 text-on-surface-variant">
            Les présentes conditions générales d&apos;utilisation (CGU)
            définissent les modalités d&apos;accès et d&apos;utilisation du
            service Orekio, carnet de bord numérique destiné à faciliter le
            suivi thérapeutique entre un praticien et son patient. Orekio
            n&apos;est pas un dispositif médical au sens du règlement (UE)
            2017/745 (voir la page{" "}
            <a href="/a-propos" className="text-secondary underline">
              À propos
            </a>
            ).
          </p>
        </section>

        <section>
          <h2 className="text-[18px] font-medium text-on-surface-strong">
            2. Accès au service
          </h2>
          <p className="mt-3 text-on-surface-variant">
            L&apos;accès au service se fait sur invitation du praticien pour
            le patient, ou sur abonnement pour le praticien (voir la page{" "}
            <a href="/tarifs" className="text-secondary underline">
              Tarifs
            </a>
            ). [À compléter&nbsp;: conditions d&apos;éligibilité, création de
            compte, vérification de la qualité de professionnel de santé le
            cas échéant.]
          </p>
        </section>

        <section>
          <h2 className="text-[18px] font-medium text-on-surface-strong">
            3. Obligations des utilisateurs
          </h2>
          <p className="mt-3 text-on-surface-variant">
            Le praticien s&apos;engage à n&apos;utiliser Orekio que dans le
            cadre d&apos;un suivi thérapeutique réel et avec le consentement
            de son patient. Le patient s&apos;engage à fournir des
            informations sincères. [À compléter&nbsp;: usage loyal du
            service, sécurité des identifiants, interdiction de
            détournement.]
          </p>
        </section>

        <section>
          <h2 className="text-[18px] font-medium text-on-surface-strong">
            4. Propriété intellectuelle
          </h2>
          <p className="mt-3 text-on-surface-variant">
            Le service, sa marque et ses contenus restent la propriété
            exclusive de [Raison sociale]. Les données saisies par les
            utilisateurs (agenda du sommeil, réponses aux échelles,
            etc.) restent leur propriété.
          </p>
        </section>

        <section>
          <h2 className="text-[18px] font-medium text-on-surface-strong">
            5. Responsabilité
          </h2>
          <p className="mt-3 text-on-surface-variant">
            Orekio restitue les données saisies sans les interpréter et ne
            se substitue à aucun avis médical. [À compléter&nbsp;: limites de
            responsabilité, disponibilité du service, cas de force majeure.]
          </p>
        </section>

        <section>
          <h2 className="text-[18px] font-medium text-on-surface-strong">
            6. Durée et résiliation
          </h2>
          <p className="mt-3 text-on-surface-variant">
            [À compléter&nbsp;: conditions de résiliation par l&apos;utilisateur
            et par l&apos;éditeur, sort des données après résiliation.]
          </p>
        </section>

        <section>
          <h2 className="text-[18px] font-medium text-on-surface-strong">
            7. Données personnelles
          </h2>
          <p className="mt-3 text-on-surface-variant">
            Le traitement des données personnelles est décrit dans notre{" "}
            <a href="/confidentialite" className="text-secondary underline">
              politique de confidentialité
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-[18px] font-medium text-on-surface-strong">
            8. Droit applicable
          </h2>
          <p className="mt-3 text-on-surface-variant">
            Les présentes CGU sont soumises au droit français. [À
            compléter&nbsp;: juridiction compétente en cas de litige.]
          </p>
        </section>
      </div>
    </div>
  );
}
