// Le contenu de la page Assistant. Les réponses montrées reprennent les libellés de l'app web
// (apps/web/src/i18n/locales, clés `assistant.*`) et leur forme : une réponse par variante.

export type Fact = { label: string; value: string; chip?: boolean };

export type DemoAnswer =
  | { kind: "text"; text: string; bullets?: readonly string[]; votes?: boolean }
  | {
      kind: "steps";
      title: string;
      steps: readonly { text: string; show?: string }[];
      button?: string;
    }
  | { kind: "navigation"; text: string; button: string }
  | {
      kind: "action";
      title: string;
      facts: readonly Fact[];
      state: "pending" | "done";
      cancel: string;
      confirm: string;
      done: string;
    }
  | {
      kind: "actionForm";
      title: string;
      facts: readonly Fact[];
      daysQuestion: string;
      days: readonly { label: string; selected: boolean }[];
      timeQuestion: string;
      time: string;
      cancel: string;
      confirm: string;
    }
  | {
      kind: "entries";
      title: string;
      period: string;
      days: readonly { day: string; facts: readonly Fact[] }[];
      more: string;
      button: string;
    }
  | { kind: "value"; title: string; lead: string; value: string; button: string }
  | { kind: "field"; title: string; subtitle: string; facts: readonly Fact[] }
  | {
      kind: "item";
      title: string;
      instruction: string;
      statement: string;
      options: readonly { value: string; label: string }[];
      citation: string;
    }
  | {
      kind: "compare";
      title: string;
      columns: readonly string[];
      rows: readonly { label: string; values: readonly string[] }[];
    }
  | { kind: "check"; title: string; points: readonly string[]; button: string }
  | {
      kind: "clarify";
      text: string;
      options: readonly { label: string; selected?: boolean }[];
    }
  | { kind: "unknown"; text: string; report: string };

export type DemoChart = {
  caption: string;
  ariaLabel: string;
  days: readonly string[];
  values: readonly number[];
  marker: string;
};

export type DemoScene = {
  label: string;
  question: string;
  patient: boolean;
  answer: DemoAnswer;
  /** Ce que la carte devient après le geste de la démonstration. */
  after?: DemoAnswer;
  toast?: string;
  chart?: boolean;
};

export type DemoCopy = {
  ariaLabel: string;
  windowTitle: string;
  notice: string;
  placeholder: string;
  waiting: string;
  patientChip: string;
  fictional: string;
  pickerLabel: string;
  pause: string;
  resume: string;
  voteUp: string;
  voteDown: string;
  chart: DemoChart;
  scenes: readonly DemoScene[];
};

export type GalleryTile = {
  tag: string;
  title: string;
  description: string;
  /** Colonnes occupées sur grand écran : deux, ou toute la rangée. */
  width?: "wide" | "full";
  examples: readonly {
    question: string;
    patient?: boolean;
    answer: DemoAnswer;
    chart?: boolean;
  }[];
};

export type AssistantPageCopy = {
  pageTitle: string;
  metaDescription: string;
  eyebrow: string;
  headingLine1: string;
  headingLine2: string;
  lede: string;
  ledeStrong: string;
  scope: string;
  demo: DemoCopy;
  capabilities: {
    eyebrow: string;
    title: string;
    description: string;
    tiles: readonly GalleryTile[];
  };
  actions: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly { title: string; description: string }[];
  };
  information: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly string[];
  };
  privacy: {
    eyebrow: string;
    title: string;
    description: string;
    typedTitle: string;
    typed: readonly { text: string; removed?: boolean }[];
    sentTitle: string;
    sent: readonly { text: string; replaced?: boolean }[];
    returnedTitle: string;
    returned: string;
    receivedTitle: string;
    received: string;
    neverTitle: string;
    never: string;
    limitTitle: string;
    limit: string;
    provider: string;
    privacyLink: string;
  };
  goldenRule: {
    eyebrow: string;
    title: string;
    description: string;
    doesTitle: string;
    does: readonly string[];
    refusesTitle: string;
    refuses: readonly string[];
    example: { question: string; answer: DemoAnswer };
  };
  safeguards: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly { title: string; description: string }[];
  };
  teaser: { eyebrow: string; title: string; description: string; link: string };
};
