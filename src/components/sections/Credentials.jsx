"use client";
import { ArrowUpRight } from "lucide-react";
import SectionIntro from "@/components/SectionIntro";
import FadeIn from "@/components/FadeIn";
import data from "@/data/portfolio.json";

export default function Credentials() {
  const { certifications } = data;

  return (
    <section id="credentials" className="section">
      <div className="wrap">
        <SectionIntro
          index="07"
          label="Credentials"
          title="Coursework and specialisations."
          description="The structured study behind the fundamentals — machine learning, deep learning, mathematics for ML, natural language processing, TensorFlow and production ML systems."
          meta={`${certifications.length} certifications`}
        />

        <FadeIn>
          <ul className="card overflow-hidden">
            {certifications.map((cert) => {
              const content = (
                <>
                  <span>
                    <span className="block text-[17px] md:text-[19px]">{cert.name}</span>
                    <span className="mt-0.5 block font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--ink)]">
                      {cert.issuer}
                    </span>
                  </span>
                  {cert.link ? (
                    <ArrowUpRight
                      size={14}
                      className="shrink-0 text-[var(--muted)] transition-colors group-hover:text-[var(--mark)]"
                    />
                  ) : null}
                </>
              );

              return (
                <li key={cert.name} className="border-b last:border-b-0" style={{ borderColor: "var(--line)" }}>
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 px-6 py-4 transition-colors hover:bg-[var(--mark-soft)] hover:text-[var(--mark)]"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center justify-between gap-4 px-6 py-4">
                      {content}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
