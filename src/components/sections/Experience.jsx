"use client";
import SectionIntro from "@/components/SectionIntro";
import FadeIn from "@/components/FadeIn";
import data from "@/data/portfolio.json";

export default function Experience() {
  const { experience } = data;

  return (
    <section id="experience" className="section">
      <div className="wrap">
        <SectionIntro
          label="Experience"
          title="Shipped work, not just notebooks."
          description="Research is half the job; the other half is getting a pipeline to run reproducibly for someone else."
          meta="2026"
        />

        <ol className="border-t" style={{ borderColor: "var(--line)" }}>
          {experience.map((job, index) => (
            <li key={`${job.company}-${job.period}`} className="border-b" style={{ borderColor: "var(--line)" }}>
              <FadeIn delay={index * 0.06}>
                <div className="grid gap-5 py-9 md:grid-cols-[200px_1fr] md:gap-12">
                  <div className="font-mono text-[12px] uppercase leading-relaxed tracking-[0.16em] text-[var(--ink)]">
                    <p>{job.period}</p>
                    <p className="mt-1.5">{job.location}</p>
                  </div>

                  <div>
                    <h3 className="font-display text-[clamp(1.75rem,2.2vw,2.125rem)] leading-[1.1]">
                      {job.role}
                    </h3>
                    <p
                      className="mt-1 font-mono text-[13px] uppercase tracking-[0.14em]"
                      style={{ color: "var(--mark)" }}
                    >
                      {job.company}
                    </p>

                    <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--muted)]">
                      {job.description}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {job.highlights.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-relaxed">
                          <span
                            aria-hidden="true"
                            className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                            style={{ background: "var(--mark)" }}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {job.tech.map((tech) => (
                        <span key={tech} className="pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
