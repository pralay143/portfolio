export interface SkillCategory {
  name: string;
  items: string[];
}

// The technologies most relevant to frontend/Angular roles. Shown first and
// emphasized; they are not repeated in the categories below.
export const coreSkills: string[] = ["Angular", "TypeScript", "RxJS", "PrimeNG"];

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    items: ["JavaScript", "HTML", "SCSS", "Redux", "React", "Next.js"],
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
    items: ["Tailwind CSS", "Syncfusion EJ2", "Git"],
  },
];
