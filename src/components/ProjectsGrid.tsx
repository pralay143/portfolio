"use client";

import { useEffect, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
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
  const [displayedFilter, setDisplayedFilter] = useState<Filter>("All");
  const transitioning = active !== displayedFilter;

  useEffect(() => {
    if (!transitioning) return;
    const timeout = setTimeout(() => {
      setDisplayedFilter(active);
    }, 180);
    return () => clearTimeout(timeout);
  }, [active, transitioning]);

  const visible = projects.filter((project) =>
    matchesFilter(project, displayedFilter),
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
              active === filter
                ? "bg-accent text-accent-foreground shadow-[0_0_12px_var(--ring)]"
                : "border border-border bg-surface-1 text-muted hover:border-accent/40 hover:text-foreground"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {visible.length > 0 ? (
        <div
          className={`grid gap-6 transition-all duration-200 ease-out sm:grid-cols-2 lg:grid-cols-3 ${
            transitioning
              ? "translate-y-1 scale-[0.98] opacity-0"
              : "translate-y-0 scale-100 opacity-100"
          }`}
        >
          {visible.map((project, index) => (
            <Reveal key={project.slug} delay={index * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted">No projects match this filter yet.</p>
      )}
    </div>
  );
}
