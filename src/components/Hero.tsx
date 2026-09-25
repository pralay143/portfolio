import Link from "next/link";
import HeroCodeCard from "@/components/HeroCodeCard";

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
              className="group relative overflow-hidden rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground shadow-[0_0_0_1px_var(--ring),0_8px_24px_-8px_var(--ring)] transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_0_1px_var(--ring),0_12px_32px_-8px_var(--ring)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
            >
              View Projects
            </Link>
            <a
              href="/resume.pdf"
              download
              aria-label="Download CV (PDF)"
              className="rounded-full border border-accent/60 bg-accent/10 px-5 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:scale-[1.02] hover:border-accent hover:bg-accent/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
            >
              Download CV
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-foreground/20 bg-surface-1/60 px-5 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:scale-[1.02] hover:border-accent hover:bg-surface-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
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
