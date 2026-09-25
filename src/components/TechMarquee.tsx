import { skills } from "@/data/skills";

// The list is rendered twice so the track can loop seamlessly. Only the first
// copy is exposed to assistive technology; the second is purely visual.
function SkillList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      aria-label={hidden ? undefined : "Technologies I work with"}
      className="flex shrink-0 gap-3"
    >
      {skills.map((skill) => (
        <li
          key={skill}
          className="shrink-0 rounded-full border border-border px-4 py-1.5 text-sm font-medium text-muted"
        >
          {skill}
        </li>
      ))}
    </ul>
  );
}

export default function TechMarquee() {
  return (
    <div className="marquee-mask overflow-hidden border-y border-border py-4">
      <div className="marquee-track flex w-max gap-3">
        <SkillList />
        <SkillList hidden />
      </div>
    </div>
  );
}
