import Image from "next/image";
import type { Project } from "@/data/projects";
import SkillBadge from "@/components/SkillBadge";
import { GitHubIcon, ExternalLinkIcon } from "@/components/icons";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-black/[.08] transition-all duration-300 hover:-translate-y-1 hover:border-black/[.15] hover:shadow-xl dark:border-white/[.145] dark:hover:border-white/[.25]">
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-sky-100 dark:from-indigo-950/40 dark:via-black dark:to-sky-950/40">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-4xl font-semibold text-indigo-300 dark:text-indigo-700">
            {project.title
              .split(" ")
              .map((word) => word[0])
              .join("")
              .slice(0, 2)}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag}>
              <SkillBadge skill={tag} />
            </li>
          ))}
        </ul>
        <div className="mt-auto flex gap-3 pt-2 text-sm font-medium">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            >
              <GitHubIcon />
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-black/[.08] px-4 py-2 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            >
              Live Demo
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
