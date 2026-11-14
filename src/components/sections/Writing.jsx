"use client";
import { ArrowUpRight } from "lucide-react";
import SectionIntro from "@/components/SectionIntro";
import FadeIn from "@/components/FadeIn";
import data from "@/data/portfolio.json";

export default function Writing() {
  const { writing, personal } = data;

  return (
    <section id="writing" className="section">
      <div className="wrap">
        <SectionIntro
          index="09"
          label="Writing"
          title="Professional reflections."
          description="Long-form reflections on model audit challenges, calibration gaps, and lessons learned from dataset limitations."
          meta="Articles"
        />

        <ul className="border-t" style={{ borderColor: "var(--line)" }}>
          {writing.map((entry, index) => (
            <li key={entry.title}>
              <FadeIn delay={index * 0.05}>
                <a
                  href={entry.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-3 border-b py-6 md:grid-cols-[120px_1fr_24px] md:items-center md:gap-8"
                  style={{ borderColor: "var(--line)" }}
                >
                  <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--ink)]">
                    {entry.outlet}
                  </span>
                  <span className="font-display text-[clamp(1.375rem,1.8vw,1.75rem)] leading-snug transition-colors group-hover:text-[var(--mark)]">
                    {entry.title}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="hidden text-[var(--muted)] transition-colors group-hover:text-[var(--mark)] md:block"
                  />
                </a>
              </FadeIn>
            </li>
          ))}
        </ul>

        <a
          href={personal.social.medium}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--ink)] transition-colors hover:text-[var(--mark)]"
        >
          All writing on Medium <ArrowUpRight size={12} />
        </a>
      </div>
    </section>
  );
}