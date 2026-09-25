"use client";

import { useEffect, useState } from "react";
import { CheckIcon, CopyIcon } from "@/components/icons";

type CopyState = "idle" | "copied" | "failed";

export default function CopyEmailButton({ email }: { email: string }) {
  const [state, setState] = useState<CopyState>("idle");

  useEffect(() => {
    if (state === "idle") return;
    const timeout = setTimeout(() => setState("idle"), 2000);
    return () => clearTimeout(timeout);
  }, [state]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("failed");
    }
  }

  return (
    <span className="relative inline-flex">
      <button
        type="button"
        onClick={copy}
        aria-label="Copy email address"
        title="Copy email address"
        className="rounded-md p-1.5 text-muted transition-colors duration-200 hover:bg-surface-2 hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
      >
        {state === "copied" ? <CheckIcon /> : <CopyIcon />}
      </button>
      <span
        role="status"
        className={`pointer-events-none absolute top-full right-0 mt-1 rounded-md bg-surface-3 px-2 py-0.5 text-xs whitespace-nowrap text-foreground transition-opacity duration-200 ${
          state === "idle" ? "opacity-0" : "opacity-100"
        }`}
      >
        {state === "copied" ? "Copied!" : state === "failed" ? "Copy failed" : ""}
      </span>
    </span>
  );
}
