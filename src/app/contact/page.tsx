import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact — Pralay",
};

export default function Contact() {
  return (
    <section className="flex flex-col gap-10 py-24">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight">Get in Touch</h1>
        <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
          Have a project in mind or just want to say hi? Fill out the form
          below, or reach me directly through email or social.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-[1fr_auto]">
        <ContactForm />

        <div className="flex flex-col gap-4 sm:w-56">
          <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
            Other ways to reach me
          </h2>
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            <MailIcon />
            you@example.com
          </a>
          <a
            href="https://github.com/pralay143"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
