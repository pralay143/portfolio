import type { EducationEntry, ExperienceEntry, Role } from "@/data/experience";
import Reveal from "@/components/Reveal";
import SkillBadge from "@/components/SkillBadge";

// Vertical timelines shared by the About page (detailed) and the Home page
// (compact). Companies sit on the main line; each company's roles sit on a
// nested line, newest first, to show progression within the company.

function Dot() {
  return (
    <span
      aria-hidden
      className="absolute top-1.5 -left-[35px] h-3 w-3 rounded-full bg-accent shadow-[0_0_10px_var(--ring)]"
    />
  );
}

function RoleMeta({ role }: { role: Role }) {
  return (
    <p className="flex flex-col gap-0.5 text-sm text-muted sm:flex-row sm:flex-wrap sm:gap-x-2">
      <span>{role.period}</span>
      {role.note && (
        <>
          <span aria-hidden className="hidden text-subtle sm:inline">
            ·
          </span>
          <span className="text-accent-strong">{role.note}</span>
        </>
      )}
    </p>
  );
}

function RoleDetails({ role }: { role: Role }) {
  return (
    <>
      <h4 className="font-semibold text-foreground">{role.title}</h4>
      <RoleMeta role={role} />
      <ul className="mt-3 flex max-w-2xl flex-col gap-2">
        {role.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex items-start gap-3 text-sm leading-6 text-muted"
          >
            <span
              aria-hidden
              className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent-strong"
            />
            {highlight}
          </li>
        ))}
      </ul>
      <ul
        aria-label={`Technologies used as ${role.title}`}
        className="mt-3 flex flex-wrap gap-1.5"
      >
        {role.technologies.map((technology) => (
          <li key={technology}>
            <SkillBadge skill={technology} small />
          </li>
        ))}
      </ul>
    </>
  );
}

function RoleSummary({ role }: { role: Role }) {
  return (
    <>
      <h4 className="text-sm font-medium text-foreground/90">{role.title}</h4>
      <RoleMeta role={role} />
    </>
  );
}

export default function ExperienceTimeline({
  items,
  compact = false,
}: {
  items: ExperienceEntry[];
  compact?: boolean;
}) {
  return (
    <ol
      className={`relative flex flex-col border-l border-border pl-8 ${
        compact ? "gap-7" : "gap-12"
      }`}
    >
      {items.map((entry, index) => (
        <Reveal key={entry.organization} delay={index * 100}>
          <li className="relative">
            <Dot />
            <h3
              className={`font-semibold text-foreground ${compact ? "" : "text-lg"}`}
            >
              {entry.organization}
            </h3>
            <ol
              className={`relative mt-3 flex flex-col border-l border-dashed border-border-strong pl-5 ${
                compact ? "gap-3" : "gap-8"
              }`}
            >
              {entry.roles.map((role) => (
                <li key={role.title} className="relative">
                  <span
                    aria-hidden
                    className="absolute top-2 -left-[25px] h-2 w-2 rounded-full border-2 border-accent-strong bg-background"
                  />
                  {compact ? <RoleSummary role={role} /> : <RoleDetails role={role} />}
                </li>
              ))}
            </ol>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}

export function EducationTimeline({ items }: { items: EducationEntry[] }) {
  return (
    <ol className="relative flex flex-col gap-10 border-l border-border pl-8">
      {items.map((item, index) => (
        <Reveal key={item.degree} delay={index * 100}>
          <li className="relative">
            <Dot />
            <p className="text-sm font-medium text-subtle">{item.period}</p>
            <h3 className="mt-1 text-lg font-semibold text-foreground">
              {item.degree}
            </h3>
            <p className="text-sm text-muted">{item.institution}</p>
            {item.grade && (
              <p className="mt-2 text-sm text-muted">{item.grade}</p>
            )}
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
