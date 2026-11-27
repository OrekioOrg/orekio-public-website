import { SegmentText } from "@/components/segment-text";
import type { FaqQuestion } from "@/i18n/dictionaries/faq/types";

/*
 * Une question repliée : <details> marche sans JavaScript, et la réponse est dans
 * le HTML. L'ancre sert la page FAQ, qui seule la pose.
 */
export function FaqItem({
  question,
  anchor,
  hidden,
}: {
  question: FaqQuestion;
  anchor?: string;
  hidden?: boolean;
}) {
  return (
    <details id={anchor} hidden={hidden} className="group scroll-mt-6 border-b border-outline">
      <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 [&::-webkit-details-marker]:hidden">
        <h3 className="text-[17px] font-medium text-on-surface-strong">
          {question.question}
        </h3>
        <span
          aria-hidden="true"
          className="shrink-0 text-[22px] font-light leading-none text-secondary transition-transform group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="space-y-3 pb-5 pr-8 text-[16px] font-light leading-relaxed text-on-surface">
        {question.answer.map((line, lineIndex) => (
          <p key={lineIndex}>
            {line.map((segment, segmentIndex) => (
              <SegmentText key={segmentIndex} segment={segment} />
            ))}
          </p>
        ))}
      </div>
    </details>
  );
}
