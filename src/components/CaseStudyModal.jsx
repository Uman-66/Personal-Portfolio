"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function CaseStudyModal({ project, onClose }) {
  const sheetRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !sheetRef.current) return;

      const focusable = sheetRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, [onClose]);

  if (!project || !project.caseStudy) return null;

  const { caseStudy, links } = project;

  return (
    <motion.div
      className="overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      onClick={onClose}
    >
      <motion.div
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} case study`}
        className="sheet p-6 md:p-10"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ type: "spring", damping: 34, stiffness: 190 }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close case study"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-[3px] border border-[var(--line)] text-[var(--muted)] transition-colors hover:border-[var(--mark)] hover:text-[var(--mark)] md:right-6 md:top-6"
        >
          <X size={15} />
        </button>

        <header className="pr-10">
          <span className="eyebrow">Case study</span>
          <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
            {project.title}
          </h2>
          <p className="mt-1 font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--muted)]">
            {project.subtitle}
          </p>
          {project.metric ? (
            <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.16em]" style={{ color: "var(--mark)" }}>
              {project.metric}
            </p>
          ) : null}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="pill">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="mt-8 space-y-7">
          <section>
            <h3 className="font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--muted)]">
              The brief
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed">{caseStudy.brief}</p>
          </section>

          <section className="sheet-section">
            <h3 className="font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--muted)]">
              Approach
            </h3>
            <ol className="mt-3 space-y-3">
              {caseStudy.approach.map((step, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-0.5 font-mono text-[12px] text-[var(--mark)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] leading-relaxed text-[var(--muted)]">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </section>

          <section className="sheet-section">
            <h3 className="font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--muted)]">
              Results
            </h3>
            <ul className="mt-3 space-y-2.5">
              {caseStudy.results.map((result) => (
                <li key={result} className="flex gap-3 text-[15px] leading-relaxed">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 shrink-0 rounded-full"
                    style={{ background: "var(--mark)" }}
                  />
                  {result}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <footer className="mt-9 flex flex-wrap items-center justify-between gap-4 border-t pt-5" style={{ borderColor: "var(--line)" }}>
          <div className="flex flex-wrap gap-4">
            {links?.github ? (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.14em]"
              >
                <FaGithub size={13} /> Code
              </a>
            ) : null}
            {links?.live ? (
              <a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="link flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.14em]"
              >
                Live app <ArrowUpRight size={13} />
              </a>
            ) : null}
            {links?.medium ? (
              <a
                href={links.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="link flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.14em]"
              >
                Article <ArrowUpRight size={13} />
              </a>
            ) : null}
            {links?.submission ? (
              <a
                href={links.submission}
                target="_blank"
                rel="noopener noreferrer"
                className="link flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.14em]"
              >
                Submission <ArrowUpRight size={13} />
              </a>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--muted)] transition-colors hover:text-[var(--mark)]"
          >
            Close
          </button>
        </footer>
      </motion.div>
    </motion.div>
  );
}
