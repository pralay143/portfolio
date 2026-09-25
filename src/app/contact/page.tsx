import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    `Contact ${siteConfig.name} about frontend and Angular developer opportunities. Send a message, or connect by email, GitHub, or LinkedIn.`,
  path: "/contact",
});

export default function Contact() {
  return (
    <section className="flex flex-col gap-10 py-24">
      <Reveal className="flex flex-col gap-3">
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Hiring for a frontend role? Let&apos;s talk.
        </h1>
        <p className="max-w-xl text-muted">
          I&apos;m open to frontend and Angular opportunities. Feel free to
          reach out through the form below, or contact me directly by email
          or LinkedIn to discuss potential roles.
        </p>
      </Reveal>

      <div className="grid gap-10 sm:grid-cols-[1fr_auto]">
        <Reveal delay={80}>
          <ContactForm />
        </Reveal>

        <Reveal delay={160}>
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-surface-1 p-6 sm:w-64">
            <h2 className="text-xs font-semibold tracking-wide text-subtle uppercase">
              Other ways to reach me
            </h2>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors duration-200 hover:text-accent"
            >
              <MailIcon />
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors duration-200 hover:text-accent"
            >
              <GitHubIcon />
              GitHub
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors duration-200 hover:text-accent"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
