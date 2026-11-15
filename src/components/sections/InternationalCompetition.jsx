"use client";
import SectionIntro from "@/components/SectionIntro";
import FadeIn from "@/components/FadeIn";
import data from "@/data/portfolio.json";

export default function InternationalCompetition() {
  const { internationalCompetitions } = data;

  return (
    <section id="international-competition" className="section">
      <div className="wrap">
        <SectionIntro
          label="International Competition"
          title="Global recognition beyond the lab."
          description="Competitive programming that tested algorithmic depth and problem-solving under time constraints."
          meta={
            internationalCompetitions.length === 1
              ? "1 competition"
              : `${internationalCompetitions.length} competitions`
          }
        />

        <ul className="border-t" style={{ borderColor: "var(--line)" }}>
          {internationalCompetitions.map((comp, index) => (
            <li key={comp.name} className="border-b pb-8 md:border-b-0">
              <FadeIn delay={index * 0.05}>
                <div className="grid gap-4 md:grid-cols-[120px_1fr] md:gap-8">
                  <span className="font-mono text-[13px] text-[var(--ink)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="font-display text-[clamp(1.75rem,2.2vw,2.125rem)] leading-[1.1]">
                      {comp.name}
                    </h3>
                    <p className="mt-1.5 font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--ink)]">
                      {comp.type}
                    </p>
                    <p className="mt-3 text-[13px] leading-relaxed text-[var(--muted)]">
                      {comp.period}
                    </p>
                    <p className="mt-3 text-[13px] leading-relaxed text-[var(--muted)]">
                      {comp.description}
                    </p>
                    {comp.award ? (
                      <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.14em]" style={{ color: "var(--mark)" }}>
                        {comp.award}
                      </p>
                    ) : null}
                  </div>
                </div>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}