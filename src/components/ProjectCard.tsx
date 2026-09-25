import Image from "next/image";
import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import type { Project } from "@/data/projects";
import SkillBadge from "@/components/SkillBadge";
import { GitHubIcon, ExternalLinkIcon } from "@/components/icons";

// Every card action shares one size/shape; the first action is filled
// (primary) and any others are outlined (secondary).
const actionBase =
  "inline-flex h-10 items-center gap-1.5 rounded-full px-4 text-sm font-medium transition-all duration-200 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong";
const actionStyles = {
  primary: `${actionBase} bg-accent-solid text-accent-foreground shadow-[0_0_12px_var(--ring)] hover:shadow-[0_0_18px_var(--ring)]`,
  secondary: `${actionBase} border border-foreground/20 bg-surface-2 text-foreground hover:border-accent`,
};

interface CardAction {
  key: string;
  node: (className: string) => ReactNode;
}

function getActions(project: Project): CardAction[] {
  const actions: CardAction[] = [];

  if (project.caseStudyUrl) {
    const href = project.caseStudyUrl;
    actions.push({
      key: "case-study",
      node: (className) => (
        <Link href={href} className={className}>
          View Project
          <span className="sr-only">: {project.title}</span>
        </Link>
      ),
    });
  }

  if (project.liveUrl) {
    const href = project.liveUrl;
    actions.push({
      key: "live",
      node: (className) => (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
          Live Demo
          <span className="sr-only">: {project.title} (opens in a new tab)</span>
          <ExternalLinkIcon />
        </a>
      ),
    });
  }

  if (project.repoUrl) {
    const href = project.repoUrl;
    actions.push({
      key: "repo",
      node: (className) => (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
          <GitHubIcon />
          <span className="sr-only">{project.title} on </span>
          GitHub
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ),
    });
  }

  return actions;
}

export default function ProjectCard({ project }: { project: Project }) {
  const actions = getActions(project);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-1 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_20px_45px_-25px_var(--ring)]">
      <div className="relative aspect-video overflow-hidden border-b border-border bg-surface-2">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? ""}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            aria-hidden
            className="flex h-full items-center justify-center text-4xl font-semibold text-accent/40"
          >
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
        {project.primary && (
          <span className="w-fit rounded-full bg-accent-solid px-3 py-1 text-xs font-medium text-accent-foreground shadow-[0_0_12px_var(--ring)]">
            Primary Project
          </span>
        )}
        <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
        <p className="text-sm leading-6 text-muted">{project.description}</p>
        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag}>
              <SkillBadge skill={tag} />
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-3">
          {actions.length > 0 ? (
            actions.map((action, index) => (
              <Fragment key={action.key}>
                {action.node(index === 0 ? actionStyles.primary : actionStyles.secondary)}
              </Fragment>
            ))
          ) : (
            <p className="inline-flex h-10 items-center text-sm text-muted">
              Repository coming soon
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
