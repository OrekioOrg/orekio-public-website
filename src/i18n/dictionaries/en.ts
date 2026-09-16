import type { Segment } from "../segment";
import type { Dictionary } from "./fr";

const email: Segment = {
  href: "mailto:contact@orekio.app",
  text: "contact@orekio.app",
  external: true,
};

export const en: Dictionary = {
  meta: {
    title: "Orekio, therapeutic support between appointments",
    description:
      "Your digital therapeutic toolkit, between appointments: sleep diary, PHQ-9, safety plan, six modules at launch and around thirty on the way. A digital care journal: Orekio displays, the practitioner interprets.",
  },

  nav: {
    features: "Features",
    pricing: "Pricing",
    about: "About",
    blog: "Blog",
    contact: "Contact",
    subscribe: "Waiting list",
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
    title: "The consultation continues between appointments, on your patient's phone.",
    description:
      "Exercises to practise at home, psychoeducation sheets, sleep diary, questionnaires, medication reminders, safety plan: you hand over the tools, your patient uses them between appointments, and you go over them together in consultation.",
    ctaSubscribe: "Join the waiting list",
    ctaFeatures: "See the tools",
    section2Title: "Between appointments, the work continues.",
    section2Description:
      "Orekio is built for psychologists, psychiatrists, advanced practice nurses, nurses and general practitioners. Your patient practises, reads, answers, writes. You find everything in your space, dated and exactly as they wrote it. The clinical reading remains yours.",
    highlights: [
      {
        title: "Practise",
        description:
          "Beck's thought records, graded exposure, behavioural activation, mental imagery, decisional and motivational balances. The in-depth work, between appointments.",
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
      "Six modules from day one, some thirty already built, opening over the coming months.",
    ctaSectionTitle: "Ready to try Orekio with your patients?",
    ctaSectionDescription:
      "60-day trial, no credit card. A founders' rate reserved for the first 100 sign-ups.",
    ctaSectionButton: "Join the waiting list",
    apps: {
      title: "Two apps, one shared space",
      description:
        "You work from your computer, your patient from their phone. One subscription, yours: the app is free for your patients.",
      cards: [
        {
          title: "Your practitioner space, on the web",
          description:
            "You invite your patients, open the tools one by one, and go over their entries in consultation. Nothing to install.",
        },
        {
          title: "Your patient's app, on their phone",
          description:
            "They find the tools you have opened and fill them in day by day, even offline. By your invitation, free of charge.",
        },
      ],
    },
  },

  features: {
    pageTitle: "Features",
    metaDescription:
      "Six modules at launch, around thirty on the way: sleep diary, PHQ-9, safety plan, naming what I feel, Beck's thought records, and more.",
    eyebrow: "Features",
    heading: "What you can hand over to your patient.",
    description:
      "You open each tool from your web space, consultation after consultation, at your own pace; your patient finds it on their phone. Tools marked \"from day one\" are available at launch. The others, already built, open over the coming months. Every module displays raw data: Orekio shows it, you interpret it.",
    openBadge: "from day one",
    categories: [
      {
        title: "Practise",
        tagline: "The in-depth work, between appointments.",
        modules: [
          { name: "Beck's thought records", fromDayOne: true },
          { name: "Graded exposure", fromDayOne: false },
          { name: "Behavioural activation", fromDayOne: false },
          { name: "Mental imagery reprocessing", fromDayOne: false },
          { name: "Decisional balance", fromDayOne: false },
          { name: "Motivational balance", fromDayOne: false },
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
          { name: "GAD-7", fromDayOne: false },
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
    around: {
      title: "And around the modules",
      cards: [
        {
          title: "Reminders",
          description:
            "You set days and a time for each tool. Your patient can shift or pause them, and you see what they did with them. Never conditioned on what they write.",
        },
        {
          title: "Patient view and teen mode",
          description:
            "For each tool, the screen exactly as your patient sees it. Language adapted to teenagers, which you switch on.",
        },
        {
          title: "Sources",
          description:
            "Every module cites the scientific references it draws on, checked at the source.",
        },
        {
          title: "Offline",
          description:
            "Your patient writes without a network; everything syncs as soon as one is back.",
        },
        {
          title: "The patient stays in control",
          description:
            "They grant sharing once; their entries then reach you continuously. They can withdraw that permission or erase their data whenever they wish. You can withdraw a tool at any time.",
        },
      ],
    },
  },

  pricing: {
    pageTitle: "Pricing",
    metaDescription:
      "60-day trial, no credit card, then €29 per month excl. VAT. Founders: €19 per month excl. VAT for life, 100 seats. Patient app always free.",
    eyebrow: "Pricing",
    heading: "One subscription, all your patients.",
    description:
      "60-day trial, no credit card. Then a single subscription: €29 excl. VAT per month with no commitment, or €24 excl. VAT per month billed annually. The first 100 subscribers keep €19 excl. VAT per month for life. Never a price per patient.",
    plans: [
      {
        name: "Trial",
        price: "Free",
        period: "60 days, no credit card",
        description:
          "Two months is several appointments: time to hand tools to your patients and go over them together.",
        features: [
          "The full product, no restrictions",
          "No card requested, nothing to cancel",
        ],
        note: "At the end of the trial, you subscribe and everything continues, data included. Otherwise your account goes read-only for 30 days, time to export, then your patient data is deleted. We let you know 15 days ahead.",
        highlighted: false,
      },
      {
        name: "Founders",
        price: "€19 excl. VAT",
        period: "per month, locked for life",
        description:
          "For the first 100 who subscribe during their trial.",
        features: [
          "Rate guaranteed as long as the subscription stays active",
          "A direct channel to the team",
          "The roadmap ahead of everyone",
        ],
        highlighted: true,
      },
      {
        name: "Subscription",
        price: "€29 excl. VAT",
        period: "per month, no commitment",
        description:
          "Or €24 excl. VAT per month billed annually in advance, that is two months free.",
        features: [
          "Cancel at any time",
          "Referral: one month free for you and for each colleague you refer",
        ],
        highlighted: false,
      },
    ],
    included: {
      title: "Included in every case",
      items: [
        "Practitioner web space",
        "Free patient app",
        "Unlimited patients",
        "All available modules, no extra charge",
        "Full history and export",
        "Email support",
      ],
    },
    subscribeButton: "Join the waiting list",
    subscribeButtonTitle: "During the beta, each account is opened one by one",
    footerNote: [
      "Prices exclude VAT (20%). During the beta, sign-up goes through the waiting list and each account is opened one by one. A practice or organisation with several practitioners? ",
      { href: "/en/contact", text: "Write to us" },
      ": an Organisation plan is in preparation.",
    ] as Segment[],
  },

  about: {
    pageTitle: "About",
    metaDescription:
      "Orekio is a digital care journal supporting the relationship between a practitioner and their patient, between appointments.",
    eyebrow: "About",
    heading: "Orekio was born in consultation.",
    paragraph1:
      "Every practitioner knows the scene. An exercise sheet handed over at the end of an appointment, a photocopied sleep diary, a questionnaire to bring back. At the next appointment, the sheet stayed in a drawer, or comes back half filled in, and what happened is rebuilt from memory. Orekio started there: take what you already hand to your patients on paper, put it on their phone, and find it again in consultation, dated and exactly as it was written.",
    paragraph2:
      "You invite your patient by email, then open the tools one by one, appointment after appointment: sleep diary, Beck's thought records, PHQ-9, safety plan, and some thirty other modules. They use them from their phone, even offline. What they write waits for you at the next appointment, as it is. Orekio shows it, the clinical reading remains yours.",
    paragraph3:
      "Orekio is built by two people: an advanced practice nurse in psychiatry, who makes the clinical choices, and a developer, who builds the product. Orekio sells no data and shows no advertising.",
    boxTitle: "A logbook, not a medical device",
    boxText:
      "Orekio is designed as a digital logbook, not as a medical device. The app only displays: a raw figure, a neutral history, a score without interpretation. No threshold, no signal, no comparison to a norm. The clinical reading belongs to you.",
    paragraph4:
      "Your patients' entries are health data within the meaning of Article 9 of the GDPR. They reach you only with the patient's permission, which they can withdraw, and they can request the export or erasure of their data at any time. Certified health data hosting (HDS) is planned before commercial opening.",
  },

  contact: {
    pageTitle: "Contact",
    metaDescription: "Contact the Orekio team for any question or a demo.",
    eyebrow: "Contact",
    heading: "A question, a demo, or keen to be among the first?",
    description:
      "Write to us in one line: your profession, and what you expect from Orekio. We answer personally.",
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
      "The Orekio blog: practical notes on therapeutic follow-up between appointments, clinical scales, CBT tools, and supporting patients.",
    eyebrow: "Blog",
    heading: "Tools, explained to the practitioners who hand them over.",
    intro:
      "Each article describes a tool, what the literature says about it, and what Orekio does with it. With sources.",
    empty: "The first articles are coming soon.",
    readMore: "Read the article →",
    readingTime: "min read",
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
    noticeBox:
      "This page is a draft structure. The bracketed information must be filled in and validated before the site opens to the public, in accordance with French law n° 2004-575 of 21 June 2004 on confidence in the digital economy (LCEN).",
    sections: [
      {
        heading: "Website publisher",
        lines: [
          ["[Legal company name], [legal form, e.g. SAS, sole trader…]"],
          ["[Registered office address]"],
          ["[Company registration number]"],
          ["Share capital: [amount]"],
          ["Publication director: [name]"],
          ["Contact: ", email],
        ] as Segment[][],
      },
      {
        heading: "Hosting",
        lines: [
          ["[Host name]"],
          ["[Host address]"],
          [
            "The health data processed by Orekio is intended to be hosted with a provider certified as a Health Data Host (HDS in France) under Article L.1111-8 of the French Public Health Code, before commercial launch (see the ",
            { href: "/en/a-propos", text: "About" },
            " page).",
          ],
        ] as Segment[][],
      },
      {
        heading: "Intellectual property",
        lines: [
          [
            "All content on this site (text, logos, trademarks, graphics) is the property of [Legal company name], unless otherwise stated, and may not be reproduced without prior authorization.",
          ],
        ] as Segment[][],
      },
      {
        heading: "Personal data processing",
        lines: [
          [
            "The processing of personal data is described in our ",
            { href: "/en/confidentialite", text: "privacy policy" },
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
    noticeBox:
      "This page is a draft structure, to be reviewed by a legal professional before the service opens to the public. Orekio processes health data (Article 9 of the GDPR), a special category requiring enhanced safeguards.",
    sections: [
      {
        heading: "Data controller",
        lines: [
          [
            "[Legal company name], as data controller, carries out the data processing described below. For any question, contact: [DPO or GDPR contact], ",
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
            "Follow-up data is processed on the basis of the patient's explicit consent (Article 9.2.a of the GDPR), for the sole purpose of facilitating the therapeutic follow-up between the patient and their practitioner. This data is shown back to the practitioner raw, and the clinical analysis is theirs to make.",
          ],
        ] as Segment[][],
      },
      {
        heading: "Retention period",
        lines: [
          [
            "[To be defined: data retention period during active follow-up and after account closure, in line with CNIL recommendations and, where applicable, health-data retention obligations.]",
          ],
        ] as Segment[][],
      },
      {
        heading: "Hosting",
        lines: [
          [
            "Health data is intended to be hosted with a provider certified as a Health Data Host (HDS in France), under Article L.1111-8 of the French Public Health Code.",
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
    noticeBox:
      "This page is a draft structure, to be drafted and validated by a legal professional before the service opens to the public, particularly the liability and termination sections, given the sensitive nature of the data processed.",
    sections: [
      {
        heading: "1. Purpose",
        lines: [
          [
            "These terms of use (“Terms”) define the conditions of access to and use of the Orekio service, a digital care journal designed to facilitate therapeutic follow-up between a practitioner and their patient. Orekio is not a medical device within the meaning of Regulation (EU) 2017/745 (see the ",
            { href: "/en/a-propos", text: "About" },
            " page).",
          ],
        ] as Segment[][],
      },
      {
        heading: "2. Access to the service",
        lines: [
          [
            "Access to the service is by practitioner invitation for the patient, or by subscription for the practitioner (see the ",
            { href: "/en/tarifs", text: "Pricing" },
            " page). [To be completed: eligibility conditions, account creation, verification of healthcare professional status where applicable.]",
          ],
        ] as Segment[][],
      },
      {
        heading: "3. User obligations",
        lines: [
          [
            "The practitioner agrees to use Orekio solely as part of genuine therapeutic follow-up and with their patient's consent. The patient agrees to provide truthful information. [To be completed: fair use of the service, credential security, prohibition of misuse.]",
          ],
        ] as Segment[][],
      },
      {
        heading: "4. Intellectual property",
        lines: [
          [
            "The service, its brand, and its content remain the exclusive property of [Legal company name]. Data entered by users (sleep diary, scale answers, etc.) remains their property.",
          ],
        ] as Segment[][],
      },
      {
        heading: "5. Liability",
        lines: [
          [
            "Orekio displays the data entered as it is and does not substitute for any medical advice. [To be completed: limitations of liability, service availability, force majeure.]",
          ],
        ] as Segment[][],
      },
      {
        heading: "6. Term and termination",
        lines: [
          [
            "[To be completed: termination conditions for the user and for the publisher, what happens to data after termination.]",
          ],
        ] as Segment[][],
      },
      {
        heading: "7. Personal data",
        lines: [
          [
            "The processing of personal data is described in our ",
            { href: "/en/confidentialite", text: "privacy policy" },
            ".",
          ],
          ["Orekio sells no data and shows no advertising."],
        ] as Segment[][],
      },
      {
        heading: "8. Governing law",
        lines: [
          [
            "These Terms are governed by French law. [To be completed: competent jurisdiction in case of dispute.]",
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
