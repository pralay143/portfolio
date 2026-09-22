"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/data/projects";

const filters = ["All", "Angular", "React", ".NET"] as const;
type Filter = (typeof filters)[number];

function matchesFilter(project: Project, filter: Filter) {
  if (filter === "All") return true;
  return project.tags.some((tag) =>
    tag.toLowerCase().includes(filter.toLowerCase()),
  );
}

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Filter>("All");
  const visible = projects.filter((project) => matchesFilter(project, active));

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === filter
                ? "bg-foreground text-background"
                : "border border-black/[.08] text-zinc-600 hover:bg-black/[.04] dark:border-white/[.145] dark:text-zinc-400 dark:hover:bg-[#1a1a1a]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {visible.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          No projects match this filter yet.
        </p>
      )}
    </div>
  );
}
