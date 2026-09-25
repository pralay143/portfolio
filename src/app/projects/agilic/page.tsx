import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SkillBadge from "@/components/SkillBadge";
import { projects } from "@/data/projects";

export const metadata: Metadata = pageMetadata({
  title: "Agilic Case Study",
  description:
    "Agilic case study: a production project-management platform with a Syncfusion Gantt chart, editable columns, drag-and-drop tasks, and reusable Angular and PrimeNG components.",
  path: "/projects/agilic",
});

const contributions = [
  "Led frontend development of a production project management platform, owning end-to-end feature delivery from design to deployment.",
  "Built and maintained 15+ reusable Angular components using PrimeNG and PrimeFlex, reducing UI development time across new modules.",
  "Integrated REST APIs across 4 core modules (task management, reporting, user management, notifications), enabling real-time data updates.",
  "Implemented Angular lazy loading and route guards, improving initial page load performance.",
];

export default function AgilicCaseStudy() {
  const project = projects.find((item) => item.slug === "agilic");

  if (!project) return null;

  return (
    <section className="flex flex-col gap-10 py-24">
      <Reveal className="flex flex-col gap-4">
        <Link
          href="/projects"
          className="w-fit text-sm text-muted transition-colors hover:text-accent"
        >
          ← Back to Projects
        </Link>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Agilic — Project Case Study
        </h1>
      </Reveal>

      {project.image && (
        <Reveal delay={80}>
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-surface-1">
            <Image
              src={project.image}
              alt={project.imageAlt ?? ""}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      )}

      <Reveal delay={120} className="grid gap-8 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <h2 className="text-xs font-semibold tracking-wide text-subtle uppercase">
            Role
          </h2>
          <p className="font-medium text-foreground">
            Junior Angular Developer
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xs font-semibold tracking-wide text-subtle uppercase">
            Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <SkillBadge key={tag} skill={tag} />
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={160} className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold tracking-tight">Overview</h2>
        <p className="max-w-2xl text-sm leading-7 text-muted">
          Agilic is a production project management platform built for Q8
          Technologies, providing task tracking, reporting, user management,
          and real-time scheduling through a scalable Angular front end.{" "}
          {project.description}
        </p>
      </Reveal>

      <Reveal delay={200} className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold tracking-tight">
          My Contributions
        </h2>
        <ul className="flex max-w-2xl flex-col gap-2.5">
          {contributions.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm leading-6 text-muted"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={240}>
        <p className="max-w-2xl text-xs text-subtle">
          Agilic is a proprietary platform built for Q8 Technologies. A live
          demo and source code aren&apos;t publicly available out of respect
          for the employer&apos;s confidentiality.
        </p>
      </Reveal>
    </section>
  );
}
