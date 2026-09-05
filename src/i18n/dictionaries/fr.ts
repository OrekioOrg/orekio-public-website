import type { Segment } from "../segment";

const email: Segment = {
  href: "mailto:contact@orekio.app",
  text: "contact@orekio.app",
  external: true,
};

export const fr = {
  meta: {
    title: "Orekio — L'accompagnement thérapeutique, entre les séances",
    description:
      "Orekio relie le praticien et son patient entre les consultations : agenda du sommeil, échelles cliniques validées, plan de sécurité, et bien plus. Un carnet de bord numérique, pas un dispositif médical.",
  },

  nav: {
    features: "Fonctionnalités",
    pricing: "Tarifs",
    about: "À propos",
    contact: "Contact",
    subscribe: "S'abonner",
  },

  footer: {
    tagline: "Orekio — Carnet de bord numérique",
    disclaimer:
      "Orekio est un carnet de bord numérique, pas un dispositif médical au sens du règlement (UE) 2017/745. Les données affichées sont brutes : l'application ne les interprète jamais, n'émet aucune alerte et ne pose aucun diagnostic.",
    legalNotice: "Mentions légales",
    privacy: "Confidentialité",
    terms: "CGU",
  },

  home: {
    eyebrow: "Carnet de bord numérique",
    title: "L'accompagnement thérapeutique, entre les séances",
    description:
      "Orekio relie le praticien et son patient entre les consultations. Le praticien débloque des outils au fil du suivi, le patient les utilise sur son téléphone. Rien n'est interprété, tout reste disponible pour la prochaine séance.",
    ctaSubscribe: "S'abonner à Orekio",
    ctaFeatures: "Découvrir les fonctionnalités",
    section2Title: "Un outil pensé pour le suivi, pas pour le diagnostic",
    section2Description:
      "Orekio est un carnet de bord numérique : les données du patient restent brutes, sans interprétation ni alerte automatique. Le praticien garde la main sur ce qu'il débloque, et sur ce qu'il en fait en consultation.",
    highlights: [
      {
        title: "Agenda du sommeil",
        description:
          "Le patient note ses nuits, le praticien relit l'historique en consultation.",
      },
      {
        title: "Échelles cliniques validées",
        description:
          "PHQ-9, GAD-7, EPDS et d'autres, fidèles à leur version validée.",
      },
      {
        title: "Plan de sécurité",
        description:
          "Un plan de crise construit avec le patient, disponible à tout moment.",
      },
      {
        title: "Colonnes de Beck, roue des émotions...",
        description:
          "Plus de 30 modules thérapeutiques débloqués progressivement par le praticien.",
      },
    ],
    ctaSectionTitle: "Prêt à essayer Orekio avec vos patients ?",
    ctaSectionDescription:
      "Choisissez une offre et retrouvez votre armoire thérapeutique dès aujourd'hui.",
    ctaSectionButton: "Voir les tarifs",
  },

  features: {
    pageTitle: "Fonctionnalités",
    metaDescription:
      "Plus de 30 modules thérapeutiques : agenda du sommeil, échelles cliniques validées, plan de sécurité, roue des émotions, et plus.",
    eyebrow: "Fonctionnalités",
    heading: "Plus de 30 modules thérapeutiques",
    description:
      "Le praticien débloque les outils au fil des consultations, à son rythme. Chaque module affiche des données brutes : Orekio ne les interprète jamais, ne déclenche aucune alerte et ne pose aucun diagnostic.",
    categories: [
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
    ],
  },

  pricing: {
    pageTitle: "Tarifs",
    metaDescription:
      "Choisissez l'offre Orekio adaptée à votre pratique : praticien seul ou cabinet.",
    eyebrow: "Tarifs",
    heading: "Une offre par pratique",
    description:
      "Chaque offre donne accès à l'ensemble des modules thérapeutiques. Ce qui change, c'est le nombre de patients suivis et l'accompagnement autour.",
    plans: [
      {
        name: "Découverte",
        price: "Gratuit",
        period: "pendant 30 jours",
        description:
          "Pour tester Orekio avec quelques patients avant de s'engager.",
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
        description:
          "Pour un cabinet ou une structure avec plusieurs praticiens.",
        features: [
          "Tout Praticien, pour chaque membre",
          "Gestion des accès par l'administrateur",
          "Accompagnement au déploiement",
        ],
        highlighted: false,
      },
    ],
    subscribeButton: "S'abonner (bientôt)",
    subscribeButtonTitle: "Le paiement en ligne arrive bientôt",
    footerNote: [
      "L'abonnement en ligne n'est pas encore ouvert : le paiement sécurisé arrive prochainement. En attendant, ",
      { href: "/fr/contact", text: "contactez-nous" },
      " pour être averti de l'ouverture ou pour un accès anticipé.",
    ] as Segment[],
  },

  about: {
    pageTitle: "À propos",
    metaDescription:
      "Orekio est un carnet de bord numérique qui accompagne la relation entre un praticien et son patient, entre les consultations.",
    eyebrow: "À propos",
    heading: "Ce qu'Orekio est, et ce qu'il n'est pas",
    paragraph1:
      "Orekio accompagne la relation entre un thérapeute (infirmier en pratique avancée, psychiatre, psychologue…) et son patient, dans l'intervalle entre deux consultations. Le praticien invite son patient par email, puis débloque progressivement des outils au fil du suivi : agenda du sommeil, échelles cliniques, plan de sécurité, et une trentaine d'autres modules.",
    paragraph2:
      "Le patient les utilise depuis son téléphone. Ce qu'il saisit reste disponible pour la prochaine séance : Orekio ne fait que restituer les données, jamais les interpréter.",
    boxTitle: "Un carnet de bord, pas un dispositif médical",
    boxText:
      "Orekio a le statut de carnet de bord numérique, hors du champ du règlement (UE) 2017/745 relatif aux dispositifs médicaux. Aucune donnée saisie n'est interprétée par l'application : pas d'alerte automatique, pas de label clinique, pas de comparaison à une norme. Ce qui s'affiche est toujours un chiffre brut ou un historique neutre, à charge du praticien d'en faire la lecture clinique.",
    paragraph3:
      "Les données de santé saisies dans Orekio relèvent de l'article 9 du RGPD. Elles sont traitées avec le consentement explicite du patient, et un hébergement agréé données de santé (HDS) est prévu avant toute commercialisation à grande échelle.",
  },

  contact: {
    pageTitle: "Contact",
    metaDescription:
      "Contactez l'équipe Orekio pour une question ou une démonstration.",
    eyebrow: "Contact",
    heading: "Une question, une démonstration ?",
    description:
      "Le formulaire de contact arrive bientôt. En attendant, écrivez-nous directement :",
    email: "contact@orekio.app",
  },

  mentionsLegales: {
    pageTitle: "Mentions légales",
    metaDescription: "Mentions légales du site Orekio.",
    eyebrow: "Mentions légales",
    heading: "Mentions légales",
    noticeBox:
      "Cette page est un brouillon de structure. Les informations entre crochets doivent être complétées et validées avant l'ouverture du site au public, conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN).",
    sections: [
      {
        heading: "Éditeur du site",
        lines: [
          ["[Raison sociale] — [forme juridique, ex : SAS, EI…]"],
          ["[Adresse du siège social]"],
          ["[Numéro SIRET]"],
          ["Capital social : [montant]"],
          ["Directeur de la publication : [nom, prénom]"],
          ["Contact : ", email],
        ] as Segment[][],
      },
      {
        heading: "Hébergement",
        lines: [
          ["[Nom de l'hébergeur]"],
          ["[Adresse de l'hébergeur]"],
          [
            "Les données de santé traitées par Orekio sont destinées à être hébergées chez un hébergeur certifié Hébergeur de Données de Santé (HDS) au sens de l'article L.1111-8 du Code de la santé publique, avant toute commercialisation à grande échelle (voir la page ",
            { href: "/fr/a-propos", text: "À propos" },
            ").",
          ],
        ] as Segment[][],
      },
      {
        heading: "Propriété intellectuelle",
        lines: [
          [
            "L'ensemble des contenus présents sur ce site (textes, logos, marques, graphismes) est la propriété de [Raison sociale], sauf mention contraire, et ne peut être reproduit sans autorisation préalable.",
          ],
        ] as Segment[][],
      },
      {
        heading: "Traitement des données personnelles",
        lines: [
          [
            "Le traitement des données personnelles est décrit dans notre ",
            { href: "/fr/confidentialite", text: "politique de confidentialité" },
            ".",
          ],
        ] as Segment[][],
      },
    ],
  },

  confidentialite: {
    pageTitle: "Confidentialité",
    metaDescription:
      "Comment Orekio collecte, utilise et protège les données personnelles et de santé de ses utilisateurs.",
    eyebrow: "Confidentialité",
    heading: "Politique de confidentialité",
    noticeBox:
      "Cette page est un brouillon de structure, à faire valider par un professionnel du droit avant toute ouverture publique du service. Orekio traite des données de santé (article 9 du RGPD), une catégorie particulière nécessitant des garanties renforcées.",
    sections: [
      {
        heading: "Responsable de traitement",
        lines: [
          [
            "[Raison sociale], en tant que responsable de traitement, met en œuvre les traitements de données décrits ci-dessous. Pour toute question, contactez : [DPO ou contact RGPD] — ",
            email,
            ".",
          ],
        ] as Segment[][],
      },
      {
        heading: "Données collectées",
        lines: [
          [
            "Données d'identification du praticien et du patient (nom, email), données de suivi saisies par le patient (agenda du sommeil, réponses aux échelles cliniques, plan de sécurité, autres modules), et données techniques de connexion.",
          ],
        ] as Segment[][],
      },
      {
        heading: "Finalités et base légale",
        lines: [
          [
            "Les données de suivi sont traitées sur la base du consentement explicite du patient (article 9.2.a du RGPD), pour la seule finalité de faciliter le suivi thérapeutique entre le patient et son praticien. Orekio n'interprète, ni n'analyse cliniquement ces données : elles sont restituées brutes au praticien.",
          ],
        ] as Segment[][],
      },
      {
        heading: "Durée de conservation",
        lines: [
          [
            "[À définir : durée de conservation des données pendant le suivi actif et après clôture du compte, conformément aux recommandations de la CNIL et, le cas échéant, aux obligations de conservation des données de santé.]",
          ],
        ] as Segment[][],
      },
      {
        heading: "Hébergement",
        lines: [
          [
            "Les données de santé sont destinées à être hébergées chez un hébergeur certifié Hébergeur de Données de Santé (HDS), au sens de l'article L.1111-8 du Code de la santé publique.",
          ],
        ] as Segment[][],
      },
      {
        heading: "Vos droits",
        lines: [
          [
            "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité sur vos données, ainsi que du droit de retirer votre consentement à tout moment. Pour exercer ces droits, contactez ",
            email,
            ". Vous pouvez également introduire une réclamation auprès de la CNIL (",
            { href: "https://www.cnil.fr", text: "www.cnil.fr", external: true },
            ").",
          ],
        ] as Segment[][],
      },
    ],
  },

  cgu: {
    pageTitle: "Conditions générales d'utilisation",
    metaDescription:
      "Conditions générales d'utilisation du service Orekio pour les praticiens et leurs patients.",
    eyebrow: "CGU",
    heading: "Conditions générales d'utilisation",
    noticeBox:
      "Cette page est un brouillon de structure, à faire rédiger et valider par un professionnel du droit avant l'ouverture du service au public — en particulier les sections responsabilité et résiliation, compte tenu du caractère sensible des données traitées.",
    sections: [
      {
        heading: "1. Objet",
        lines: [
          [
            "Les présentes conditions générales d'utilisation (CGU) définissent les modalités d'accès et d'utilisation du service Orekio, carnet de bord numérique destiné à faciliter le suivi thérapeutique entre un praticien et son patient. Orekio n'est pas un dispositif médical au sens du règlement (UE) 2017/745 (voir la page ",
            { href: "/fr/a-propos", text: "À propos" },
            ").",
          ],
        ] as Segment[][],
      },
      {
        heading: "2. Accès au service",
        lines: [
          [
            "L'accès au service se fait sur invitation du praticien pour le patient, ou sur abonnement pour le praticien (voir la page ",
            { href: "/fr/tarifs", text: "Tarifs" },
            "). [À compléter : conditions d'éligibilité, création de compte, vérification de la qualité de professionnel de santé le cas échéant.]",
          ],
        ] as Segment[][],
      },
      {
        heading: "3. Obligations des utilisateurs",
        lines: [
          [
            "Le praticien s'engage à n'utiliser Orekio que dans le cadre d'un suivi thérapeutique réel et avec le consentement de son patient. Le patient s'engage à fournir des informations sincères. [À compléter : usage loyal du service, sécurité des identifiants, interdiction de détournement.]",
          ],
        ] as Segment[][],
      },
      {
        heading: "4. Propriété intellectuelle",
        lines: [
          [
            "Le service, sa marque et ses contenus restent la propriété exclusive de [Raison sociale]. Les données saisies par les utilisateurs (agenda du sommeil, réponses aux échelles, etc.) restent leur propriété.",
          ],
        ] as Segment[][],
      },
      {
        heading: "5. Responsabilité",
        lines: [
          [
            "Orekio restitue les données saisies sans les interpréter et ne se substitue à aucun avis médical. [À compléter : limites de responsabilité, disponibilité du service, cas de force majeure.]",
          ],
        ] as Segment[][],
      },
      {
        heading: "6. Durée et résiliation",
        lines: [
          [
            "[À compléter : conditions de résiliation par l'utilisateur et par l'éditeur, sort des données après résiliation.]",
          ],
        ] as Segment[][],
      },
      {
        heading: "7. Données personnelles",
        lines: [
          [
            "Le traitement des données personnelles est décrit dans notre ",
            { href: "/fr/confidentialite", text: "politique de confidentialité" },
            ".",
          ],
        ] as Segment[][],
      },
      {
        heading: "8. Droit applicable",
        lines: [
          [
            "Les présentes CGU sont soumises au droit français. [À compléter : juridiction compétente en cas de litige.]",
          ],
        ] as Segment[][],
      },
    ],
  },
};

export type Dictionary = typeof fr;
