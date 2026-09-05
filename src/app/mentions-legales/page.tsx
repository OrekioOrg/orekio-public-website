import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Orekio",
  description: "Mentions légales du site Orekio.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-secondary">
        Mentions légales
      </p>
      <h1 className="mt-4 text-[32px] font-medium text-on-surface-strong">
        Mentions légales
      </h1>

      <div className="mt-6 rounded-lg border border-outline bg-surface-container-low p-6">
        <p className="text-[15px] leading-relaxed text-on-surface-variant">
          Cette page est un brouillon de structure. Les informations
          entre crochets doivent être complétées et validées avant
          l&apos;ouverture du site au public, conformément à la loi n&deg;
          2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie
          numérique (LCEN).
        </p>
      </div>

      <div className="mt-10 space-y-8 text-[16px] leading-relaxed text-on-surface">
        <section>
          <h2 className="text-[18px] font-medium text-on-surface-strong">
            Éditeur du site
          </h2>
          <p className="mt-3 text-on-surface-variant">
            [Raison sociale] &mdash; [forme juridique, ex&nbsp;: SAS, EI&hellip;]
            <br />
            [Adresse du siège social]
            <br />
            [Numéro SIRET]
            <br />
            Capital social&nbsp;: [montant]
            <br />
            Directeur de la publication&nbsp;: [nom, prénom]
            <br />
            Contact&nbsp;:{" "}
            <a
              href="mailto:contact@orekio.app"
              className="text-secondary underline"
            >
              contact@orekio.app
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-[18px] font-medium text-on-surface-strong">
            Hébergement
          </h2>
          <p className="mt-3 text-on-surface-variant">
            [Nom de l&apos;hébergeur]
            <br />
            [Adresse de l&apos;hébergeur]
            <br />
            Les données de santé traitées par Orekio sont destinées à être
            hébergées chez un hébergeur certifié Hébergeur de Données de
            Santé (HDS) au sens de l&apos;article L.1111-8 du Code de la
            santé publique, avant toute commercialisation à grande échelle
            (voir la page{" "}
            <a href="/a-propos" className="text-secondary underline">
              À propos
            </a>
            ).
          </p>
        </section>

        <section>
          <h2 className="text-[18px] font-medium text-on-surface-strong">
            Propriété intellectuelle
          </h2>
          <p className="mt-3 text-on-surface-variant">
            L&apos;ensemble des contenus présents sur ce site (textes, logos,
            marques, graphismes) est la propriété de [Raison sociale], sauf
            mention contraire, et ne peut être reproduit sans autorisation
            préalable.
          </p>
        </section>

        <section>
          <h2 className="text-[18px] font-medium text-on-surface-strong">
            Traitement des données personnelles
          </h2>
          <p className="mt-3 text-on-surface-variant">
            Le traitement des données personnelles est décrit dans notre{" "}
            <a href="/confidentialite" className="text-secondary underline">
              politique de confidentialité
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
