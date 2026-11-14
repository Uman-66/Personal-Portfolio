"use client";
import { ArrowUpRight } from "lucide-react";
import SectionIntro from "@/components/SectionIntro";
import FadeIn from "@/components/FadeIn";
import data from "@/data/portfolio.json";

export default function Research() {
  const { research } = data;

  return (
    <section id="research" className="section">
      <div className="wrap">
        <SectionIntro
          index="03"
          label="Studies"
          title="Benchmarks, audits and hard questions."
          description="Three independent studies: a clinical AI audit, a multi-site GNN benchmark, and a multimodal model tested under missing data."
          meta={research.length === 1 ? "1 study" : `${research.length} studies`}
        />

        <ol className="border-t" style={{ borderColor: "var(--line)" }}>
          {research.map((item, index) => (
            <li key={item.title} className="border-b" style={{ borderColor: "var(--line)" }}>
              <FadeIn delay={index * 0.05}>
                <div className="grid gap-4 py-8 md:grid-cols-[64px_1fr_240px] md:gap-8">
                  <span className="font-mono text-[13px] text-[var(--ink)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="max-w-xl font-display text-[clamp(1.75rem,2.2vw,2.125rem)] leading-[1.1]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--ink)]">
                      {item.institution}
                    </p>
                    <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--muted)]">
                      {item.description}
                    </p>

                    {item.notes?.length ? (
                      <ul className="mt-4 space-y-2">
                        {item.notes.map((note) => (
                          <li key={note} className="flex gap-3 text-sm leading-relaxed">
                            <span
                              aria-hidden="true"
                              className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                              style={{ background: "var(--mark)" }}
                            />
                            {note}
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    <div className="mt-4 flex flex-wrap items-center gap-1.5">
                      {item.tags.map((tag) => (
                        <span key={tag} className="pill">
                          {tag}
                        </span>
                      ))}
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link ml-1 flex items-center gap-1 font-mono text-[12px] uppercase tracking-[0.14em]"
                        >
                          Code <ArrowUpRight size={11} />
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <p
                    className="font-mono text-[12px] uppercase leading-relaxed tracking-[0.16em] md:text-right"
                    style={{ color: "var(--mark)" }}
                  >
                    {item.metric}
                  </p>
                </div>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}