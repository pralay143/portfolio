import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { education, experience } from "@/data/experience";
import SkillsGrid from "@/components/SkillsGrid";
import Reveal from "@/components/Reveal";
import ExperienceTimeline, { EducationTimeline } from "@/components/Timeline";
import { ctaStyles } from "@/components/ctaStyles";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    `Experience, skills, and background of ${siteConfig.name}, a Junior Angular Developer at Q8 Technologies working with Angular, TypeScript, PrimeNG, ASP.NET Core, and PostgreSQL.`,
  path: "/about",
});

const backgroundCards = [
  { label: "Current Role", value: "Junior Angular Developer, Q8 Technologies" },
  { label: "Location", value: "Ahmedabad, Gujarat · Open to new roles" },
  { label: "Experience", value: "2+ years · Angular" },
];

// Figures from the resume (Q8 Technologies, Junior Angular Developer).
const profileStats = [
  { value: "15+", label: "reusable Angular components" },
  { value: "4", label: "core modules integrated via REST APIs" },
];

const focusAreas = ["Gantt charts", "Scheduling", "Editable grids"];

function ProfileCard() {
  return (
    <div className="w-full max-w-md rounded-2xl border border-border-strong bg-surface-1 p-6 shadow-[0_30px_80px_-45px_var(--ring)]">
      <div className="flex items-center gap-4">
        <span
          aria-hidden
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent-solid text-lg font-semibold text-accent-foreground shadow-[0_0_16px_var(--ring)]"
        >
          {siteConfig.initials}
        </span>
        <div>
          <p className="font-semibold text-foreground">{siteConfig.name}</p>
          <p className="text-sm text-muted">
            Junior Angular Developer · Q8 Technologies
          </p>
        </div>
      </div>

      <ul className="mt-6 grid grid-cols-2 gap-3">
        {profileStats.map((stat) => (
          <li
            key={stat.label}
            className="rounded-xl border border-border bg-surface-2 px-4 py-3"
          >
            <span className="block text-2xl font-semibold text-foreground">
              {stat.value}
            </span>
            <span className="mt-0.5 block text-xs leading-5 text-muted">
              {stat.label}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-col gap-2.5">
        <p
          id="profile-focus-label"
          className="text-xs font-semibold tracking-wide text-subtle uppercase"
        >
          Building on Agilic
        </p>
        <ul aria-labelledby="profile-focus-label" className="flex flex-wrap gap-2">
          {focusAreas.map((area) => (
            <li
              key={area}
              className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-sm text-foreground"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="flex flex-col gap-16 py-24">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-14">
        <Reveal className="flex flex-col items-start gap-6">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            About Me
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            I&apos;m {siteConfig.name}, a Junior Angular Developer at Q8 Technologies.
            I build scalable, responsive front-end applications and enjoy turning
            complex requirements — real-time scheduling, editable data grids,
            drag-and-drop interfaces — into interfaces that feel simple to use.
            I hold a B.E. in Information Technology and work across the stack
            when a project calls for it, from Angular and React on the front end
            to ASP.NET Core and PostgreSQL on the back end.
          </p>
          <a
            href="/resume.pdf"
            download
            aria-label="Download CV (PDF)"
            className={ctaStyles.accent}
          >
            Download CV
          </a>
        </Reveal>
        <Reveal delay={120} className="flex justify-center lg:justify-end">
          <ProfileCard />
        </Reveal>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Background</h2>
        <dl className="grid gap-4 sm:grid-cols-3">
          {backgroundCards.map((card, index) => (
            <Reveal key={card.label} delay={index * 80} className="h-full">
              <div className="h-full rounded-2xl border border-border bg-surface-1 p-5 transition-colors duration-300 hover:border-border-strong">
                <dt className="text-xs font-semibold tracking-wide text-subtle uppercase">
                  {card.label}
                </dt>
                <dd className="mt-2 font-medium text-foreground">{card.value}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Skills</h2>
        <SkillsGrid />
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
        <ExperienceTimeline items={experience} />
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Education</h2>
        <EducationTimeline items={education} />
      </div>
    </section>
  );
}
