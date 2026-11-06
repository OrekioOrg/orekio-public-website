import type { Segment } from "../segment";
import { OFFERS, VAT_PERCENT, eurFr as eur, exclVat } from "../../offers";
import { assistantFr } from "./assistant/fr";

/** Une carte de la page Tarifs. `note` : l'encart propre à l'offre. */
export interface PricingPlan {
  name: string;
  theme: "zelai" | "mendi";
  price: string;
  period: string;
  priceExclVat: string;
  features: string[];
  note: { label: string; text: string };
}

const email: Segment = {
  href: "mailto:contact@orekio.app",
  text: "contact@orekio.app",
  external: true,
};

export const fr = {
  assistantPage: assistantFr,
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
      `${OFFERS.founders.freeMonths} mois gratuits sans carte bancaire et un tarif fondateurs, réservés aux ${OFFERS.founders.seats} premiers inscrits.`,
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
          alt: "La vue d'ensemble d'un patient fictif : ses modules et les jours où il a noté quelque chose.",
        },
        {
          src: "praticien-armoire.png",
          height: 1000,
          eyebrow: "Choisir les outils",
          title: "Vous ouvrez l'accès aux modules au fil des consultations.",
          text: "Chaque outil s'ouvre une fois travaillé ensemble, et se retire à tout moment.",
          alt: "La liste des modules ouverts pour un patient fictif.",
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
            "Le partage de ses saisies est actif par défaut et vous parvient en continu. Il peut l'arrêter ou effacer ses données quand il le souhaite. Vous pouvez retirer un outil à tout moment.",
        },
      ],
    },
  },

  pricing: {
    pageTitle: "Tarifs",
    metaDescription:
      `Zelai : ${eur(OFFERS.zelai.month)} TTC par mois, jusqu'à ${OFFERS.zelai.maxPatients} patients. Mendi : ${eur(OFFERS.mendi.month)} TTC par mois, patients illimités. Fondateurs, les ${OFFERS.founders.seats} premiers inscrits : ${eur(OFFERS.founders.zelai.month)} et ${eur(OFFERS.founders.mendi.month)} TTC par mois à vie, ${OFFERS.founders.freeMonths} mois gratuits sans carte bancaire.`,
    metaDescriptionProvisional:
      `Deux offres au contenu identique, Zelai jusqu'à ${OFFERS.zelai.maxPatients} patients et Mendi illimité, et une offre Fondateurs pour les ${OFFERS.founders.seats} premiers inscrits, ${OFFERS.founders.freeMonths} mois gratuits sans carte bancaire.`,
    eyebrow: "Tarifs",
    plans: [
      {
        name: "Zelai",
        theme: "zelai",
        price: eur(OFFERS.zelai.month),
        period: "TTC / mois",
        priceExclVat: `${eur(exclVat(OFFERS.zelai.month))} HT / mois`,
        features: [
          `Jusqu'à ${OFFERS.zelai.maxPatients} patients suivis`,
          "Tous les modules et échelles",
        ],
        note: {
          label: "Fondateurs :",
          text: `${eur(OFFERS.founders.zelai.month)} TTC / mois à vie (${eur(exclVat(OFFERS.founders.zelai.month))} HT), ${OFFERS.founders.seats} places`,
        },
      },
      {
        name: "Mendi",
        theme: "mendi",
        price: eur(OFFERS.mendi.month),
        period: "TTC / mois",
        priceExclVat: `${eur(exclVat(OFFERS.mendi.month))} HT / mois`,
        features: [
          "Patients suivis illimités",
          "Tous les modules et échelles",
        ],
        note: {
          label: "Fondateurs :",
          text: `${eur(OFFERS.founders.mendi.month)} TTC / mois à vie (${eur(exclVat(OFFERS.founders.mendi.month))} HT), ${OFFERS.founders.seats} places`,
        },
      },
    ] as PricingPlan[],
    details: [
      {
        label: "Essai",
        text: `Pour les ${OFFERS.founders.seats} premiers inscrits, ${OFFERS.founders.freeMonths} mois gratuits sans carte bancaire. Ensuite, ${OFFERS.freeMonths} mois gratuit, carte enregistrée à l'inscription, sans débit pendant l'essai. Si vous ne poursuivez pas, votre compte passe en lecture seule pendant 90 jours, le temps d'exporter, puis vos données patients sont supprimées. Nous vous prévenons 15 jours avant.`,
      },
      {
        label: "Zelai et Mendi",
        text: `Le même produit : seul le nombre de patients suivis change, et un suivi mis en pause libère sa place. Sans engagement, résiliables à tout moment. Ou à l'année, un mois offert : ${eur(OFFERS.zelai.year)} TTC pour Zelai, ${eur(OFFERS.mendi.year)} TTC pour Mendi. Zelai signifie « prairie » en basque, Mendi « montagne ».`,
      },
      {
        label: "Fondateurs",
        text: `Pour les ${OFFERS.founders.seats} premiers inscrits, sur Zelai comme sur Mendi. Tarif acquis à vie dès le premier paiement, au mois ou à l'année (${eur(OFFERS.founders.zelai.year)} TTC pour Zelai, ${eur(OFFERS.founders.mendi.year)} TTC pour Mendi), avec un canal direct avec l'équipe. Sans abonnement à la fin des ${OFFERS.founders.freeMonths} mois, le tarif reste réservé ${OFFERS.founders.graceDays} jours, puis il est perdu définitivement. Il vaut pour un seul praticien : ajouter un siège fait passer au tarif public.`,
      },
    ],
    included: {
      title: "Inclus dans toutes les offres",
      items: [
        "Espace web praticien",
        "Application patient gratuite",
        "Tous les modules et toutes les échelles",
        "Historique complet et export",
        "Support par email",
      ],
    },
    subscribeButton: "Essayer gratuitement",
    footerNote: [
      `Prix TTC, TVA de ${VAT_PERCENT} % incluse. Vous représentez une structure ? `,
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
      "Les saisies de vos patients sont des données de santé au sens de l'article 9 du RGPD. Le patient peut arrêter leur partage, et demander l'export ou l'effacement de ses données à tout moment. Aujourd'hui, l'hébergement de l'application n'est pas certifié données de santé (HDS) ; le passage à un hébergeur certifié est en préparation.",
  },

  contact: {
    pageTitle: "Contact",
    metaDescription:
      "Contactez l'équipe Orekio pour une question ou une démonstration.",
    eyebrow: "Contact",
    heading: "Une question, ou envie d'une démonstration ?",
    description: [
      "Écrivez-nous en une ligne : votre métier, et ce que vous attendez d'Orekio. Nous répondons personnellement. Pour commencer tout de suite, le compte se crée sur ",
      { href: "https://orekio.app", text: "orekio.app", external: true },
      ".",
    ] as Segment[],
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
            "Application et données de santé : Supabase (base de données, Amazon Web Services, Paris) et Render (serveur, Francfort). Cet hébergement n'est pas certifié Hébergeur de Données de Santé (HDS) au sens de l'article L.1111-8 du Code de la santé publique ; le passage à un hébergeur certifié est en préparation (voir la page ",
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
            "Les données de suivi sont traitées pour la seule finalité de faciliter le suivi thérapeutique entre le patient et son praticien. Le partage des saisies avec le praticien est actif par défaut, et le patient peut l'arrêter à tout moment depuis son profil. Ces données sont restituées brutes au praticien, avec les scores calculés, sans interprétation : l'analyse clinique lui revient.",
          ],
        ] as Segment[][],
      },
      {
        heading: "Durée de conservation",
        lines: [
          [
            "Chaque type de donnée a sa durée de conservation, appliquée chaque nuit par une suppression automatique. Toute modification de ces durées sera publiée ici.",
          ],
          [
            "Saisies du patient, notes du praticien et carnet de consultation : tant que le patient se connecte, tout son historique est conservé. Une donnée de plus de 5 ans est supprimée lorsque le patient ne s'est pas connecté depuis un an. Aucune saisie ni note n'est supprimée pour inactivité pendant qu'un suivi est en pause.",
          ],
          [
            "Journal d'audit des accès aux données : 10 ans.",
          ],
          [
            "Données de l'assistant IA (compteurs d'usage, avis sur les réponses), demandes de support et journal du prestataire de paiement : 13 mois. La copie e-mail d'une demande de support traitée est effacée chaque mois.",
          ],
          [
            "Journaux des notifications : 1 an. Invitations expirées : 30 jours.",
          ],
          [
            "Fin d'abonnement : le compte du praticien passe en lecture seule pendant 90 jours s'il n'a jamais payé, 3 ans sinon. À ce terme, ses suivis sont effacés. Le praticien est prévenu avant, et le patient aussi lorsque tous ses praticiens sont concernés. Un module qu'un autre praticien suit reste. Au lancement, un compte resté en attente de sa carte, sans droit ni patient, est effacé après 30 jours.",
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
            "La base de données est hébergée chez Supabase, dans un centre de données situé à Paris (Amazon Web Services, région eu-west-3), et le serveur de l'application chez Render, à Francfort.",
          ],
          [
            "Cet hébergement n'est pas certifié Hébergeur de Données de Santé (HDS) au sens de l'article L.1111-8 du Code de la santé publique. Le passage à un hébergeur certifié est en préparation ; cette page dira son nom et sa date.",
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
            "Resend : envoi des e-mails (invitations, réinitialisation du mot de passe, état du compte, demandes de support et questions signalées), depuis l'Union européenne.",
          ],
          [
            "Expo et Google Firebase, et Apple pour les iPhone : acheminement des notifications (rappels, récapitulatifs du carnet) vers le téléphone du patient. Ces prestataires sont situés aux États-Unis ; pour Expo et Firebase, le transfert est encadré par les clauses contractuelles types de la Commission européenne, prévues dans leurs conditions.",
          ],
          [
            "Stripe : paiement de l'abonnement du praticien. Stripe ne reçoit aucune donnée de santé. En Europe, le contrat est conclu avec sa société irlandaise ; les transferts vers les États-Unis sont encadrés par le Data Privacy Framework et, à défaut, par les clauses contractuelles types.",
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
            "Orekio n'envoie de lui-même à l'IA aucune donnée des patients : ni nom, ni saisies, ni scores, ni notes. Quand le praticien demande une information sur un patient, c'est Orekio qui la lit et l'affiche ; elle ne part jamais vers le modèle. Le modèle reçoit le guide d'utilisation, le catalogue des modules et des champs, le nom de l'écran ouvert, le module affiché, le fait qu'une fiche est ouverte (sans dire laquelle), la date du jour, et les questions de la conversation. Un second modèle d'Anthropic contrôle la question et toute réponse libre avant l'affichage. Les noms des patients et des invités qu'Orekio reconnaît, et toute adresse e-mail, sont retirés des questions avant l'envoi. Le reste part tel qu'il est écrit : une situation clinique décrite en toutes lettres, ou un nom seul écrit en minuscules, mal orthographié ou absent de la liste, n'est pas reconnu. Il est demandé au praticien de ne pas écrire de données de patient dans ses questions, hormis le nom complet ou l'alias pour préparer un geste.",
          ],
          [
            "Anthropic est situé aux États-Unis. Le transfert est encadré par les clauses contractuelles types de la Commission européenne, intégrées à son contrat de sous-traitance. Anthropic a confirmé appliquer à Orekio la conservation zéro : les requêtes et les réponses ne sont pas conservées une fois la réponse rendue, et ne servent pas à entraîner ses modèles. Anthropic prévoit deux exceptions : une obligation légale, et la lutte contre les abus, pour laquelle un contenu signalé peut être gardé jusqu'à deux ans et le résultat de ses contrôles de sécurité est conservé.",
          ],
          [
            "Orekio ne conserve ni les questions ni les réponses : la conversation n'existe que dans le navigateur du praticien et s'efface quand il ferme la fenêtre de l'assistant. Orekio conserve 13 mois, sans aucun texte, le nombre de questions de chaque praticien, leur coût, un identifiant de conversation, le type et le sujet de chaque réponse (des listes fermées) et l'avis donné par le praticien. Si le praticien choisit de signaler une question restée sans réponse, son texte est transmis à l'équipe comme une demande de support.",
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
            "Le praticien crée son compte lui-même. Il déclare son titre professionnel, accepte les présentes CGU et confirme son adresse e-mail. La double authentification lui est proposée. Il garantit exercer légalement la profession déclarée ; Orekio peut lui en demander la preuve.",
          ],
          [
            "Le praticien accède au service sur abonnement (voir la page ",
            { href: "/fr/tarifs", text: "Tarifs" },
            "). Le service s'adresse à lui en tant que professionnel.",
          ],
          [
            "Le patient ne s'inscrit pas seul : il accède au service sur invitation de son praticien, sans frais. Il peut arrêter à tout moment le partage de ses saisies. Le plan de sécurité construit à deux et le carnet de consultation restent visibles du praticien.",
          ],
          [
            "Lorsque le patient est mineur, le praticien recueille les consentements requis auprès de lui et des titulaires de l'autorité parentale avant de l'inviter.",
          ],
        ] as Segment[][],
      },
      {
        heading: "3. Obligations des utilisateurs",
        lines: [
          [
            "Le praticien s'engage à utiliser Orekio dans le seul cadre d'un suivi thérapeutique réel, et avec le consentement de son patient. Orekio ne remplace pas le dossier du patient, que le praticien tient selon ses obligations professionnelles. Le patient s'engage à fournir des informations sincères.",
          ],
          [
            "Chacun garde ses identifiants confidentiels, n'utilise que son propre compte et prévient Orekio sans délai s'il soupçonne un accès non autorisé (",
            email,
            ").",
          ],
          [
            "Sont interdits : l'accès aux données d'une personne sans droit, le contournement des mesures de sécurité ou des limites du service, l'extraction automatisée de données, la copie du service, et tout usage contraire à la loi.",
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
            "Orekio restitue les données saisies telles quelles et ne se substitue à aucun avis médical. Le praticien reste seul juge de leur lecture et des décisions de soin.",
          ],
          [
            "Orekio n'est pas un service d'urgence : personne ne surveille les saisies en temps réel, et aucune saisie ne déclenche d'alerte. La cloche du praticien signale seulement certains actes, sans leur contenu. En cas d'urgence, appelez le 15 ou le 112 ; en cas de pensées suicidaires, le 3114.",
          ],
          [
            "Orekio met en œuvre des moyens raisonnables pour que le service reste disponible et sûr, sans garantir une disponibilité continue : une maintenance ou une panne peut l'interrompre. Sur le téléphone, le patient peut continuer à saisir hors connexion.",
          ],
          [
            "Orekio répond de ses manquements dans les conditions du droit commun. Envers le praticien, sa responsabilité se limite aux dommages directs et prévisibles. Rien dans ces CGU n'exclut la responsabilité d'Orekio en cas de faute lourde ou intentionnelle, ni dans les cas où la loi interdit de la limiter. Aucune partie ne répond d'un manquement dû à un cas de force majeure (article 1218 du Code civil).",
          ],
        ] as Segment[][],
      },
      {
        heading: "6. Assistant IA",
        lines: [
          [
            "Le service comprend, pour les praticiens et dans l'application web, un assistant IA qui aide à utiliser Orekio : il explique l'application et le calcul d'un score, guide pas à pas, propose d'ouvrir un écran et prépare certaines actions.",
          ],
          [
            "L'assistant est paramétré et filtré pour ne donner aucun avis clinique, n'interpréter aucune donnée et ne recommander aucun module. Ses réponses peuvent comporter des erreurs ; l'appréciation clinique reste celle du praticien.",
          ],
          [
            "Aucune action préparée par l'assistant n'est enregistrée sans que le praticien clique sur « Confirmer ». Le praticien reste responsable des actions qu'il confirme.",
          ],
          [
            "Le praticien s'engage à ne décrire dans l'assistant aucune situation clinique ni aucune donnée de santé. Pour préparer un geste, il peut désigner un patient par son nom complet ou son alias, qu'Orekio retire de la question.",
          ],
          [
            "Le nombre de questions est limité. L'assistant peut être suspendu à tout moment.",
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
            "Les présentes CGU s'appliquent tant que le compte existe.",
          ],
          [
            "Le patient peut supprimer son compte et ses données à tout moment (voir la page ",
            { href: "/fr/account-deletion", text: "Suppression de compte" },
            ").",
          ],
          [
            "Le praticien peut résilier son abonnement à tout moment depuis l'application, avec effet à la fin de la période payée. Il peut demander la fermeture de son compte en écrivant à ",
            email,
            ".",
          ],
          [
            "À la fin de l'essai, après une résiliation ou un impayé définitif, le compte du praticien passe en lecture seule : les données sont conservées intactes, il peut les lire et les exporter, et il peut réactiver son abonnement. Ce gel dure 90 jours pour un compte qui n'a jamais payé, 3 ans pour un ancien abonné. Le praticien est prévenu avant son terme.",
          ],
          [
            "Offre Fondateurs : les 100 premiers praticiens inscrits, sur Zelai ou Mendi, disposent de 2 mois gratuits sans carte bancaire. Une place est prise à la première confirmation de l'adresse e-mail, dans la limite des places restantes. À la fin de ces 2 mois, sans abonnement, le compte passe en lecture seule. Le tarif Fondateurs reste réservé 30 jours de plus ; passé cette date sans abonnement, il est perdu définitivement, sans effet sur les données. Une place perdue n'est pas réattribuée. Dès le premier paiement, le tarif reste acquis à vie, y compris après une résiliation. Ce tarif vaut pour un abonnement à un seul siège : ajouter un siège fait passer au tarif public, définitivement.",
          ],
          [
            "Au terme du gel, les suivis du praticien sont effacés ; son compte reste, et un nouvel abonnement lui rend l'accès. Un patient suivi par un autre praticien perd sa relation avec celui-ci et les modules que lui seul suivait, avec leurs saisies ; un patient qui n'a plus aucun praticien est effacé. Un patient dont tous les praticiens sont gelés en est prévenu dans l'application dans les 30 jours qui précèdent, et peut exporter ses données.",
          ],
          [
            "Orekio peut suspendre ou fermer un compte en cas de manquement grave à ces CGU, après un avertissement, sauf urgence ou obligation légale. Orekio préviendra les utilisateurs avant toute fin définitive du service et leur laissera le temps d'exporter leurs données.",
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
            "Les présentes CGU sont soumises au droit français. En cas de litige, les parties cherchent d'abord une solution amiable, en écrivant à ",
            email,
            ".",
          ],
          [
            "À défaut d'accord, le litige relève des tribunaux français compétents. Un patient agissant comme consommateur peut saisir le tribunal du lieu de son domicile.",
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
