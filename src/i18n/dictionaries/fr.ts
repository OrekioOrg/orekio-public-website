import type { Segment } from "../segment";

/** Une carte de la page Tarifs. `note` : paragraphe de fin d'essai, sur la carte Essai seulement. */
export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  note?: string;
  highlighted: boolean;
}

const email: Segment = {
  href: "mailto:contact@orekio.app",
  text: "contact@orekio.app",
  external: true,
};

export const fr = {
  meta: {
    title: "Orekio, l'accompagnement thérapeutique entre les rendez-vous",
    description:
      "Votre armoire thérapeutique numérique, entre les consultations : agenda du sommeil, PHQ-9, plan de sécurité, six modules dès l'ouverture et une trentaine en chemin. Un carnet de bord numérique : Orekio affiche, le praticien interprète.",
  },

  nav: {
    features: "Fonctionnalités",
    pricing: "Tarifs",
    about: "À propos",
    blog: "Blog",
    contact: "Contact",
    subscribe: "Liste d'attente",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },

  footer: {
    tagline: "Orekio, l'armoire thérapeutique numérique",
    disclaimer:
      "Orekio est conçu comme un carnet de bord numérique, et non comme un dispositif médical. Les données sont affichées telles quelles : leur interprétation, comme toute décision clinique, relève du praticien.",
    legalNotice: "Mentions légales",
    privacy: "Confidentialité",
    terms: "CGU",
    accountDeletion: "Suppression de compte",
  },

  home: {
    eyebrow: "Votre armoire thérapeutique numérique",
    title: "La consultation continue entre deux rendez-vous, sur le téléphone de votre patient.",
    description:
      "Exercices à pratiquer chez soi, fiches de psychoéducation, agenda du sommeil, questionnaires, rappel du traitement, plan de sécurité : vous confiez les outils, votre patient les utilise entre deux rendez-vous, et vous en reparlez ensemble en consultation.",
    ctaSubscribe: "Rejoindre la liste d'attente",
    ctaFeatures: "Voir les outils",
    section2Title: "Entre deux rendez-vous, le travail continue.",
    section2Description:
      "Orekio s'adresse aux psychologues, psychiatres, infirmiers en pratique avancée, infirmiers et médecins généralistes. Votre patient s'exerce, lit, répond, note. Vous retrouvez tout dans votre espace, daté et tel qu'il l'a écrit. La lecture clinique reste vôtre.",
    highlights: [
      {
        title: "S'exercer",
        description:
          "Colonnes de Beck, exposition graduée, activation comportementale, imagerie mentale, balances décisionnelle et motivationnelle. Le travail de fond, entre deux rendez-vous.",
      },
      {
        title: "Observer",
        description:
          "Agenda du sommeil, suivi quotidien, rythmes, prise du traitement, effets indésirables, journal de craving. Ce qui s'est passé, jour après jour, tel qu'il l'a noté.",
      },
      {
        title: "Comprendre",
        description:
          "Fiches de psychoéducation, nommer ce que je ressens. Ce que vous lui expliquez en consultation, à relire chez lui.",
      },
      {
        title: "Répondre",
        description:
          "Échelles validées : le PHQ-9 aujourd'hui, fidèle mot pour mot à sa version française. Un score, jamais une interprétation.",
      },
      {
        title: "Tenir",
        description:
          "Plan de sécurité, tolérance à la détresse, ancrage, respiration. Les outils des moments difficiles, préparés ensemble, à portée de main.",
      },
    ],
    highlightsNote:
      "Six modules dès l'ouverture, une trentaine construits, ouverts au fil des mois.",
    ctaSectionTitle: "Prêt à essayer Orekio avec vos patients ?",
    ctaSectionDescription:
      "60 jours d'essai, sans carte bancaire. Un tarif fondateurs réservé aux 100 premiers inscrits.",
    ctaSectionButton: "Rejoindre la liste d'attente",
    apps: {
      title: "Deux applications, un même espace",
      description:
        "Vous travaillez depuis votre ordinateur, votre patient depuis son téléphone. Un seul abonnement, le vôtre : l'application est gratuite pour vos patients.",
      cards: [
        {
          title: "Votre espace praticien, sur le web",
          description:
            "Vous invitez vos patients, vous ouvrez les outils un à un. Leurs saisies vous reviennent mises en page pour la consultation : courbes, historiques, scores, données. Lisible en un coup d'œil, sans rien interpréter à votre place. Rien à installer.",
        },
        {
          title: "L'application de votre patient, sur son téléphone",
          description:
            "Il y retrouve les outils que vous avez ouverts et les remplit au fil des jours, même sans connexion. Sur votre invitation, gratuitement.",
        },
      ],
    },
  },

  features: {
    pageTitle: "Fonctionnalités",
    metaDescription:
      "Six modules dès l'ouverture, une trentaine en chemin : agenda du sommeil, PHQ-9, plan de sécurité, nommer ce que je ressens, colonnes de Beck, et plus.",
    eyebrow: "Fonctionnalités",
    heading: "Ce que vous pouvez confier à votre patient.",
    description:
      "Vous ouvrez chaque outil depuis votre espace web, au fil des consultations et à votre rythme ; votre patient le retrouve sur son téléphone. Les outils marqués « dès l'ouverture » sont disponibles au lancement. Les autres, déjà construits, s'ouvrent au fil des mois. Chaque module affiche des données brutes : Orekio les restitue, vous les interprétez.",
    openBadge: "dès l'ouverture",
    categories: [
      {
        title: "S'exercer",
        tagline: "Le travail de fond, entre deux rendez-vous.",
        modules: [
          { name: "Colonnes de Beck", fromDayOne: true },
          { name: "Exposition graduée", fromDayOne: false },
          { name: "Activation comportementale", fromDayOne: false },
          { name: "Retraitement par imagerie mentale", fromDayOne: false },
          { name: "Balance décisionnelle", fromDayOne: false },
          { name: "Balance motivationnelle", fromDayOne: false },
        ],
      },
      {
        title: "Observer",
        tagline: "Ce qui s'est passé, jour après jour, tel qu'il l'a noté.",
        modules: [
          { name: "Agenda du sommeil", fromDayOne: true },
          { name: "Suivi quotidien", fromDayOne: true },
          { name: "Rythmes et régularité", fromDayOne: false },
          { name: "Prise du traitement", fromDayOne: false },
          { name: "Effets indésirables", fromDayOne: false },
          { name: "Journal de craving", fromDayOne: false },
        ],
      },
      {
        title: "Comprendre",
        tagline: "Ce que vous lui expliquez en consultation, à relire chez lui.",
        modules: [
          { name: "Fiches de psychoéducation", fromDayOne: false },
          { name: "Nommer ce que je ressens", fromDayOne: true },
        ],
      },
      {
        title: "Répondre",
        tagline: "Un score, jamais une interprétation.",
        modules: [
          { name: "PHQ-9", fromDayOne: true },
          { name: "GAD-7", fromDayOne: false },
        ],
      },
      {
        title: "Tenir",
        tagline: "Les outils des moments difficiles, préparés ensemble, à portée de main.",
        modules: [
          { name: "Plan de sécurité", fromDayOne: true },
          { name: "Tolérance à la détresse", fromDayOne: false },
          { name: "Ancrage", fromDayOne: false },
          { name: "Respiration", fromDayOne: true },
        ],
      },
    ],
    around: {
      title: "Et autour des modules",
      cards: [
        {
          title: "Rappels",
          description:
            "Vous posez des jours et une heure par outil. Votre patient peut les décaler ou les mettre en pause, et vous voyez ce qu'il en a fait. Jamais conditionnés à ce qu'il écrit.",
        },
        {
          title: "Vue patient et mode ado",
          description:
            "Pour chaque outil, l'écran exactement tel que votre patient le voit. Un langage adapté aux adolescents, que vous activez.",
        },
        {
          title: "Sources",
          description:
            "Chaque module cite les références scientifiques sur lesquelles il s'appuie, vérifiées à la source.",
        },
        {
          title: "Hors connexion",
          description:
            "Votre patient saisit sans réseau ; tout se synchronise dès qu'il en retrouve un.",
        },
        {
          title: "Le patient garde la main",
          description:
            "Il autorise le partage une fois ; ses saisies vous parviennent ensuite en continu. Il peut retirer cette autorisation ou effacer ses données quand il le souhaite. Vous pouvez retirer un outil à tout moment.",
        },
      ],
    },
  },

  pricing: {
    pageTitle: "Tarifs",
    metaDescription:
      "Essai de 60 jours sans carte bancaire, puis 29 € HT par mois. Fondateurs : 19 € HT par mois à vie, 100 places. Application patient toujours gratuite.",
    eyebrow: "Tarifs",
    heading: "Un abonnement, tous vos patients.",
    description:
      "60 jours d'essai, sans carte bancaire. Ensuite, un seul abonnement : 29 € HT par mois sans engagement, ou 24 € HT par mois en annuel. Les 100 premiers inscrits gardent 19 € HT par mois à vie. Jamais de prix par patient.",
    plans: [
      {
        name: "Essai",
        price: "Gratuit",
        period: "60 jours, sans carte bancaire",
        description:
          "Deux mois, c'est plusieurs rendez-vous : le temps de confier des outils à vos patients et d'en reparler ensemble.",
        features: [
          "Le produit complet, sans restriction",
          "Aucune carte demandée, rien à résilier",
        ],
        note: "À la fin de l'essai, vous souscrivez et tout continue, données comprises. Sinon, votre compte passe en lecture seule pendant 30 jours, le temps d'exporter, puis vos données patients sont supprimées. Nous vous prévenons 15 jours avant.",
        highlighted: false,
      },
      {
        name: "Fondateurs",
        price: "19 € HT",
        period: "par mois, bloqué à vie",
        description:
          "Pour les 100 premiers qui souscrivent pendant leur essai.",
        features: [
          "Tarif garanti tant que l'abonnement reste actif",
          "Un canal direct avec l'équipe",
          "La feuille de route en avant-première",
        ],
        highlighted: true,
      },
      {
        name: "Abonnement",
        price: "29 € HT",
        period: "par mois, sans engagement",
        description:
          "Ou 24 € HT par mois en annuel payé d'avance, soit deux mois offerts.",
        features: [
          "Résiliable à tout moment",
          "Parrainage : un mois offert pour vous et pour chaque collègue parrainé",
        ],
        highlighted: false,
      },
    ] as PricingPlan[],
    included: {
      title: "Inclus dans tous les cas",
      items: [
        "Espace web praticien",
        "Application patient gratuite",
        "Patients illimités",
        "Tous les modules disponibles, sans supplément",
        "Historique complet et export",
        "Support par email",
      ],
    },
    subscribeButton: "Rejoindre la liste d'attente",
    subscribeButtonTitle: "Pendant la bêta, chaque compte est ouvert un par un",
    footerNote: [
      "Prix hors taxes, TVA de 20 % en sus. Pendant la bêta, l'inscription passe par la liste d'attente et chaque compte est ouvert un par un. Vous êtes une structure avec plusieurs praticiens ? ",
      { href: "/fr/contact", text: "Écrivez-nous" },
      " : un plan Structure est en préparation.",
    ] as Segment[],
  },

  about: {
    pageTitle: "À propos",
    metaDescription:
      "Orekio est un carnet de bord numérique qui accompagne la relation entre un praticien et son patient, entre les consultations.",
    eyebrow: "À propos",
    heading: "Orekio est né en consultation.",
    paragraph1:
      "Tout praticien connaît la scène. Une feuille d'exercice remise en fin de rendez-vous, un agenda du sommeil photocopié, un questionnaire à rapporter. Au rendez-vous suivant, la feuille est restée dans un tiroir, ou revient à moitié remplie, et l'on reconstruit de mémoire ce qui s'est passé. Orekio est parti de là : mettre sur le téléphone du patient les outils courants de la psychiatrie et de la psychologie. Il les utilise entre deux rendez-vous, et vous les relisez avec lui au rendez-vous suivant, en libéral comme à l'hôpital.",
    paragraph2:
      "Vous invitez votre patient par email, puis vous ouvrez l'accès aux outils un à un, selon les besoins de la consultation : agenda du sommeil, colonnes de Beck, PHQ-9, plan de sécurité, et une trentaine d'autres modules. Il les utilise depuis son téléphone, même sans connexion. Ce qu'il saisit vous attend pour le prochain rendez-vous, tel quel. Orekio restitue, la lecture clinique reste vôtre.",
    paragraph3:
      "Orekio est conçu par deux personnes : un infirmier en pratique avancée en psychiatrie, qui porte les choix cliniques, et un développeur, qui porte le produit. Orekio ne vend aucune donnée et n'affiche aucune publicité.",
    boxTitle: "Un carnet de bord, pas un dispositif médical",
    boxText:
      "Orekio est conçu comme un carnet de bord numérique, et non comme un dispositif médical. L'application se limite à afficher : un chiffre brut, un historique neutre, un score sans interprétation. Aucun seuil, aucun signal, aucune comparaison à une norme. La lecture clinique vous appartient.",
    paragraph4:
      "Les saisies de vos patients sont des données de santé au sens de l'article 9 du RGPD. Elles ne vous sont transmises qu'avec l'autorisation du patient, qui peut la retirer et demander l'export ou l'effacement de ses données à tout moment. Un hébergement certifié données de santé (HDS) est prévu avant l'ouverture commerciale.",
  },

  contact: {
    pageTitle: "Contact",
    metaDescription:
      "Contactez l'équipe Orekio pour une question ou une démonstration.",
    eyebrow: "Contact",
    heading: "Une question, une démonstration, ou l'envie d'être parmi les premiers ?",
    description:
      "Écrivez-nous en une ligne : votre métier, et ce que vous attendez d'Orekio. Nous répondons personnellement.",
    email: "contact@orekio.app",
  },

  notFound: {
    metaTitle: "Page introuvable",
    heading: "Page introuvable",
    body: "Le lien mène peut-être vers une page déplacée. L'accueil vous remettra sur la bonne voie.",
    cta: "Retour à l'accueil",
  },

  blog: {
    pageTitle: "Blog",
    metaDescription:
      "Le blog d'Orekio : des outils expliqués aux praticiens, ce qu'en dit la littérature et ce qu'Orekio en fait.",
    eyebrow: "Blog",
    heading: "Des outils, expliqués aux praticiens qui les confient.",
    intro:
      "Chaque article décrit un outil, ce qu'en dit la littérature, et ce qu'Orekio en fait. Avec les sources.",
    empty: "Les premiers articles arrivent bientôt.",
    readMore: "Lire l’article →",
    readingTime: "min de lecture",
    by: "Par",
    publishedOn: "Publié le",
    updatedOn: "Mis à jour le",
    backToList: "Tous les articles",
    allArticles: "Tous les articles",
    share: "Partager",
    shareNative: "Partager…",
    shareCopy: "Copier le lien",
    shareCopied: "Lien copié",
    shareX: "Partager sur X",
    shareLinkedin: "Partager sur LinkedIn",
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
          ["[Raison sociale], [forme juridique, ex : SAS, EI…]"],
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
            "Les données de santé traitées par Orekio sont destinées à être hébergées chez un hébergeur certifié Hébergeur de Données de Santé (HDS) au sens de l'article L.1111-8 du Code de la santé publique, avant l'ouverture commerciale (voir la page ",
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
            "[Raison sociale], en tant que responsable de traitement, met en œuvre les traitements de données décrits ci-dessous. Pour toute question, contactez : [DPO ou contact RGPD], ",
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
            "Les données de suivi sont traitées sur la base du consentement explicite du patient (article 9.2.a du RGPD), pour la seule finalité de faciliter le suivi thérapeutique entre le patient et son praticien. Ces données sont restituées brutes au praticien, à qui revient l'analyse clinique.",
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
      "Cette page est un brouillon de structure, à faire rédiger et valider par un professionnel du droit avant l'ouverture du service au public, en particulier les sections responsabilité et résiliation, compte tenu du caractère sensible des données traitées.",
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
            "Le praticien s'engage à utiliser Orekio dans le seul cadre d'un suivi thérapeutique réel, et avec le consentement de son patient. Le patient s'engage à fournir des informations sincères. [À compléter : usage loyal du service, sécurité des identifiants, interdiction de détournement.]",
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
            "Orekio restitue les données saisies telles quelles et ne se substitue à aucun avis médical. [À compléter : limites de responsabilité, disponibilité du service, cas de force majeure.]",
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
          ["Orekio ne vend aucune donnée et n'affiche aucune publicité."],
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
  accountDeletion: {
    pageTitle: "Suppression de compte",
    metaDescription:
      "Comment supprimer votre compte Orekio et l'ensemble des données associées.",
    eyebrow: "Suppression de compte",
    heading: "Supprimer votre compte Orekio et vos données",
    noticeBox:
      "Vous pouvez supprimer votre compte Orekio et toutes les données associées à tout moment, depuis l'application mobile ou par e-mail. Cette page décrit la procédure et le devenir de vos données.",
    sections: [
      {
        heading: "Comment demander la suppression",
        lines: [
          [
            "Dans l'application mobile Orekio, ouvrez l'onglet Profil, section « Mes données », puis appuyez sur « Supprimer mon compte et mes données » et confirmez. La suppression est immédiate et définitive.",
          ],
          [
            "Si vous n'avez plus accès à l'application, écrivez à ",
            email,
            " depuis l'adresse e-mail associée à votre compte. Les demandes sont traitées sous 30 jours.",
          ],
        ] as Segment[][],
      },
      {
        heading: "Données supprimées",
        lines: [
          ["Votre compte et votre identité (e-mail, nom, prénom, alias)."],
          [
            "Toutes vos saisies : humeur, sommeil, questionnaires, plan de sécurité, exercices et notes personnelles.",
          ],
          ["Vos modules débloqués, vos rappels et vos paramètres."],
          ["Le lien avec votre praticien et les notes vous concernant."],
          ["Toutes les données enregistrées sur votre appareil."],
        ] as Segment[][],
      },
      {
        heading: "Données conservées",
        lines: [
          [
            "Une trace technique attestant qu'une suppression a eu lieu (date et nature de l'opération, sans aucun contenu de santé) est conservée dans notre journal d'audit pendant 10 ans au maximum, au titre de nos obligations légales liées à l'hébergement de données de santé. Aucune autre donnée n'est conservée après la suppression.",
          ],
        ] as Segment[][],
      },
    ],
  },

};

export type Dictionary = typeof fr;
