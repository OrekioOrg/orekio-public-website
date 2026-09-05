import type { Segment } from "@/i18n/segment";
import { SegmentText } from "./segment-text";

export interface LegalPageDict {
  eyebrow: string;
  heading: string;
  noticeBox: string;
  sections: {
    heading: string;
    lines: Segment[][];
  }[];
}

// Shared layout for the three placeholder legal pages (mentions légales,
// confidentialité, CGU): eyebrow, heading, a "draft" notice box, then a
// list of sections whose paragraphs may contain inline links.
export function LegalPage({ dict }: { dict: LegalPageDict }) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-secondary">
        {dict.eyebrow}
      </p>
      <h1 className="mt-4 text-[32px] font-medium text-on-surface-strong">
        {dict.heading}
      </h1>

      <div className="mt-6 rounded-lg border border-outline bg-surface-container-low p-6">
        <p className="text-[15px] leading-relaxed text-on-surface-variant">
          {dict.noticeBox}
        </p>
      </div>

      <div className="mt-10 space-y-8 text-[16px] leading-relaxed text-on-surface">
        {dict.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-[18px] font-medium text-on-surface-strong">
              {section.heading}
            </h2>
            <p className="mt-3 text-on-surface-variant">
              {section.lines.map((line, lineIndex) => (
                <span key={lineIndex}>
                  {lineIndex > 0 && <br />}
                  {line.map((segment, segmentIndex) => (
                    <SegmentText key={segmentIndex} segment={segment} />
                  ))}
                </span>
              ))}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
