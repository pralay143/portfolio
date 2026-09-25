import Link from "next/link";
import HeroCodeCard from "@/components/HeroCodeCard";
import { ctaStyles } from "@/components/ctaStyles";

export default function Hero() {
  return (
    <section className="relative isolate -mx-6 flex min-h-[calc(100svh-4rem)] flex-col justify-center overflow-hidden px-6 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,var(--accent)_0%,transparent_70%)] opacity-[0.12]"
      />
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="animate-float-slow pointer-events-none absolute top-1/4 left-1/4 -z-10 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-float-slow-reverse pointer-events-none absolute right-1/4 bottom-1/4 -z-10 h-[22rem] w-[22rem] translate-x-1/3 rounded-full bg-accent-strong/15 blur-3xl"
      />

      <div className="grid w-full items-center gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
        <div className="flex flex-col items-start gap-6">
          <p className="animate-fade-in-up inline-flex items-center gap-2.5 rounded-full border border-border bg-surface-1/60 px-3.5 py-1.5 text-xs font-medium text-muted backdrop-blur-sm sm:text-sm">
            <span aria-hidden className="relative flex h-2 w-2">
              <span className="animate-availability absolute inset-0 rounded-full bg-emerald-400" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to frontend roles · Ahmedabad / Remote
          </p>
          <h1 className="animate-fade-in-up text-5xl font-semibold tracking-tight text-balance [animation-delay:75ms] sm:text-6xl lg:text-7xl">
            Hi, I&apos;m Pralay Mehta
          </h1>
          <p className="animate-fade-in-up [animation-delay:150ms] text-lg font-medium text-muted sm:text-xl">
            Angular Developer at Q8 Technologies
          </p>
          <p className="animate-fade-in-up max-w-xl text-base leading-7 text-muted [animation-delay:250ms]">
            2+ years building a production project-management platform in
            Angular, with Gantt charts, real-time scheduling, and editable
            data grids.
          </p>
          <div className="animate-fade-in-up flex flex-wrap gap-4 [animation-delay:350ms]">
            <Link
              href="/projects"
              className={ctaStyles.filled}
            >
              View Projects
            </Link>
            <a
              href="/resume.pdf"
              download
              aria-label="Download CV (PDF)"
              className={ctaStyles.accent}
            >
              Download CV
            </a>
            <Link
              href="/contact"
              className={ctaStyles.neutral}
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="animate-fade-in-up flex justify-center [animation-delay:450ms] lg:justify-end">
          <HeroCodeCard />
        </div>
      </div>

      <div
        aria-hidden
        className="animate-scroll-cue pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="h-9 w-5 rounded-full border border-border-strong">
          <span className="mx-auto mt-1.5 block h-1.5 w-1 rounded-full bg-accent" />
        </span>
      </div>
    </section>
  );
}
