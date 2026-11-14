import type { Segment } from "../segment";
import { OFFERS, VAT_PERCENT, eurEn as eur, exclVat } from "../../offers";
import { assistantEn } from "./assistant/en";
import type { Dictionary } from "./fr";

const email: Segment = {
  href: "mailto:contact@orekio.app",
  text: "contact@orekio.app",
  external: true,
};

export const en: Dictionary = {
  assistantPage: assistantEn,
  meta: {
    title: "Orekio, therapeutic support between appointments",
    description:
      "Your digital therapeutic toolkit, between appointments: sleep diary, PHQ-9, safety plan, seven modules at launch and around thirty on the way. A digital logbook: Orekio displays, the practitioner interprets.",
  },

  nav: {
    features: "Features",
    pricing: "Pricing",
    about: "About",
    blog: "Blog",
    contact: "Contact",
    subscribe: "Sign up",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  footer: {
    tagline: "Orekio, your digital therapeutic toolkit",
    disclaimer:
      "Orekio is designed as a digital logbook, not as a medical device. Data is displayed as entered: its interpretation, like any clinical decision, rests with the practitioner.",
    legalNotice: "Legal notice",
    privacy: "Privacy",
    terms: "Terms",
    accountDeletion: "Account deletion",
  },

  home: {
    eyebrow: "Your digital therapeutic toolkit",
    title: "Your mental health support between appointments.",
    lead: "Build a personalised care plan for your patient by unlocking, one by one, the modules suited to their needs.",
    description:
      "The tools commonly used in psychiatry and mental health, grounded in the scientific literature: every module cites its sources. CBT exercises, psychoeducation sheets, sleep diary, questionnaires, medication reminders, safety plan: you hand them over, your patient uses them day to day, and you go over them together in consultation.",
    ctaSubscribe: "Try it free",
    ctaFeatures: "See the tools",
    section2Title: "The work continues at home.",
    section2Description:
      "In a few minutes of consultation, it is hard to retrace several weeks, for your patient as for you. Between appointments, they practise, read, answer, write. You find everything in your space, dated and exactly as they wrote it. It does not replace what they tell you: it supports it. The clinical reading remains yours. Orekio is built for psychologists, psychiatrists, advanced practice nurses, nurses and general practitioners.",
    highlights: [
      {
        title: "Practise",
        description:
          "Beck's thought records, graded exposure, behavioural activation, mental imagery, decisional balance. The in-depth work, between appointments.",
      },
      {
        title: "Observe",
        description:
          "Sleep diary, daily log, rhythms, medication intake, side effects, craving journal. What happened, day after day, as they noted it.",
      },
      {
        title: "Understand",
        description:
          "Psychoeducation sheets, naming what I feel. What you explain in consultation, to reread at home.",
      },
      {
        title: "Answer",
        description:
          "Validated scales: the PHQ-9 today, word for word its validated version. A score, never an interpretation.",
      },
      {
        title: "Hold on",
        description:
          "Safety plan, distress tolerance, grounding, breathing. Tools for hard moments, prepared together, within reach.",
      },
    ],
    highlightsNote:
      "Seven modules from day one, some thirty already built, opening over the coming months.",
    screensCaption: "The patient app, with sample data",
    screens: {
      sleep: "The sleep diary: last night on a 24-hour dial, then the ten nights before.",
      tracking: "Daily log: today's entry, one slider per indicator.",
      breathing: "Cardiac coherence breathing: the circle that guides each breath in.",
      practitioner:
        "The practitioner space: a fictional patient's daily log over a year, one curve per indicator, as raw values.",
      patientHome:
        "The patient app's home screen: what is planned today, then the tools the practitioner has opened, grouped by theme.",
    },
    manifesto: {
      eyebrow: "What Orekio will never do",
      text: "Data is displayed as entered. Its interpretation, like any clinical decision, rests with the practitioner.",
    },
    ctaSectionTitle: "Ready to try Orekio with your patients?",
    ctaSectionDescription:
      `${OFFERS.founders.freeMonths} months free with no credit card and a founders' rate, reserved for the first ${OFFERS.founders.seats} sign-ups.`,
    ctaSectionButton: "Try it free",
    apps: {
      title: "Two apps, one shared space",
      description:
        "Orekio is not a self-help app: it is a shared tool, in which you and your patient work together. You from your computer, your patient from their phone. One subscription, yours: the app is free for your patients.",
      cards: [
        {
          title: "Your practitioner space, on the web",
          description:
            "You invite your patients and open access to the tools one by one. Their entries come back to you laid out for the consultation: curves, histories, scores, data. Readable at a glance, with nothing interpreted for you. Nothing to install.",
        },
        {
          title: "Your patient's app, on their phone",
          description:
            "They find the tools you have opened and fill them in day by day, even offline. They can see how things evolve and take an active part in their care. By your invitation, free of charge.",
        },
      ],
    },
    notebook: {
      eyebrow: "Consultation notebook",
      title: "The link between two consultations.",
      text: "At the end of the appointment, you leave your patient a summary: the key points of what you discussed, and your instructions. They reread it at home, as often as they need. Between appointments, they write down their questions so as not to forget them. You find them at the top of their record, and you go through them together. It is not a messaging tool: what they write waits for the next appointment.",
      link: "See the notebook in detail",
      practitionerAlt:
        "A fictional patient's record: at the top, their consultation notebook, with their questions for the appointment and the latest summary.",
      patientAlt:
        "The consultation notebook on the patient's phone: the summary of an appointment and the instructions given that day.",
    },
  },

  features: {
    pageTitle: "Features",
    metaDescription:
      "Seven modules at launch, around thirty on the way: sleep diary, PHQ-9, safety plan, naming what I feel, Beck's thought records, and more.",
    eyebrow: "Features",
    heading: "What you can hand over to your patient.",
    description:
      "You open each tool from your web space, consultation after consultation, according to each patient's clinical situation and the stage of their care; your patient finds it on their phone. Tools marked \"from day one\" are available at launch. The others, already built, open over the coming months. Every module displays raw data: Orekio shows it, you interpret it.",
    openBadge: "from day one",
    categories: [
      {
        title: "Practise",
        tagline: "The in-depth work, between appointments.",
        modules: [
          { name: "Beck's thought records", fromDayOne: true },
          { name: "Graded exposure", fromDayOne: false },
          { name: "Behavioural activation", fromDayOne: true },
          { name: "Mental imagery reprocessing", fromDayOne: false },
          { name: "Decisional balance", fromDayOne: false },
        ],
      },
      {
        title: "Observe",
        tagline: "What happened, day after day, as they noted it.",
        modules: [
          { name: "Sleep diary", fromDayOne: true },
          { name: "Daily log", fromDayOne: true },
          { name: "Rhythms and regularity", fromDayOne: false },
          { name: "Medication intake", fromDayOne: false },
          { name: "Side effects", fromDayOne: false },
          { name: "Craving journal", fromDayOne: false },
        ],
      },
      {
        title: "Understand",
        tagline: "What you explain in consultation, to reread at home.",
        modules: [
          { name: "Psychoeducation sheets", fromDayOne: false },
          { name: "Naming what I feel", fromDayOne: true },
        ],
      },
      {
        title: "Answer",
        tagline: "A score, never an interpretation.",
        modules: [
          { name: "PHQ-9", fromDayOne: true },
        ],
      },
      {
        title: "Hold on",
        tagline: "Tools for hard moments, prepared together, within reach.",
        modules: [
          { name: "Safety plan", fromDayOne: true },
          { name: "Distress tolerance", fromDayOne: false },
          { name: "Grounding", fromDayOne: false },
          { name: "Breathing", fromDayOne: true },
        ],
      },
    ],
    gallery: {
      eyebrow: "From day one",
      title: "What your patient sees on their phone.",
      description:
        "One screen per tool, with sample data. The list grows with every new tool that opens.",
      previous: "Previous screen",
      next: "Next screen",
      items: [
        {
          src: "galerie-sommeil.png",
          name: "Sleep diary",
          family: "Observe",
          alt: "Sleep diary: the night's times on a 24-hour dial.",
        },
        {
          src: "suivi-saisie.png",
          name: "Daily log",
          family: "Observe",
          alt: "Daily log: today's entry, one slider per indicator.",
        },
        {
          src: "galerie-beck.png",
          name: "Beck's thought records",
          family: "Practise",
          alt: "Beck's thought records: the facts that support the thought, and those that contradict it.",
        },
        {
          src: "galerie-activites.png",
          name: "Behavioural activation",
          family: "Practise",
          alt: "Behavioural activation: the activities prepared with the practitioner, from easiest to hardest, each linked to a life area.",
        },
        {
          src: "galerie-emotions.png",
          name: "Naming what I feel",
          family: "Understand",
          alt: "Naming what I feel: the eight families of emotions.",
        },
        {
          src: "galerie-phq9.png",
          name: "PHQ-9",
          family: "Answer",
          alt: "PHQ-9: one question and its four possible answers.",
        },
        {
          src: "galerie-plan-securite.png",
          name: "Safety plan",
          family: "Hold on",
          alt: "Safety plan: the people to contact, with a button to call.",
        },
        {
          src: "respiration-coherence.png",
          name: "Breathing",
          family: "Hold on",
          alt: "Cardiac coherence breathing: the circle that guides each breath in.",
        },
      ],
    },
    patientSide: {
      eyebrow: "Patient side",
      title: "The work goes on between appointments.",
      description: "Their space and their reminders, with sample data.",
      items: [
        {
          src: "accueil-patient.png",
          title: "Their space",
          text: "What is planned today, then the tools you have opened, grouped by theme.",
          alt: "The patient app's home screen: today's reminders, then the tools opened by the practitioner.",
        },
        {
          src: "rappels.png",
          title: "Their reminders",
          text: "The days and time you have set. They can shift or pause them, never based on what they have entered.",
          alt: "Daily log reminders: 7 pm every day, a second reminder paused.",
        },
      ],
    },
    practitionerSide: {
      eyebrow: "Practitioner side",
      title: "Your space, from one consultation to the next.",
      description: "Five screens from the web space, with fictional patients.",
      steps: [
        {
          src: "praticien-vue-ensemble.png",
          height: 1000,
          eyebrow: "Before the consultation",
          title: "What the patient has entered, at a glance.",
          text: "The questions in their notebook, the modules used over the last four weeks, day by day, and the questionnaires received but not yet viewed.",
          alt: "A fictional patient's overview: his consultation notebook, then his modules and the days he entered something.",
        },
        {
          src: "praticien-armoire.png",
          height: 1000,
          eyebrow: "Choosing the tools",
          title: "You open access to modules as consultations go.",
          text: "Each tool opens once you have worked on it together, and can be withdrawn at any time.",
          alt: "The list of modules opened for a fictional patient.",
        },
        {
          src: "praticien-sommeil-donnees.png",
          height: 990,
          eyebrow: "Sleep diary",
          title: "Easily view the sleep diary data.",
          text: "The grid of nights, and the averages calculated over the period you choose.",
          alt: "Sleep diary data: averages for the period and the grid of nights.",
        },
        {
          src: "praticien-suivi-courbes.png",
          height: 990,
          eyebrow: "Daily log",
          title: "View each indicator over the period of your choice.",
          text: "One curve per indicator, the range of values over the period and the number of days entered.",
          alt: "The daily log over a year: one curve per indicator.",
        },
        {
          src: "praticien-plan-securite.png",
          height: 990,
          eyebrow: "Safety plan",
          title: "The safety plan, in the patient's own words.",
          text: "Six steps, written with them and reviewed together in consultation.",
          alt: "A fictional patient's safety plan, at the warning signs step.",
        },
      ],
    },
    notebook: {
      eyebrow: "Consultation notebook",
      title: "A two-voice notebook, from one appointment to the next.",
      description:
        "Every patient gets one automatically, with nothing to set up. It is not a messaging tool: nothing calls on you between appointments, and the app tells your patient so.",
      writing: {
        src: "praticien-carnet-redaction.png",
        height: 1000,
        eyebrow: "At the end of the appointment",
        title: "You write the summary.",
        text: "A few lines on what you agreed. An instruction can be attached to a specific tool: it appears on that tool's card, in the patient's app.",
        alt: "Writing a summary for a fictional patient, with an instruction attached to one of his tools.",
      },
      patientSteps: [
        {
          src: "carnet-recapitulatif.png",
          eyebrow: "At home",
          title: "They reread it whenever they need to.",
          text: "A notification lets them know. They find each dated summary, with the instructions given that day and direct access to the tools concerned.",
          alt: "The consultation notebook on the patient's phone: the summary of an appointment and the instructions given that day.",
        },
        {
          src: "carnet-questions.png",
          eyebrow: "Between appointments",
          title: "They note their questions as they come up.",
          text: "They write them in their notebook, or from the tool they relate to. At the next appointment, you find them at the top of their record and tick the ones you have discussed.",
          alt: "The \"My questions\" tab of the notebook: the questions noted for the next appointment, one of them linked to a tool.",
        },
      ],
    },
    around: {
      title: "And around the modules",
      cards: [
        {
          title: "Reminders",
          description:
            "You set days and a time for each tool. Your patient can shift or pause them, and you see what they did with them. Never conditioned on what they write.",
        },
        {
          title: "Sources",
          description:
            "Every module cites the scientific references it draws on.",
        },
        {
          title: "Offline",
          description:
            "Your patient keeps working without internet, and nothing is lost.",
        },
        {
          title: "The patient stays in control",
          description:
            "Sharing their entries is on by default and they reach you continuously. They can stop it or erase their data whenever they wish. You can withdraw a tool at any time.",
        },
      ],
    },
  },

  pricing: {
    pageTitle: "Pricing",
    metaDescription:
      `Zelai: ${eur(OFFERS.zelai.month)} per month incl. VAT, up to ${OFFERS.zelai.maxPatients} patients. Mendi: ${eur(OFFERS.mendi.month)} per month incl. VAT, unlimited patients. Founders, the first ${OFFERS.founders.seats} sign-ups: ${eur(OFFERS.founders.zelai.month)} and ${eur(OFFERS.founders.mendi.month)} per month incl. VAT for life, ${OFFERS.founders.freeMonths} months free with no credit card.`,
    metaDescriptionProvisional:
      `Two plans with identical content, Zelai up to ${OFFERS.zelai.maxPatients} patients and Mendi unlimited, plus a Founders offer for the first ${OFFERS.founders.seats} sign-ups, ${OFFERS.founders.freeMonths} months free with no credit card.`,
    eyebrow: "Pricing",
    plans: [
      {
        name: "Zelai",
        theme: "zelai",
        price: eur(OFFERS.zelai.month),
        period: "incl. VAT / month",
        priceExclVat: `${eur(exclVat(OFFERS.zelai.month))} excl. VAT / month`,
        features: [
          `Up to ${OFFERS.zelai.maxPatients} followed patients`,
          "Every module and scale",
        ],
        note: {
          label: "Founders:",
          text: `${eur(OFFERS.founders.zelai.month)} incl. VAT / month for life (${eur(exclVat(OFFERS.founders.zelai.month))} excl. VAT), ${OFFERS.founders.seats} seats`,
        },
      },
      {
        name: "Mendi",
        theme: "mendi",
        price: eur(OFFERS.mendi.month),
        period: "incl. VAT / month",
        priceExclVat: `${eur(exclVat(OFFERS.mendi.month))} excl. VAT / month`,
        features: [
          "Unlimited followed patients",
          "Every module and scale",
        ],
        note: {
          label: "Founders:",
          text: `${eur(OFFERS.founders.mendi.month)} incl. VAT / month for life (${eur(exclVat(OFFERS.founders.mendi.month))} excl. VAT), ${OFFERS.founders.seats} seats`,
        },
      },
    ],
    details: [
      {
        label: "Trial",
        text: `For the first ${OFFERS.founders.seats} sign-ups, ${OFFERS.founders.freeMonths} months free with no credit card. After that, ${OFFERS.freeMonths} month free, with a card saved at sign-up and no charge during the trial. If you do not continue, your account goes read-only for 90 days, time to export, then your patient data is deleted. We let you know 15 days ahead.`,
      },
      {
        label: "Zelai and Mendi",
        text: `The same product: only the number of followed patients changes, and pausing a follow-up frees its place. No commitment, cancel at any time. Or yearly, with one month free: ${eur(OFFERS.zelai.year)} incl. VAT for Zelai, ${eur(OFFERS.mendi.year)} incl. VAT for Mendi. Zelai is Basque for “meadow”, Mendi for “mountain”.`,
      },
      {
        label: "Founders",
        text: `For the first ${OFFERS.founders.seats} sign-ups, on both Zelai and Mendi. Rate kept for life from the first payment, monthly or yearly (${eur(OFFERS.founders.zelai.year)} incl. VAT for Zelai, ${eur(OFFERS.founders.mendi.year)} incl. VAT for Mendi), with a direct channel to the team. If you have not subscribed by the end of the ${OFFERS.founders.freeMonths} months, the rate stays reserved for ${OFFERS.founders.graceDays} days, then it is lost for good. It applies to a single practitioner: adding a seat moves the subscription to the public rate.`,
      },
      {
        label: "Referral",
        text: "One free month for you and for the person you refer, as a credit, from their first payment. As many credits as people referred, combinable with the Founders rate and yearly payment.",
      },
    ],
    included: {
      title: "Included in every plan",
      items: [
        "Practitioner web space",
        "Free patient app",
        "Every module and every scale",
        "Full history and export",
        "Email support",
      ],
    },
    subscribeButton: "Try for free",
    footerNote: [
      `Prices include VAT (${VAT_PERCENT}%). Do you represent an organisation? `,
      { href: "/en/contact", text: "Write to us" },
      ": we call you back within 7 working days.",
    ] as Segment[],
  },

  about: {
    pageTitle: "About",
    metaDescription:
      "Orekio is a digital logbook supporting the relationship between a practitioner and their patient, between appointments.",
    eyebrow: "About",
    heading: "Orekio was born in consultation.",
    paragraph1:
      "Every practitioner knows the scene. An exercise sheet handed over at the end of an appointment, a photocopied sleep diary, a questionnaire to bring back. At the next appointment, the sheet stayed in a drawer, or comes back half filled in, and what happened is rebuilt from memory. Orekio started there: putting the everyday tools of psychiatry and psychology on the patient's phone. They use them between two appointments, and you go over them together at the next appointment, in private practice as in hospital.",
    paragraph2:
      "You invite your patient by email, then open access to the tools one by one, as the consultation requires: sleep diary, Beck's thought records, PHQ-9, safety plan, and some thirty other modules. They use them from their phone, even offline. What they write waits for you at the next appointment, as it is. Orekio shows it, the clinical reading remains yours.",
    paragraph3:
      "Orekio is built by two people: an advanced practice nurse in psychiatry, who makes the clinical choices, and a developer, who builds the product. Orekio sells no data and shows no advertising.",
    boxTitle: "A logbook, not a medical device",
    boxText:
      "Orekio is designed as a digital logbook, not as a medical device. The app only displays: a raw figure, a neutral history, a score without interpretation. No threshold, no signal, no comparison to a norm. The clinical reading belongs to you.",
    paragraph4:
      "Your patients' entries are health data within the meaning of Article 9 of the GDPR. The patient can stop sharing them, and can request the export or erasure of their data at any time. Today, the application's hosting is not certified for health data (HDS); the move to a certified host is being prepared.",
  },

  contact: {
    pageTitle: "Contact",
    metaDescription: "Contact the Orekio team for any question or a demo.",
    eyebrow: "Contact",
    heading: "A question, or would you like a demo?",
    description: [
      "Write to us in one line: your profession, and what you expect from Orekio. We answer personally. To start right away, sign up on ",
      { href: "https://orekio.app", text: "orekio.app", external: true },
      ".",
    ] as Segment[],
    email: "contact@orekio.app",
  },

  notFound: {
    metaTitle: "Page not found",
    heading: "Page not found",
    body: "The link may point to a page that has moved. Home will put you back on track.",
    cta: "Back to home",
  },

  blog: {
    pageTitle: "Blog",
    metaDescription:
      "The Orekio blog: tools explained to practitioners, what the literature says, and what Orekio does with them.",
    eyebrow: "Blog",
    heading: "Tools, explained to the practitioners who hand them over.",
    intro:
      "Each article describes a tool, what the literature says about it, and what Orekio does with it. With sources.",
    empty: "The first articles are coming soon.",
    readMore: "Read the article →",
    by: "By",
    publishedOn: "Published",
    updatedOn: "Updated",
    backToList: "All articles",
    allArticles: "All articles",
    share: "Share",
    shareNative: "Share…",
    shareCopy: "Copy link",
    shareCopied: "Link copied",
    shareX: "Share on X",
    shareLinkedin: "Share on LinkedIn",
  },

  mentionsLegales: {
    pageTitle: "Legal notice",
    metaDescription: "Legal notice for the Orekio website.",
    eyebrow: "Legal notice",
    heading: "Legal notice",
    sections: [
      {
        heading: "Website publisher",
        lines: [
          ["OREKIO, a French simplified joint-stock company (SAS) with share capital of €500"],
          ["Registered office: 101 rue Gabriel Péri, bâtiment C, 94270 Le Kremlin-Bicêtre, France"],
          ["Registered with the Créteil Trade and Companies Register (RCS) under number 130 344 369"],
          ["Publication director: Guillaume Zarb, President"],
          ["Contact: ", email],
        ] as Segment[][],
      },
      {
        heading: "Hosting",
        lines: [
          ["Website: GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA."],
          [
            "Application and health data: Supabase (database, Amazon Web Services, Paris) and Render (server, Frankfurt). This hosting is not certified as Health Data Hosting (HDS) within the meaning of Article L.1111-8 of the French Public Health Code; the move to a certified host is being prepared (see the ",
            { href: "/en/about", text: "About" },
            " page).",
          ],
        ] as Segment[][],
      },
      {
        heading: "Intellectual property",
        lines: [
          [
            "All content on this site (text, logos, trademarks, graphics) is the property of Orekio, unless otherwise stated, and may not be reproduced without prior authorization.",
          ],
        ] as Segment[][],
      },
      {
        heading: "Personal data processing",
        lines: [
          [
            "The processing of personal data is described in our ",
            { href: "/en/privacy", text: "privacy policy" },
            ".",
          ],
        ] as Segment[][],
      },
    ],
  },

  confidentialite: {
    pageTitle: "Privacy",
    metaDescription:
      "How Orekio collects, uses, and protects its users' personal and health data.",
    eyebrow: "Privacy",
    heading: "Privacy policy",
    sections: [
      {
        heading: "Data controller",
        lines: [
          [
            "Orekio, as data controller, carries out the data processing described below. For any question, contact: ",
            email,
            ".",
          ],
        ] as Segment[][],
      },
      {
        heading: "Data collected",
        lines: [
          [
            "Identification data for the practitioner and the patient (name, email), follow-up data entered by the patient (sleep diary, clinical scale answers, safety plan, other modules), and technical connection data.",
          ],
        ] as Segment[][],
      },
      {
        heading: "Purposes and legal basis",
        lines: [
          [
            "Follow-up data is processed for the sole purpose of facilitating the therapeutic follow-up between the patient and their practitioner. Sharing entries with the practitioner is on by default, and the patient can stop it at any time from their profile. This data is shown back to the practitioner raw, with calculated scores and no interpretation: the clinical analysis is theirs to make.",
          ],
        ] as Segment[][],
      },
      {
        heading: "Retention period",
        lines: [
          [
            "Each type of data has its own retention period, enforced every night by automatic deletion. Any change to these periods will be published here.",
          ],
          [
            "Patient entries, practitioner notes and the consultation notebook: as long as the patient signs in, their full history is kept. Data older than 5 years is deleted when the patient has not signed in for a year. No entry or note is deleted for inactivity while a follow-up is paused.",
          ],
          [
            "Data access audit log: 10 years.",
          ],
          [
            "AI assistant data (usage counters, feedback on answers), support requests and the payment provider's log: 13 months. The email copy of a handled support request is erased every month.",
          ],
          [
            "Notification logs: 1 year. Expired invitations: 30 days.",
          ],
          [
            "End of subscription: the practitioner's account becomes read-only for 90 days if it never paid, 3 years otherwise. At that point, their follow-ups are erased. The practitioner is notified beforehand, and so is the patient when all of their practitioners are affected. A module followed by another practitioner remains. At launch, an account still waiting for its card, with no entitlement or patient, is erased after 30 days.",
          ],
          [
            "On request, an account and its data are erased without waiting for these periods (see “Your rights”).",
          ],
        ] as Segment[][],
      },
      {
        heading: "Hosting",
        lines: [
          [
            "The database is hosted by Supabase in a data centre in Paris (Amazon Web Services, eu-west-3 region), and the application server by Render, in Frankfurt.",
          ],
          [
            "This hosting is not certified as a Health Data Host (HDS) within the meaning of article L.1111-8 of the French Public Health Code. The move to a certified host is being prepared; this page will give its name and date.",
          ],
        ] as Segment[][],
      },
      {
        heading: "Processors",
        lines: [
          [
            "Orekio relies on the following providers, each for a specific task:",
          ],
          [
            "Supabase: database, authentication and profile pictures (Paris).",
          ],
          [
            "Render: application server (Frankfurt).",
          ],
          [
            "Resend: sending emails (invitations, password reset, account status, support requests and reported questions), from the European Union.",
          ],
          [
            "Expo and Google Firebase, and Apple for iPhones: delivering notifications (reminders, notebook summaries) to the patient's phone. These providers are based in the United States; for Expo and Firebase, the transfer is governed by the European Commission's standard contractual clauses, set out in their terms.",
          ],
          [
            "Stripe: payment of the practitioner's subscription. Stripe receives no health data. In Europe, the contract is with its Irish company; transfers to the United States are governed by the Data Privacy Framework and, failing that, by the standard contractual clauses.",
          ],
          [
            "Anthropic: the practitioner's AI assistant (see the next section).",
          ],
        ] as Segment[][],
      },
      {
        heading: "Practitioner AI assistant",
        lines: [
          [
            "In the web app, practitioners can ask an AI assistant questions about using Orekio. The assistant relies on a model from Anthropic, acting as a processor. It is for practitioners only: the patient app has none.",
          ],
          [
            "Orekio does not itself send the AI any data about patients: no name, entries, scores or notes. When the practitioner asks for information about a patient, Orekio reads and displays it; it never goes to the model. The model receives the user guide, the catalogue of modules and fields, the name of the open screen, the module on display, whether a record is open (without saying which), today's date, and the questions in the conversation. A second Anthropic model checks the question and any free-text answer before display. The names of patients and invitees that Orekio recognises, and any email address, are removed from questions before sending. The rest goes out as written: a clinical situation described in plain words, or a single name typed in lower case, misspelled or not on the list, is not recognised. The practitioner is asked not to write patient data in their questions, apart from the full name or alias to prepare an action.",
          ],
          [
            "Anthropic is located in the United States. The transfer is governed by the European Commission's standard contractual clauses, included in its data processing agreement. Anthropic has confirmed that it applies zero data retention to Orekio: requests and responses are not kept once the response is returned, and are not used to train its models. Anthropic provides two exceptions: a legal obligation, and abuse prevention, for which flagged content may be kept for up to two years and the results of its safety checks are retained.",
          ],
          [
            "Orekio keeps neither questions nor answers: the conversation exists only in the practitioner's browser and is cleared when they close the assistant window. For 13 months, with no text, Orekio keeps the number of questions per practitioner, their cost, a conversation identifier, the type and subject of each answer (closed lists) and the practitioner's feedback. If the practitioner chooses to report a question left unanswered, its text is passed to the team as a support request.",
          ],
        ] as Segment[][],
      },
      {
        heading: "Your rights",
        lines: [
          [
            "Under the GDPR, you have the right to access, rectify, erase, restrict, object to, and port your data, as well as the right to withdraw your consent at any time. To exercise these rights, contact ",
            email,
            ". You may also lodge a complaint with the CNIL (",
            { href: "https://www.cnil.fr", text: "www.cnil.fr", external: true },
            ").",
          ],
        ] as Segment[][],
      },
    ],
  },

  cgu: {
    pageTitle: "Terms of use",
    metaDescription:
      "Terms of use for the Orekio service, for practitioners and their patients.",
    eyebrow: "Terms",
    heading: "Terms of use",
    sections: [
      {
        heading: "1. Purpose",
        lines: [
          [
            "These terms of use (“Terms”) define the conditions of access to and use of the Orekio service, a digital logbook designed to facilitate therapeutic follow-up between a practitioner and their patient. Orekio is not a medical device within the meaning of Regulation (EU) 2017/745 (see the ",
            { href: "/en/about", text: "About" },
            " page).",
          ],
        ] as Segment[][],
      },
      {
        heading: "2. Access to the service",
        lines: [
          [
            "Practitioners create their own account. They declare their professional title, accept these Terms and confirm their email address. Two-factor authentication is offered to them. They warrant that they lawfully practise the declared profession; Orekio may ask for proof.",
          ],
          [
            "Practitioners access the service by subscription (see the ",
            { href: "/en/pricing", text: "Pricing" },
            " page). The service is offered to them as professionals.",
          ],
          [
            "Patients do not sign up alone: they access the service on their practitioner's invitation, free of charge. They can stop sharing their entries at any time. The safety plan built together and the consultation notebook remain visible to the practitioner.",
          ],
          [
            "When the patient is a minor, the practitioner obtains the required consents from the patient and from the holders of parental authority before inviting them.",
          ],
        ] as Segment[][],
      },
      {
        heading: "3. User obligations",
        lines: [
          [
            "The practitioner agrees to use Orekio solely as part of genuine therapeutic follow-up and with their patient's consent. Orekio does not replace the patient's record, which the practitioner keeps in line with their professional obligations. The patient agrees to provide truthful information.",
          ],
          [
            "Everyone keeps their credentials confidential, uses only their own account and tells Orekio without delay if they suspect unauthorised access (",
            email,
            ").",
          ],
          [
            "The following are prohibited: accessing a person's data without the right to do so, circumventing the service's security measures or limits, automated data extraction, copying the service, and any unlawful use.",
          ],
        ] as Segment[][],
      },
      {
        heading: "4. Intellectual property",
        lines: [
          [
            "The service, its brand, and its content remain the exclusive property of Orekio. Data entered by users (sleep diary, scale answers, etc.) remains their property.",
          ],
        ] as Segment[][],
      },
      {
        heading: "5. Liability",
        lines: [
          [
            "Orekio displays the data entered as it is and does not substitute for any medical advice. The practitioner alone judges how to read it and what care decisions to make.",
          ],
          [
            "Orekio is not an emergency service: nobody monitors entries in real time, and no entry triggers an alert. The practitioner's bell only reports certain actions, without their content. In an emergency, call 15 or 112; for suicidal thoughts, 3114 (France).",
          ],
          [
            "Orekio uses reasonable means to keep the service available and secure, without guaranteeing continuous availability: maintenance or an outage may interrupt it. On the phone, patients can keep making entries offline.",
          ],
          [
            "Orekio is liable for its failures under ordinary law. Towards the practitioner, its liability is limited to direct and foreseeable damage. Nothing in these Terms excludes Orekio's liability for gross negligence or wilful misconduct, or where the law forbids limiting it. Neither party is liable for a failure caused by force majeure (Article 1218 of the French Civil Code).",
          ],
        ] as Segment[][],
      },
      {
        heading: "6. AI assistant",
        lines: [
          [
            "For practitioners, in the web app, the service includes an AI assistant that helps with using Orekio: it explains the app and how a score is calculated, guides step by step, offers to open a screen and prepares certain actions.",
          ],
          [
            "The assistant is configured and filtered to give no clinical advice, interpret no data and recommend no module. Its answers may contain errors; clinical judgement remains the practitioner's.",
          ],
          [
            "No action prepared by the assistant is saved until the practitioner clicks “Confirm”. The practitioner remains responsible for the actions they confirm.",
          ],
          [
            "The practitioner agrees not to describe in the assistant any clinical situation or any health data. To prepare an action, they may refer to a patient by full name or alias, which Orekio removes from the question.",
          ],
          [
            "The number of questions is limited. The assistant may be suspended at any time.",
          ],
          [
            "The processing of data related to the assistant is described in the ",
            { href: "/en/privacy", text: "privacy policy" },
            ".",
          ],
        ] as Segment[][],
      },
      {
        heading: "7. Term and termination",
        lines: [
          [
            "These Terms apply for as long as the account exists.",
          ],
          [
            "Patients can delete their account and data at any time (see the ",
            { href: "/en/account-deletion", text: "Account deletion" },
            " page).",
          ],
          [
            "Practitioners can cancel their subscription at any time from the app, effective at the end of the paid period. They can ask for their account to be closed by writing to ",
            email,
            ".",
          ],
          [
            "Founders offer: the first 100 practitioners to sign up, on Zelai or Mendi, get 2 free months without a bank card. A seat is taken when the email address is first confirmed, while seats remain. At the end of these 2 months, without a subscription, the account becomes read-only. The Founders rate stays reserved for 30 more days; after that date without a subscription, it is lost for good, with no effect on the data. A lost seat is not reassigned. From the first payment, the rate is kept for life, including after cancellation. This rate applies to a single-seat subscription: adding a seat moves the subscription to the public rate, for good.",
          ],
          [
            "Referral: a practitioner on a trial or subscription has a referral code to share. When a practitioner signs up with this code, the referrer and the referred practitioner each receive a credit worth one month of their own plan, upon the referred practitioner's first payment. This credit comes off subsequent payments. It does not expire, stays on the account after cancellation and applies when the practitioner returns; it is never paid out in cash. The code can be entered until the first payment. A referred practitioner earns credit only once, and two practitioners cannot refer each other. The referrer sees the number of people referred and of credits, never their identity.",
          ],
          [
            "At the end of the trial, after cancellation or a final payment failure, the practitioner's account becomes read-only: the data is kept intact, they can read and export it, and they can reactivate their subscription. This freeze lasts 90 days for an account that never paid, and 3 years for a former subscriber. The practitioner is notified before it ends.",
          ],
          [
            "When the freeze ends, the practitioner's follow-ups are erased; their account remains, and a new subscription restores access. A patient followed by another practitioner loses their relationship with this one and the modules only this one followed, with their entries; a patient with no practitioner left is erased. A patient whose practitioners are all frozen is told in the app in the 30 days before, and can export their data.",
          ],
          [
            "Orekio may suspend or close an account for a serious breach of these Terms, after a warning, except in an emergency or under a legal obligation. Orekio will notify users before any permanent end of the service and give them time to export their data.",
          ],
        ] as Segment[][],
      },
      {
        heading: "8. Personal data",
        lines: [
          [
            "The processing of personal data is described in our ",
            { href: "/en/privacy", text: "privacy policy" },
            ".",
          ],
          ["Orekio sells no data and shows no advertising."],
        ] as Segment[][],
      },
      {
        heading: "9. Governing law",
        lines: [
          [
            "These Terms are governed by French law. In case of dispute, the parties first seek an amicable solution, by writing to ",
            email,
            ".",
          ],
          [
            "Failing agreement, the dispute falls under the competent French courts. A patient acting as a consumer may bring the matter before the court of their place of residence.",
          ],
        ] as Segment[][],
      },
    ],
  },
  accountDeletion: {
    pageTitle: "Account deletion",
    metaDescription:
      "How to delete your Orekio account and all associated data.",
    eyebrow: "Account deletion",
    heading: "Delete your Orekio account and data",
    noticeBox:
      "You can delete your Orekio account and all associated data at any time, from the mobile app or by email. This page explains how, and what happens to your data.",
    sections: [
      {
        heading: "How to request deletion",
        lines: [
          [
            "In the Orekio mobile app, open the Profile tab, go to the \u201cMy data\u201d section, then tap \u201cDelete my account and data\u201d and confirm. Deletion is immediate and permanent.",
          ],
          [
            "If you no longer have access to the app, email ",
            email,
            " from the address linked to your account. Requests are handled within 30 days.",
          ],
        ] as Segment[][],
      },
      {
        heading: "Data that is deleted",
        lines: [
          ["Your account and identity (email, name, first name, alias)."],
          [
            "All your entries: mood, sleep, questionnaires, safety plan, exercises and personal notes.",
          ],
          ["Your unlocked modules, reminders and settings."],
          ["The link with your practitioner and the notes concerning you."],
          ["All data stored on your device."],
        ] as Segment[][],
      },
      {
        heading: "Data that is retained",
        lines: [
          [
            "A technical record showing that a deletion took place (date and type of operation, with no health content) is kept in our audit log for up to 10 years, to comply with our legal obligations relating to the hosting of health data. No other data is retained after deletion.",
          ],
        ] as Segment[][],
      },
    ],
  },

};
