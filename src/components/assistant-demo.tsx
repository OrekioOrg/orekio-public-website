"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { AssistantAnswer, AssistantChart, AssistantQuestion } from "@/components/assistant-answer";
import type { DemoCopy } from "@/i18n/dictionaries/assistant/types";

/* rest : la scène complète, sans animation (premier affichage, sans JS, mouvement réduit). */
type Phase = "rest" | "typing" | "waiting" | "answer" | "after";

const TYPE_MS = 42;
const BEFORE_SEND_MS = 350;
const WAITING_MS = 1300;
const BEFORE_GESTURE_MS = 1900;
const READ_MS = 5200;
const FIRST_REST_MS = 4200;

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void): () => void {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

/*
 * La fenêtre de l'assistant, rejouée : la question se tape, l'attente, la réponse, puis le geste.
 * Elle tourne seule, sauf en mouvement réduit ; choisir une scène arrête le défilement, le bouton
 * fige tout de suite ce qui bouge (WCAG 2.2.2), et elle s'arrête hors de l'écran. Une hauteur fixe : la page ne saute pas d'une scène à l'autre.
 */
export function AssistantDemo({ copy }: { copy: DemoCopy }) {
  const [index, setIndex] = useState(0);
  const [storedPhase, setPhase] = useState<Phase>("rest");
  const [typed, setTyped] = useState(0);
  const [auto, setAuto] = useState(true);
  const [paused, setPaused] = useState(false);
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );
  const phase: Phase = reduced ? "rest" : storedPhase;
  const [visible, setVisible] = useState(true);
  const windowRef = useRef<HTMLDivElement>(null);
  const scene = copy.scenes[index];

  useEffect(() => {
    const target = windowRef.current;
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const play = useCallback((next: number) => {
    setIndex(next);
    setTyped(0);
    setPhase("typing");
  }, []);

  const next = (index + 1) % copy.scenes.length;

  useEffect(() => {
    if (!visible || reduced || paused) return;
    const after = (ms: number, step: () => void) => {
      const timer = setTimeout(step, ms);
      return () => clearTimeout(timer);
    };
    const loop = (ms: number) => (auto ? after(ms, () => play(next)) : undefined);
    switch (phase) {
      case "rest":
        return loop(FIRST_REST_MS);
      case "typing":
        return typed < scene.question.length
          ? after(TYPE_MS, () => setTyped((n) => n + 1))
          : after(BEFORE_SEND_MS, () => setPhase("waiting"));
      case "waiting":
        return after(WAITING_MS, () => setPhase("answer"));
      case "answer":
        if (scene.after || scene.chart) return after(BEFORE_GESTURE_MS, () => setPhase("after"));
        return loop(READ_MS);
      case "after":
        return loop(READ_MS);
    }
  }, [phase, typed, auto, visible, reduced, paused, scene, next, play]);

  const choose = (i: number) => {
    setAuto(false);
    setPaused(false);
    play(i);
  };

  const asked = phase !== "typing";
  const answered = phase === "rest" || phase === "answer" || phase === "after";
  const gestured = phase === "rest" || phase === "after";
  const answer = gestured && scene.after ? scene.after : scene.answer;

  return (
    <div>
      <div
        ref={windowRef}
        role="group"
        aria-label={copy.ariaLabel}
        className="relative mx-auto flex h-[640px] w-full max-w-[440px] flex-col overflow-hidden rounded-2xl border border-outline bg-surface text-[14.5px] leading-normal shadow-sm"
      >
        <p className="border-b border-outline px-4 py-3.5 text-[16px] font-medium text-on-surface-strong">{copy.windowTitle}</p>
        <div className="flex min-h-0 flex-1 flex-col justify-end gap-3 overflow-hidden px-4 py-3.5">
          <p className="rounded-xl bg-surface-container px-3 py-2.5 text-[13px] text-on-surface">{copy.notice}</p>
          {asked ? <AssistantQuestion question={scene.question} patientChip={scene.patient ? copy.patientChip : undefined} /> : null}
          {phase === "waiting" ? (
            <p className="flex items-center gap-2.5 text-[13px] text-on-surface-variant">
              <span aria-hidden="true" className="h-[22px] w-[22px] rounded-full border-[2.5px] border-outline border-t-primary motion-safe:animate-spin" />
              {copy.waiting}
            </p>
          ) : null}
          {answered ? (
            <div key={`${index}-${gestured}`} className="assistant-enter flex flex-col gap-2.5">
              <AssistantAnswer answer={answer} />
              {gestured && scene.chart ? <AssistantChart chart={copy.chart} /> : null}
            </div>
          ) : null}
        </div>
        {phase === "after" && scene.toast ? (
          <p className="assistant-enter absolute bottom-[84px] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl bg-on-surface-strong px-3.5 py-2 text-[13.5px] text-surface">
            {scene.toast}
          </p>
        ) : null}
        <div className="border-t border-outline p-3">
          <div className={`flex items-center gap-2 rounded-xl border py-1.5 pl-3.5 pr-1.5 ${phase === "typing" ? "border-primary text-on-surface-strong" : "border-outline text-on-surface-variant"}`}>
            <span className="min-w-0 flex-1 truncate">
              {phase === "typing" ? scene.question.slice(0, typed) : copy.placeholder}
            </span>
            <span aria-hidden="true" className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-lg bg-primary text-[18px] text-on-primary">
              ↑
            </span>
          </div>
        </div>
      </div>

      <div role="group" aria-label={copy.pickerLabel} className="mx-auto mt-5 flex max-w-[440px] flex-wrap justify-center gap-2">
        {copy.scenes.map((item, i) => (
          <button
            key={item.label}
            type="button"
            aria-pressed={i === index}
            onClick={() => choose(i)}
            className={`min-h-11 rounded-full border px-3 py-1.5 text-[13.5px] transition-colors ${
              i === index ? "border-primary bg-primary text-on-primary" : "border-outline text-on-surface hover:bg-primary-container"
            }`}
          >
            {item.label}
          </button>
        ))}
        {reduced ? null : (
          <button
            type="button"
            onClick={() => {
              setPaused(auto && !paused);
              setAuto(paused || !auto);
            }}
            className="min-h-11 rounded-full px-3 py-1.5 text-[13.5px] text-primary underline-offset-2 hover:underline"
          >
            {auto && !paused ? copy.pause : copy.resume}
          </button>
        )}
      </div>
      <p className="mt-3 text-center font-mono text-[11px] tracking-[0.06em] text-on-surface-variant">{copy.fictional}</p>
    </div>
  );
}
