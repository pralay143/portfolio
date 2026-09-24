import Link from "next/link";

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

      <div className="flex flex-col items-start gap-6">
        <h1 className="animate-fade-in-up text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          Hi, I&apos;m Pralay
        </h1>
        <p className="animate-fade-in-up [animation-delay:150ms] text-lg font-medium text-muted sm:text-xl">
          Angular Developer at Q8 Technologies
        </p>
        <p className="animate-fade-in-up max-w-xl text-base leading-7 text-muted [animation-delay:250ms]">
          I build fast, accessible web applications. Here&apos;s a look at
          what I&apos;ve been working on.
        </p>
        <div className="animate-fade-in-up flex flex-wrap gap-4 [animation-delay:350ms]">
          <Link
            href="/projects"
            className="group relative overflow-hidden rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground shadow-[0_0_0_1px_var(--ring),0_8px_24px_-8px_var(--ring)] transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_0_1px_var(--ring),0_12px_32px_-8px_var(--ring)]"
          >
            View Projects
          </Link>
          <a
            href="/resume.pdf"
            download
            className="rounded-full border border-border bg-surface-1 px-5 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:scale-[1.02] hover:border-border-strong hover:bg-surface-2"
          >
            Download CV
          </a>
          <Link
            href="/contact"
            className="rounded-full border border-border bg-surface-1 px-5 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:scale-[1.02] hover:border-border-strong hover:bg-surface-2"
          >
            Contact Me
          </Link>
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
