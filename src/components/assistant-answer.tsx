import type { DemoAnswer, DemoChart, Fact } from "@/i18n/dictionaries/assistant/types";

const CARD = "flex flex-col gap-3 rounded-2xl border border-outline bg-surface p-4";
const PROSE = "rounded-2xl bg-surface-container p-3.5 text-on-surface";
const CARD_TITLE = "text-[15px] font-medium text-on-surface-strong";
const CHIP_STATE = (selected: boolean | undefined) =>
  selected ? "border-primary bg-primary-container text-primary" : "border-outline text-on-surface";
const ROUTE_BUTTON = "self-start rounded-lg border border-outline px-3 py-1.5 text-[13.5px] font-normal text-primary";

function Facts({ facts, compact = false }: { facts: readonly Fact[]; compact?: boolean }) {
  return (
    <dl className={`grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-x-3.5 gap-y-1.5 ${compact ? "text-[13px]" : ""}`}>
      {facts.map((fact) => (
        <div key={fact.label} className="contents">
          <dt className="text-on-surface-variant">{fact.label}</dt>
          <dd className="min-w-0 tabular-nums text-on-surface-strong">
            {fact.chip ? (
              <span className="inline-block rounded-full border border-outline px-2.5 py-px text-[12.5px] text-on-surface">
                {fact.value}
              </span>
            ) : (
              fact.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function ConfirmRow({ cancel, confirm }: { cancel: string; confirm: string }) {
  return (
    <div className="flex justify-end gap-2 border-t border-outline pt-3">
      <span className="px-3 py-1.5 text-[13.5px] text-on-surface">{cancel}</span>
      <span className="rounded-lg bg-primary px-3.5 py-1.5 text-[13.5px] text-on-primary">{confirm}</span>
    </div>
  );
}

function CardHead({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div>
      <p className={CARD_TITLE}>{title}</p>
      <p className="text-[12.5px] text-on-surface-variant">{subtitle}</p>
    </div>
  );
}

/*
 * Une réponse de l'assistant, telle que la fenêtre de l'app la rend : même découpage en cartes,
 * mêmes libellés. Aucune couleur ne suit une valeur (règle d'or) : tout s'habille à l'identique.
 */
export function AssistantAnswer({ answer }: { answer: DemoAnswer }) {
  switch (answer.kind) {
    case "text":
      return (
        <>
          <div className={PROSE}>
            {answer.text}
            <ul className="mt-1.5 list-disc pl-5">
              {answer.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
          <p className="flex justify-end gap-3 text-[12px] text-on-surface-variant">
            <span>{answer.votes[0]}</span>
            <span>{answer.votes[1]}</span>
          </p>
        </>
      );
    case "steps":
      return (
        <div className={CARD}>
          <p className={CARD_TITLE}>{answer.title}</p>
          <ol className="flex flex-col gap-2 text-on-surface">
            {answer.steps.map((step, i) => (
              <li key={step.text} className="grid grid-cols-[22px_minmax(0,1fr)] gap-x-2.5">
                <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-primary-container text-[12px] font-medium tabular-nums text-primary">
                  {i + 1}
                </span>
                <span>{step.text}</span>
                {step.show ? <span className="col-start-2 text-[12.5px] text-primary">{step.show}</span> : null}
              </li>
            ))}
          </ol>
          {answer.button ? <span className={ROUTE_BUTTON}>{answer.button}</span> : null}
        </div>
      );
    case "navigation":
      return (
        <>
          <div className={PROSE}>{answer.text}</div>
          <span className={ROUTE_BUTTON}>{answer.button}</span>
        </>
      );
    case "action":
      return (
        <div className={CARD}>
          <p className={CARD_TITLE}>{answer.title}</p>
          <Facts facts={answer.facts} />
          <p className="border-t border-outline pt-2.5 text-[13px] text-on-surface-variant">{answer.done}</p>
        </div>
      );
    case "actionForm":
      return (
        <div className={`${CARD} border-2 border-primary`}>
          <p className={CARD_TITLE}>{answer.title}</p>
          <Facts facts={answer.facts} />
          <div className="grid grid-cols-2 gap-x-3 gap-y-2.5">
          {answer.fields.map((field) => (
            <div key={field.question} className={`flex min-w-0 flex-col gap-1.5 ${"days" in field ? "col-span-2" : ""}`}>
              <p className="text-[13px] text-on-surface-variant">{field.question}</p>
              {"days" in field ? (
                <ul className="flex flex-wrap gap-1.5">
                  {field.days.map((day, i) => (
                    <li
                      key={`${day.label}-${i}`}
                      className={`flex h-7 min-w-7 items-center justify-center rounded-full border px-1 text-[12.5px] ${CHIP_STATE(day.selected)}`}
                    >
                      {day.label}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="rounded-lg border border-outline px-3 py-1.5 tabular-nums text-on-surface-strong">{field.value}</p>
              )}
            </div>
          ))}
          </div>
          <ConfirmRow cancel={answer.cancel} confirm={answer.confirm} />
        </div>
      );
    case "entries":
      return (
        <div className={CARD}>
          <CardHead title={answer.title} subtitle={answer.period} />
          {answer.days.map((day) => (
            <div key={day.day} className="flex flex-col gap-1.5 border-t border-outline-variant pt-2.5">
              <p className="text-[13.5px] font-medium text-on-surface-strong">{day.day}</p>
              <Facts facts={day.facts} compact />
              <p className="text-[12.5px] text-primary">{answer.more}</p>
            </div>
          ))}
          <span className={ROUTE_BUTTON}>{answer.button}</span>
        </div>
      );
    case "value":
      return (
        <div className={CARD}>
          <CardHead title={answer.title} subtitle={answer.lead} />
          <p className="text-[36px] font-medium leading-none tabular-nums text-on-surface-strong">{answer.value}</p>
          <span className={ROUTE_BUTTON}>{answer.button}</span>
        </div>
      );
    case "field":
      return (
        <div className={CARD}>
          <CardHead title={answer.title} subtitle={answer.subtitle} />
          <Facts facts={answer.facts} />
        </div>
      );
    case "item":
      return (
        <div className={CARD}>
          <p className={CARD_TITLE}>{answer.title}</p>
          <p className="text-[13px] text-on-surface-variant">{answer.instruction}</p>
          <p className="font-medium text-on-surface-strong">{answer.statement}</p>
          <ul className="flex flex-col gap-1.5 text-[13.5px] text-on-surface">
            {answer.options.map((option) => (
              <li key={option.value} className="grid grid-cols-[22px_minmax(0,1fr)] gap-2">
                <span className="tabular-nums text-on-surface-variant">{option.value}</span>
                {option.label}
              </li>
            ))}
          </ul>
          <p className="text-[12px] italic text-on-surface-variant">{answer.citation}</p>
        </div>
      );
    case "compare":
      return (
        <div className={`${CARD} overflow-x-auto`}>
          <p className={CARD_TITLE}>{answer.title}</p>
          <table className="w-full border-collapse text-left text-[13px]">
            <thead>
              <tr>
                <td className="border-b border-outline-variant py-1.5 pr-2" />
                {answer.columns.map((column) => (
                  <th key={column} scope="col" className="min-w-16 border-b border-outline-variant px-2 py-1.5 align-top font-medium text-on-surface-strong">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {answer.rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row" className="border-b border-outline-variant py-1.5 pr-2 align-top font-normal text-on-surface-variant">
                    {row.label}
                  </th>
                  {row.values.map((value, i) => (
                    <td key={`${row.label}-${i}`} className="border-b border-outline-variant px-2 py-1.5 align-top tabular-nums text-on-surface">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "check":
      return (
        <div className={CARD}>
          <p className={CARD_TITLE}>{answer.title}</p>
          <ul className="flex flex-col gap-1.5 text-[13.5px] text-on-surface">
            {answer.points.map((point) => (
              <li key={point} className="border-t border-outline-variant pt-1.5 first:border-t-0 first:pt-0">
                {point}
              </li>
            ))}
          </ul>
          <span className={ROUTE_BUTTON}>{answer.button}</span>
        </div>
      );
    case "clarify":
      return (
        <>
          <div className={PROSE}>{answer.text}</div>
          <ul className="flex flex-wrap gap-1.5">
            {answer.options.map((option) => (
              <li
                key={option.label}
                className={`rounded-full border px-3 py-1 text-[13px] ${CHIP_STATE(option.selected)}`}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </>
      );
    case "unknown":
      return (
        <>
          <div className={PROSE}>{answer.text}</div>
          <span className="self-start px-1 text-[13.5px] text-primary">{answer.report}</span>
        </>
      );
  }
}

/** La question du praticien, à droite, et le patient qu'elle concerne en puce dessous. */
export function AssistantQuestion({ question, patientChip }: { question: string; patientChip?: string }) {
  return (
    <>
      <p className="max-w-[86%] self-end rounded-2xl rounded-br-md border border-primary/20 bg-primary-container px-3.5 py-2.5 text-on-surface-strong">
        {question}
      </p>
      {patientChip ? (
        <p className="-mt-1 self-end rounded-full border border-outline px-2.5 py-0.5 text-[12.5px] text-on-surface">
          {patientChip}
        </p>
      ) : null}
    </>
  );
}

/* Valeurs fictives, les mêmes dans chaque langue. */
const CHART_VALUES = [5, 4, 6, 5, 7, 6, 6] as const;

/** La courbe fictive de la fiche, avec le repère que pose « Afficher sur le graphique ». */
export function AssistantChart({ chart }: { chart: DemoChart }) {
  const width = 300;
  const height = 120;
  const paddingX = 26;
  const paddingY = 16;
  const last = CHART_VALUES.length - 1;
  const x = (i: number) => paddingX + (i * (width - paddingX - 10)) / last;
  const y = (value: number) => height - paddingY - (value / 10) * (height - 2 * paddingY);
  const path = CHART_VALUES.map((value, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)} ${y(value).toFixed(1)}`).join(" ");
  const markerY = y(CHART_VALUES[last]);
  return (
    <div className={CARD}>
      <p className="text-[12.5px] text-on-surface-variant">{chart.caption}</p>
      <svg viewBox={`0 0 ${width} ${height + 14}`} role="img" aria-label={chart.ariaLabel} className="block h-auto w-full">
        {[0, 5, 10].map((tick) => (
          <g key={tick}>
            <line x1={paddingX} x2={width - 6} y1={y(tick)} y2={y(tick)} stroke="var(--color-outline)" />
            <text x={paddingX - 8} y={y(tick) + 4} fontSize="10" textAnchor="end" fill="var(--color-on-surface-variant)">
              {tick}
            </text>
          </g>
        ))}
        {chart.days.map((day, i) => (
          <text key={`${day}-${i}`} x={x(i)} y={height + 10} fontSize="10" textAnchor="middle" fill="var(--color-on-surface-variant)">
            {day}
          </text>
        ))}
        <path d={path} fill="none" stroke="var(--color-secondary)" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
        {CHART_VALUES.map((value, i) => (
          <circle key={i} cx={x(i)} cy={y(value)} r="3" fill="var(--color-surface)" stroke="var(--color-secondary)" strokeWidth="2" />
        ))}
        <line x1={x(last)} x2={x(last)} y1={paddingY} y2={height - paddingY} stroke="var(--color-primary)" strokeDasharray="3 3" />
        <circle cx={x(last)} cy={markerY} r="8" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" />
        <rect x={x(last) - 76} y={markerY - 30} width="66" height="20" rx="6" fill="var(--color-on-surface-strong)" />
        <text x={x(last) - 43} y={markerY - 16} fontSize="11" textAnchor="middle" fill="var(--color-surface)">
          {chart.marker}
        </text>
      </svg>
    </div>
  );
}
