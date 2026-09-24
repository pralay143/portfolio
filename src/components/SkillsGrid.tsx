import { skillCategories } from "@/data/skills";
import SkillBadge from "@/components/SkillBadge";
import Reveal from "@/components/Reveal";

export default function SkillsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {skillCategories.map((category, index) => (
        <Reveal key={category.name} delay={index * 80}>
          <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface-1 p-5 transition-colors duration-300 hover:border-border-strong">
            <h3 className="text-xs font-semibold tracking-wide text-subtle uppercase">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
