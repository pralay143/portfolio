import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact — Pralay",
};

export default function Contact() {
  return (
    <section className="flex flex-col gap-10 py-24">
      <Reveal className="flex flex-col gap-3">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Get in Touch
        </h1>
        <p className="max-w-xl text-muted">
          Have a project in mind or just want to say hi? Fill out the form
          below, or reach me directly through email or social.
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
              href="mailto:pralaymehta97@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors duration-200 hover:text-accent"
            >
              <MailIcon />
              pralaymehta97@gmail.com
            </a>
            <a
              href="https://github.com/pralay143"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors duration-200 hover:text-accent"
            >
              <GitHubIcon />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/mehta-pralay-6555531a1"
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
