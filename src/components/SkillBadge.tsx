export default function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="rounded-full bg-black/[.06] px-3 py-1 text-sm font-medium text-zinc-800 dark:bg-white/[.08] dark:text-zinc-200">
      {skill}
    </span>
  );
}
