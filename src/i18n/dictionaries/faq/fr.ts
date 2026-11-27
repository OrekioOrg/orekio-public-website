import { OFFERS, VAT_PERCENT, eurFr as eur } from "../../../offers";
import type { FaqCopy } from "./types";

const { zelai, mendi, founders } = OFFERS;

export const faqFr: FaqCopy = {
  pageTitle: "Questions fréquentes",
  metaDescription:
    "Les réponses sur Orekio : outils, application du patient, données et hébergement, tarifs, essai gratuit et résiliation.",
  eyebrow: "FAQ",
  heading: "Vos questions, des réponses précises.",
  intro:
    "Ce que fait Orekio, ce qu'il ne fait pas, où vont les données et combien cela coûte.",
  categoriesLabel: "Thèmes",
  searchLabel: "Chercher dans les questions",
  searchPlaceholder: "Chercher : hébergement, rappels, essai…",
  resultOne: "{n} question trouvée",
  resultMany: "{n} questions trouvées",
  noResult: "Aucune question ne correspond. Essayez un autre mot, ou écrivez-nous.",
  contact: {
    title: "Votre question n'est pas là ?",
    text: [
      "Écrivez à ",
      { href: "mailto:contact@orekio.app", text: "contact@orekio.app", external: true },
      " : nous répondons personnellement.",
    ],
  },
  sections: [
    {
      id: "discover",
      title: "Découvrir Orekio",
      questions: [
        {
          id: "what-is-orekio",
          question: "Qu'est-ce qu'Orekio ?",
          answer: [
            ["Orekio est un carnet de bord numérique pour le suivi en santé mentale, entre les consultations. Il réunit un espace web pour vous et une application mobile pour votre patient."],
            ["Vous lui ouvrez des outils, il s'en sert chez lui, et vous en reparlez ensemble au rendez-vous suivant."],
          ],
        },
        {
          id: "who-is-it-for",
          question: "À qui s'adresse Orekio ?",
          answer: [
            ["Aux psychologues, psychiatres, infirmiers en pratique avancée, infirmiers et médecins généralistes qui suivent des patients en santé mentale."],
          ],
        },
        {
          id: "self-care",
          question: "Est-ce une application de bien-être ou d'autosoins ?",
          answer: [
            ["Non. C'est un outil partagé, dans lequel vous et votre patient travaillez ensemble. Un patient ne s'inscrit jamais seul : vous l'invitez, puis vous choisissez les outils qu'il reçoit."],
          ],
        },
        {
          id: "medical-device",
          question: "Orekio est-il un dispositif médical ?",
          answer: [
            ["Orekio est conçu comme un carnet de bord numérique, et non comme un dispositif médical. Il affiche un chiffre brut, un historique neutre, un score sans interprétation."],
            ["Aucun seuil, aucun signal, aucune comparaison à une norme. La lecture clinique vous appartient."],
          ],
        },
        {
          id: "practice-software",
          question: "Orekio remplace-t-il mon logiciel de cabinet ou le dossier patient ?",
          answer: [
            ["Non. Orekio ne gère ni votre agenda de rendez-vous ni votre facturation. Il ne remplace pas le dossier du patient, que vous tenez selon vos obligations professionnelles."],
            ["Il couvre ce qui se passe entre deux consultations."],
          ],
        },
        {
          id: "team",
          question: "Qui conçoit Orekio ?",
          answer: [
            [
              "Deux personnes : un infirmier en pratique avancée en psychiatrie, qui porte les choix cliniques, et un développeur, qui porte le produit. ",
              { href: "/fr/a-propos", text: "En savoir plus" },
              ".",
            ],
          ],
        },
      ],
    },
    {
      id: "practice",
      title: "En consultation",
      questions: [
        {
          id: "tools",
          question: "Quels outils puis-je confier à mon patient ?",
          answer: [
            ["Dès l'ouverture, sept modules : agenda du sommeil, suivi quotidien, colonnes de Beck, activation comportementale, nommer ce que je ressens, plan de sécurité et respiration. S'y ajoute le questionnaire PHQ-9."],
            [
              "Une trentaine de modules sont construits et s'ouvrent au fil des mois. ",
              { href: "/fr/fonctionnalites", text: "Voir les outils" },
              ".",
            ],
          ],
        },
        {
          id: "sources",
          question: "Sur quoi les outils s'appuient-ils ?",
          answer: [
            ["Ce sont des outils courants de la psychiatrie et de la psychologie. Chaque module cite les références scientifiques sur lesquelles il s'appuie."],
            ["Le PHQ-9 est fidèle mot pour mot à sa version française."],
          ],
        },
        {
          id: "getting-started",
          question: "Comment démarrer avec un premier patient ?",
          answer: [
            ["Vous créez votre compte sur le web, sans rien installer. Vous sécurisez votre compte avec la double authentification, puis vous invitez votre patient avec son adresse e-mail, seul champ obligatoire."],
            ["Vous pouvez choisir ses premiers outils dès l'invitation. Son lien d'inscription est valable 48 heures."],
          ],
        },
        {
          id: "choose-tools",
          question: "Puis-je choisir les outils de chaque patient ?",
          answer: [
            ["Oui. Chaque outil s'ouvre un à un, et se retire à tout moment. Ce qui a été saisi jusqu'au retrait reste consultable."],
            ["Avant d'ouvrir un outil, vous pouvez voir l'écran tel que votre patient le verra."],
          ],
        },
        {
          id: "interpretation",
          question: "Orekio interprète-t-il les saisies ou les scores ?",
          answer: [
            ["Non. Les saisies sont affichées telles que le patient les a faites. Le score d'une échelle est calculé et affiché en chiffre, sans libellé ni seuil. L'interprétation vous revient."],
          ],
        },
        {
          id: "alerts",
          question: "Suis-je alerté si un patient va mal ?",
          answer: [
            ["Non. Orekio n'est pas un service d'urgence : personne ne surveille les saisies en temps réel, et aucune saisie ne déclenche d'alerte."],
            ["En cas d'urgence, le patient appelle le 15 ou le 112 ; en cas de pensées suicidaires, le 3114."],
          ],
        },
        {
          id: "messaging",
          question: "Mon patient peut-il m'écrire entre deux rendez-vous ?",
          answer: [
            ["Orekio n'est pas une messagerie. Dans le carnet de consultation, votre patient note les questions qu'il veut vous poser : vous les retrouvez en tête de sa fiche, pour le rendez-vous suivant."],
            ["En fin de consultation, vous pouvez lui laisser un récapitulatif et des consignes, qu'il relit chez lui."],
          ],
        },
        {
          id: "reminders",
          question: "Puis-je programmer des rappels ?",
          answer: [
            ["Oui, sur les outils qui le permettent : vous choisissez les jours et l'heure. Votre patient peut décaler un rappel ou le mettre en pause, et vous voyez ce qu'il en a fait."],
            ["Un rappel ne dépend jamais de ce que le patient a noté, ou n'a pas noté."],
          ],
        },
        {
          id: "several-practitioners",
          question: "Un patient peut-il être suivi par plusieurs praticiens ?",
          answer: [
            ["Oui. Chacun l'invite, et le patient accepte ou refuse chaque invitation. Deux praticiens qui ont ouvert le même module lisent les mêmes saisies. Vos notes et votre carnet restent les vôtres."],
          ],
        },
        {
          id: "organisation",
          question: "Je représente une structure : comment faire ?",
          answer: [
            [
              { href: "/fr/contact", text: "Écrivez-nous" },
              " : nous vous rappelons sous 7 jours ouvrés.",
            ],
          ],
        },
        {
          id: "assistant",
          question: "À quoi sert l'assistant IA ?",
          answer: [
            ["Dans l'application web, il explique Orekio, guide pas à pas, retrouve une information et prépare une action que vous confirmez. Il ne donne aucun avis clinique."],
            [
              "Orekio n'envoie de lui-même au modèle aucune donnée de vos patients ; il vous est demandé de ne pas en écrire dans vos questions. ",
              { href: "/fr/assistant", text: "Découvrir l'assistant" },
              ".",
            ],
          ],
        },
      ],
    },
    {
      id: "patients",
      title: "Côté patient",
      questions: [
        {
          id: "patient-price",
          question: "Mon patient doit-il payer ?",
          answer: [
            ["Non. L'application est gratuite pour vos patients. Il n'y a qu'un abonnement, le vôtre."],
          ],
        },
        {
          id: "patient-sign-up",
          question: "Comment mon patient rejoint-il Orekio ?",
          answer: [
            ["Il reçoit votre invitation par e-mail. Le lien ouvre une page où il choisit son mot de passe ; il installe ensuite l'application et s'y connecte."],
          ],
        },
        {
          id: "phones",
          question: "Sur quels appareils Orekio fonctionne-t-il ?",
          answer: [
            ["L'application du patient existe pour iPhone et pour Android. Votre espace praticien s'utilise dans un navigateur, sans installation."],
          ],
        },
        {
          id: "offline",
          question: "L'application fonctionne-t-elle sans connexion ?",
          answer: [
            ["Oui, après une première connexion. Les saisies sont enregistrées sur le téléphone et partent au retour du réseau, sans que le patient ait rien à faire."],
          ],
        },
        {
          id: "sharing",
          question: "Mon patient peut-il arrêter de partager ses saisies ?",
          answer: [
            ["Oui, à tout moment, depuis ses réglages. Vous ne voyez alors plus ses saisies, y compris celles déjà reçues, jusqu'à ce qu'il rétablisse le partage. Vous en êtes prévenu."],
            ["Restent visibles le plan de sécurité, le carnet de consultation et ce que vous avez vous-même écrit."],
          ],
        },
        {
          id: "minors",
          question: "Puis-je utiliser Orekio avec un patient mineur ?",
          answer: [
            ["Oui, à condition de recueillir, avant de l'inviter, les consentements requis auprès de lui et des titulaires de l'autorité parentale."],
          ],
        },
        {
          id: "patient-deletion",
          question: "Comment un patient supprime-t-il son compte ?",
          answer: [
            ["Depuis l'application, dans Profil, « Mes données » : la suppression est immédiate et définitive. Il peut aussi la demander par e-mail."],
            [
              { href: "/fr/account-deletion", text: "La procédure en détail" },
              ".",
            ],
          ],
        },
      ],
    },
    {
      id: "data",
      title: "Données et confidentialité",
      questions: [
        {
          id: "hosting",
          question: "Où sont hébergées les données ?",
          answer: [
            ["L'hébergement est assuré par deux prestataires : Supabase pour la base de données, à Paris (Amazon Web Services), et Render pour le serveur de l'application, à Francfort."],
          ],
        },
        {
          id: "hds",
          question: "L'hébergement est-il certifié HDS ?",
          answer: [
            ["Non, pas aujourd'hui. L'hébergement actuel n'est pas certifié Hébergeur de Données de Santé (HDS) au sens de l'article L.1111-8 du Code de la santé publique."],
            [
              "Le passage à un hébergeur certifié est en préparation ; la ",
              { href: "/fr/confidentialite", text: "politique de confidentialité" },
              " dira son nom et sa date.",
            ],
          ],
        },
        {
          id: "who-can-read",
          question: "Qui voit les saisies d'un patient ?",
          answer: [
            ["Le patient, et les praticiens qui suivent avec lui le module concerné, tant que le partage est actif."],
            [
              "Les prestataires techniques et leur rôle sont listés dans la ",
              { href: "/fr/confidentialite", text: "politique de confidentialité" },
              ".",
            ],
          ],
        },
        {
          id: "data-sale",
          question: "Les données sont-elles vendues ou utilisées pour de la publicité ?",
          answer: [
            ["Non. Orekio ne vend aucune donnée et n'affiche aucune publicité."],
          ],
        },
        {
          id: "export",
          question: "Puis-je exporter les données ?",
          answer: [
            ["Oui. Depuis votre profil, vous exportez l'ensemble de votre compte, en document lisible ou en données brutes (JSON), y compris quand le compte est en lecture seule."],
            ["Votre patient exporte ses propres données depuis les réglages de son application."],
          ],
        },
        {
          id: "retention",
          question: "Combien de temps les données sont-elles conservées ?",
          answer: [
            ["Tant que le patient se connecte, tout son historique est conservé. Une donnée de plus de 5 ans est supprimée lorsque le patient ne s'est pas connecté depuis un an. La fin de votre abonnement a ses propres délais."],
            [
              "Le détail est dans la ",
              { href: "/fr/confidentialite", text: "politique de confidentialité" },
              ".",
            ],
          ],
        },
        {
          id: "two-factor",
          question: "Comment mon compte praticien est-il protégé ?",
          answer: [
            ["Par votre mot de passe et par la double authentification : un code à 6 chiffres donné par une application sur votre téléphone. Si vous perdez ce téléphone, l'équipe vérifie votre identité avant de rétablir l'accès."],
          ],
        },
      ],
    },
    {
      id: "pricing",
      title: "Tarifs et abonnement",
      questions: [
        {
          id: "price",
          question: "Combien coûte Orekio ?",
          answer: [
            [`Zelai : ${eur(zelai.month)} TTC par mois, jusqu'à ${zelai.maxPatients} patients suivis. Mendi : ${eur(mendi.month)} TTC par mois, patients illimités. Les deux offres donnent accès à tous les modules et échelles.`],
            [`À l'année, un mois est offert : ${eur(zelai.year)} TTC pour Zelai, ${eur(mendi.year)} TTC pour Mendi. La TVA de ${VAT_PERCENT} % est incluse.`],
          ],
        },
        {
          id: "free-trial",
          question: "Y a-t-il un essai gratuit ?",
          answer: [
            [`Oui. Les ${founders.seats} premiers inscrits ont ${founders.freeMonths} mois gratuits, sans carte bancaire.`],
            [`Ensuite, l'essai dure ${OFFERS.freeMonths} mois : la carte est enregistrée à l'inscription, sans débit pendant l'essai.`],
          ],
        },
        {
          id: "founders",
          question: "Qu'est-ce que le tarif Fondateurs ?",
          answer: [
            [`Un tarif réservé aux ${founders.seats} premiers inscrits : ${eur(founders.zelai.month)} TTC par mois sur Zelai et ${eur(founders.mendi.month)} sur Mendi, ou ${eur(founders.zelai.year)} et ${eur(founders.mendi.year)} à l'année. Il est acquis à vie dès le premier paiement, avec un canal direct avec l'équipe.`],
            [`Sans abonnement à la fin des ${founders.freeMonths} mois, il reste réservé ${founders.graceDays} jours, puis il est perdu. Il vaut pour un seul praticien.`],
          ],
        },
        {
          id: "commitment",
          question: "Suis-je engagé ?",
          answer: [
            ["Non. Vous résiliez à tout moment depuis l'application, avec effet à la fin de la période payée."],
          ],
        },
        {
          id: "patient-limit",
          question: "Comment les patients sont-ils comptés sur Zelai ?",
          answer: [
            [`Zelai permet ${zelai.maxPatients} patients suivis en même temps. Un suivi mis en pause ou terminé libère sa place.`],
            ["Après une pause ou une reprise, le changement d'état suivant d'un même suivi attend un mois."],
          ],
        },
        {
          id: "cancellation",
          question: "Que deviennent mes données si j'arrête ?",
          answer: [
            ["Votre compte passe en lecture seule : vous relisez vos dossiers, vous les exportez, et vous pouvez vous réabonner."],
            ["Cette période dure 90 jours si vous n'avez jamais payé, 3 ans si vous avez été abonné. Vous êtes prévenu avant son terme ; ensuite, vos suivis sont effacés."],
          ],
        },
        {
          id: "referral",
          question: "Existe-t-il un parrainage ?",
          answer: [
            [
              "Oui. Au premier paiement de la personne que vous parrainez, vous recevez chacun un crédit d'un mois. Les conditions figurent dans les ",
              { href: "/fr/cgu", text: "CGU" },
              ".",
            ],
          ],
        },
      ],
    },
  ],
};
