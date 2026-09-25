export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  /** Describes what the image actually shows. Required when `image` is set. */
  imageAlt?: string;
  liveUrl?: string;
  repoUrl?: string;
  caseStudyUrl?: string;
  featured?: boolean;
  primary?: boolean;
}

export const projects: Project[] = [
  {
    slug: "agilic",
    title: "Agilic - Project Management Dashboard",
    description:
      "Built scalable Gantt chart UI with editable columns using Syncfusion EJ2. Implemented drag-drop for tasks, real-time scheduling updates, and responsive design.",
    tags: ["Angular", "TypeScript", "Syncfusion EJ2", "PrimeNG", "PrimeFlex"],
    image: "/projects/agilic-gantt-illustration.svg",
    imageAlt:
      "Illustration of a project-management Gantt chart with an editable task grid, representing the Agilic platform",
    caseStudyUrl: "/projects/agilic",
    featured: true,
    primary: true,
  },
  {
    slug: "vedic-astrology",
    title: "Vedic Astrology Web App",
    description:
      "A React and TypeScript single-page application for Vedic astrology readings, built with Vite.",
    tags: ["React", "TypeScript", "Vite"],
    image: "/projects/astrology-home.png",
    imageAlt: "Screenshot of the AstroInsight home page from the Vedic Astrology web app",
    repoUrl: "https://github.com/pralay143/astrology-app",
    featured: true,
  },
  {
    slug: "todo-list",
    title: "To-Do List - Angular & ASP.NET Core",
    description:
      "Full-stack to-do app with an Angular 18 frontend and a layered ASP.NET Core 8 Web API. Create, edit, delete, and complete tasks, with server-side search and sorting, validation on client and API, and PostgreSQL persistence through EF Core migrations.",
    tags: ["Angular", "ASP.NET Core", "C#", "EF Core", "PostgreSQL"],
    image: "/projects/todo-list-tasks.png",
    imageAlt:
      "Screenshot of the To-Do List app: a task table with search, sorting, status badges, and edit and delete actions",
    featured: true,
  },
  {
    slug: "e-furniture",
    title: "E-Furniture E-Commerce Platform",
    description:
      "E-Furniture is a MERN stack e-commerce application for browsing and managing furniture products. It includes customer registration and login, admin and vendor dashboards for managing categories and product listings, and an Express REST API backed by MongoDB with image uploads.",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    image: "/projects/e-furniture.jpg",
    imageAlt:
      "E-Furniture store home page with the site navigation and a living-room hero banner",
    repoUrl: "https://github.com/pralay143/MERN-Stack-Project",
    featured: false,
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    description:
      "The developer portfolio you're viewing, built to showcase my projects, experience, skills, and professional background. A responsive Next.js App Router site written in TypeScript and styled with Tailwind CSS, with a contact form that delivers messages through the Resend email API.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Resend"],
    image: "/projects/portfolio.png",
    imageAlt:
      "Pralay Mehta personal portfolio homepage, showing the hero section and a code-editor card",
    repoUrl: "https://github.com/pralay143/portfolio",
    featured: false,
  },
];
