// Questionnaire bêta, repris du formulaire Tally RWKD24. Chaque réponse est
// enregistrée sous l'`id` de sa question ; les choix sont stockés par leur
// libellé, lisible tel quel dans la table. Changer un libellé ou un id change
// le sens des réponses déjà reçues : relever alors FORM_VERSION.
export const FORM_VERSION = "2026-10-15";

export type Condition = { id: string; anyOf: string[] };

type Base = {
  id: string;
  label: string;
  help?: string;
  required?: boolean;
  showIf?: Condition;
};

export type Question =
  | (Base & { type: "single"; options: string[] })
  | (Base & { type: "multi"; options: string[] })
  | (Base & { type: "text"; long?: boolean })
  | (Base & { type: "number"; suffix?: string })
  | (Base & { type: "email" })
  | (Base & {
      type: "scale";
      min: number;
      max: number;
      minLabel: string;
      maxLabel: string;
    })
  | (Base & { type: "matrix"; rows: string[]; columns: string[] });

export type Section = {
  id: string;
  title: string;
  intro?: string;
  /** Page sautée quand la condition n'est pas remplie. */
  showIf?: Condition;
  questions: Question[];
};

const MODULES = [
  "Mon plan de sécurité",
  "Agenda du sommeil",
  "Mon suivi quotidien",
  "Nommer ce que je ressens",
  "Activation comportementale",
  "Colonnes de Beck",
  "Techniques de respiration",
  "Questionnaire PHQ-9",
];

const NOTE_1_5 = ["1", "2", "3", "4", "5", "Pas testé"];

export const sections: Section[] = [
  {
    id: "vous",
    title: "Vous",
    questions: [
      {
        id: "metier",
        type: "single",
        label: "Votre métier",
        required: true,
        options: ["IPA", "Psychologue", "Psychiatre", "IDE", "Autre"],
      },
      {
        id: "exercice",
        type: "single",
        label: "Votre mode d'exercice",
        required: true,
        options: ["CMP ou hôpital", "Libéral", "Mixte"],
      },
      {
        id: "file_active",
        type: "single",
        label: "Combien de patients suivez-vous actuellement (file active) ?",
        required: true,
        options: [
          "Moins de 30",
          "30 à 80",
          "80 à 150",
          "Plus de 150",
          "Je ne sais pas",
        ],
      },
      {
        id: "teste",
        type: "single",
        label: "Qu'avez-vous testé ?",
        required: true,
        options: [
          "Application web (praticien)",
          "Application mobile (patient)",
          "Les deux",
        ],
      },
    ],
  },
  {
    id: "site",
    title: "Le site orekio.fr",
    intro: "À remplir après avoir lu le site, avant d'ouvrir l'application.",
    questions: [
      {
        id: "site_lu",
        type: "single",
        label: "Avez-vous lu le site avant de tester l'application ?",
        required: true,
        options: ["Oui", "Non"],
      },
    ],
  },
  {
    id: "comprehension",
    title: "Votre compréhension du site",
    showIf: { id: "site_lu", anyOf: ["Oui"] },
    questions: [
      {
        id: "site_mots",
        type: "text",
        long: true,
        label:
          "Avec vos propres mots et sans relire le site : qu'est-ce qu'Orekio, à quoi sert-il et à qui s'adresse-t-il ?",
        help: "Une ou deux phrases suffisent.",
        required: true,
      },
      {
        id: "site_clarte",
        type: "scale",
        label:
          "Le site vous a-t-il permis de comprendre clairement à quoi sert l'outil ?",
        min: 1,
        max: 5,
        minLabel: "Pas du tout",
        maxLabel: "Tout à fait",
        required: true,
      },
    ],
  },
  {
    id: "modules",
    title: "Les modules",
    intro:
      "Vous pouvez maintenant utiliser l'application. Une ligne par module.",
    questions: [
      {
        id: "modules_clarte",
        type: "matrix",
        label:
          "Clarté : notez la clarté du nom et des consignes de chaque module",
        help: "1 = pas clair du tout, 5 = très clair",
        rows: MODULES,
        columns: NOTE_1_5,
      },
      {
        id: "modules_clarte_commentaire",
        type: "text",
        long: true,
        label: "Un commentaire sur la clarté d'un module ?",
        help: "Facultatif. Précisez le module concerné : un nom ambigu, une consigne difficile à suivre, un mot qui pose problème...",
      },
      {
        id: "modules_utilite",
        type: "matrix",
        label: "Utilité : notez l'utilité de chaque module pour votre pratique",
        help: "1 = inutile, 5 = très utile",
        rows: MODULES,
        columns: NOTE_1_5,
      },
      {
        id: "modules_utilite_commentaire",
        type: "text",
        long: true,
        label: "Un commentaire sur l'utilité d'un module ?",
        help: "Facultatif. Précisez le module concerné : pour quels patients il vous servirait, ce qui le rendrait plus utile...",
      },
    ],
  },
  {
    id: "impression",
    title: "Votre impression",
    questions: [
      {
        id: "temps_comprehension",
        type: "single",
        label:
          "Au bout de combien de temps avez-vous compris à quoi servait l'application ?",
        required: true,
        options: [
          "Tout de suite",
          "Après quelques minutes",
          "Après un bon moment",
          "Je ne suis pas sûr d'avoir compris",
        ],
      },
      {
        id: "besoin_aide",
        type: "single",
        label: "Avez-vous eu besoin d'aide pour démarrer ?",
        required: true,
        options: ["Non", "Un peu", "Oui"],
      },
      {
        id: "aide_moment",
        type: "text",
        label: "À quel moment avez-vous eu besoin d'aide ?",
        showIf: { id: "besoin_aide", anyOf: ["Un peu", "Oui"] },
      },
      {
        id: "correspondance_site",
        type: "single",
        label:
          "Après avoir utilisé l'application web et l'application mobile, l'outil correspondait-il à ce que vous aviez compris du site ?",
        required: true,
        options: [
          "Tout à fait",
          "En grande partie",
          "En partie",
          "Pas du tout",
          "Je n'ai pas lu le site",
        ],
      },
      {
        id: "difference",
        type: "text",
        long: true,
        label: "Qu'est-ce qui était différent, en mieux ou en moins bien ?",
      },
      {
        id: "plu",
        type: "text",
        long: true,
        label: "Qu'est-ce qui vous a plu le plus ?",
      },
      {
        id: "gene",
        type: "text",
        long: true,
        label: "Qu'est-ce qui vous a gêné, paru inutile ou incompris ?",
        help: "Un module, un mot, un écran...",
      },
      {
        id: "une_chose",
        type: "text",
        long: true,
        label: "Si vous ne pouviez changer qu'une chose, laquelle ?",
      },
      {
        id: "manque",
        type: "text",
        long: true,
        label: "Quel module ou quelle fonctionnalité manque selon vous ?",
      },
    ],
  },
  {
    id: "pratique",
    title: "Dans votre pratique",
    questions: [
      {
        id: "outils_actuels",
        type: "multi",
        label:
          "Qu'utilisez-vous aujourd'hui pour ces usages (exercices, suivi entre les consultations, psychoéducation) ?",
        required: true,
        options: ["Papier", "Une autre application", "Rien", "Autre"],
      },
      {
        id: "autre_application",
        type: "text",
        label: "Quelle application utilisez-vous ?",
        showIf: { id: "outils_actuels", anyOf: ["Une autre application"] },
      },
      {
        id: "aise_numerique",
        type: "scale",
        label:
          "Êtes-vous à l'aise avec l'idée de proposer des outils de soin (exercices, suivi, psychoéducation) sous forme numérique plutôt que sur papier ?",
        min: 1,
        max: 5,
        minLabel: "Pas du tout",
        maxLabel: "Tout à fait",
        required: true,
      },
      {
        id: "aise_patients",
        type: "scale",
        label:
          "Vous sentiriez-vous à l'aise pour utiliser un outil comme celui-ci avec vos patients ?",
        min: 1,
        max: 5,
        minLabel: "Pas du tout",
        maxLabel: "Tout à fait",
        required: true,
      },
      {
        id: "reserves",
        type: "text",
        long: true,
        label:
          "Si vous avez des réserves sur le numérique dans le soin, lesquelles ?",
      },
      {
        id: "utiliserait",
        type: "single",
        label: "Utiliseriez-vous Orekio avec vos patients ?",
        required: true,
        options: ["Oui", "Peut-être", "Non"],
      },
      { id: "pourquoi", type: "text", long: true, label: "Pourquoi ?" },
      {
        id: "type_patients",
        type: "text",
        long: true,
        label: "Pour quel type de patients la proposeriez-vous en premier ?",
      },
      {
        id: "recommandation",
        type: "scale",
        label: "Recommanderiez-vous Orekio à un collègue ?",
        min: 0,
        max: 10,
        minLabel: "Pas du tout",
        maxLabel: "Certainement",
        required: true,
      },
    ],
  },
  {
    id: "prix",
    title: "Prix",
    intro:
      "En tant que professionnel, combien seriez-vous prêt à payer par mois pour un outil de ce type ?",
    questions: [
      {
        id: "prix_minimum",
        type: "number",
        suffix: "€ / mois",
        label:
          "Prix minimum, en dessous duquel l'outil ne vous paraîtrait pas sérieux",
      },
      {
        id: "prix_maximum",
        type: "number",
        suffix: "€ / mois",
        label: "Prix maximum que vous accepteriez de payer",
      },
    ],
  },
  {
    id: "fin",
    title: "Technique, et pour finir",
    questions: [
      {
        id: "bug",
        type: "text",
        long: true,
        label: "Avez-vous rencontré un bug, un plantage ou une lenteur ?",
        help: "Si oui : dans quelle application (web ou mobile), à quel endroit et sur quel appareil ?",
      },
      {
        id: "autre_chose",
        type: "text",
        long: true,
        label: "Autre chose à nous dire ?",
      },
      {
        id: "recontact",
        type: "single",
        label: "Acceptez-vous qu'on vous recontacte pour en discuter 15 minutes ?",
        required: true,
        options: ["Oui", "Non"],
      },
      {
        id: "email",
        type: "email",
        label: "Votre adresse mail",
        showIf: { id: "recontact", anyOf: ["Oui"] },
      },
    ],
  },
];
