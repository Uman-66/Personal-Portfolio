"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { FaGithub, FaMediumM } from "react-icons/fa";
import SectionIntro from "@/components/SectionIntro";
import FadeIn from "@/components/FadeIn";
import CaseStudyModal from "@/components/CaseStudyModal";
import data from "@/data/portfolio.json";

function initials(title) {
  const words = title
    .replace(/[^A-Za-z\s-]/g, " ")
    .split(/[\s-]+/)
    .filter(Boolean);
  return words
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function ProjectMedia({ project, onOpen, openable }) {
  const inner = project.image ? (
    <div
      className="figure block w-full"
      style={project.imageRatio ? { aspectRatio: project.imageRatio } : undefined}
    >
      <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
      {openable ? (
        <span className="media-cue" aria-hidden="true">
          Read case study <ArrowUpRight size={13} />
        </span>
      ) : null}
    </div>
  ) : (
    <div className="tile block w-full text-left">
      <span className="relative z-10 font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--ink)]">
        {project.subtitle}
      </span>
      <p className="relative z-10 max-w-[22ch] font-display text-[clamp(1.4rem,2.3vw,2rem)] italic leading-[1.15] text-[var(--ink)]">
        {project.banner ?? project.description}
      </p>
      <p
        className="relative z-10 font-display text-4xl leading-none"
        style={{ color: "var(--mark)" }}
      >
        {initials(project.title)}
      </p>
    </div>
  );

  if (!openable) return inner;

  return (
    <button
      type="button"
      onClick={onOpen}
      className="block w-full cursor-pointer"
      aria-label={`Read the ${project.title} case study`}
    >
      {inner}
    </button>
  );
}

function ProjectLinks({ links }) {
  const items = [
    links?.github && {
      key: "code",
      href: links.github,
      label: "Code",
      icon: FaGithub,
    },
    links?.live && {
      key: "live",
      href: links.live,
      label: "Live app",
      icon: ArrowUpRight,
    },
    links?.medium && {
      key: "medium",
      href: links.medium,
      label: "Article",
      icon: FaMediumM,
    },
    links?.submission && {
      key: "submission",
      href: links.submission,
      label: "Submission",
      icon: ArrowUpRight,
    },
  ].filter(Boolean);

  if (!items.length) return null;

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.key}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--ink)] transition-colors hover:text-[var(--mark)]"
          >
            <Icon size={12} />
            {item.label}
          </a>
        );
      })}
    </div>
  );
}

export default function Work() {
  const [selected, setSelected] = useState(null);
  const { projects } = data;

  return (
    <section id="work" className="section">
      <div className="wrap">
        <SectionIntro
          index="02"
          label="Selected work"
          title="Systems I built, and what they had to survive."
          description="Each project below, in the order I would talk about it: the problem, the constraint that made it hard, and what the numbers actually say."
          meta={`${projects.length} projects`}
        />

        <div>
          {projects.map((project, index) => {
            const mediaFirst = index % 2 === 0;
            const openable = Boolean(project.caseStudy);

            return (
              <article
                key={project.title}
                className="group grid gap-6 border-t py-10 first:border-t-0 first:pt-0 md:grid-cols-2 md:gap-12 md:py-14"
                style={{ borderColor: "var(--line)" }}
              >
                <FadeIn className={mediaFirst ? "" : "md:order-2"}>
                  <ProjectMedia
                    project={project}
                    openable={openable}
                    onOpen={() => setSelected(project)}
                  />
                </FadeIn>

                <FadeIn delay={0.08} className={mediaFirst ? "" : "md:order-1"}>
                  <div className="flex h-full flex-col">
                    <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--ink)]">
                      {project.subtitle}
                    </p>

                    <h3 className="mt-2 font-display text-[clamp(2rem,2.6vw,2.6rem)] leading-[1.08]">
                      {project.title}
                    </h3>

                    <p
                      className="mt-3 font-mono text-[13px] uppercase tracking-[0.14em]"
                      style={{ color: "var(--mark)" }}
                    >
                      {project.metric}
                    </p>

                    <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--muted)]">
                      {project.description}
                    </p>

                    {project.highlights?.length ? (
                      <ul className="mt-4 space-y-1.5">
                        {project.highlights.map((point) => (
                          <li
                            key={point}
                            className="flex gap-2.5 text-[14px] leading-relaxed"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-[7px] h-1 w-1 shrink-0 rounded-full"
                              style={{ background: "var(--mark)" }}
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="pill">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-6">
                      {openable ? (
                        <button
                          type="button"
                          onClick={() => setSelected(project)}
                          className="link flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--ink)]"
                        >
                          <BookOpen size={12} /> Case study
                        </button>
                      ) : null}
                      <ProjectLinks links={project.links} />
                    </div>
                  </div>
                </FadeIn>
              </article>
            );
          })}
        </div>

        <div
          className="mt-8 flex items-center justify-between border-t pt-5"
          style={{ borderColor: "var(--line)" }}
        >
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--ink)]">
            More repositories and experiments
          </p>
          <a
            href={data.personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--ink)]"
          >
            GitHub <ArrowUpRight size={12} />
          </a>
        </div>
      </div>

      <AnimatePresence>
        {selected ? (
          <CaseStudyModal
            project={selected}
            onClose={() => setSelected(null)}
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
}
