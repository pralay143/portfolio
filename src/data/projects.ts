export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
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
    image: "/projects/agilic.png",
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
    image: "/projects/astrology.png",
    repoUrl: "https://github.com/pralay143/astrology-app",
    featured: true,
  },
  {
    slug: "e-furniture",
    title: "E-Furniture E-Commerce Platform",
    description:
      "Full-stack e-furniture e-commerce website built with the MERN stack. Developed RESTful APIs for product listings, JWT-based user authentication, and order management, with Redux for global state management.",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "JWT"],
    image: "/projects/e-furniture.png",
    repoUrl: "https://github.com/pralay143/MERN-Stack-Project",
    featured: false,
  },
];
