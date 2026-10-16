"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  FORM_VERSION,
  sections,
  type Condition,
  type Question,
  type Section,
} from "./questions";

// Les réponses vont directement dans la table `beta_feedback` de Supabase,
// par PostgREST et avec la clé publique : le rôle `anon` ne peut qu'y ajouter
// une ligne, jamais lire (voir la migration beta_feedback côté PsyTool).
const SUPABASE_URL = "https://phitpvzzhseucqprdtzh.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_O94sw3KAhhJ75vMV7ADozA_G9l4_AML";

// Le parcours de test alterne site, application et questionnaire : le
// brouillon reste dans le navigateur pour qu'on puisse revenir le finir.
const DRAFT_KEY = "orekio-beta-avis";

type Value = string | string[] | Record<string, string>;
type Answers = Record<string, Value>;
type Status = "idle" | "sending" | "error" | "sent";

function isMet(cond: Condition | undefined, answers: Answers) {
  if (!cond) return true;
  const v = answers[cond.id];
  if (Array.isArray(v)) return v.some((x) => cond.anyOf.includes(x));
  return typeof v === "string" && cond.anyOf.includes(v);
}

function isEmpty(v: Value | undefined) {
  if (v === undefined) return true;
  if (typeof v === "string") return v.trim() === "";
  if (Array.isArray(v)) return v.length === 0;
  return Object.keys(v).length === 0;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function errorFor(q: Question, v: Value | undefined): string | null {
  if (q.required && isEmpty(v)) return "Cette question attend une réponse.";
  if (q.type === "email" && typeof v === "string" && v.trim() && !EMAIL_RE.test(v.trim()))
    return "Cette adresse mail ne semble pas complète.";
  return null;
}

/** Réponses envoyées : sans les questions masquées ni les champs vides. */
function payloadOf(answers: Answers) {
  const out: Answers = {};
  for (const section of sections) {
    if (!isMet(section.showIf, answers)) continue;
    for (const q of section.questions) {
      if (!isMet(q.showIf, answers)) continue;
      const v = answers[q.id];
      if (!isEmpty(v)) out[q.id] = typeof v === "string" ? v.trim() : v;
    }
  }
  return out;
}

type Draft = { answers: Answers; page: number };

function readDraft(): Draft | null {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return null;
    const draft = JSON.parse(raw) as Partial<Draft>;
    if (!draft.answers || Object.keys(draft.answers).length === 0) return null;
    return {
      answers: draft.answers,
      page: Math.min(Math.max(draft.page ?? 0, 0), sections.length - 1),
    };
  } catch {
    // Stockage indisponible (navigation privée…) : on repart de zéro.
    return null;
  }
}

const noop = () => () => {};

/**
 * Le brouillon vit dans le navigateur : le formulaire ne se rend qu'une fois
 * côté client, pour partir directement du brouillon sans écart d'hydratation.
 */
export function FeedbackForm() {
  const isClient = useSyncExternalStore(noop, () => true, () => false);
  if (!isClient) return <div className="min-h-[60vh]" />;
  return <Form initial={readDraft()} />;
}

function Form({ initial }: { initial: Draft | null }) {
  const [answers, setAnswers] = useState<Answers>(initial?.answers ?? {});
  const [page, setPage] = useState(initial?.page ?? 0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const restored = initial !== null;
  const honeypot = useRef<HTMLInputElement>(null);
  const top = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "sent") return;
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify({ answers, page }));
    } catch {
      // Sans stockage, le formulaire marche quand même, sans brouillon.
    }
  }, [answers, page, status]);

  const visible = sections.filter((s) => isMet(s.showIf, answers));
  const current = sections[page];
  const position = visible.indexOf(current);
  const isLast = position === visible.length - 1;

  function set(id: string, v: Value) {
    setAnswers((a) => ({ ...a, [id]: v }));
    setErrors((e) => {
      if (!e[id]) return e;
      const next = { ...e };
      delete next[id];
      return next;
    });
  }

  function validate(section: Section) {
    const found: Record<string, string> = {};
    for (const q of section.questions) {
      if (!isMet(q.showIf, answers)) continue;
      const err = errorFor(q, answers[q.id]);
      if (err) found[q.id] = err;
    }
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) document.getElementById(`q-${first}`)?.focus();
    return !first;
  }

  function go(to: Section) {
    setPage(sections.indexOf(to));
    setErrors({});
    top.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function submit() {
    // Champ piège rempli : un robot. On fait comme si tout allait bien.
    if (honeypot.current?.value) {
      setStatus("sent");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/beta_feedback`, {
        method: "POST",
        headers: {
          apikey: SUPABASE_PUBLISHABLE_KEY,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          form_version: FORM_VERSION,
          answers: payloadOf(answers),
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      try {
        localStorage.removeItem(DRAFT_KEY);
      } catch {}
      top.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch {
      setStatus("error");
    }
  }

  function next(e: React.FormEvent) {
    e.preventDefault();
    if (!validate(current)) return;
    if (isLast) submit();
    else go(visible[position + 1]);
  }

  if (status === "sent") {
    return (
      <div ref={top} className="scroll-mt-8 py-10 text-center sm:py-16">
        <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary-container text-primary">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="m5 12.5 4.5 4.5L19 7.5" />
          </svg>
        </span>
        <h2 className="mt-6 text-[32px] font-medium tracking-[-0.02em] text-on-surface-strong sm:text-[40px]">
          Merci beaucoup&nbsp;!
        </h2>
        <p className="mt-3 text-[17px] font-light">
          Vos retours nous sont précieux pour améliorer Orekio.
        </p>
      </div>
    );
  }

  return (
    <div ref={top} className="scroll-mt-8">
      {/* Progression : une encoche par page affichée. */}
      <div className="flex items-center justify-between gap-4 text-[14px] text-on-surface-variant">
        <span>
          Partie {position + 1} sur {visible.length}
        </span>
        <span className="font-medium text-primary">{current.title}</span>
      </div>
      <div
        className="mt-3 flex gap-1.5"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={visible.length}
        aria-valuenow={position + 1}
        aria-label="Progression du questionnaire"
      >
        {visible.map((s, i) => (
          <span
            key={s.id}
            className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
              i <= position ? "bg-primary" : "bg-outline"
            }`}
          />
        ))}
      </div>

      {page === 0 && (
        <div className="mt-10 rounded-2xl bg-primary-container p-5 text-[15px] leading-relaxed text-on-primary-container sm:p-6">
          <p className="font-medium">
            Merci de tester Orekio&nbsp;! Ce questionnaire prend environ 10
            minutes.
          </p>
          <p className="mt-2 font-light">
            Vos réponses restent enregistrées dans ce navigateur&nbsp;: vous
            pouvez revenir finir plus tard.
          </p>
        </div>
      )}
      {restored && page > 0 && (
        <p className="mt-8 text-[14px] text-on-surface-variant">
          Vous reprenez là où vous vous étiez arrêté.
        </p>
      )}

      <form onSubmit={next} noValidate className="mt-10">
        <h2 className="text-[30px] leading-tight font-medium tracking-[-0.02em] text-on-surface-strong sm:text-[38px]">
          {current.title}
        </h2>
        {current.intro && (
          <p className="mt-3 max-w-2xl text-[17px] leading-relaxed font-light">
            {current.intro}
          </p>
        )}
        {current.questions.some((q) => q.required) && (
          <p className="mt-3 text-[14px] text-on-surface-variant">
            <span aria-hidden className="text-primary">
              *
            </span>{" "}
            Réponse obligatoire
          </p>
        )}

        <div className="mt-10 flex flex-col gap-12">
          {current.questions
            .filter((q) => isMet(q.showIf, answers))
            .map((q) => (
              <Field
                key={q.id}
                q={q}
                value={answers[q.id]}
                error={errors[q.id]}
                onChange={(v) => set(q.id, v)}
              />
            ))}
        </div>

        {/* Champ piège, invisible pour un humain. */}
        <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label>
            Ne pas remplir
            <input ref={honeypot} type="text" name="site_web" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        {status === "error" && (
          <p role="alert" className="mt-10 rounded-xl bg-error-container p-4 text-[15px] text-on-error-container">
            L’envoi n’a pas abouti. Vérifiez votre connexion, puis renvoyez :
            vos réponses sont conservées.
          </p>
        )}

        <div className="mt-12 flex items-center justify-between gap-4 border-t border-outline pt-8">
          {position > 0 ? (
            <button
              type="button"
              onClick={() => go(visible[position - 1])}
              className="rounded-full px-5 py-3 text-[16px] text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Précédent
            </button>
          ) : (
            <span />
          )}
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-[16px] font-medium text-on-primary transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary disabled:translate-y-0 disabled:opacity-60"
          >
            {isLast
              ? status === "sending"
                ? "Envoi…"
                : "Envoyer mes réponses"
              : "Continuer"}
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({
  q,
  value,
  error,
  onChange,
}: {
  q: Question;
  value: Value | undefined;
  error?: string;
  onChange: (v: Value) => void;
}) {
  const labelId = `l-${q.id}`;
  const helpId = q.help ? `h-${q.id}` : undefined;
  const errId = error ? `e-${q.id}` : undefined;
  const describedBy = [helpId, errId].filter(Boolean).join(" ") || undefined;
  const grouped = q.type !== "text" && q.type !== "number" && q.type !== "email";

  const head = (
    <>
      <span id={labelId} className="block text-[19px] leading-snug font-normal text-on-surface-strong">
        {q.label}
        {q.required && (
          <>
            <span aria-hidden className="ml-1 text-primary">
              *
            </span>
            <span className="sr-only"> (obligatoire)</span>
          </>
        )}
      </span>
      {q.help && (
        <span id={helpId} className="mt-1.5 block text-[15px] font-light text-on-surface-variant">
          {q.help}
        </span>
      )}
    </>
  );

  return (
    <div
      role={grouped ? "group" : undefined}
      aria-labelledby={grouped ? labelId : undefined}
      aria-describedby={grouped ? describedBy : undefined}
    >
      {grouped ? head : <label htmlFor={`q-${q.id}`}>{head}</label>}
      <div className="mt-4">
        <Control q={q} value={value} onChange={onChange} describedBy={describedBy} invalid={!!error} />
      </div>
      {error && (
        <p id={errId} className="mt-2.5 text-[14px] text-error">
          {error}
        </p>
      )}
    </div>
  );
}

const choice =
  "cursor-pointer rounded-xl border px-4 py-3 text-[16px] transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-primary";
const choiceOn = "border-primary bg-primary-container text-on-primary-container";
const choiceOff = "border-outline bg-surface hover:border-primary/40";

const inputCls =
  "w-full rounded-xl border border-outline bg-surface px-4 py-3 text-[16px] font-light text-on-surface-strong transition-colors placeholder:text-on-surface-variant/60 focus:border-primary focus:outline-2 focus:outline-offset-0 focus:outline-primary/25 aria-[invalid=true]:border-error";

function Control({
  q,
  value,
  onChange,
  describedBy,
  invalid,
}: {
  q: Question;
  value: Value | undefined;
  onChange: (v: Value) => void;
  describedBy?: string;
  invalid: boolean;
}) {
  const id = `q-${q.id}`;

  switch (q.type) {
    case "single":
    case "multi": {
      const multi = q.type === "multi";
      const selected = multi ? ((value as string[]) ?? []) : [value as string];
      return (
        <div className="flex flex-wrap gap-2.5">
          {q.options.map((opt, i) => {
            const on = selected.includes(opt);
            return (
              <label key={opt} className={`${choice} ${on ? choiceOn : choiceOff} inline-flex items-center gap-3`}>
                <input
                  id={i === 0 ? id : undefined}
                  type={multi ? "checkbox" : "radio"}
                  name={q.id}
                  value={opt}
                  checked={on}
                  onChange={() => {
                    if (!multi) return onChange(opt);
                    const cur = (value as string[]) ?? [];
                    onChange(on ? cur.filter((x) => x !== opt) : [...cur, opt]);
                  }}
                  className="sr-only"
                />
                <span
                  aria-hidden
                  className={`flex size-[18px] shrink-0 items-center justify-center border-[1.5px] ${
                    multi ? "rounded-[5px]" : "rounded-full"
                  } ${on ? "border-primary bg-primary" : "border-on-surface-variant/40"}`}
                >
                  {on && (multi ? (
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
                  ) : (
                    <span className="size-1.5 rounded-full bg-white" />
                  ))}
                </span>
                {opt}
              </label>
            );
          })}
        </div>
      );
    }

    case "scale": {
      const steps = Array.from({ length: q.max - q.min + 1 }, (_, i) => String(q.min + i));
      return (
        <div>
          {/* 0 à 10 : deux lignes sur mobile, pour garder des cases à la taille du doigt. */}
          <div className={`grid gap-1.5 ${steps.length > 7 ? "grid-cols-6 sm:grid-cols-11" : "grid-cols-5"}`}>
            {steps.map((n, i) => {
              const on = value === n;
              return (
                <label
                  key={n}
                  className={`flex h-12 cursor-pointer items-center justify-center rounded-xl border text-[16px] transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-primary sm:h-14 ${
                    on ? "border-primary bg-primary font-medium text-on-primary" : choiceOff
                  }`}
                >
                  <input
                    id={i === 0 ? id : undefined}
                    type="radio"
                    name={q.id}
                    value={n}
                    checked={on}
                    onChange={() => onChange(n)}
                    className="sr-only"
                  />
                  {n}
                </label>
              );
            })}
          </div>
          <div className="mt-2 flex justify-between text-[13px] font-light text-on-surface-variant">
            <span>{q.minLabel}</span>
            <span>{q.maxLabel}</span>
          </div>
        </div>
      );
    }

    case "matrix": {
      const grid = (value as Record<string, string>) ?? {};
      return (
        <div className="divide-y divide-outline rounded-2xl border border-outline">
          {q.rows.map((row, r) => (
            <div
              key={row}
              role="radiogroup"
              aria-label={row}
              className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <span className="text-[15px] text-on-surface-strong">{row}</span>
              <div className="grid shrink-0 grid-cols-6 gap-1.5 sm:w-[25rem]">
                {q.columns.map((col, c) => {
                  const on = grid[row] === col;
                  const wide = col.length > 2;
                  return (
                    <label
                      key={col}
                      className={`flex h-10 cursor-pointer items-center justify-center rounded-lg border text-center leading-none transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-primary ${
                        wide ? "text-[11px]" : "text-[15px]"
                      } ${on ? "border-primary bg-primary text-on-primary" : choiceOff}`}
                    >
                      <input
                        id={r === 0 && c === 0 ? id : undefined}
                        type="radio"
                        name={`${q.id}-${r}`}
                        value={col}
                        checked={on}
                        onChange={() => onChange({ ...grid, [row]: col })}
                        className="sr-only"
                      />
                      {col}
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      );
    }

    case "text":
      return q.long ? (
        <textarea
          id={id}
          rows={q.rows ?? 4}
          maxLength={4000}
          value={(value as string) ?? ""}
          onChange={(e) => onChange(e.target.value)}
          aria-describedby={describedBy}
          aria-invalid={invalid}
          className={`${inputCls} resize-y leading-relaxed`}
        />
      ) : (
        <input
          id={id}
          type="text"
          maxLength={300}
          value={(value as string) ?? ""}
          onChange={(e) => onChange(e.target.value)}
          aria-describedby={describedBy}
          aria-invalid={invalid}
          className={inputCls}
        />
      );

    case "number":
      return (
        <div className="relative max-w-56">
          <input
            id={id}
            type="number"
            inputMode="decimal"
            min={0}
            max={10000}
            value={(value as string) ?? ""}
            onChange={(e) => onChange(e.target.value)}
            aria-describedby={describedBy}
            aria-invalid={invalid}
            className={`${inputCls} pr-24`}
          />
          <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[15px] font-light text-on-surface-variant">
            {q.suffix}
          </span>
        </div>
      );

    case "email":
      return (
        <input
          id={id}
          type="email"
          autoComplete="email"
          maxLength={254}
          value={(value as string) ?? ""}
          onChange={(e) => onChange(e.target.value)}
          aria-describedby={describedBy}
          aria-invalid={invalid}
          className={`${inputCls} max-w-md`}
        />
      );
  }
}
