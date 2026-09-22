import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate -mx-6 overflow-hidden px-6 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-indigo-100 via-white to-white dark:from-indigo-950/40 dark:via-black dark:to-black"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-indigo-400/30 via-fuchsia-300/20 to-sky-300/30 blur-3xl dark:from-indigo-500/20 dark:via-fuchsia-500/10 dark:to-sky-500/20"
      />

      <div className="flex flex-col items-start gap-6">
        <h1 className="animate-fade-in-up text-4xl font-semibold tracking-tight sm:text-5xl">
          Hi, I&apos;m Pralay
        </h1>
        <p className="animate-fade-in-up [animation-delay:150ms] text-lg font-medium text-zinc-600 dark:text-zinc-400">
          Angular Developer at Q8 Technologies
        </p>
        <p className="animate-fade-in-up max-w-xl text-base leading-7 text-zinc-600 [animation-delay:250ms] dark:text-zinc-400">
          I build fast, accessible web applications. Here&apos;s a look at
          what I&apos;ve been working on.
        </p>
        <div className="animate-fade-in-up flex flex-wrap gap-4 [animation-delay:350ms]">
          <Link
            href="/projects"
            className="rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            View Projects
          </Link>
          <a
            href="/resume.pdf"
            download
            className="rounded-full border border-black/[.08] px-5 py-3 text-sm font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
          >
            Download CV
          </a>
          <Link
            href="/contact"
            className="rounded-full border border-black/[.08] px-5 py-3 text-sm font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
