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
      "Orekio is a digital care journal, outside the scope of Regulation (EU) 2017/745 on medical devices. The data shown stays raw: interpretation, alerts and diagnosis all rest with the practitioner.",
    legalNotice: "Legal notice",
    privacy: "Privacy",
    terms: "Terms",
  },

  home: {
    eyebrow: "Your digital therapeutic toolkit",
    title: "Therapeutic support, between appointments",
    description:
      "Your patient notes on their phone day by day, and you find it all again from your web workspace. Dated, precise records, exactly as they entered them: observation, rather than a memory pieced together in the waiting room. You adjust the follow-up according to your own clinical assessment.",
    ctaSubscribe: "Join the waiting list",
    ctaFeatures: "Discover the features",
    section2Title: "Follow-up on the patient side, clinical reading on the practitioner side",
    section2Description:
      "Orekio is a digital care journal for mental health professionals, nurses, advanced practice nurses, psychiatrists, physicians, psychologists: patient data stays raw, exactly as they entered it. The practitioner stays in control of what they unlock, and of the reading they make of it in the appointment.",
    highlights: [
      {
        title: "Sleep diary",
        description:
          "The patient logs their nights, the practitioner reviews the history in the appointment.",
      },
      {
        title: "Validated clinical scales",
        description:
          "The PHQ-9 today, faithful to its validated version. Others will follow as their rights are secured.",
      },
      {
        title: "Safety plan",
        description:
          "A crisis plan built together with the patient, available at any time.",
      },
      {
        title: "Beck's columns, the wheel of emotions...",
        description:
          "Six modules open from day one. Around thirty more, already built, open over the coming months.",
      },
    ],
    ctaSectionTitle: "Ready to try Orekio with your patients?",
    ctaSectionDescription:
      "A 60-day trial with no credit card, and a founders' price reserved for the first 100. Join the waiting list.",
    ctaSectionButton: "Join the waiting list",
    apps: {
      title: "Two apps, one follow-up",
      description:
        "Orekio comes as two apps that talk to each other. You work from your computer, your patient from their phone. The subscription is yours: for them, the app is free.",
      cards: [
        {
          title: "Your web workspace, on desktop",
          description:
            "You invite your patients, unlock the tools one at a time, and review what they entered during the appointment. Nothing to install, everything runs in your browser.",
        },
        {
          title: "Your patient's mobile app",
          description:
            "They find the tools you opened for them and fill them in day by day, even offline. They get access on your invitation, free of charge.",
        },
      ],
    },
  },

  features: {
    pageTitle: "Features",
    metaDescription:
      "Six modules at launch, around thirty on the way: sleep diary, PHQ-9, safety plan, wheel of emotions, Beck's columns, and more.",
    eyebrow: "Features",
    heading: "Six modules at launch, around thirty on the way",
    description:
      "Six modules are open from day one, reviewed end to end. Around thirty more, already built, open over the coming months. You unlock each tool from your web workspace, appointment by appointment and at your own pace; your patient finds it on their phone. Every module shows raw data: Orekio displays it, you interpret it.",
    openBadge: "at launch",
    openAtLaunch: [
      "Sleep diary",
      "Mood tracking",
      "PHQ-9 (depression)",
      "Beck's columns",
      "Safety plan",
      "Wheel of emotions",
      "Breathing techniques",
    ],
    categories: [
      {
        title: "Day-to-day tracking",
        modules: [
          "Sleep diary",
          "Mood tracking",
          "Craving journal",
          "Chronobiology tracking",
          "Medication adherence",
        ],
      },
      {
        title: "Validated clinical scales",
        modules: [
          "PHQ-9 (depression)",
          "GAD-7 (anxiety), coming next",
        ],
      },
      {
        title: "Cognitive behavioral therapy",
        modules: [
          "Beck's columns",
          "Decisional balance",
          "Behavioral activation",
          "Graded exposure",
          "Cognitive distortions",
        ],
      },
      {
        title: "Crisis management and regulation",
        modules: [
          "Safety plan",
          "Wheel of emotions",
          "Breathing techniques",
          "Grounding techniques",
          "Distress tolerance",
        ],
      },
    ],
  },

  pricing: {
    pageTitle: "Pricing",
    metaDescription:
      "60-day trial, no credit card, then €29 per month excl. VAT. Founders: €19 per month excl. VAT for life, 100 seats. Patient app always free.",
    eyebrow: "Pricing",
    heading: "A 60-day trial, then one price",
    description:
      "60-day trial, no credit card. Then €29 per month excl. VAT, or €24 per month excl. VAT billed yearly. Founders: €19 per month excl. VAT for life, 100 seats. One month free for every colleague you refer, and one for you. Unlimited patients, patient app always free.",
    plans: [
      {
        name: "Trial",
        price: "Free",
        period: "60 days, no credit card",
        description:
          "Long enough for a real follow-up: a history, entries between appointments, a shared review.",
        features: [
          "Practitioner web workspace",
          "Unlimited patients",
          "All open modules",
          "Free mobile app for your patients",
        ],
        highlighted: false,
      },
      {
        name: "Founders",
        price: "€19 excl. VAT",
        period: "per month, locked for life",
        description:
          "For those who subscribe during their trial. 100 seats, direct access to the team and the roadmap.",
        features: [
          "Everything in Practitioner, for life",
          "Price guaranteed while the subscription stays active",
          "A direct channel to the team",
          "The roadmap ahead of everyone else",
        ],
        highlighted: true,
      },
      {
        name: "Practitioner",
        price: "€29 excl. VAT",
        period: "per month, no commitment",
        description:
          "Or €24 per month excl. VAT billed yearly in advance, two months free.",
        features: [
          "Practitioner web workspace",
          "Unlimited patients",
          "All open modules",
          "Free mobile app for your patients",
          "Full history and export",
          "Email support",
          "One month free per referred colleague, and one for you",
        ],
        highlighted: false,
      },
    ],
    subscribeButton: "Join the waiting list",
    subscribeButtonTitle: "During the beta, every account is opened by hand",
    footerNote: [
      "Prices exclude VAT (20% added). During the beta, sign-up goes through a waiting list and every account is opened by hand. A practice with several practitioners? ",
      { href: "/en/contact", text: "Write to us" },
      ", a per-seat plan is on its way.",
    ] as Segment[],
  },

  about: {
    pageTitle: "About",
    metaDescription:
      "Orekio is a digital care journal supporting the relationship between a practitioner and their patient, between appointments.",
    eyebrow: "About",
    heading: "What Orekio does, and what it leaves to the practitioner",
    paragraph1:
      "Orekio supports the relationship between a mental health professional (nurse, advanced practice nurse, psychiatrist, physician, psychologist…) and their patient, in the interval between two appointments. The practitioner invites their patient by email, then progressively unlocks tools as the follow-up goes on: sleep diary, clinical scales, safety plan, and around thirty other modules.",
    paragraph2:
      "The patient uses them from their phone. What they enter stays available for the next appointment: Orekio displays the data back as it is, and the clinical reading belongs to the practitioner. Orekio is built by a team pairing an advanced practice nurse in psychiatry with a developer.",
    boxTitle: "A digital care journal, outside the scope of medical devices",
    boxText:
      "Orekio is designed as a digital care journal, outside the scope of Regulation (EU) 2017/745 on medical devices. The application limits itself to displaying: what appears on screen is always a raw figure or a neutral history. Alerts, clinical labels and comparison to a norm all rest with the practitioner, and so does the whole clinical reading.",
    paragraph3:
      "The health data entered into Orekio falls under Article 9 of the GDPR. It is processed with the patient's explicit consent, and a certified health-data hosting provider (HDS in France) is planned before commercial launch.",
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
};
