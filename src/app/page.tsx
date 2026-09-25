import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SkillsGrid from "@/components/SkillsGrid";
import TechMarquee from "@/components/TechMarquee";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";
import { homeDescription, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  description: homeDescription,
  path: "/",
});

export default function Home() {
  const featured = projects.filter((project) => project.featured);

  return (
    <>
      <Hero />
      <div className="-mx-6">
        <TechMarquee />
      </div>

      <section className="flex flex-col gap-6 py-16">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Featured Projects
          </h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6 py-16">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Skills
          </h2>
        </Reveal>
        <SkillsGrid />
      </section>

      <section className="flex flex-col items-start gap-4 py-16">
        <Reveal className="flex flex-col items-start gap-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Want to see more?
          </h2>
          <p className="max-w-xl text-muted">
            Check out the full list of things I&apos;ve built.
          </p>
          <Link
            href="/projects"
            className="rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground shadow-[0_0_0_1px_var(--ring)] transition-transform duration-200 hover:scale-[1.02]"
          >
            View All Projects
          </Link>
        </Reveal>
      </section>
    </>
  );
}
