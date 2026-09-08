"use client";

import { useEffect, useState } from "react";

export interface ShareLabels {
  share: string;
  shareNative: string;
  shareCopy: string;
  shareCopied: string;
  shareX: string;
  shareLinkedin: string;
}

interface Props {
  /** Absolute URL of the article. */
  url: string;
  title: string;
  labels: ShareLabels;
}

const ICON = "h-[18px] w-[18px] fill-current";

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className={ICON} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className={ICON} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" className={ICON} aria-hidden="true">
      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className={ICON} aria-hidden="true">
      <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
  );
}
function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" className={ICON} aria-hidden="true">
      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 8.81C7.5 8.31 6.79 8 6 8c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
    </svg>
  );
}

const btn =
  "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-outline text-on-surface-variant transition-colors hover:bg-primary-container hover:text-secondary";

export function ShareButtons({ url, title, labels }: Props) {
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);

  useEffect(() => {
    // Client-only feature detection: navigator.share is unknown at SSR, so the
    // native-share button can only appear after mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCanNativeShare(typeof navigator !== "undefined" && !!navigator.share);
  }, []);

  const enc = encodeURIComponent;
  const xHref = `https://twitter.com/intent/tweet?text=${enc(title)}&url=${enc(url)}`;
  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked — no-op */
    }
  }

  async function nativeShare() {
    try {
      await navigator.share({ title, url });
    } catch {
      /* user cancelled — no-op */
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 font-mono text-[11px] uppercase tracking-[0.1em] text-on-surface-variant">
        {labels.share}
      </span>

      {canNativeShare && (
        <button
          type="button"
          onClick={nativeShare}
          className={btn}
          aria-label={labels.shareNative}
          title={labels.shareNative}
        >
          <ShareIcon />
        </button>
      )}

      <button
        type="button"
        onClick={copy}
        className={btn}
        aria-label={copied ? labels.shareCopied : labels.shareCopy}
        title={copied ? labels.shareCopied : labels.shareCopy}
      >
        {copied ? <CheckIcon /> : <LinkIcon />}
      </button>

      <a
        href={linkedinHref}
        target="_blank"
        rel="noopener noreferrer"
        className={btn}
        aria-label={labels.shareLinkedin}
        title={labels.shareLinkedin}
      >
        <LinkedInIcon />
      </a>
      <a
        href={xHref}
        target="_blank"
        rel="noopener noreferrer"
        className={btn}
        aria-label={labels.shareX}
        title={labels.shareX}
      >
        <XIcon />
      </a>

      <span
        role="status"
        aria-live="polite"
        className={`font-mono text-[11px] text-secondary transition-opacity ${
          copied ? "opacity-100" : "opacity-0"
        }`}
      >
        {labels.shareCopied}
      </span>
    </div>
  );
}
