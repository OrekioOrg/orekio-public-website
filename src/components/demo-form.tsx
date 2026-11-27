"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { DEMO_FORM } from "@/integrations";
import type { DemoFormCopy } from "@/i18n/dictionaries/fr";

type Status = "idle" | "sending" | "sent" | "error" | "tooMany";

// Bornes du contrat de l'API (`DemoRequestBody`, OrekioOrg/Orekio).
const NAME_MAX = 120;
const MESSAGE_MAX = 1000;
// L'hébergement de l'API s'endort sans trafic : sa première réponse peut prendre
// 50 secondes.
const SEND_TIMEOUT_MS = 75_000;

const FIELD_BASE =
  "w-full rounded-lg border border-transparent bg-surface px-4 text-[16px] text-on-surface-strong placeholder:text-on-surface-variant focus:border-accent";
const FIELD = `h-12 ${FIELD_BASE}`;

/** La demande de démonstration, posée sur le vert profond. */
export function DemoForm({ copy }: { copy: DemoFormCopy }) {
  const [status, setStatus] = useState<Status>("idle");
  const [sentTo, setSentTo] = useState("");
  // Faux dans le HTML exporté : le bouton ne s'active qu'une fois le script là,
  // sans quoi le navigateur enverrait le formulaire à la page elle-même.
  const ready = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  // Réveille l'API au premier geste dans le formulaire, le temps de le remplir :
  // pas à chaque visite de l'accueil. La réponse ne sert à rien.
  const [touched, setTouched] = useState(false);
  useEffect(() => {
    if (!touched) return;
    fetch(new URL("/healthz", DEMO_FORM.endpoint), { mode: "no-cors" }).catch(() => {});
  }, [touched]);

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
        window.umami?.track("demo-envoyee");
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
      className="underline"
    >
      {DEMO_FORM.email}
    </a>
  );

  if (status === "sent") {
    return (
      <div role="status">
        <h3 className="text-[22px] font-medium">{copy.sentTitle}</h3>
        <p className="mt-2 text-[16px] font-light leading-relaxed text-on-ink/80">
          {copy.sentText.replace("{email}", sentTo)}
        </p>
      </div>
    );
  }

  return (
    <form method="post" onSubmit={send} onFocus={() => setTouched(true)} className="relative">
      <h3 className="text-[22px] font-medium">{copy.title}</h3>
      <div className="mt-5 space-y-3">
        <input
          name="name"
          required
          maxLength={NAME_MAX}
          autoComplete="name"
          aria-label={copy.name}
          placeholder={copy.name}
          className={FIELD}
        />
        <input
          name="email"
          type="email"
          required
          maxLength={320}
          pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
          autoComplete="email"
          aria-label={copy.email}
          placeholder={copy.email}
          className={FIELD}
        />
        <select
          name="profession"
          required
          defaultValue=""
          aria-label={copy.profession}
          className={`${FIELD} invalid:text-on-surface-variant`}
        >
          <option value="" disabled>
            {copy.profession}
          </option>
          {copy.professions.map((profession) => (
            <option key={profession.value} value={profession.value}>
              {profession.label}
            </option>
          ))}
        </select>
        <textarea
          name="message"
          rows={3}
          maxLength={MESSAGE_MAX}
          aria-label={copy.message}
          placeholder={copy.message}
          className={`block py-3 ${FIELD_BASE}`}
        />
        {/* Champ piège : hors écran et hors tabulation, seul un robot le remplit. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label>
            Website
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <button
          type="submit"
          disabled={!ready || status === "sending"}
          className="h-12 w-full rounded-lg bg-accent px-6 text-[15px] font-medium text-on-primary transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === "sending" ? copy.sending : copy.submit}
        </button>
      </div>
      <p role="alert" className="mt-3 text-[15px] leading-relaxed empty:mt-0">
        {status === "error" || status === "tooMany" ? (
          <>
            {status === "tooMany" ? copy.tooMany : copy.error} {mailto}
          </>
        ) : null}
      </p>
      <noscript>
        <p className="mt-3 text-[15px]">
          {copy.noScript} {mailto}
        </p>
      </noscript>
    </form>
  );
}
