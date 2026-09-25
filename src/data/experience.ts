export interface Role {
  title: string;
  period: string;
  /** Short status line shown with the dates, e.g. a conversion to full-time. */
  note?: string;
  highlights: string[];
  technologies: string[];
}

export interface ExperienceEntry {
  organization: string;
  /** Newest role first. */
  roles: Role[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
}

// Newest first. Source of truth: the resume in public/resume.pdf and the
// project repositories (Grownited bullets are limited to what the E-Furniture
// repository actually implements).
export const experience: ExperienceEntry[] = [
  {
    organization: "Q8 Technologies",
    roles: [
      {
        title: "Junior Angular Developer",
        period: "Aug 2024 — Present",
        highlights: [
          "Own frontend feature delivery for Agilic, a production project-management platform, from design through deployment.",
          "Build Gantt chart views with editable columns, drag-and-drop tasks, and real-time scheduling in Syncfusion EJ2, plus 15+ reusable Angular components with PrimeNG and PrimeFlex.",
          "Integrate REST APIs across 4 core modules (task management, reporting, user management, notifications) and use lazy loading and route guards to speed up initial page load.",
        ],
        technologies: [
          "Angular",
          "TypeScript",
          "PrimeNG",
          "PrimeFlex",
          "Syncfusion EJ2",
          "ASP.NET Core",
          "PostgreSQL",
        ],
      },
      {
        title: "Angular Developer Intern",
        period: "Jun 2024 — Jul 2024",
        note: "Converted to full-time",
        highlights: [
          "Developed Angular components, services, and pipes for a live project-management platform used daily by internal teams.",
          "Implemented dynamic data handling and CRUD operations against RESTful APIs across multiple modules.",
          "Built responsive, accessible interfaces with PrimeNG, PrimeFlex, and Syncfusion UI components.",
        ],
        technologies: ["Angular", "TypeScript", "PrimeNG", "PrimeFlex", "Syncfusion EJ2", "Git"],
      },
    ],
  },
  {
    organization: "Grownited Pvt. Ltd",
    roles: [
      {
        title: "Software Engineer Intern",
        period: "Jan 2023 — May 2023",
        highlights: [
          "Built a full-stack furniture e-commerce website with the MERN stack.",
          "Developed Express REST APIs with Mongoose for users, categories, brands, and products, including product image uploads.",
          "Built React pages for customer registration and login, plus admin and vendor dashboards for managing product listings.",
        ],
        technologies: ["MongoDB", "Express.js", "React", "Node.js", "Git"],
      },
    ],
  },
];

export const education: EducationEntry[] = [
  {
    degree: "B.E., Information Technology",
    institution: "Government Engineering College Modasa",
    period: "2018 — 2022",
    grade: "CGPA: 7.78 / 10",
  },
];
