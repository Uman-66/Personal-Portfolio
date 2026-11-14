"use client";
import FadeIn from "./FadeIn";

const TONES = {
  Profile: "#c6f07a",
  "Selected work": "#8ab4f8",
  Studies: "#93e0b4",
  Experience: "#7fd6c8",
  Skills: "#b3a6f5",
  Achievements: "#d9c48a",
  Credentials: "#f0a6c0",
  "International Competition": "#a7c4dd",
  Writing: "#c9b8f0",
  Contact: "#7fc9e8",
};

export default function SectionIntro({ label, title, description, meta }) {
  const tone = TONES[label] ?? "var(--mark)";

  return (
    <FadeIn>
      <div className="mb-10 md:mb-14">
        <div className="flex items-center gap-4 border-b border-[var(--line)] pb-3">
          <span
            className={`eyebrow${label === "Profile" ? " eyebrow-strong" : ""}`}
            style={{ "--eyebrow-color": tone }}
          >
            {label}
          </span>
          <span className="flex-1" />
          {meta ? (
            <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--ink)]">
              {meta}
            </span>
          ) : null}
        </div>

        <h2 className="section-title mt-6 max-w-4xl font-display text-[clamp(2.6rem,5.8vw,4.5rem)] leading-[1.02] tracking-[-0.015em]">
          {title}
        </h2>

        {description ? (
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-[var(--muted)]">
            {description}
          </p>
        ) : null}
      </div>
    </FadeIn>
  );
}
