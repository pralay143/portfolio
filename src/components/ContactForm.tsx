"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { siteConfig } from "@/config/site";
import { CONTACT_LIMITS, HONEYPOT_FIELD, contactReasons } from "@/config/contact";

interface FormValues {
  name: string;
  email: string;
  reason: string;
  message: string;
  /** Honeypot: stays empty for people; checked on the server. */
  website: string;
}

type FormErrors = Partial<Record<"name" | "email" | "message", string>>;

type Status = "idle" | "submitting" | "success" | "error";

const initialValues: FormValues = {
  name: "",
  email: "",
  reason: "",
  message: "",
  website: "",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  const name = values.name.trim();
  const message = values.message.trim();

  if (!name) {
    errors.name = "Please enter your name.";
  } else if (name.length < CONTACT_LIMITS.name.min) {
    errors.name = `Name must be at least ${CONTACT_LIMITS.name.min} characters.`;
  } else if (name.length > CONTACT_LIMITS.name.max) {
    errors.name = `Name must be ${CONTACT_LIMITS.name.max} characters or fewer.`;
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!message) {
    errors.message = "Please enter a message.";
  } else if (message.length < CONTACT_LIMITS.message.min) {
    errors.message = `Message must be at least ${CONTACT_LIMITS.message.min} characters.`;
  } else if (message.length > CONTACT_LIMITS.message.max) {
    errors.message = `Message must be ${CONTACT_LIMITS.message.max} characters or fewer.`;
  }

  return errors;
}

const inputClasses =
  "w-full rounded-xl border border-foreground/15 bg-surface-2 px-4 py-2.5 text-sm outline-none transition-all duration-200 placeholder:text-muted/80 hover:border-foreground/25 focus:border-accent focus:ring-2 focus:ring-accent aria-[invalid=true]:border-red-400/70";

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  // Guards against a second submit landing before the disabled state renders.
  const inFlight = useRef(false);
  const submitting = status === "submitting";

  function handleChange(field: keyof FormValues) {
    return (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
    };
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;

    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    inFlight.current = true;
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setValues(initialValues);
    } catch {
      // Keep what the visitor typed so they can retry or copy it.
      setStatus("error");
    } finally {
      inFlight.current = false;
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-busy={submitting}
      className="relative flex flex-col gap-5"
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-muted">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          value={values.name}
          onChange={handleChange("name")}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`${inputClasses} text-foreground`}
        />
        {errors.name && (
          <p id="name-error" className="text-sm text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-muted">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={values.email}
          onChange={handleChange("email")}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`${inputClasses} text-foreground`}
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="reason" className="text-sm font-medium text-muted">
          Reason <span className="font-normal text-subtle">(optional)</span>
        </label>
        <select
          id="reason"
          name="reason"
          value={values.reason}
          onChange={handleChange("reason")}
          className={`${inputClasses} cursor-pointer dark:[color-scheme:dark] ${values.reason ? "text-foreground" : "text-muted"}`}
        >
          <option value="">Select a reason</option>
          {contactReasons.map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell me about the role…"
          value={values.message}
          onChange={handleChange("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`resize-none ${inputClasses} text-foreground`}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot: off-screen and skipped by keyboard and screen readers. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={HONEYPOT_FIELD}>Website</label>
        <input
          id={HONEYPOT_FIELD}
          name={HONEYPOT_FIELD}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={handleChange("website")}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-fit items-center gap-2 rounded-full bg-accent-solid px-5 py-3 text-sm font-medium text-accent-foreground shadow-[0_0_0_1px_var(--ring)] transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
      >
        {submitting && (
          <span
            aria-hidden
            className="h-4 w-4 animate-spin rounded-full border-2 border-accent-foreground/40 border-t-accent-foreground motion-reduce:animate-none"
          />
        )}
        {submitting ? "Sending…" : "Send Message"}
      </button>

      <div role="status" aria-live="polite" className="empty:hidden">
        {status === "success" && (
          <p className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-300">
            Thanks! I&apos;ll get back to you soon.
          </p>
        )}
      </div>
      <div role="alert" className="empty:hidden">
        {status === "error" && (
          <p className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm break-words text-red-700 dark:text-red-300">
            Something went wrong. Please email me directly at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-medium text-foreground underline underline-offset-2 hover:text-accent-strong"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
