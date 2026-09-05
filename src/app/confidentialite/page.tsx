import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Orekio",
  description:
    "Comment Orekio collecte, utilise et protège les données personnelles et de santé de ses utilisateurs.",
};

export default function ConfidentialitePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-secondary">
        Confidentialité
      </p>
      <h1 className="mt-4 text-[32px] font-medium text-on-surface-strong">
        Politique de confidentialité
      </h1>

      <div className="mt-6 rounded-lg border border-outline bg-surface-container-low p-6">
        <p className="text-[15px] leading-relaxed text-on-surface-variant">
          Cette page est un brouillon de structure, à faire valider par un
          professionnel du droit avant toute ouverture publique du service.
          Orekio traite des données de santé (article 9 du RGPD), une
          catégorie particulière nécessitant des garanties renforcées.
        </p>
      </div>

      <div className="mt-10 space-y-8 text-[16px] leading-relaxed text-on-surface">
        <section>
          <h2 className="text-[18px] font-medium text-on-surface-strong">
            Responsable de traitement
          </h2>
          <p className="mt-3 text-on-surface-variant">
            [Raison sociale], en tant que responsable de traitement, met en
            œuvre les traitements de données décrits ci-dessous. Pour toute
            question, contactez&nbsp;: [DPO ou contact RGPD] &mdash;{" "}
            <a
              href="mailto:contact@orekio.app"
              className="text-secondary underline"
            >
              contact@orekio.app
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-[18px] font-medium text-on-surface-strong">
            Données collectées
          </h2>
          <p className="mt-3 text-on-surface-variant">
            Données d&apos;identification du praticien et du patient
            (nom, email), données de suivi saisies par le patient (agenda du
            sommeil, réponses aux échelles cliniques, plan de sécurité,
            autres modules), et données techniques de connexion.
          </p>
        </section>

        <section>
          <h2 className="text-[18px] font-medium text-on-surface-strong">
            Finalités et base légale
          </h2>
          <p className="mt-3 text-on-surface-variant">
            Les données de suivi sont traitées sur la base du consentement
            explicite du patient (article 9.2.a du RGPD), pour la seule
            finalité de faciliter le suivi thérapeutique entre le patient et
            son praticien. Orekio n&apos;interprète, ni n&apos;analyse
            cliniquement ces données&nbsp;: elles sont restituées brutes au
            praticien.
          </p>
        </section>

        <section>
          <h2 className="text-[18px] font-medium text-on-surface-strong">
            Durée de conservation
          </h2>
          <p className="mt-3 text-on-surface-variant">
            [À définir&nbsp;: durée de conservation des données pendant le
            suivi actif et après clôture du compte, conformément aux
            recommandations de la CNIL et, le cas échéant, aux obligations
            de conservation des données de santé.]
          </p>
        </section>

        <section>
          <h2 className="text-[18px] font-medium text-on-surface-strong">
            Hébergement
          </h2>
          <p className="mt-3 text-on-surface-variant">
            Les données de santé sont destinées à être hébergées chez un
            hébergeur certifié Hébergeur de Données de Santé (HDS), au sens
            de l&apos;article L.1111-8 du Code de la santé publique.
          </p>
        </section>

        <section>
          <h2 className="text-[18px] font-medium text-on-surface-strong">
            Vos droits
          </h2>
          <p className="mt-3 text-on-surface-variant">
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès,
            de rectification, d&apos;effacement, de limitation, d&apos;opposition
            et de portabilité sur vos données, ainsi que du droit de retirer
            votre consentement à tout moment. Pour exercer ces droits,
            contactez{" "}
            <a
              href="mailto:contact@orekio.app"
              className="text-secondary underline"
            >
              contact@orekio.app
            </a>
            . Vous pouvez également introduire une réclamation auprès de la
            CNIL (
            <a
              href="https://www.cnil.fr"
              className="text-secondary underline"
            >
              www.cnil.fr
            </a>
            ).
          </p>
        </section>
      </div>
    </div>
  );
}
