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
      "Votre armoire thérapeutique numérique, entre les consultations : agenda du sommeil, PHQ-9, plan de sécurité, sept modules dès l'ouverture et une trentaine en chemin. Un carnet de bord numérique : Orekio affiche, le praticien interprète.",
  },

  nav: {
    features: "Fonctionnalités",
    pricing: "Tarifs",
    about: "À propos",
    blog: "Blog",
    contact: "Contact",
    subscribe: "Créer un compte",
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
    title: "Votre suivi continue entre deux rendez-vous.",
    lead: "Construisez un plan de soins personnalisé pour votre patient, en débloquant un à un les modules adaptés à ses besoins.",
    description:
      "Exercices à pratiquer chez soi, fiches de psychoéducation, agenda du sommeil, questionnaires, rappel du traitement, plan de sécurité : vous confiez les outils, votre patient s'en sert au quotidien, et vous en reparlez ensemble en consultation.",
    ctaSubscribe: "Essayer gratuitement",
    ctaFeatures: "Voir les outils",
    section2Title: "Le travail continue à la maison.",
    section2Description:
      "Orekio s'adresse aux psychologues, psychiatres, infirmiers en pratique avancée, infirmiers et médecins généralistes. Votre patient s'exerce, lit, répond, note. Vous retrouvez tout dans votre espace, daté et tel qu'il l'a écrit. La lecture clinique reste vôtre.",
    highlights: [
      {
        title: "S'exercer",
        description:
          "Colonnes de Beck, exposition graduée, activation comportementale, imagerie mentale, balance décisionnelle. Le travail de fond, entre deux rendez-vous.",
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
      "Sept modules dès l'ouverture, une trentaine construits, ouverts au fil des mois.",
    screensCaption: "L'application patient, avec des données d'exemple",
    screens: {
      sleep:
        "L'agenda du sommeil : la dernière nuit sur un cadran de 24 heures, puis les dix nuits précédentes.",
      tracking: "Le suivi quotidien : la saisie du jour, un curseur par indicateur.",
      breathing: "La respiration en cohérence cardiaque : la boule qui guide l'inspiration.",
      practitioner:
        "L'espace praticien : le suivi quotidien d'une patiente fictive sur un an, une courbe par indicateur, en valeurs brutes.",
      patientHome:
        "L'accueil de l'application patient : ce qui est prévu aujourd'hui, puis les outils ouverts par le praticien, rangés par thème.",
    },
    manifesto: {
      eyebrow: "Ce qu'Orekio ne fera jamais",
      text: "Les données sont affichées telles quelles. Leur interprétation, comme toute décision clinique, relève du praticien.",
    },
    ctaSectionTitle: "Prêt à essayer Orekio avec vos patients ?",
    ctaSectionDescription:
      "30 jours d'essai, sans carte bancaire. Un tarif fondateurs réservé aux 100 premiers inscrits.",
    ctaSectionButton: "Essayer gratuitement",
    apps: {
      title: "Deux applications, un même espace",
      description:
        "Vous travaillez depuis votre ordinateur, votre patient depuis son téléphone. Un seul abonnement, le vôtre : l'application est gratuite pour vos patients.",
      cards: [
        {
          title: "Votre espace praticien, sur le web",
          description:
            "Vous invitez vos patients, vous ouvrez l'accès aux outils un à un. Leurs saisies vous reviennent mises en page pour la consultation : courbes, historiques, scores, données. Lisible en un coup d'œil, sans rien interpréter à votre place. Rien à installer.",
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
      "Sept modules dès l'ouverture, une trentaine en chemin : agenda du sommeil, PHQ-9, plan de sécurité, nommer ce que je ressens, colonnes de Beck, et plus.",
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
          { name: "Activation comportementale", fromDayOne: true },
          { name: "Retraitement par imagerie mentale", fromDayOne: false },
          { name: "Balance décisionnelle", fromDayOne: false },
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
    gallery: {
      eyebrow: "Dès l'ouverture",
      title: "Ce que votre patient voit sur son téléphone.",
      description:
        "Un écran par outil, avec des données d'exemple. La liste s'allonge à chaque nouvel outil ouvert.",
      previous: "Écran précédent",
      next: "Écran suivant",
      items: [
        {
          src: "galerie-sommeil.png",
          name: "Agenda du sommeil",
          family: "Observer",
          alt: "Agenda du sommeil : les horaires de la nuit sur un cadran de 24 heures.",
        },
        {
          src: "suivi-saisie.png",
          name: "Suivi quotidien",
          family: "Observer",
          alt: "Suivi quotidien : la saisie du jour, un curseur par indicateur.",
        },
        {
          src: "galerie-beck.png",
          name: "Colonnes de Beck",
          family: "S'exercer",
          alt: "Colonnes de Beck : les faits qui vont dans le sens de la pensée, et ceux qui la contredisent.",
        },
        {
          src: "galerie-activites.png",
          name: "Activation comportementale",
          family: "S'exercer",
          alt: "Activation comportementale : les activités préparées avec le praticien, de la plus facile à la plus difficile, chacune reliée à un domaine de vie.",
        },
        {
          src: "galerie-emotions.png",
          name: "Nommer ce que je ressens",
          family: "Comprendre",
          alt: "Nommer ce que je ressens : les huit familles d'émotions.",
        },
        {
          src: "galerie-phq9.png",
          name: "PHQ-9",
          family: "Répondre",
          alt: "PHQ-9 : une question et ses quatre réponses possibles.",
        },
        {
          src: "galerie-plan-securite.png",
          name: "Plan de sécurité",
          family: "Tenir",
          alt: "Plan de sécurité : les proches à contacter, avec un bouton pour appeler.",
        },
        {
          src: "respiration-coherence.png",
          name: "Respiration",
          family: "Tenir",
          alt: "Respiration en cohérence cardiaque : la boule qui guide l'inspiration.",
        },
      ],
    },
    patientSide: {
      eyebrow: "Côté patient",
      title: "Le travail se poursuit entre deux rendez-vous.",
      description: "Deux écrans de l'application patient, avec des données d'exemple.",
      items: [
        {
          src: "accueil-patient.png",
          title: "Son espace",
          text: "Ce qui est prévu aujourd'hui, puis les outils que vous avez ouverts, rangés par thème.",
          alt: "L'accueil de l'application patient : les rappels du jour, puis les outils ouverts par le praticien.",
        },
        {
          src: "rappels.png",
          title: "Ses rappels",
          text: "Les jours et l'heure que vous avez posés. Il peut les décaler ou les mettre en pause, jamais en fonction de ce qu'il a noté.",
          alt: "Les rappels du suivi quotidien : 19 h tous les jours, un second rappel en pause.",
        },
      ],
    },
    practitionerSide: {
      eyebrow: "Côté praticien",
      title: "Votre espace, d'une consultation à l'autre.",
      description: "Cinq écrans de l'espace web, avec des patients fictifs.",
      steps: [
        {
          src: "praticien-vue-ensemble.png",
          height: 1000,
          eyebrow: "Avant la consultation",
          title: "Ce que le patient a noté, d'un coup d'œil.",
          text: "Les modules utilisés sur les quatre dernières semaines, jour par jour, et les questionnaires reçus pas encore consultés.",
          alt: "La vue d'ensemble d'une patiente fictive : ses modules et les jours où elle a noté quelque chose.",
        },
        {
          src: "praticien-armoire.png",
          height: 1000,
          eyebrow: "Choisir les outils",
          title: "Vous ouvrez l'accès aux modules au fil des consultations.",
          text: "Chaque outil s'ouvre une fois travaillé ensemble, et se retire à tout moment.",
          alt: "La liste des modules ouverts pour une patiente fictive.",
        },
        {
          src: "praticien-sommeil-donnees.png",
          height: 990,
          eyebrow: "Agenda du sommeil",
          title: "Consultez facilement les données de l'agenda du sommeil.",
          text: "La grille des nuits, et les moyennes calculées sur la période que vous choisissez.",
          alt: "Les données de l'agenda du sommeil : moyennes de la période et grille des nuits.",
        },
        {
          src: "praticien-suivi-courbes.png",
          height: 990,
          eyebrow: "Suivi quotidien",
          title: "Consultez chaque indicateur sur la période de votre choix.",
          text: "Une courbe par indicateur, la plage des valeurs de la période et le nombre de jours notés.",
          alt: "Le suivi quotidien sur un an : une courbe par indicateur.",
        },
        {
          src: "praticien-plan-securite.png",
          height: 990,
          eyebrow: "Plan de sécurité",
          title: "Le plan de sécurité, avec les mots du patient.",
          text: "Six étapes, rédigées avec lui et revues ensemble en consultation.",
          alt: "Le plan de sécurité d'une patiente fictive, étape des signes avant-coureurs.",
        },
      ],
    },
    around: {
      title: "Et autour des modules",
      cards: [
        {
          title: "Rappels",
          description:
            "Vous posez des jours et une heure par outil. Votre patient peut les décaler ou les mettre en pause, et vous voyez ce qu'il en a fait. Jamais conditionnés à ce qu'il écrit.",
        },
        {
          title: "Sources",
          description:
            "Chaque module cite les références scientifiques sur lesquelles il s'appuie.",
        },
        {
          title: "Hors connexion",
          description:
            "Votre patient continue de travailler sans internet, rien ne se perd.",
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
      "Essai de 30 jours sans carte bancaire. Zelai : 29,99 € TTC par mois, jusqu'à 15 patients. Mendi : 39,99 € TTC par mois, jusqu'à 30 patients. Fondateurs : 24,99 € TTC par mois à vie, 100 places.",
    metaDescriptionProvisional:
      "Essai de 30 jours sans carte bancaire. Deux offres au contenu identique, Zelai jusqu'à 15 patients et Mendi jusqu'à 30, et une offre Fondateurs pour les 100 premiers inscrits.",
    eyebrow: "Tarifs",
    heading: "Deux offres, le même produit.",
    description:
      "30 jours d'essai sur Mendi, sans carte bancaire. Ensuite, deux offres au contenu identique : tous les modules, toutes les échelles. Seul le nombre de patients suivis change, et un suivi mis en pause libère sa place. Les 100 premiers inscrits gardent 24,99 € TTC par mois à vie.",
    plans: [
      {
        name: "Essai",
        price: "Gratuit",
        period: "30 jours, sans carte bancaire",
        description:
          "Un mois sur Mendi, l'offre la plus haute : le temps de confier des outils à vos patients et d'en reparler ensemble.",
        features: [
          "Le produit complet, jusqu'à 30 patients suivis",
          "Aucune carte demandée, rien à résilier",
        ],
        note: "À la fin de l'essai, vous souscrivez et tout continue, données comprises. Sinon, votre compte passe en lecture seule pendant 30 jours, le temps d'exporter, puis vos données patients sont supprimées. Nous vous prévenons 15 jours avant.",
        highlighted: false,
      },
      {
        name: "Zelai",
        price: "29,99 €",
        period: "TTC par mois, sans engagement",
        description:
          "« Prairie » en basque. Ou 329,89 € TTC par an : un mois offert.",
        features: [
          "Jusqu'à 15 patients suivis",
          "Résiliable à tout moment",
        ],
        highlighted: false,
      },
      {
        name: "Mendi",
        price: "39,99 €",
        period: "TTC par mois, sans engagement",
        description:
          "« Montagne » en basque. Ou 439,89 € TTC par an : un mois offert.",
        features: [
          "Jusqu'à 30 patients suivis",
          "Résiliable à tout moment",
        ],
        highlighted: false,
      },
      {
        name: "Fondateurs",
        price: "24,99 €",
        period: "TTC par mois, à vie",
        description:
          "Pour les 100 premiers inscrits, sur l'offre Zelai.",
        features: [
          "Jusqu'à 15 patients suivis",
          "Tarif garanti tant que l'abonnement reste actif",
          "Au mois uniquement",
          "Un canal direct avec l'équipe",
        ],
        highlighted: true,
      },
    ] as PricingPlan[],
    included: {
      title: "Inclus dans toutes les offres",
      items: [
        "Espace web praticien",
        "Application patient gratuite",
        "Tous les modules et toutes les échelles",
        "Historique complet et export",
        "Changement d'offre depuis l'application",
        "Parrainage : un mois offert pour vous et pour votre collègue",
        "Support par email",
      ],
    },
    highlightLabel: "Offre de lancement",
    subscribeButton: "Créer un compte",
    footerNote: [
      "Prix TTC, TVA de 20 % incluse. Vous exercez en cabinet à trois praticiens ou plus ? Le plan Structure compte 23,99 € TTC par praticien sur Zelai, 31,99 € TTC sur Mendi. Plus de 30 patients suivis ? ",
      { href: "/fr/contact", text: "Écrivez-nous" },
      " : nous vous rappelons sous 7 jours ouvrés.",
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
    heading: "Une question, ou envie d'une démonstration ?",
    description:
      "Écrivez-nous en une ligne : votre métier, et ce que vous attendez d'Orekio. Nous répondons personnellement. Pour commencer tout de suite, le compte se crée sur orekio.app.",
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
    sections: [
      {
        heading: "Éditeur du site",
        lines: [
          ["OREKIO, société par actions simplifiée (SAS) au capital de 500 €"],
          ["Siège social : 101 rue Gabriel Péri, bâtiment C, 94270 Le Kremlin-Bicêtre, France"],
          ["Immatriculée au RCS de Créteil sous le numéro 130 344 369"],
          ["Directeur de la publication : Guillaume Zarb, Président"],
          ["Contact : ", email],
        ] as Segment[][],
      },
      {
        heading: "Hébergement",
        lines: [
          ["Site internet : GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis."],
          [
            "Application et données de santé : OVH SAS (OVHcloud), 2 rue Kellermann, 59100 Roubaix, France, hébergeur certifié Hébergeur de Données de Santé (HDS) au sens de l'article L.1111-8 du Code de la santé publique (voir la page ",
            { href: "/fr/a-propos", text: "À propos" },
            ").",
          ],
        ] as Segment[][],
      },
      {
        heading: "Propriété intellectuelle",
        lines: [
          [
            "L'ensemble des contenus présents sur ce site (textes, logos, marques, graphismes) est la propriété de Orekio, sauf mention contraire, et ne peut être reproduit sans autorisation préalable.",
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
            "Orekio, en tant que responsable de traitement, met en œuvre les traitements de données décrits ci-dessous. Pour toute question, contactez : ",
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
            "Chaque type de donnée a sa durée de conservation, appliquée chaque nuit par une suppression automatique. Ces durées sont en cours de validation.",
          ],
          [
            "Saisies du patient, notes du praticien et carnet de consultation : tant que le patient se connecte, tout son historique est conservé. Une donnée de plus de 5 ans est supprimée lorsque le patient ne s'est pas connecté depuis un an. Rien n'est supprimé pendant qu'un suivi est en pause.",
          ],
          [
            "Journal d'audit des accès aux données : 10 ans.",
          ],
          [
            "Données de l'assistant IA (compteurs d'usage, avis sur les réponses), demandes de support et journal du prestataire de paiement : 13 mois. La copie d'une demande de support reçue par e-mail est effacée chaque mois.",
          ],
          [
            "Journaux des notifications : 1 an. Invitations expirées : 30 jours.",
          ],
          [
            "Fin d'abonnement : le compte du praticien passe en lecture seule pendant 90 jours s'il n'a jamais été abonné, 3 ans s'il l'a été. À ce terme, ses suivis sont effacés, après un message de prévenance au praticien et au patient. Un module qu'un autre praticien suit reste.",
          ],
          [
            "Sur demande, un compte et ses données sont effacés sans attendre ces durées (voir « Vos droits »).",
          ],
        ] as Segment[][],
      },
      {
        heading: "Hébergement",
        lines: [
          [
            "Pendant la bêta, la base de données est hébergée chez Supabase, dans un centre de données situé à Paris (Amazon Web Services, région eu-west-3), et le serveur de l'application chez Render, à Francfort.",
          ],
          [
            "Avant la commercialisation, les données de santé seront hébergées chez un hébergeur certifié Hébergeur de Données de Santé (HDS), au sens de l'article L.1111-8 du Code de la santé publique.",
          ],
        ] as Segment[][],
      },
      {
        heading: "Sous-traitants",
        lines: [
          [
            "Orekio fait appel aux prestataires suivants, chacun pour une tâche précise :",
          ],
          [
            "Supabase : base de données, authentification et photos de profil (Paris).",
          ],
          [
            "Render : serveur de l'application (Francfort).",
          ],
          [
            "Resend : envoi des e-mails (invitations, réinitialisation du mot de passe, état du compte), depuis l'Union européenne.",
          ],
          [
            "Expo et Google Firebase : acheminement des notifications de rappel vers le téléphone du patient. [À compléter : localisation et garanties de transfert.]",
          ],
          [
            "Stripe : paiement de l'abonnement du praticien. Stripe ne reçoit aucune donnée de santé. [À compléter : localisation et garanties de transfert.]",
          ],
          [
            "Anthropic : assistant IA du praticien (voir la section suivante).",
          ],
        ] as Segment[][],
      },
      {
        heading: "Assistant IA du praticien",
        lines: [
          [
            "Dans l'application web, le praticien peut poser des questions à un assistant IA sur l'utilisation d'Orekio. L'assistant s'appuie sur un modèle d'Anthropic, qui agit comme sous-traitant. Il est réservé aux praticiens : l'application du patient n'en comporte pas.",
          ],
          [
            "Orekio n'envoie jamais à l'IA les données des patients : ni nom, ni saisies, ni scores, ni notes. Quand le praticien demande une information sur un patient, c'est Orekio qui la lit et l'affiche ; elle ne part jamais vers le modèle. Le modèle reçoit le guide d'utilisation, le nom de l'écran ouvert, la date du jour et la question du praticien, dont les noms et adresses e-mail sont retirés avant l'envoi. Il est demandé au praticien de ne saisir aucune donnée de patient dans ses questions.",
          ],
          [
            "Anthropic est situé aux États-Unis. Le transfert est encadré par les clauses contractuelles types de la Commission européenne, intégrées à son contrat de sous-traitance. [À compléter : durée de conservation des requêtes chez Anthropic, ou suppression dès la réponse si elle est accordée.]",
          ],
          [
            "Orekio ne conserve ni les questions ni les réponses : la conversation n'existe que dans le navigateur du praticien et s'efface quand il ferme la fenêtre de l'assistant. Orekio conserve 13 mois, sans aucun texte, le nombre de questions de chaque praticien, leur coût, le type de chaque réponse et l'avis donné par le praticien. Si le praticien choisit de signaler une question restée sans réponse, son texte est transmis à l'équipe comme une demande de support.",
          ],
          [
            "Chaque réponse indique si elle a été rédigée par l'IA ou affichée par Orekio.",
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
            "Le service, sa marque et ses contenus restent la propriété exclusive de Orekio. Les données saisies par les utilisateurs (agenda du sommeil, réponses aux échelles, etc.) restent leur propriété.",
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
        heading: "6. Assistant IA",
        lines: [
          [
            "Le service comprend, pour les praticiens et dans l'application web, un assistant IA qui aide à utiliser Orekio : il explique l'application et le calcul d'un score, guide pas à pas, ouvre un écran et prépare certaines actions.",
          ],
          [
            "L'assistant ne donne aucun avis clinique, n'interprète aucune donnée et ne recommande aucun module. Ses réponses peuvent comporter des erreurs ; l'appréciation clinique reste celle du praticien.",
          ],
          [
            "Aucune action préparée par l'assistant n'est enregistrée sans que le praticien clique sur « Confirmer ». Le praticien reste responsable des actions qu'il confirme.",
          ],
          [
            "Le praticien s'engage à ne saisir dans l'assistant aucune donnée permettant d'identifier un patient, ni aucune donnée de santé.",
          ],
          [
            "Pendant la bêta, l'assistant peut être ouvert à une partie des praticiens seulement, limité en nombre de questions, ou suspendu à tout moment.",
          ],
          [
            "Le traitement des données lié à l'assistant est décrit dans la ",
            { href: "/fr/confidentialite", text: "politique de confidentialité" },
            ".",
          ],
        ] as Segment[][],
      },
      {
        heading: "7. Durée et résiliation",
        lines: [
          [
            "[À compléter : conditions de résiliation par l'utilisateur et par l'éditeur, sort des données après résiliation.]",
          ],
        ] as Segment[][],
      },
      {
        heading: "8. Données personnelles",
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
        heading: "9. Droit applicable",
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
