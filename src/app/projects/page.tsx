import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import ProjectsGrid from "@/components/ProjectsGrid";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description:
    "Projects by Pralay Mehta built with Angular, ASP.NET Core, React, and Next.js, from a production project-management dashboard to full-stack side projects.",
  path: "/projects",
});

export default function Projects() {
  return (
    <section className="flex flex-col gap-8 py-24">
      <Reveal className="flex flex-col gap-3">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Projects
        </h1>
        <p className="max-w-xl text-muted">
          A selection of what I&apos;ve been building, from production
          Angular dashboards to full-stack side projects.
        </p>
      </Reveal>
      <ProjectsGrid projects={projects} />
    </section>
  );
}
