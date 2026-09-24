export default function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="rounded-full border border-border bg-surface-2 px-3 py-1 text-sm font-medium text-muted transition-colors duration-200 hover:border-accent/40 hover:text-foreground">
      {skill}
    </span>
  );
}
