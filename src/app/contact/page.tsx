import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import ContactForm from "@/components/ContactForm";
import CopyEmailButton from "@/components/CopyEmailButton";
import Reveal from "@/components/Reveal";
import { ctaStyles } from "@/components/ctaStyles";
import { GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    `Contact ${siteConfig.name} about frontend and Angular developer opportunities. Send a message, or connect by email, GitHub, or LinkedIn.`,
  path: "/contact",
});

const linkClasses =
  "inline-flex items-center gap-2 rounded text-sm font-medium text-muted transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong";

export default function Contact() {
  return (
    <section className="flex flex-col gap-10 py-24">
      <Reveal className="flex flex-col gap-3">
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Hiring for a frontend or Angular role?
        </h1>
        <p className="max-w-xl text-muted">
          I&apos;m open to new opportunities. Send me a message and I&apos;ll
          reply within 24 hours.
        </p>
      </Reveal>

      <div className="grid gap-10 md:grid-cols-[1fr_auto]">
        <Reveal delay={80}>
          <ContactForm />
        </Reveal>

        <Reveal delay={160}>
          <div className="flex flex-col gap-5 rounded-2xl border border-border bg-surface-1 p-6 md:w-80">
            <h2 className="text-xs font-semibold tracking-wide text-subtle uppercase">
              Other ways to reach me
            </h2>

            <p className="flex items-start gap-2 text-sm text-muted">
              <span className="mt-0.5 shrink-0 text-accent-strong">
                <MapPinIcon />
              </span>
              <span>
                {siteConfig.location} · Open to roles (on-site / remote)
              </span>
            </p>

            <div className="flex min-w-0 items-center gap-1">
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label={`Email ${siteConfig.email}`}
                className={`${linkClasses} min-w-0`}
              >
                <MailIcon />
                <span className="truncate">{siteConfig.email}</span>
              </a>
              <CopyEmailButton email={siteConfig.email} />
            </div>

            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkClasses} w-fit`}
            >
              <GitHubIcon />
              GitHub
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkClasses} w-fit`}
            >
              <LinkedInIcon />
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              download
              aria-label="Download CV (PDF)"
              className={`${ctaStyles.accent} mt-1 text-center`}
            >
              Download CV
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
