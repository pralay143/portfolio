import { coreSkills, skillCategories } from "@/data/skills";
import SkillBadge from "@/components/SkillBadge";
import Reveal from "@/components/Reveal";

export default function SkillsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Reveal className="sm:col-span-2">
        <div className="flex flex-col gap-4 rounded-2xl border border-accent/40 bg-surface-1 p-5 shadow-[0_20px_45px_-30px_var(--ring)] transition-colors duration-300 hover:border-accent/60 sm:p-6">
          <div className="flex flex-col gap-1">
            <h3
              id="core-skills-heading"
              className="text-xs font-semibold tracking-wide text-accent-strong uppercase"
            >
              Core skills
            </h3>
            <p className="text-sm text-muted">
              My main focus for frontend and Angular roles.
            </p>
          </div>
          <ul aria-labelledby="core-skills-heading" className="flex flex-wrap gap-2.5">
            {coreSkills.map((skill) => (
              <li key={skill}>
                <SkillBadge skill={skill} core />
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {skillCategories.map((category, index) => {
        const headingId = `skills-${category.name.toLowerCase().replace(/[^a-z]+/g, "-")}`;

        return (
          <Reveal key={category.name} delay={(index + 1) * 80}>
            <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface-1 p-5 transition-colors duration-300 hover:border-border-strong">
              <h3
                id={headingId}
                className="text-xs font-semibold tracking-wide text-subtle uppercase"
              >
                {category.name}
              </h3>
              <ul aria-labelledby={headingId} className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <li key={skill}>
                    <SkillBadge skill={skill} />
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
