// Decorative editor-style card for the hero. It restates the hero copy as a
// TypeScript object (it is not a real source file), so it is hidden from
// assistive technology.

type Token = [text: string, className?: string];

const kw = "text-accent-strong";
const str = "text-foreground";
const key = "text-muted";
const punct = "text-subtle";

const lines: Token[][] = [
  [["const ", kw], ["developer", str], [" = {", punct]],
  [["  role", key], [": ", punct], ['"Angular Developer"', str], [",", punct]],
  [["  company", key], [": ", punct], ['"Q8 Technologies"', str], [",", punct]],
  [["  experience", key], [": ", punct], ['"2+ years"', str], [",", punct]],
  [["  focus", key], [": [", punct]],
  [["    "], ['"Gantt"', str], [",", punct]],
  [["    "], ['"Scheduling"', str], [",", punct]],
  [["    "], ['"Data Grids"', str]],
  [["  ],", punct]],
  [["};", punct]],
];

const timeline = [
  { label: "Gantt", start: 0, width: 46 },
  { label: "Scheduling", start: 30, width: 42 },
  { label: "Data Grids", start: 58, width: 38 },
];

export default function HeroCodeCard() {
  return (
    <div
      aria-hidden
      className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-border-strong bg-surface-1/80 shadow-[0_30px_80px_-40px_var(--ring)] backdrop-blur-sm"
    >
      <div className="flex items-center gap-3 border-b border-border px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        </div>
        <span className="font-mono text-xs text-muted">pralay-mehta.ts</span>
      </div>

      <pre className="overflow-hidden px-4 py-4 font-mono text-[12.5px] leading-6 sm:px-5 sm:text-[13.5px]">
        <code>
          {lines.map((tokens, index) => (
            <span key={index} className="flex">
              <span className="w-7 shrink-0 text-subtle/70 select-none">
                {index + 1}
              </span>
              <span className="whitespace-pre">
                {tokens.map(([text, className], tokenIndex) => (
                  <span key={tokenIndex} className={className}>
                    {text}
                  </span>
                ))}
                {index === lines.length - 1 && (
                  <span className="animate-caret ml-0.5 inline-block h-4 w-[2px] translate-y-[3px] bg-accent-strong" />
                )}
              </span>
            </span>
          ))}
        </code>
      </pre>

      <div className="border-t border-border bg-surface-2/60 px-4 py-4 sm:px-5">
        <div className="mb-3 flex items-center justify-between font-mono text-[11px] text-subtle">
          <span>timeline.gantt</span>
          <span>Sprint view</span>
        </div>
        <div className="relative flex flex-col gap-2.5">
          <span className="absolute top-0 bottom-0 left-[64%] w-px bg-accent/50" />
          {timeline.map((task, index) => (
            <div key={task.label} className="flex items-center gap-3">
              <span className="w-20 shrink-0 text-[11px] text-muted">
                {task.label}
              </span>
              <div className="relative h-2 flex-1 rounded-full bg-surface-3">
                <span
                  className="animate-bar-grow absolute inset-y-0 rounded-full bg-gradient-to-r from-accent to-accent-strong"
                  style={{
                    left: `${task.start}%`,
                    width: `${task.width}%`,
                    animationDelay: `${500 + index * 150}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
