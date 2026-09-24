export interface SkillCategory {
  name: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    items: ["Angular", "TypeScript", "JavaScript", "React", "Next.js"],
  },
  {
    name: "Backend",
    items: ["ASP.NET Core", "C#", "Node.js"],
  },
  {
    name: "Database",
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    name: "UI & Tools",
    items: ["Tailwind CSS", "PrimeNG", "Syncfusion EJ2", "Git"],
  },
];

export const skills: string[] = skillCategories.flatMap(
  (category) => category.items,
);
