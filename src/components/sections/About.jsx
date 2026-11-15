"use client";
import { GraduationCap, MapPin } from "lucide-react";
import SectionIntro from "@/components/SectionIntro";
import FadeIn from "@/components/FadeIn";
import data from "@/data/portfolio.json";

export default function About() {
  const { personal, education } = data;

  return (
    <section id="about" className="section">
      <div className="wrap">
        <SectionIntro
          label="Profile"
          title="Reliability first, then accuracy."
          description="ML Engineer specializing in trustworthy multimodal systems for healthcare — clinical AI auditing, robustness under missing data, and LLM/NLP systems."
          meta={personal.location}
        />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
          <FadeIn>
            <div>
              <p className="max-w-2xl text-[17px] leading-[1.75]">{personal.bio}</p>

              <div className="mt-8">
                <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-[var(--ink)]">
                  Focus areas
                </p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {personal.focus.map((item) => (
                    <li key={item} className="pill">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-8 flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--ink)]">
                <MapPin size={12} style={{ color: "var(--mark)" }} />
                {personal.location}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="card p-6">
              <div className="flex items-center gap-2">
                <GraduationCap size={15} style={{ color: "var(--mark)" }} />
                <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--ink)]">
                  Education
                </p>
              </div>

              <h3 className="mt-4 font-display text-[clamp(1.6rem,2vw,2rem)] leading-tight text-[var(--ink)]">
                {education.degree}
              </h3>
              <p className="mt-1.5 text-[15px] font-medium text-[var(--ink)]">{education.institution}</p>

              <div className="mt-5 space-y-2 border-t pt-4" style={{ borderColor: "var(--line)" }}>
                <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--ink)]">
                  {education.period}
                </p>
                <p className="text-[15px] leading-relaxed text-[var(--muted)]">
                  {education.detail}
                </p>
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link inline-block pt-1 font-mono text-[12px] uppercase tracking-[0.14em]"
                >
                  Download résumé
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.12}>
          <div className="mt-14">
            <div
              className="flex items-center gap-4 border-b pb-3"
              style={{ borderColor: "var(--line)" }}
            >
              <span className="eyebrow">By the numbers</span>
              <span className="flex-1" />
            </div>

            <dl className="grid max-w-xl grid-cols-2 gap-x-12 gap-y-8 pt-6">
              {personal.stats.map((stat) => (
                <div key={stat.label}>
                  <dd className="font-display text-[clamp(2.5rem,4vw,3.25rem)] leading-none tracking-tight text-[var(--ink)]">
                    {stat.value}
                    <span className="text-[var(--muted)] opacity-90">{stat.suffix}</span>
                  </dd>
                  <dt className="mt-3 font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--ink)]">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
