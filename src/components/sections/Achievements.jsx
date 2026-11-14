"use client";
import { ArrowUpRight } from "lucide-react";
import SectionIntro from "@/components/SectionIntro";
import FadeIn from "@/components/FadeIn";
import data from "@/data/portfolio.json";

export default function Achievements() {
  const { achievements } = data;

  return (
    <section id="achievements" className="section">
      <div className="wrap">
        <SectionIntro
          index="06"
          label="Achievements"
          title="Scholarships, awards and competitive records."
          description="Academic funding, a provincial merit award, competitive programming recognition, and an international sprint team."
          meta={`${achievements.length} entries`}
        />

        <FadeIn>
          <ol className="card overflow-hidden">
            {achievements.map((item) => (
              <li
                key={item.title}
                className="grid gap-2 border-b px-6 py-5 transition-colors last:border-b-0 hover:bg-[var(--mark-soft)] md:grid-cols-[9rem_1fr_auto] md:items-baseline md:gap-6"
                style={{ borderColor: "var(--line)" }}
              >
                <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--mark)]">
                  {item.year}
                </span>

                <div>
                  <h3 className="text-[17px] font-medium md:text-[19px]">{item.title}</h3>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 md:justify-end">
                  <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--ink)]">
                    {item.meta}
                  </span>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${item.title} — open profile`}
                      className="text-[var(--muted)] transition-colors hover:text-[var(--mark)]"
                    >
                      <ArrowUpRight size={14} />
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </FadeIn>
      </div>
    </section>
  );
}
