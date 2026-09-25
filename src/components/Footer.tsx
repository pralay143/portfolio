import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

const iconLinkClass =
  "rounded-full border border-border bg-surface-2 p-2.5 text-muted transition-all duration-200 hover:border-accent/40 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-1">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-2">
          <p className="font-semibold tracking-tight text-foreground">
            Pralay Mehta
          </p>
          <p className="max-w-xs text-sm text-muted">
            Angular Developer building scalable web experiences.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 sm:items-end">
          <div className="flex gap-3">
            <a
              href="https://github.com/pralay143"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
              className={iconLinkClass}
            >
              <GitHubIcon />
            </a>
            <a
              href="https://linkedin.com/in/mehta-pralay-6555531a1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
              className={iconLinkClass}
            >
              <LinkedInIcon />
            </a>
            <a
              href="mailto:pralaymehta97@gmail.com"
              aria-label="Email pralaymehta97@gmail.com"
              className={iconLinkClass}
            >
              <MailIcon />
            </a>
          </div>
          <div className="flex flex-col items-start gap-1 text-sm text-subtle sm:items-end">
            <p>&copy; {year} Pralay Mehta. All rights reserved.</p>
            <p className="flex items-center gap-1 text-xs">
              Built with Next.js and
              <span
                className="animate-heart-pulse text-red-500"
                role="img"
                aria-label="love"
              >
                ❤️
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
