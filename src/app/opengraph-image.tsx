import { ImageResponse } from "next/og";

export const alt =
  "Pralay Mehta — Angular Developer. Angular, TypeScript, ASP.NET Core, PostgreSQL.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const skills = ["Angular", "TypeScript", "PrimeNG", "ASP.NET Core", "PostgreSQL"];

// Uses the site's dark theme tokens (see globals.css).
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(ellipse 70% 60% at 25% 20%, rgba(139, 92, 246, 0.28) 0%, #050505 70%)",
          backgroundColor: "#050505",
          color: "#f5f5f7",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: 26,
            color: "#a78bfa",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#8b5cf6",
              boxShadow: "0 0 18px rgba(139, 92, 246, 0.8)",
            }}
          />
          Open to frontend &amp; Angular roles
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          Pralay Mehta
        </div>
        <div style={{ marginTop: 8, fontSize: 44, color: "#a1a1aa" }}>
          Angular Developer · 2+ years in production
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 48 }}>
          {skills.map((skill) => (
            <div
              key={skill}
              style={{
                display: "flex",
                padding: "10px 24px",
                borderRadius: 999,
                border: "1px solid rgba(255, 255, 255, 0.16)",
                background: "#0b0b0f",
                fontSize: 26,
                color: "#a1a1aa",
              }}
            >
              {skill}
            </div>
          ))}
        </div>
        <div style={{ marginTop: "auto", fontSize: 26, color: "#6e6e78" }}>
          Ahmedabad, India
        </div>
      </div>
    ),
    size,
  );
}
