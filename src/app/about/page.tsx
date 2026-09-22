import type { Metadata } from "next";
import { skills } from "@/data/skills";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "About — Pralay",
};

export default function About() {
  return (
    <section className="flex flex-col gap-12 py-24">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-semibold tracking-tight">About Me</h1>
        <p className="max-w-2xl text-zinc-600 dark:text-zinc-400">
          I&apos;m Pralay, an Angular Developer at Q8 Technologies. I build
          scalable, responsive front-end applications and enjoy turning
          complex requirements — real-time scheduling, editable data grids,
          drag-and-drop interfaces — into interfaces that feel simple to use.
          I hold a B.Tech in Information Technology (2023) and work across
          the stack when a project calls for it, from Angular and React on
          the front end to ASP.NET Core and PostgreSQL on the back end.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold tracking-tight">Background</h2>
        <dl className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-black/[.08] p-4 dark:border-white/[.145]">
            <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
              Education
            </dt>
            <dd className="mt-1 font-medium">
              B.Tech, Information Technology (2023)
            </dd>
          </div>
          <div className="rounded-2xl border border-black/[.08] p-4 dark:border-white/[.145]">
            <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
              Current Role
            </dt>
            <dd className="mt-1 font-medium">
              Angular Developer, Q8 Technologies
            </dd>
          </div>
        </dl>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold tracking-tight">Skills</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-black/[.08] px-4 py-3 text-center text-sm font-medium dark:border-white/[.145]"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
        <ol className="flex flex-col gap-8 border-l border-black/[.08] pl-6 dark:border-white/[.145]">
          {experience.map((item) => (
            <li key={`${item.title}-${item.period}`} className="relative">
              <span className="absolute top-1.5 -left-[31px] h-3 w-3 rounded-full bg-foreground" />
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
                {item.period}
              </p>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {item.organization}
              </p>
              <p className="mt-1 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold tracking-tight">Beyond Work</h2>
        <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
          Add a fun fact or personal interest here — a hobby, a favorite
          tech debate, or something people are surprised to learn about you.
        </p>
      </div>
    </section>
  );
}
