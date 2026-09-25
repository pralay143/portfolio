import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { education, experience } from "@/data/experience";
import SkillsGrid from "@/components/SkillsGrid";
import Reveal from "@/components/Reveal";
import Timeline from "@/components/Timeline";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Experience, skills, and background of Pralay Mehta, a Junior Angular Developer at Q8 Technologies working with Angular, TypeScript, PrimeNG, ASP.NET Core, and PostgreSQL.",
  path: "/about",
});

export default function About() {
  return (
    <section className="flex flex-col gap-16 py-24">
      <Reveal className="flex flex-col gap-6">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          About Me
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-muted">
          I&apos;m Pralay Mehta, a Junior Angular Developer at Q8 Technologies.
          I build scalable, responsive front-end applications and enjoy turning
          complex requirements — real-time scheduling, editable data grids,
          drag-and-drop interfaces — into interfaces that feel simple to use.
          I hold a B.E. in Information Technology and work across the stack
          when a project calls for it, from Angular and React on the front end
          to ASP.NET Core and PostgreSQL on the back end.
        </p>
      </Reveal>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Background</h2>
        <dl className="grid gap-4 sm:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-border bg-surface-1 p-5 transition-colors duration-300 hover:border-border-strong">
              <dt className="text-xs font-semibold tracking-wide text-subtle uppercase">
                Current Role
              </dt>
              <dd className="mt-2 font-medium text-foreground">
                Junior Angular Developer, Q8 Technologies
              </dd>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-2xl border border-border bg-surface-1 p-5 transition-colors duration-300 hover:border-border-strong">
              <dt className="text-xs font-semibold tracking-wide text-subtle uppercase">
                Location
              </dt>
              <dd className="mt-2 font-medium text-foreground">
                Ahmedabad, Gujarat · Open to new roles
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
        <Timeline items={experience} />
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Education</h2>
        <Timeline items={education} />
      </div>
    </section>
  );
}
