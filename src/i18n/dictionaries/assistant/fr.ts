import type { AssistantPageCopy, DemoAnswer, Fact } from "./types";

const patientFact: Fact = { label: "Patient", value: "Camille Martin", chip: true };

const SCHEDULE: readonly Fact[] = [
  patientFact,
  { label: "Échelle", value: "PHQ-9" },
  { label: "Cadence", value: "Hebdomadaire" },
  { label: "Jour d'envoi", value: "Lundi" },
  { label: "Heure", value: "09:00" },
];
const ACTION_WORDS = { cancel: "Annuler", confirm: "Confirmer", done: "Action effectuée" };

const SCHEDULE_DONE: DemoAnswer = {
  kind: "action",
  title: "Programmer une échelle",
  facts: SCHEDULE,
  done: ACTION_WORDS.done,
};
const SCHEDULE_PENDING: DemoAnswer = {
  kind: "actionForm",
  title: "Programmer une échelle",
  facts: [patientFact],
  fields: [
    { question: "Quelle échelle ?", value: "PHQ-9" },
    { question: "À quelle cadence ?", value: "Hebdomadaire" },
    { question: "Quel jour ?", value: "Lundi" },
    { question: "À quelle heure ?", value: "09:00" },
  ],
  cancel: ACTION_WORDS.cancel,
  confirm: ACTION_WORDS.confirm,
};

const FREE: DemoAnswer = {
  kind: "text",
  text: "Le carnet de consultation rassemble les questions que le patient note entre deux rendez-vous. Vous le trouvez sur la vue d'ensemble de sa fiche.",
  bullets: ["les questions arrivent au fil de l'eau", "en fin de rendez-vous, vous écrivez le récapitulatif"],
  votes: ["Réponse utile", "Réponse pas utile"],
};
const STEPS: DemoAnswer = {
  kind: "steps",
  title: "Exporter ses données",
  steps: [
    { text: "Ouvrez « Mon profil »." },
    { text: "Dans la carte « Mes données », cliquez « Exporter mes données ».", show: "Montrer sur la page" },
    { text: "Choisissez le format : « Document lisible » ou « Données brutes (JSON) »." },
    { text: "Le fichier se télécharge ; son nom porte la date, jamais le nom d'un patient." },
  ],
  button: "Ouvrir mon profil",
};
const NIGHTS = [
    {
      day: "Nuit de dimanche à lundi 26 octobre",
      facts: [
        { label: "Heure où j'ai essayé de dormir", value: "23:10" },
        { label: "Nombre de fois réveillé(e)", value: "2" },
        { label: "Heure de mon dernier réveil", value: "06:45" },
      ],
    },
    {
      day: "Nuit de samedi à dimanche 25 octobre",
      facts: [
        { label: "Heure où j'ai essayé de dormir", value: "00:20" },
        { label: "Nombre de fois réveillé(e)", value: "0" },
        { label: "Heure de mon dernier réveil", value: "08:30" },
      ],
    },
  ];
const entriesOf = (days: typeof NIGHTS): DemoAnswer => ({
  kind: "entries",
  title: "Saisies : Agenda du sommeil",
  period: "Les 7 derniers jours",
  days,
  more: "Autres champs",
  button: "Ouvrir « Agenda du sommeil »",
});
const ENTRIES = entriesOf(NIGHTS);
/* Une seule nuit dans la fenêtre animée : la question reste visible au-dessus de la carte. */
const ENTRIES_DEMO = entriesOf(NIGHTS.slice(0, 1));
const VALUE: DemoAnswer = {
  kind: "value",
  title: "Humeur",
  lead: "Saisie du lundi 26 octobre 2026",
  value: "6",
  button: "Afficher sur le graphique",
};
const FIELD: DemoAnswer = {
  kind: "field",
  title: "PHQ-9",
  subtitle: "Score de l'échelle",
  facts: [
    { label: "Calcul", value: "Somme des 9 items" },
    { label: "Réponses par item", value: "De 0 à 3" },
    { label: "Items inversés", value: "Aucun" },
    { label: "Bornes du score", value: "De 0 à 27" },
  ],
};
const REFUSAL: DemoAnswer = {
  kind: "navigation",
  text: "Je ne peux pas analyser les données des patients. Les saisies sont consultables sur l'écran concerné.",
  button: "Ouvrir les échelles et questionnaires",
};

export const assistantFr: AssistantPageCopy = {
  pageTitle: "Assistant IA",
  metaDescription:
    "L'assistant IA d'Orekio explique l'app, guide pas à pas, retrouve une information et prépare un geste que vous confirmez. Il affiche, il ne conclut jamais, et Orekio n'envoie de lui-même au modèle aucune donnée de vos patients.",
  eyebrow: "Assistant IA du praticien",
  headingLine1: "Posez la question.",
  headingLine2: "Orekio vous montre.",
  lede: "Une fenêtre qui vous suit d'écran en écran. Elle explique l'app, guide pas à pas, retrouve une information et prépare un geste.",
  ledeStrong: "Elle affiche, elle ne conclut jamais, et Orekio n'envoie de lui-même au modèle aucune donnée de vos patients.",
  scope: "Sur l'app web du praticien. L'app du patient n'a pas d'assistant.",
  demo: {
    ariaLabel: "Démonstration de l'assistant",
    windowTitle: "Assistant IA",
    notice: "Vous échangez avec une IA. Ses réponses portent sur l'utilisation d'Orekio.",
    placeholder: "Posez votre question sur Orekio",
    waiting: "Réponse en cours",
    patientChip: "Camille M.",
    fictional: "Démonstration animée · patiente et données fictives",
    pickerLabel: "Choisir une démonstration",
    pause: "Mettre en pause",
    resume: "Reprendre",
    chart: {
      caption: "Fiche · Mon suivi quotidien",
      ariaLabel: "Courbe fictive de l'humeur sur sept jours, avec un repère sur le lundi 26 octobre",
      days: ["mar.", "mer.", "jeu.", "ven.", "sam.", "dim.", "lun."],
      marker: "26 oct. · 6",
    },
    scenes: [
      {
        label: "Programmer une échelle",
        question: "Programme le PHQ-9 tous les lundis à 9 h.",
        patient: true,
        answer: SCHEDULE_PENDING,
        after: SCHEDULE_DONE,
        toast: ACTION_WORDS.done,
      },
      { label: "Retrouver des saisies", question: "Ses nuits de la semaine ?", patient: true, answer: ENTRIES_DEMO },
      { label: "Pointer un graphique", question: "Quelle humeur a-t-elle notée lundi ?", patient: true, answer: VALUE, chart: true },
      { label: "Être guidé", question: "Comment exporter mes données ?", answer: STEPS },
      { label: "Comprendre un score", question: "Comment se calcule le score du PHQ-9 ?", answer: FIELD },
      { label: "Une question clinique", question: "Son score a monté, c'est inquiétant ?", patient: true, answer: REFUSAL },
    ],
  },
  capabilities: {
    eyebrow: "Ce qu'il sait faire",
    title: "Une réponse dessinée pour chaque question",
    description:
      "Le modèle ne rédige pas tout. Le plus souvent, il désigne : un parcours, un écran, un champ, une information. Orekio écrit alors la réponse avec ses propres libellés et lit les données lui-même, comme l'écran les lit.",
    tiles: [
      {
        tag: "Réponse libre",
        title: "Il explique l'app",
        description: "Une réponse courte, en texte brut, sur un écran, un module ou un réglage.",
        examples: [{ question: "À quoi sert le carnet de consultation ?", answer: FREE }],
      },
      {
        tag: "Navigation",
        title: "Il ouvre le bon écran",
        description: "Écran, onglet de la fiche, éditeur de note, carnet. Un bouton, et rien ne s'ouvre sans votre clic.",
        examples: [
          {
            question: "Je veux inviter un nouveau patient",
            answer: { kind: "navigation", text: "L'écran demandé s'ouvre par ce bouton.", button: "Ouvrir le formulaire d'invitation" },
          },
        ],
      },
      {
        tag: "Choix en puces",
        title: "Il demande lequel",
        description: "Quand un mot convient à plusieurs modules, des puces dans l'ordre alphabétique, jamais un ordre de pertinence.",
        examples: [
          {
            question: "Débloque l'ASRS",
            answer: {
              kind: "clarify",
              text: "Lequel de ces modules ?",
              options: [{ label: "ASRS v1.1, Bilan Complet" }, { label: "ASRS v1.1, Dépistage", selected: true }],
            },
          },
        ],
      },
      {
        tag: "Parcours guidé",
        title: "Il guide pas à pas",
        description: "Six parcours écrits avec les libellés exacts de l'écran. « Montrer sur la page » entoure le bouton concerné.",
        examples: [{ question: "Comment exporter mes données ?", answer: STEPS }],
      },
      {
        tag: "Saisies d'un module",
        title: "Il retrouve les saisies",
        description: "Sur 7, 30 ou 90 jours, avec les libellés que lit le patient. Une ligne par saisie, aucun total, aucun tri par valeur.",
        examples: [{ question: "Ses nuits de la semaine ?", patient: true, answer: ENTRIES }],
      },
      {
        tag: "Question d'échelle",
        title: "Il cite l'instrument",
        description: "La consigne, l'énoncé, chaque réponse et sa valeur, lus dans la configuration, avec la source.",
        examples: [
          {
            question: "Que dit la première question du PHQ-9 ?",
            answer: {
              kind: "item",
              title: "PHQ-9 · question 1 sur 10",
              instruction: "Au cours des 2 dernières semaines, selon quelle fréquence avez-vous été gêné(e) par les problèmes suivants ?",
              statement: "Peu d'intérêt ou de plaisir à faire les choses",
              options: [
                { value: "0", label: "Jamais" },
                { value: "1", label: "Plusieurs jours" },
                { value: "2", label: "Plus de la moitié du temps" },
                { value: "3", label: "Presque tous les jours" },
              ],
              citation: "PHQ-9, Kroenke, Spitzer & Williams, 2001",
            },
          },
        ],
      },
      {
        tag: "Valeur d'un jour",
        title: "Il pointe le graphique",
        description: "La valeur brute d'un jour, puis « Afficher sur le graphique » : la courbe de la fiche pose un repère sur ce jour.",
        width: "wide",
        examples: [{ question: "Quelle humeur a-t-elle notée lundi ?", patient: true, answer: VALUE, chart: true }],
      },
      {
        tag: "Définition d'un champ",
        title: "Il dit comment c'est calculé",
        description: "La formule, les réponses par item, les items inversés, les bornes. Jamais un seuil.",
        examples: [{ question: "Comment se calcule le score du PHQ-9 ?", answer: FIELD }],
      },
      {
        tag: "Comparaison",
        title: "Il compare des faits",
        description: "Deux ou trois modules côte à côte, habillés à l'identique. « Lequel choisir ? » reste un refus.",
        examples: [
          {
            question: "Compare le PHQ-9 et l'ASRS rapide",
            answer: {
              kind: "compare",
              title: "Comparaison des modules",
              columns: ["PHQ-9", "ASRS v1.1, Dépistage"],
              rows: [
                { label: "Type", values: ["Échelle", "Échelle"] },
                { label: "Questions", values: ["10", "6"] },
                { label: "Score", values: ["0 à 27", "0 à 24"] },
                { label: "Public", values: ["Adulte, Senior", "Adulte"] },
              ],
            },
          },
        ],
      },
      {
        tag: "Dépannage",
        title: "Il vérifie pour vous",
        description: "Module invisible, saisies absentes : chaque point est lu comme l'écran le lit, sans couleur selon l'état.",
        examples: [
          {
            question: "Elle ne voit pas la respiration",
            patient: true,
            answer: {
              kind: "check",
              title: "Module invisible : Techniques de respiration",
              points: [
                "Module débloqué le 14 octobre 2026",
                "Suivi actif",
                "Partage des saisies arrêté par le patient",
                "Dernière saisie : invisible tant que le partage est arrêté",
              ],
              button: "Ouvrir les modules",
            },
          },
        ],
      },
      {
        tag: "Je ne sais pas",
        title: "Il sait dire non",
        description: "Hors de son guide, il le dit. Vous pouvez signaler la question à l'équipe pour compléter l'aide.",
        examples: [
          {
            question: "Puis-je facturer une téléconsultation ?",
            answer: { kind: "unknown", text: "Je ne sais pas répondre à cette question.", report: "Signaler cette question à l'équipe" },
          },
        ],
      },
      {
        tag: "Action",
        title: "Il complète avec vous",
        description: "Une demande incomplète ouvre une carte qui pose les questions manquantes, pré-réglée sur ce que vous avez dit.",
        width: "full",
        examples: [
          {
            question: "Pose un rappel pour son agenda du sommeil, en semaine à 21 h",
            patient: true,
            answer: {
              kind: "actionForm",
              title: "Poser un rappel",
              facts: [patientFact],
              fields: [
                { question: "Quel module ?", value: "Agenda du sommeil" },
                {
                  question: "Quels jours ?",
                  days: [
                    { label: "L", selected: true },
                    { label: "M", selected: true },
                    { label: "Me", selected: true },
                    { label: "J", selected: true },
                    { label: "V", selected: true },
                    { label: "S", selected: false },
                    { label: "D", selected: false },
                  ],
                },
                { question: "À quelle heure ?", value: "21:00" },
              ],
              cancel: ACTION_WORDS.cancel,
              confirm: ACTION_WORDS.confirm,
            },
          },
          {
            question: "Programme le PHQ-9 tous les lundis à 9 h",
            patient: true,
            answer: SCHEDULE_DONE,
          },
        ],
      },
    ],
  },
  actions: {
    eyebrow: "Préparer un geste",
    title: "Il prépare. Vous confirmez.",
    description:
      "« Je veux poser un rappel » suffit. La carte demande ce qui manque et chaque réglage se corrige sur place. Rien ne s'écrit avant « Confirmer », par le même service que le bouton de l'écran, avec les mêmes gardes.",
    items: [
      { title: "Débloquer un module", description: "Pour le patient de la fiche, avec les mêmes conditions que le bouton de l'écran." },
      { title: "Programmer une échelle", description: "Cadence, jour d'envoi et heure, avec les options de l'écran." },
      { title: "Poser un rappel", description: "Les jours de la semaine et une heure fixe, sur le module choisi." },
      { title: "Modifier un rappel", description: "« 21:00 au lieu de 20:00 », sans tout reformuler." },
      { title: "Activer un module dans la bibliothèque", description: "Sans toucher au reste de votre liste." },
      { title: "Régler vos notifications", description: "Activer ou couper une notification du praticien." },
    ],
  },
  information: {
    eyebrow: "Retrouver une information",
    title: "La réponse vient de l'écran, pas du modèle",
    description:
      "Le modèle choisit une demande dans un catalogue fermé. La carte la lit comme l'écran la lit, pour le patient de la question. Ce qu'elle affiche ne repart jamais au modèle.",
    items: [
      "Modules débloqués",
      "Programmation des échelles",
      "Passations d'une échelle",
      "Dernière saisie reçue",
      "Saisies d'un module",
      "Valeur d'un jour",
      "Rappels d'un module",
      "Notes sur le patient",
      "File active",
      "Invitations en attente",
      "Modules de ma bibliothèque",
      "Mon abonnement",
    ],
  },
  privacy: {
    eyebrow: "Confidentialité",
    title: "Afficher, oui. Envoyer, non.",
    description:
      "Orekio ne transmet de lui-même au modèle ni le nom de vos patients, ni leurs saisies, ni leurs scores, ni vos notes. Quand vous demandez une information sur un patient, c'est Orekio qui la lit et l'affiche. Les noms de vos patients et de vos invités, et toute adresse e-mail, sont retirés de votre question deux fois avant l'envoi : dans le navigateur, puis sur le serveur.",
    typedTitle: "Ce que vous tapez",
    sentTitle: "Ce qui part",
    question: [
      { text: "Programme le PHQ-9 pour " },
      { text: "Camille Martin", replacedBy: "ce patient" },
      { text: " tous les lundis à 9 h, et préviens " },
      { text: "camille.m@exemple.fr", replacedBy: "cette adresse" },
    ],
    returnedTitle: "Ce qui revient",
    returned: "Une proposition dans une forme fermée, vérifiée par le serveur : programmer le PHQ-9, le lundi à 09:00. Le patient vient de la fiche ou de votre question, reconnu par Orekio, jamais du modèle.",
    receivedTitle: "Reçu par le modèle",
    received: "Les consignes, le guide d'usage, des listes fermées (modules, champs, parcours, actions), le nom de l'écran, le module affiché, si une fiche est ouverte, la date du jour et vos questions, sans les noms ni les adresses reconnus. Un second modèle contrôle la question et la réponse.",
    neverTitle: "Jamais transmis par Orekio",
    never: "L'adresse de la page, l'identifiant du patient, son nom, ses saisies, ses scores, ses notes, la liste de ce qu'il suit. Le résultat d'une carte reste dans votre navigateur.",
    limitTitle: "Une limite à connaître",
    limit: "Le reste de votre question part tel que vous l'écrivez. Aucun filtre ne reconnaît une situation clinique décrite en toutes lettres, ni un nom seul écrit en minuscules, mal orthographié ou absent de votre liste : n'écrivez pas de données de patient dans le champ.",
    provider: "Le modèle est fourni par Anthropic.",
    privacyLink: "Lire la politique de confidentialité",
  },
  goldenRule: {
    eyebrow: "Règle d'or",
    title: "Un carnet de bord, pas un avis clinique",
    description:
      "L'assistant parle de l'outil. Il ne lit pas un score à votre place, ne compare à aucune norme, ne recommande aucun module. Chaque valeur s'habille à l'identique, qu'elle soit basse ou haute.",
    doesTitle: "Ce qu'il fait",
    does: [
      "Montrer la valeur brute d'un jour, sans commentaire",
      "Expliquer comment un score se calcule et ses bornes",
      "Afficher une question d'échelle et ses réponses, avec sa source",
      "Comparer deux ou trois modules sur des faits : questions, bornes, public",
      "Ouvrir l'écran où l'information se lit",
    ],
    refusesTitle: "Ce qu'il refuse",
    refuses: [
      "Dire si un score est grave, inquiétant ou en progrès",
      "Donner un seuil, une norme ou une interprétation",
      "Conseiller quel module choisir pour un patient",
      "Analyser les saisies d'un patient",
      "Colorer une donnée selon sa valeur",
    ],
    example: { question: "Son score au PHQ-9 a monté, c'est inquiétant ?", answer: REFUSAL },
  },
  safeguards: {
    eyebrow: "Garde-fous",
    title: "Prévisible, sobre, sous contrôle",
    description: "Une IA dans un carnet de bord se juge à ce qu'elle ne peut pas faire. Voici ce que l'app garantit.",
    items: [
      { title: "Rien sans votre clic", description: "Aucun écran ne s'ouvre, aucun élément ne s'éclaire, rien ne s'écrit sans un geste de votre part." },
      { title: "Texte brut seulement", description: "Aucune balise, image ni lien venu du modèle n'est interprété." },
      { title: "Filtre de sortie", description: "Une réponse libre hors cadre est retirée avant d'être lue : « Cette réponse ne peut pas être affichée. »" },
      { title: "Mention IA", description: "« Vous échangez avec une IA », en tête de la conversation." },
      { title: "Aucun texte conservé", description: "Orekio ne garde ni vos questions ni les réponses, seulement des compteurs sans texte, sauf une question que vous choisissez de signaler. La conversation vit dans l'onglet et la croix l'efface." },
      { title: "Vos retours", description: "Deux pouces sous une réponse rendue, utile ou pas, en un geste." },
      { title: "Question signalée", description: "Sous un « je ne sais pas », vous relisez le texte et décidez de l'envoyer à l'équipe." },
      { title: "Toujours là", description: "Déplaçable, réductible en pilule, la fenêtre vous suit d'un écran à l'autre." },
    ],
  },
  teaser: {
    eyebrow: "Assistant IA",
    title: "Une question sur l'app ? Posez-la.",
    description:
      "Une fenêtre explique l'app, guide pas à pas, retrouve une information et prépare un geste que vous confirmez. Elle affiche, elle ne conclut jamais, et Orekio n'envoie de lui-même au modèle aucune donnée de vos patients.",
    link: "Découvrir l'assistant",
  },
};
