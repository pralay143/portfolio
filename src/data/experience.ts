export interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description: string;
}

export const experience: ExperienceItem[] = [
  {
    title: "B.E., Information Technology",
    organization: "Government Engineering College Modasa",
    period: "2018 — 2022",
    description:
      "Completed a Bachelor of Engineering in Information Technology.",
  },
  {
    title: "Angular Developer Intern",
    organization: "Q8 Technologies",
    period: "June 2024 — July 2024",
    description:
      "Developed Angular components, services, and pipes for a live project management platform used daily by internal teams. Worked with RESTful APIs for dynamic data handling and CRUD operations, and used PrimeNG, PrimeFlex, and Syncfusion UI libraries to build responsive, accessible interfaces. Converted to full-time after 2 months.",
  },
  {
    title: "Junior Angular Developer",
    organization: "Q8 Technologies",
    period: "August 2024 — Present",
    description:
      "Leading frontend development of a production project management platform (Agilic): built and maintained 15+ reusable Angular components with PrimeNG and PrimeFlex, integrated REST APIs across 4 core modules, and implemented Angular lazy loading and route guards to improve page load performance.",
  },
];
