import type { Metadata } from "next";
import { experience } from "@/data/experience";
import SkillsGrid from "@/components/SkillsGrid";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About — Pralay",
};

export default function About() {
  return (
    <section className="flex flex-col gap-16 py-24">
      <Reveal className="flex flex-col gap-6">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          About Me
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-muted">
          I&apos;m Pralay, a Junior Angular Developer at Q8 Technologies. I
          build scalable, responsive front-end applications and enjoy turning
          complex requirements — real-time scheduling, editable data grids,
          drag-and-drop interfaces — into interfaces that feel simple to use.
          I hold a B.E. in Information Technology (2018 — 2022) and work
          across the stack when a project calls for it, from Angular and
          React on the front end to ASP.NET Core and PostgreSQL on the back
          end.
        </p>
      </Reveal>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Background</h2>
        <dl className="grid gap-4 sm:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-border bg-surface-1 p-5 transition-colors duration-300 hover:border-border-strong">
              <dt className="text-xs font-semibold tracking-wide text-subtle uppercase">
                Education
              </dt>
              <dd className="mt-2 font-medium text-foreground">
                B.E., Information Technology (2018 — 2022)
              </dd>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-2xl border border-border bg-surface-1 p-5 transition-colors duration-300 hover:border-border-strong">
              <dt className="text-xs font-semibold tracking-wide text-subtle uppercase">
                Current Role
              </dt>
              <dd className="mt-2 font-medium text-foreground">
                Junior Angular Developer, Q8 Technologies
              </dd>
            </div>
          </Reveal>
        </dl>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Skills</h2>
        <SkillsGrid />
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
        <ol className="relative flex flex-col gap-10 border-l border-border pl-8">
          {experience.map((item, index) => (
            <Reveal key={`${item.title}-${item.period}`} delay={index * 100}>
              <li className="relative">
                <span className="absolute top-1.5 -left-[35px] h-3 w-3 rounded-full bg-accent shadow-[0_0_10px_var(--ring)]" />
                <p className="text-sm font-medium text-subtle">
                  {item.period}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted">{item.organization}</p>
                <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
