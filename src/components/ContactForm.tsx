"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

type Status = "idle" | "submitting" | "success" | "error";

const initialValues: FormValues = { name: "", email: "", message: "" };

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  } else if (values.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  } else if (values.name.trim().length > 100) {
    errors.name = "Name must be 100 characters or fewer.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Please enter a message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  } else if (values.message.trim().length > 5000) {
    errors.message = "Message must be 5000 characters or fewer.";
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function handleChange(field: keyof FormValues) {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
    };
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

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
      setStatusMessage("Thanks for reaching out — I'll get back to you soon.");
      setValues(initialValues);
    } catch {
      setStatus("error");
      setStatusMessage(
        "Something went wrong sending your message. Please email me directly instead.",
      );
    }
  }

  const inputClasses =
    "rounded-xl border border-border bg-surface-2 px-4 py-2.5 text-sm text-foreground outline-none transition-all duration-200 focus:border-accent focus:shadow-[0_0_0_3px_var(--ring)]";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-muted">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={handleChange("name")}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={inputClasses}
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
          value={values.email}
          onChange={handleChange("email")}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={inputClasses}
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`resize-none ${inputClasses}`}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-fit rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground shadow-[0_0_0_1px_var(--ring)] transition-transform duration-200 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {statusMessage && (
        <p
          role="status"
          className={
            status === "success" ? "text-sm text-emerald-400" : "text-sm text-red-400"
          }
        >
          {statusMessage}
        </p>
      )}
    </form>
  );
}
