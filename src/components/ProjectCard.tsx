import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import SkillBadge from "@/components/SkillBadge";
import { GitHubIcon, ExternalLinkIcon } from "@/components/icons";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface-1 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_20px_45px_-25px_var(--ring)]">
      {project.primary && (
        <span className="absolute top-3 left-3 z-10 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground shadow-[0_0_12px_var(--ring)]">
          Primary Project
        </span>
      )}

      <div className="relative aspect-video overflow-hidden bg-surface-2">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-4xl font-semibold text-accent/40">
            {project.title
              .split(" ")
              .map((word) => word[0])
              .join("")
              .slice(0, 2)}
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-1/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
        <p className="text-sm leading-6 text-muted">{project.description}</p>
        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag}>
              <SkillBadge skill={tag} />
            </li>
          ))}
        </ul>
        <div className="mt-auto flex gap-3 pt-2 text-sm font-medium">
          {project.caseStudyUrl ? (
            <Link
              href={project.caseStudyUrl}
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-accent-foreground transition-transform duration-200 hover:scale-[1.03]"
            >
              View Case Study
            </Link>
          ) : (
            project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-accent-foreground transition-transform duration-200 hover:scale-[1.03]"
              >
                Live Demo
                <ExternalLinkIcon />
              </a>
            )
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2 px-4 py-2 text-foreground transition-all duration-200 hover:scale-[1.03] hover:border-accent/40"
            >
              <GitHubIcon />
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
