export default function SkillBadge({
  skill,
  core = false,
}: {
  skill: string;
  core?: boolean;
}) {
  if (core) {
    return (
      <span className="inline-block rounded-full border border-accent-solid bg-accent-solid px-3.5 py-1.5 text-sm font-semibold text-accent-foreground shadow-[0_0_12px_var(--ring)] transition-transform duration-200 hover:scale-[1.04] sm:px-4 sm:text-[15px]">
        {skill}
      </span>
    );
  }

  return (
    <span className="rounded-full border border-border bg-surface-2 px-3 py-1 text-sm font-medium text-muted transition-colors duration-200 hover:border-accent/40 hover:text-foreground">
      {skill}
    </span>
  );
}
