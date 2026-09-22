import type { Metadata } from "next";
import ProjectsGrid from "@/components/ProjectsGrid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects — Pralay",
};

export default function Projects() {
  return (
    <section className="flex flex-col gap-8 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
      <ProjectsGrid projects={projects} />
    </section>
  );
}
