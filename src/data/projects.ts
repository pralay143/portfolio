export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "agilic",
    title: "Agilic - Project Management Dashboard",
    description:
      "Built scalable Gantt chart UI with editable columns using Syncfusion EJ2. Implemented drag-drop for tasks, real-time scheduling updates, and responsive design.",
    tags: ["Angular", "TypeScript", "Syncfusion EJ2", "PrimeNG", "PrimeFlex"],
    image: "/projects/agilic.png",
    repoUrl: "https://github.com/ui-agilic",
    liveUrl: "https://agilic.q8tech.com",
    featured: true,
  },
  {
    slug: "vedic-astrology",
    title: "Vedic Astrology Web App",
    description:
      "Full-stack React application for Vedic astrology readings. Developed with Next.js, server-side rendering, REST API integration with Node.js backend.",
    tags: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/astrology.png",
    repoUrl: "https://github.com/pralay143/astrology-app",
    featured: true,
  },
  {
    slug: "product-crud",
    title: "Product Management CRUD - ASP.NET",
    description:
      "ASP.NET Core MVC application built in 1 hour. Demonstrates C# expertise, database design, and CRUD operations with PostgreSQL.",
    tags: ["ASP.NET Core", ".NET 8", "MVC", "PostgreSQL", "C#"],
    image: "/projects/crud.png",
    repoUrl: "https://github.com/pralay143/product-crud",
    featured: false,
  },
];
