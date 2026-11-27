import type { AssistantPageCopy, DemoAnswer, Fact } from "./types";

const patientFact: Fact = { label: "Patient", value: "Camille Martin", chip: true };

const SCHEDULE: readonly Fact[] = [
  patientFact,
  { label: "Scale", value: "PHQ-9" },
  { label: "Cadence", value: "Weekly" },
  { label: "Send day", value: "Monday" },
  { label: "Time", value: "09:00" },
];
const ACTION_WORDS = { cancel: "Cancel", confirm: "Confirm", done: "Action done" };

const SCHEDULE_DONE: DemoAnswer = {
  kind: "action",
  title: "Schedule a scale",
  facts: SCHEDULE,
  done: ACTION_WORDS.done,
};
const SCHEDULE_PENDING: DemoAnswer = {
  kind: "actionForm",
  title: "Schedule a scale",
  facts: [patientFact],
  fields: [
    { question: "Which scale?", value: "PHQ-9" },
    { question: "How often?", value: "Weekly" },
    { question: "Which day?", value: "Monday" },
    { question: "At what time?", value: "09:00" },
  ],
  cancel: ACTION_WORDS.cancel,
  confirm: ACTION_WORDS.confirm,
};

const FREE: DemoAnswer = {
  kind: "text",
  text: "The consultation notebook gathers the questions the patient writes down between two appointments. You will find it on the overview of their record.",
  bullets: ["questions arrive as they are written", "at the end of the appointment, you write the summary"],
  votes: ["Helpful answer", "Unhelpful answer"],
};
const STEPS: DemoAnswer = {
  kind: "steps",
  title: "Export your data",
  steps: [
    { text: "Open “My profile”." },
    { text: "In the “My data” card, click “Export my data”.", show: "Show on the page" },
    { text: "Pick the format: “Readable document” or “Raw data (JSON)”." },
    { text: "The file downloads; its name carries the date, never a patient's name." },
  ],
  button: "Open my profile",
};
const NIGHTS = [
    {
      day: "Night from Sunday to Monday, October 26",
      facts: [
        { label: "Time I tried to fall asleep", value: "23:10" },
        { label: "Number of awakenings", value: "2" },
        { label: "Time of my final awakening", value: "06:45" },
      ],
    },
    {
      day: "Night from Saturday to Sunday, October 25",
      facts: [
        { label: "Time I tried to fall asleep", value: "00:20" },
        { label: "Number of awakenings", value: "0" },
        { label: "Time of my final awakening", value: "08:30" },
      ],
    },
  ];
const entriesOf = (days: typeof NIGHTS): DemoAnswer => ({
  kind: "entries",
  title: "Entries: Sleep diary",
  period: "The last 7 days",
  days,
  more: "Other fields",
  button: "Open “Sleep diary”",
});
const ENTRIES = entriesOf(NIGHTS);
/* Une seule nuit dans la fenêtre animée : la question reste visible au-dessus de la carte. */
const ENTRIES_DEMO = entriesOf(NIGHTS.slice(0, 1));
const VALUE: DemoAnswer = {
  kind: "value",
  title: "Mood",
  lead: "Entry of Monday, October 26, 2026",
  value: "6",
  button: "Show on chart",
};
const FIELD: DemoAnswer = {
  kind: "field",
  title: "PHQ-9",
  subtitle: "Scale score",
  facts: [
    { label: "Calculation", value: "Sum of the 9 items" },
    { label: "Answers per item", value: "From 0 to 3" },
    { label: "Reversed items", value: "None" },
    { label: "Score range", value: "From 0 to 27" },
  ],
};
const REFUSAL: DemoAnswer = {
  kind: "navigation",
  text: "I can't analyse patient data. The entries can be viewed on the relevant screen.",
  button: "Open scales and questionnaires",
};

export const assistantEn: AssistantPageCopy = {
  pageTitle: "AI assistant",
  metaDescription:
    "The Orekio AI assistant explains the app, guides you step by step, finds a piece of information and prepares an action you confirm. It displays, it never concludes, and Orekio does not itself send the model any of your patients' data.",
  eyebrow: "The practitioner's AI assistant",
  headingLine1: "Ask the question.",
  headingLine2: "Orekio shows you.",
  lede: "A window that follows you from screen to screen. It explains the app, guides you step by step, finds a piece of information and prepares an action.",
  ledeStrong: "It displays, it never concludes, and Orekio does not itself send the model any of your patients' data.",
  scope: "In the practitioner web app. The patient app has no assistant.",
  stats: [
    { value: "13", label: "answer forms" },
    { value: "12", label: "pieces of information" },
    { value: "6", label: "actions to confirm" },
    { value: "0", label: "patient data added by Orekio" },
  ],
  demo: {
    ariaLabel: "Assistant demonstration",
    windowTitle: "AI assistant",
    notice: "You are talking to an AI. Its answers are about using Orekio.",
    placeholder: "Ask your question about Orekio",
    waiting: "Answer in progress",
    patientChip: "Camille M.",
    fictional: "Animated demonstration · fictional patient and data",
    pickerLabel: "Choose a demonstration",
    pause: "Pause",
    resume: "Resume",
    chart: {
      caption: "Record · My daily tracking",
      ariaLabel: "Fictional mood curve over seven days, with a marker on Monday, October 26",
      days: ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
      marker: "Oct 26 · 6",
    },
    scenes: [
      {
        label: "Schedule a scale",
        question: "Schedule the PHQ-9 every Monday at 9 am.",
        patient: true,
        answer: SCHEDULE_PENDING,
        after: SCHEDULE_DONE,
        toast: ACTION_WORDS.done,
      },
      { label: "Find entries", question: "Their nights this week?", patient: true, answer: ENTRIES_DEMO },
      { label: "Point at a chart", question: "What mood did they note on Monday?", patient: true, answer: VALUE, chart: true },
      { label: "Get guided", question: "How do I export my data?", answer: STEPS },
      { label: "Understand a score", question: "How is the PHQ-9 score calculated?", answer: FIELD },
      { label: "A clinical question", question: "Their score went up, is that worrying?", patient: true, answer: REFUSAL },
    ],
  },
  capabilities: {
    eyebrow: "What it can do",
    title: "An answer designed for each question",
    description:
      "The model does not write everything. Most of the time it points: to a walkthrough, a screen, a field, a piece of information. Orekio then writes the answer with its own labels and reads the data itself, the way the screen reads it.",
    tiles: [
      {
        tag: "Free-text answer",
        title: "It explains the app",
        description: "A short plain-text answer about a screen, a module or a setting.",
        examples: [{ question: "What is the consultation notebook for?", answer: FREE }],
      },
      {
        tag: "Navigation",
        title: "It opens the right screen",
        description: "A screen, a tab of the record, the note editor, the notebook. One button, and nothing opens without your click.",
        examples: [
          {
            question: "I want to invite a new patient",
            answer: { kind: "navigation", text: "This button opens the screen you asked for.", button: "Open the invitation form" },
          },
        ],
      },
      {
        tag: "Choice chips",
        title: "It asks which one",
        description: "When a word fits several modules: chips in alphabetical order, never in order of relevance.",
        examples: [
          {
            question: "Unlock the ASRS",
            answer: {
              kind: "clarify",
              text: "Which of these modules?",
              options: [{ label: "ASRS v1.1, Full Assessment" }, { label: "ASRS v1.1, Screener", selected: true }],
            },
          },
        ],
      },
      {
        tag: "Guided walkthrough",
        title: "It guides step by step",
        description: "Six walkthroughs written with the exact labels of the screen. “Show on the page” circles the button in question.",
        examples: [{ question: "How do I export my data?", answer: STEPS }],
      },
      {
        tag: "A module's entries",
        title: "It finds the entries",
        description: "Over 7, 30 or 90 days, with the labels the patient reads. One line per entry, no total, no sorting by value.",
        examples: [{ question: "Their nights this week?", patient: true, answer: ENTRIES }],
      },
      {
        tag: "A scale question",
        title: "It quotes the instrument",
        description: "The instructions, the wording, each answer and its value, read from the configuration, with the source.",
        examples: [
          {
            question: "What does the first PHQ-9 question say?",
            answer: {
              kind: "item",
              title: "PHQ-9 · question 1 of 10",
              instruction: "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
              statement: "Little interest or pleasure in doing things",
              options: [
                { value: "0", label: "Not at all" },
                { value: "1", label: "Several days" },
                { value: "2", label: "More than half the days" },
                { value: "3", label: "Nearly every day" },
              ],
              citation: "PHQ-9, Kroenke, Spitzer & Williams, 2001",
            },
          },
        ],
      },
      {
        tag: "A day's value",
        title: "It points at the chart",
        description: "The raw value for a day, then “Show on chart”: the curve on the record places a marker on that day.",
        width: "wide",
        examples: [{ question: "What mood did they note on Monday?", patient: true, answer: VALUE, chart: true }],
      },
      {
        tag: "A field's definition",
        title: "It says how it is calculated",
        description: "The formula, the answers per item, the reversed items, the range. Never a threshold.",
        examples: [{ question: "How is the PHQ-9 score calculated?", answer: FIELD }],
      },
      {
        tag: "Comparison",
        title: "It compares facts",
        description: "Two or three modules side by side, presented identically. “Which one should I choose?” remains a refusal.",
        examples: [
          {
            question: "Compare the PHQ-9 and the short ASRS",
            answer: {
              kind: "compare",
              title: "Module comparison",
              columns: ["PHQ-9", "ASRS v1.1, Screener"],
              rows: [
                { label: "Type", values: ["Scale", "Scale"] },
                { label: "Questions", values: ["10", "6"] },
                { label: "Score", values: ["0 to 27", "0 to 24"] },
                { label: "Audience", values: ["Adult, Senior", "Adult"] },
              ],
            },
          },
        ],
      },
      {
        tag: "Troubleshooting",
        title: "It checks for you",
        description: "A module not visible, missing entries: each point is read the way the screen reads it, with no colour by state.",
        examples: [
          {
            question: "They can't see the breathing module",
            patient: true,
            answer: {
              kind: "check",
              title: "Module not visible: Breathing techniques",
              points: [
                "Module unlocked on October 14, 2026",
                "Follow-up active",
                "Entry sharing turned off by the patient",
                "Last entry: hidden while sharing is off",
              ],
              button: "Open the modules",
            },
          },
        ],
      },
      {
        tag: "I don't know",
        title: "It can say no",
        description: "Outside its guide, it says so. You can report the question to the team so the help can be completed.",
        examples: [
          {
            question: "Can I bill a video consultation?",
            answer: { kind: "unknown", text: "I don't know how to answer this question.", report: "Report this question to the team" },
          },
        ],
      },
      {
        tag: "Action",
        title: "It completes it with you",
        description: "An incomplete request opens a card that asks what is missing, preset to what you said.",
        width: "full",
        examples: [
          {
            question: "Add a reminder for their sleep diary, weekdays at 9 pm",
            patient: true,
            answer: {
              kind: "actionForm",
              title: "Add a reminder",
              facts: [patientFact],
              fields: [
                { question: "Which module?", value: "Sleep diary" },
                {
                  question: "Which days?",
                  days: [
                    { label: "M", selected: true },
                    { label: "T", selected: true },
                    { label: "W", selected: true },
                    { label: "T", selected: true },
                    { label: "F", selected: true },
                    { label: "S", selected: false },
                    { label: "S", selected: false },
                  ],
                },
                { question: "At what time?", value: "21:00" },
              ],
              cancel: ACTION_WORDS.cancel,
              confirm: ACTION_WORDS.confirm,
            },
          },
          {
            question: "Schedule the PHQ-9 every Monday at 9 am",
            patient: true,
            answer: SCHEDULE_DONE,
          },
        ],
      },
    ],
  },
  actions: {
    eyebrow: "Preparing an action",
    title: "It prepares. You confirm.",
    description:
      "“I want to add a reminder” is enough. The card asks for what is missing and every setting can be corrected on the spot. Nothing is written before “Confirm”, through the same service as the screen's button, with the same checks.",
    items: [
      { title: "Unlock a module", description: "For the patient on the record, under the same conditions as the screen's button." },
      { title: "Schedule a scale", description: "Cadence, send day and time, with the options of the screen." },
      { title: "Add a reminder", description: "Days of the week and a fixed time, on the chosen module." },
      { title: "Edit a reminder", description: "“21:00 instead of 20:00”, without rephrasing everything." },
      { title: "Enable a module in the library", description: "Without touching the rest of your list." },
      { title: "Set your notifications", description: "Turn a practitioner notification on or off." },
    ],
  },
  information: {
    eyebrow: "Finding information",
    title: "The answer comes from the screen, not the model",
    description:
      "The model picks a request from a closed catalogue. The card reads it the way the screen reads it, for the patient in question. What it displays never goes back to the model.",
    items: [
      "Unlocked modules",
      "Scale scheduling",
      "A scale's completions",
      "Last entry received",
      "A module's entries",
      "A day's value",
      "A module's reminders",
      "Notes on the patient",
      "Caseload",
      "Pending invitations",
      "Modules in my library",
      "My subscription",
    ],
  },
  privacy: {
    eyebrow: "Confidentiality",
    title: "Displayed, yes. Sent, no.",
    description:
      "Orekio does not itself pass your patients' names, entries or scores, or your notes, to the model. When you ask for information about a patient, Orekio reads and displays it. The names of your patients and invitees, and any email address, are removed from your question twice before sending: in the browser, then on the server.",
    typedTitle: "What you type",
    sentTitle: "What is sent",
    question: [
      { text: "Schedule the PHQ-9 for " },
      { text: "Camille Martin", replacedBy: "ce patient" },
      { text: " every Monday at 9 am, and notify " },
      { text: "camille.m@example.com", replacedBy: "cette adresse" },
    ],
    returnedTitle: "What comes back",
    returned: "A proposal in a closed form, checked by the server: schedule the PHQ-9, Monday at 09:00. The patient comes from the record or from your question, recognised by Orekio, never from the model.",
    receivedTitle: "Received by the model",
    received: "The instructions, the user guide, closed lists (modules, fields, walkthroughs, actions), the screen's name, the module on display, whether a record is open, today's date and your questions, without recognised names or addresses. A second model checks the question and any free-text answer.",
    neverTitle: "Never passed on by Orekio",
    never: "The page address, the patient's identifier, their name, entries, scores, notes, the list of what they are tracking. A card's result stays in your browser.",
    limitTitle: "A limit to be aware of",
    limit: "The rest of your question goes out as you write it. No filter recognises a clinical situation described in plain words, or a single name typed in lower case, misspelled or not on your list: do not write patient data in the field.",
    provider: "The model is provided by Anthropic.",
    privacyLink: "Read the privacy policy",
  },
  goldenRule: {
    eyebrow: "Golden rule",
    title: "A logbook, not a clinical opinion",
    description:
      "The assistant talks about the tool. It does not read a score for you, compare against any norm or recommend any module. Every value is presented identically, whether low or high.",
    doesTitle: "What it does",
    does: [
      "Show a day's raw value, without comment",
      "Explain how a score is calculated, and its range",
      "Display a scale question and its answers, with its source",
      "Compare two or three modules on facts: questions, range, audience",
      "Open the screen where the information can be read",
    ],
    refusesTitle: "What it refuses",
    refuses: [
      "Say whether a score is severe, worrying or improving",
      "Give a threshold, a norm or an interpretation",
      "Advise which module to choose for a patient",
      "Analyse a patient's entries",
      "Colour a piece of data according to its value",
    ],
    example: { question: "Their PHQ-9 score went up, is that worrying?", answer: REFUSAL },
  },
  safeguards: {
    eyebrow: "Safeguards",
    title: "Predictable, sober, under control",
    description: "An AI in a logbook is judged by what it cannot do. Here is what the app guarantees.",
    items: [
      { title: "Nothing without your click", description: "No screen opens, nothing is highlighted, nothing is written without an action from you." },
      { title: "Plain text only", description: "No tag, image or link coming from the model is interpreted." },
      { title: "Output filter", description: "An out-of-scope free-text answer is removed before it can be read: “This answer cannot be displayed.”" },
      { title: "AI notice", description: "“You are talking to an AI”, at the top of the conversation." },
      { title: "No text kept", description: "Orekio keeps neither your questions nor the answers, only counters with no text, except a question you choose to report. The conversation lives in the tab and the cross clears it." },
      { title: "Your feedback", description: "Two thumbs under a rendered answer, helpful or not, in one gesture." },
      { title: "Reported question", description: "Under an “I don't know”, you reread the text and decide whether to send it to the team." },
      { title: "Always there", description: "Movable, collapsible into a pill, the window follows you from one screen to the next." },
    ],
  },
  teaser: {
    text: "A question about the app? The AI assistant explains it, guides you step by step and finds a piece of information.",
    link: "See it all on the assistant page",
  },
};
