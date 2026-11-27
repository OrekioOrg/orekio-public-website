"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { DEMO_FORM } from "@/integrations";
import type { DemoFormCopy } from "@/i18n/dictionaries/fr";

type Status = "idle" | "sending" | "sent" | "error" | "tooMany";

// Bornes du contrat de l'API (`DemoRequestBody`, OrekioOrg/Orekio).
const NAME_MAX = 120;
const MESSAGE_MAX = 1000;
const SEND_TIMEOUT_MS = 30_000;

const FIELD =
  "mt-1.5 w-full rounded-lg border border-outline bg-surface px-4 py-3 text-[16px] text-on-surface-strong focus:border-primary";
const LABEL = "block text-[15px] font-medium text-on-surface-strong";

export function DemoForm({
  copy,
  privacyHref,
}: {
  copy: DemoFormCopy;
  privacyHref: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [sentTo, setSentTo] = useState("");
  // Faux dans le HTML exporté : le bouton ne s'active qu'une fois le script là,
  // sans quoi le navigateur enverrait le formulaire à la page elle-même.
  const ready = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  async function send(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const read = (key: string) => String(data.get(key) ?? "").trim();
    const email = read("email");
    setStatus("sending");
    try {
      const response = await fetch(DEMO_FORM.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: read("name"),
          email,
          profession: read("profession"),
          message: read("message"),
          website: read("website"),
        }),
        signal: AbortSignal.timeout(SEND_TIMEOUT_MS),
      });
      if (response.ok) {
        setSentTo(email);
        setStatus("sent");
      } else {
        setStatus(response.status === 429 ? "tooMany" : "error");
      }
    } catch {
      setStatus("error");
    }
  }

  const mailto = (
    <a
      href={`mailto:${DEMO_FORM.email}?subject=${encodeURIComponent(copy.mailSubject)}`}
      className="text-secondary underline"
    >
      {DEMO_FORM.email}
    </a>
  );

  if (status === "sent") {
    return (
      <div role="status">
        <h2 className="text-[20px] font-medium text-on-surface-strong">
          {copy.sentTitle}
        </h2>
        <p className="mt-2 text-[16px] leading-relaxed text-on-surface">
          {copy.sentText.replace("{email}", sentTo)}
        </p>
      </div>
    );
  }

  return (
    <form method="post" onSubmit={send} className="space-y-5">
      <h2 className="text-[20px] font-medium text-on-surface-strong">{copy.title}</h2>
      <label className={LABEL}>
        {copy.name}
        <input name="name" required maxLength={NAME_MAX} autoComplete="name" className={FIELD} />
      </label>
      <label className={LABEL}>
        {copy.email}
        <input
          name="email"
          type="email"
          required
          maxLength={320}
          pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
          autoComplete="email"
          className={FIELD}
        />
      </label>
      <label className={LABEL}>
        {copy.profession}
        <select name="profession" required defaultValue="" className={FIELD}>
          <option value="" disabled>
            {copy.professionPlaceholder}
          </option>
          {copy.professions.map((profession) => (
            <option key={profession.value} value={profession.value}>
              {profession.label}
            </option>
          ))}
        </select>
      </label>
      <label className={LABEL}>
        {copy.message}
        <textarea name="message" rows={4} maxLength={MESSAGE_MAX} className={FIELD} />
      </label>
      {/* Champ piège : hors écran et hors tabulation, seul un robot le remplit. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <p className="text-[14px] leading-relaxed text-on-surface-variant">
        {copy.warning}{" "}
        <Link href={privacyHref} className="text-secondary underline">
          {copy.privacyLink}
        </Link>
      </p>
      <button
        type="submit"
        disabled={!ready || status === "sending"}
        className="rounded-lg bg-primary px-6 py-3 text-[15px] font-medium text-on-primary transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? copy.sending : copy.submit}
      </button>
      <p role="alert" className="text-[15px] leading-relaxed text-on-surface-strong">
        {status === "error" || status === "tooMany" ? (
          <>
            {status === "tooMany" ? copy.tooMany : copy.error} {mailto}
          </>
        ) : null}
      </p>
      <noscript>
        <p className="text-[15px] text-on-surface">
          {copy.noScript} {mailto}
        </p>
      </noscript>
    </form>
  );
}
