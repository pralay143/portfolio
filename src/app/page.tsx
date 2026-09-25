import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SkillsGrid from "@/components/SkillsGrid";
import Reveal from "@/components/Reveal";
import Timeline from "@/components/Timeline";
import { ctaStyles } from "@/components/ctaStyles";
import { experience } from "@/data/experience";
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

      <section className="flex flex-col gap-6 py-16">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Featured Projects
          </h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 100} className="h-full">
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

      <section className="flex flex-col gap-6 pt-16 pb-12">
        <Reveal className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Experience
          </h2>
          <Link
            href="/about"
            className="rounded text-sm font-medium text-muted transition-colors duration-200 hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
          >
            Full experience &amp; education →
          </Link>
        </Reveal>
        <Timeline items={experience} compact />
      </section>

      <section className="pb-16">
        <Reveal>
          <div className="flex flex-col items-start gap-4 rounded-2xl border border-border bg-surface-1 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
              Hiring for a frontend role? Let&apos;s talk.
            </h2>
            <p className="max-w-xl text-muted">
              I&apos;m open to frontend and Angular opportunities. Feel free to
              reach out.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/resume.pdf"
                download
                aria-label="Download CV (PDF)"
                className={ctaStyles.accent}
              >
                Download CV
              </a>
              <Link href="/contact" className={ctaStyles.neutral}>
                Contact Me
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
