// Pill CTA styles shared by the Hero and the Home page's closing CTA.
const base =
  "rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong";

export const ctaStyles = {
  /** Filled accent button (the Hero's main action). */
  filled: `${base} group relative overflow-hidden bg-accent text-accent-foreground shadow-[0_0_0_1px_var(--ring),0_8px_24px_-8px_var(--ring)] hover:shadow-[0_0_0_1px_var(--ring),0_12px_32px_-8px_var(--ring)]`,
  /** Accent outline with a light tint (Download CV). */
  accent: `${base} border border-accent/60 bg-accent/10 text-foreground hover:border-accent hover:bg-accent/20`,
  /** Neutral outline (Contact Me). */
  neutral: `${base} border border-foreground/20 bg-surface-1/60 text-foreground hover:border-accent hover:bg-surface-2`,
};
