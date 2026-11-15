"use client";
import { ArrowUpRight } from "lucide-react";
import SectionIntro from "@/components/SectionIntro";
import FadeIn from "@/components/FadeIn";
import data from "@/data/portfolio.json";

export default function Achievements() {
  const { achievements, writing, personal } = data;

  return (
    <section id="achievements" className="section">
      <div className="wrap">
        <SectionIntro
          label="Achievements"
          title="Scholarships, awards and written work."
          description="Academic funding, a provincial merit award, competitive programming recognition, an international sprint team — and the occasional long-form write-up."
          meta={`${achievements.length} entries · ${writing.length} article${writing.length === 1 ? "" : "s"}`}
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

        <div id="writing" className="mt-12 scroll-mt-24">
          <div
            className="flex items-center gap-4 border-b pb-3"
            style={{ borderColor: "var(--line)" }}
          >
            <span className="eyebrow" style={{ "--eyebrow-color": "#c9b8f0" }}>
              Writing
            </span>
            <span className="flex-1" />
            <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--ink)]">
              {writing.length} article{writing.length === 1 ? "" : "s"}
            </span>
          </div>

          <ul>
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
            className="link mt-6 inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.14em]"
          >
            All writing on Medium <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}
