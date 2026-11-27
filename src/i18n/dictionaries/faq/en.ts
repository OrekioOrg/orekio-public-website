import { OFFERS, VAT_PERCENT, eurEn as eur } from "../../../offers";
import type { FaqCopy } from "./types";

const { zelai, mendi, founders } = OFFERS;

export const faqEn: FaqCopy = {
  pageTitle: "Frequently asked questions",
  metaDescription:
    "Answers about Orekio: tools, the patient app, data and hosting, pricing, free trial and cancellation.",
  eyebrow: "FAQ",
  heading: "Your questions, precise answers.",
  intro:
    "What Orekio does, what it does not do, where the data goes and what it costs.",
  categoriesLabel: "Topics",
  searchLabel: "Search the questions",
  searchPlaceholder: "Search: hosting, reminders, trial…",
  resultOne: "{n} question found",
  resultMany: "{n} questions found",
  noResult: "No question matches. Try another word, or write to us.",
  contact: {
    title: "Your question is not here?",
    text: [
      "Write to ",
      { href: "mailto:contact@orekio.app", text: "contact@orekio.app", external: true },
      ": we answer personally.",
    ],
  },
  sections: [
    {
      id: "discover",
      title: "Discovering Orekio",
      questions: [
        {
          id: "what-is-orekio",
          question: "What is Orekio?",
          answer: [
            ["Orekio is a digital logbook for mental health follow-up, between appointments. It brings together a web space for you and a mobile app for your patient."],
            ["You open tools to your patient, they use them at home, and you go over them together at the next appointment."],
          ],
        },
        {
          id: "who-is-it-for",
          question: "Who is Orekio for?",
          answer: [
            ["Psychologists, psychiatrists, advanced practice nurses, nurses and general practitioners who follow patients for their mental health."],
          ],
        },
        {
          id: "self-care",
          question: "Is it a wellbeing or self-care app?",
          answer: [
            ["No. It is a shared tool, in which you and your patient work together. A patient never signs up alone: you invite them, then you choose the tools they receive."],
          ],
        },
        {
          id: "medical-device",
          question: "Is Orekio a medical device?",
          answer: [
            ["Orekio is designed as a digital logbook, not as a medical device. It displays a raw figure, a neutral history, a score without interpretation."],
            ["No threshold, no signal, no comparison to a norm. The clinical reading belongs to you."],
          ],
        },
        {
          id: "practice-software",
          question: "Does Orekio replace my practice software or the patient record?",
          answer: [
            ["No. Orekio manages neither your appointment calendar nor your invoicing. It does not replace the patient record, which you keep according to your professional obligations."],
            ["It covers what happens between two appointments."],
          ],
        },
        {
          id: "team",
          question: "Who builds Orekio?",
          answer: [
            [
              "Two people: an advanced practice nurse in psychiatry, who makes the clinical choices, and a developer, who builds the product. ",
              { href: "/en/about", text: "Read more" },
              ".",
            ],
          ],
        },
      ],
    },
    {
      id: "practice",
      title: "In your practice",
      questions: [
        {
          id: "tools",
          question: "Which tools can I give my patient?",
          answer: [
            ["You have a library of tools covering a wide range of situations. According to the diagnosis and the stage of care, you choose for instance the sleep diary for insomnia, Beck's thought records or behavioural activation for depression, graded exposure for an anxiety disorder, the craving journal for an addiction, or the safety plan for moments of crisis."],
            [
              { href: "/en/features", text: "See the list of tools" },
              ".",
            ],
          ],
        },
        {
          id: "sources",
          question: "What are the tools based on?",
          answer: [
            ["They are everyday tools of psychiatry and psychology. Each module cites the scientific references it relies on."],
            ["The PHQ-9 follows its French version word for word."],
          ],
        },
        {
          id: "getting-started",
          question: "How do I start with a first patient?",
          answer: [
            ["You create your account on the web, with nothing to install. You secure it with two-factor authentication, then invite your patient with their email address, the only required field."],
            ["You can choose their first tools in the invitation. Their sign-up link is valid for 48 hours."],
          ],
        },
        {
          id: "choose-tools",
          question: "Can I choose the tools for each patient?",
          answer: [
            ["Yes. Each tool opens one by one, and can be withdrawn at any time. What was entered until then stays readable."],
            ["Before opening a tool, you can see the screen as your patient will see it."],
          ],
        },
        {
          id: "interpretation",
          question: "Does Orekio interpret entries or scores?",
          answer: [
            ["No. Entries are displayed as the patient made them. A scale score is calculated and shown as a figure, with no label and no threshold. Interpretation is yours."],
          ],
        },
        {
          id: "alerts",
          question: "Am I alerted if a patient is unwell?",
          answer: [
            ["No. Orekio is not an emergency service: nobody monitors entries in real time, and no entry triggers an alert."],
            ["In an emergency in France, the patient calls 15 or 112; for suicidal thoughts, 3114."],
          ],
        },
        {
          id: "messaging",
          question: "Can my patient write to me between two appointments?",
          answer: [
            ["Orekio is not a messaging service. In the consultation notebook, your patient writes down the questions they want to ask you: you find them at the top of their file, for the next appointment."],
            ["At the end of a consultation, you can leave them a summary and instructions to read again at home."],
          ],
        },
        {
          id: "reminders",
          question: "Can I schedule reminders?",
          answer: [
            ["Yes, on the tools that allow it: you choose the days and the time. Your patient can shift a reminder or pause it, and you see what they did."],
            ["A reminder never depends on what the patient has or has not entered."],
          ],
        },
        {
          id: "several-practitioners",
          question: "Can a patient be followed by several practitioners?",
          answer: [
            ["Yes. Each one invites them, and the patient accepts or declines each invitation. Two practitioners who opened the same module read the same entries. Your notes and your notebook remain yours."],
          ],
        },
        {
          id: "organisation",
          question: "I represent an organisation: what should I do?",
          answer: [
            [
              { href: "/en/contact", text: "Write to us" },
              ": we call you back within 7 working days.",
            ],
          ],
        },
        {
          id: "assistant",
          question: "What is the AI assistant for?",
          answer: [
            ["In the web app, it explains Orekio, guides you step by step, finds a piece of information and prepares an action that you confirm. It gives no clinical advice."],
            [
              "Orekio does not send the model any of your patients' data of its own accord; you are asked not to type any in your questions. ",
              { href: "/en/assistant", text: "Meet the assistant" },
              ".",
            ],
          ],
        },
      ],
    },
    {
      id: "patients",
      title: "For patients",
      questions: [
        {
          id: "patient-price",
          question: "Does my patient have to pay?",
          answer: [
            ["No. The app is free for your patients. There is only one subscription, yours."],
          ],
        },
        {
          id: "patient-sign-up",
          question: "How does my patient join Orekio?",
          answer: [
            ["They receive your invitation by email. The link opens a page where they choose their password; they then install the app and sign in."],
          ],
        },
        {
          id: "phones",
          question: "Which devices does Orekio run on?",
          answer: [
            ["The patient app exists for iPhone and Android. Your practitioner space runs in a browser, with nothing to install."],
          ],
        },
        {
          id: "offline",
          question: "Does the app work offline?",
          answer: [
            ["Yes, after a first sign-in. Entries are saved on the phone and sent when the network is back, with nothing for the patient to do."],
          ],
        },
        {
          id: "sharing",
          question: "Can my patient stop sharing their entries?",
          answer: [
            ["Yes, at any time, from their settings. You then no longer see their entries, including those already received, until they turn sharing back on. You are notified."],
            ["The safety plan, the consultation notebook and what you wrote yourself remain visible."],
          ],
        },
        {
          id: "minors",
          question: "Can I use Orekio with a patient who is a minor?",
          answer: [
            ["Yes, provided that before inviting them you collect the required consent from them and from those holding parental authority."],
          ],
        },
        {
          id: "patient-deletion",
          question: "How does a patient delete their account?",
          answer: [
            ["From the app, under Profile, “My data”: deletion is immediate and permanent. They can also request it by email."],
            [
              { href: "/en/account-deletion", text: "The full procedure" },
              ".",
            ],
          ],
        },
      ],
    },
    {
      id: "data",
      title: "Data and privacy",
      questions: [
        {
          id: "hosting",
          question: "Where is the data hosted?",
          answer: [
            ["Today, the database is in Paris and the application server in Frankfurt. The database is moving to OVHcloud, in France, on PostgreSQL with certified health data hosting: the move is being prepared."],
            [
              "Current providers are listed in the ",
              { href: "/en/privacy", text: "privacy policy" },
              ".",
            ],
          ],
        },
        {
          id: "hds",
          question: "Is the hosting HDS certified?",
          answer: [
            ["It will be: the database is moving to OVHcloud, on PostgreSQL, certified as a Health Data Host (HDS) within the meaning of article L.1111-8 of the French Public Health Code. The current hosting is not certified yet."],
            [
              "The ",
              { href: "/en/privacy", text: "privacy policy" },
              " will give the date of the move.",
            ],
          ],
        },
        {
          id: "data-roles",
          question: "Under the GDPR, who is responsible for my patients' data?",
          answer: [
            ["You are. For follow-up data, the practitioner is the data controller and Orekio their processor: it processes the data on your behalf and on your instructions."],
            [
              "Orekio is the data controller for your account and subscription. ",
              { href: "/en/privacy", text: "Read the privacy policy" },
              ".",
            ],
          ],
        },
        {
          id: "who-can-read",
          question: "Who sees a patient's entries?",
          answer: [
            ["The patient, and the practitioners following the module concerned with them, as long as sharing is on."],
            [
              "Technical providers and their role are listed in the ",
              { href: "/en/privacy", text: "privacy policy" },
              ".",
            ],
          ],
        },
        {
          id: "data-sale",
          question: "Is data sold or used for advertising?",
          answer: [
            ["No. Orekio sells no data and shows no advertising."],
          ],
        },
        {
          id: "export",
          question: "Can I export the data?",
          answer: [
            ["Yes. From your profile, you export your whole account, as a readable document or as raw data (JSON), even when the account is read-only."],
            ["Your patient exports their own data from the settings of their app."],
          ],
        },
        {
          id: "retention",
          question: "How long is data kept?",
          answer: [
            ["As long as the patient signs in, their whole history is kept. Data older than 5 years is deleted when the patient has not signed in for a year. The end of your subscription has its own time limits."],
            [
              "Details are in the ",
              { href: "/en/privacy", text: "privacy policy" },
              ".",
            ],
          ],
        },
        {
          id: "two-factor",
          question: "How is my practitioner account protected?",
          answer: [
            ["By your password and by two-factor authentication: a 6-digit code given by an app on your phone. If you lose that phone, the team checks your identity before restoring access."],
          ],
        },
      ],
    },
    {
      id: "pricing",
      title: "Pricing and subscription",
      questions: [
        {
          id: "price",
          question: "How much does Orekio cost?",
          answer: [
            [`Zelai: ${eur(zelai.month)} incl. VAT per month, up to ${zelai.maxPatients} followed patients. Mendi: ${eur(mendi.month)} incl. VAT per month, unlimited patients. Both plans give access to every module and scale.`],
            [`Paid yearly, one month is free: ${eur(zelai.year)} incl. VAT for Zelai, ${eur(mendi.year)} incl. VAT for Mendi. ${VAT_PERCENT}% VAT is included.`],
          ],
        },
        {
          id: "free-trial",
          question: "Is there a free trial?",
          answer: [
            [`Yes. The first ${founders.seats} sign-ups get ${founders.freeMonths} months free, with no credit card.`],
            [`After that, the trial lasts ${OFFERS.freeMonths} month: the card is saved at sign-up, with no charge during the trial.`],
          ],
        },
        {
          id: "founders",
          question: "What is the Founders rate?",
          answer: [
            [`A rate reserved for the first ${founders.seats} sign-ups: ${eur(founders.zelai.month)} incl. VAT per month on Zelai and ${eur(founders.mendi.month)} on Mendi, or ${eur(founders.zelai.year)} and ${eur(founders.mendi.year)} yearly. It is yours for life from the first payment, with a direct channel to the team.`],
            [`Without a subscription at the end of the ${founders.freeMonths} months, it stays reserved for ${founders.graceDays} days, then it is lost. It applies to a single practitioner.`],
          ],
        },
        {
          id: "commitment",
          question: "Am I locked in?",
          answer: [
            ["No. You cancel at any time from the app, effective at the end of the period paid for."],
          ],
        },
        {
          id: "patient-limit",
          question: "How are patients counted on Zelai?",
          answer: [
            [`Zelai allows ${zelai.maxPatients} followed patients at the same time. A paused or ended follow-up frees its place.`],
            ["After a pause or a resumption, the next change of state of the same follow-up waits one month."],
          ],
        },
        {
          id: "cancellation",
          question: "What happens to my data if I stop?",
          answer: [
            ["Your account becomes read-only: you can read your files, export them, and subscribe again."],
            ["This period lasts 90 days if you never paid, 3 years if you were a subscriber. You are warned before it ends; after that, your follow-ups are erased."],
          ],
        },
        {
          id: "referral",
          question: "Is there a referral programme?",
          answer: [
            [
              "Yes. At the first payment of the person you refer, you each receive one month's credit. The conditions are in the ",
              { href: "/en/terms", text: "terms of use" },
              ".",
            ],
          ],
        },
      ],
    },
  ],
};
