import type { Segment } from "../segment";
import type { Dictionary } from "./fr";

const email: Segment = {
  href: "mailto:contact@orekio.app",
  text: "contact@orekio.app",
  external: true,
};

export const en: Dictionary = {
  meta: {
    title: "Orekio — Therapeutic support, between sessions",
    description:
      "Orekio connects practitioners and their patients between appointments: sleep diary, validated clinical scales, safety plan, and more. A digital care journal, not a medical device.",
  },

  nav: {
    features: "Features",
    pricing: "Pricing",
    about: "About",
    contact: "Contact",
    subscribe: "Subscribe",
  },

  footer: {
    tagline: "Orekio — Digital care journal",
    disclaimer:
      "Orekio is a digital care journal, not a medical device within the meaning of Regulation (EU) 2017/745. The data shown is raw: the app never interprets it, never triggers an alert, and never makes a diagnosis.",
    legalNotice: "Legal notice",
    privacy: "Privacy",
    terms: "Terms",
  },

  home: {
    eyebrow: "Digital care journal",
    title: "Therapeutic support, between sessions",
    description:
      "Orekio connects the practitioner and their patient between appointments. The practitioner unlocks tools as the follow-up progresses, the patient uses them on their phone. Nothing is interpreted — everything stays available for the next session.",
    ctaSubscribe: "Subscribe to Orekio",
    ctaFeatures: "Discover the features",
    section2Title: "A tool built for follow-up, not for diagnosis",
    section2Description:
      "Orekio is a digital care journal: patient data stays raw, with no interpretation or automatic alert. The practitioner stays in control of what they unlock, and of what they do with it in session.",
    highlights: [
      {
        title: "Sleep diary",
        description:
          "The patient logs their nights, the practitioner reviews the history in session.",
      },
      {
        title: "Validated clinical scales",
        description:
          "PHQ-9, GAD-7, EPDS and others, faithful to their validated version.",
      },
      {
        title: "Safety plan",
        description:
          "A crisis plan built together with the patient, available at any time.",
      },
      {
        title: "Beck's columns, the wheel of emotions...",
        description:
          "Over 30 therapeutic modules, unlocked progressively by the practitioner.",
      },
    ],
    ctaSectionTitle: "Ready to try Orekio with your patients?",
    ctaSectionDescription:
      "Choose a plan and get your therapeutic toolkit back today.",
    ctaSectionButton: "See pricing",
  },

  features: {
    pageTitle: "Features",
    metaDescription:
      "Over 30 therapeutic modules: sleep diary, validated clinical scales, safety plan, wheel of emotions, and more.",
    eyebrow: "Features",
    heading: "Over 30 therapeutic modules",
    description:
      "The practitioner unlocks tools session by session, at their own pace. Every module shows raw data: Orekio never interprets it, never triggers an alert, and never makes a diagnosis.",
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
          "GAD-7 (anxiety)",
          "EPDS (postnatal depression)",
          "BSL-23",
          "RCADS",
          "ASRS",
          "SNAP-IV",
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
      "Choose the Orekio plan that fits your practice: solo practitioner or clinic.",
    eyebrow: "Pricing",
    heading: "One plan per practice",
    description:
      "Every plan gives access to the full set of therapeutic modules. What changes is the number of patients you follow, and the support around it.",
    plans: [
      {
        name: "Discovery",
        price: "Free",
        period: "for 30 days",
        description:
          "To try Orekio with a few patients before committing.",
        features: [
          "Up to 5 patients",
          "All therapeutic modules",
          "Patient mobile app included",
        ],
        highlighted: false,
      },
      {
        name: "Practitioner",
        price: "€39.99",
        period: "per month",
        description:
          "For a practitioner following patients over the long term.",
        features: [
          "Unlimited patients",
          "All therapeutic modules",
          "Full history and export",
          "Email support",
        ],
        highlighted: true,
      },
      {
        name: "Clinic",
        price: "Custom quote",
        period: "multiple practitioners",
        description:
          "For a clinic or organization with several practitioners.",
        features: [
          "Everything in Practitioner, for each member",
          "Admin-managed access",
          "Rollout support",
        ],
        highlighted: false,
      },
    ],
    subscribeButton: "Subscribe (coming soon)",
    subscribeButtonTitle: "Online payment is coming soon",
    footerNote: [
      "Online subscription isn't open yet: secure payment is coming soon. In the meantime, ",
      { href: "/en/contact", text: "contact us" },
      " to be notified when it opens, or for early access.",
    ] as Segment[],
  },

  about: {
    pageTitle: "About",
    metaDescription:
      "Orekio is a digital care journal supporting the relationship between a practitioner and their patient, between appointments.",
    eyebrow: "About",
    heading: "What Orekio is, and what it isn't",
    paragraph1:
      "Orekio supports the relationship between a therapist (advanced practice nurse, psychiatrist, psychologist…) and their patient, in the interval between two appointments. The practitioner invites their patient by email, then progressively unlocks tools as the follow-up goes on: sleep diary, clinical scales, safety plan, and around thirty other modules.",
    paragraph2:
      "The patient uses them from their phone. What they enter stays available for the next session: Orekio only ever displays the data back, never interprets it.",
    boxTitle: "A care journal, not a medical device",
    boxText:
      "Orekio holds the status of a digital care journal, outside the scope of Regulation (EU) 2017/745 on medical devices. No data entered is interpreted by the application: no automatic alert, no clinical label, no comparison to a norm. What's displayed is always a raw figure or a neutral history, leaving the clinical reading up to the practitioner.",
    paragraph3:
      "The health data entered into Orekio falls under Article 9 of the GDPR. It is processed with the patient's explicit consent, and a certified health-data hosting provider (HDS in France) is planned before any large-scale commercialization.",
  },

  contact: {
    pageTitle: "Contact",
    metaDescription: "Contact the Orekio team for any question or a demo.",
    eyebrow: "Contact",
    heading: "A question, a demo?",
    description:
      "The contact form is coming soon. In the meantime, write to us directly:",
    email: "contact@orekio.app",
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
          ["[Legal company name] — [legal form, e.g. SAS, sole trader…]"],
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
            "The health data processed by Orekio is intended to be hosted with a provider certified as a Health Data Host (HDS in France) under Article L.1111-8 of the French Public Health Code, before any large-scale commercialization (see the ",
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
            "[Legal company name], as data controller, carries out the data processing described below. For any question, contact: [DPO or GDPR contact] — ",
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
            "Follow-up data is processed on the basis of the patient's explicit consent (Article 9.2.a of the GDPR), for the sole purpose of facilitating the therapeutic follow-up between the patient and their practitioner. Orekio does not interpret or clinically analyze this data: it is shown back to the practitioner raw.",
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
      "This page is a draft structure, to be drafted and validated by a legal professional before the service opens to the public — particularly the liability and termination sections, given the sensitive nature of the data processed.",
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
            "The practitioner agrees to use Orekio only as part of genuine therapeutic follow-up and with their patient's consent. The patient agrees to provide truthful information. [To be completed: fair use of the service, credential security, prohibition of misuse.]",
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
            "Orekio displays the data entered without interpreting it and does not substitute for any medical advice. [To be completed: limitations of liability, service availability, force majeure.]",
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
