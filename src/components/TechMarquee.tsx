import { skills } from "@/data/skills";

export default function TechMarquee() {
  const track = [...skills, ...skills];

  return (
    <div className="marquee-mask overflow-hidden border-y border-border py-4">
      <div className="marquee-track flex w-max gap-3">
        {track.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="shrink-0 rounded-full border border-border px-4 py-1.5 text-sm font-medium text-muted"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
