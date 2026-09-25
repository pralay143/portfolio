import type { TimelineItem } from "@/data/experience";
import Reveal from "@/components/Reveal";

// Vertical timeline shared by the About page (detailed) and the Home page
// (compact: organization, role and dates only).
export default function Timeline({
  items,
  compact = false,
}: {
  items: TimelineItem[];
  compact?: boolean;
}) {
  return (
    <ol
      className={`relative flex flex-col border-l border-border pl-8 ${
        compact ? "gap-7" : "gap-10"
      }`}
    >
      {items.map((item, index) => (
        <Reveal key={`${item.title}-${item.period}`} delay={index * 100}>
          <li className="relative">
            <span
              aria-hidden
              className="absolute top-1.5 -left-[35px] h-3 w-3 rounded-full bg-accent shadow-[0_0_10px_var(--ring)]"
            />
            {compact ? (
              <>
                <h3 className="font-semibold text-foreground">
                  {item.organization}
                </h3>
                <p className="mt-1 flex flex-col gap-0.5 text-sm text-muted sm:flex-row sm:gap-x-2">
                  <span className="font-medium text-foreground/90">
                    {item.title}
                  </span>
                  <span aria-hidden className="hidden text-subtle sm:inline">
                    ·
                  </span>
                  <span>{item.period}</span>
                </p>
              </>
            ) : (
              <>
                <p className="text-sm font-medium text-subtle">{item.period}</p>
                <h3 className="mt-1 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted">{item.organization}</p>
                <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </>
            )}
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
