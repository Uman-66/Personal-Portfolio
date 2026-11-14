"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import data from "@/data/portfolio.json";

const links = [
  { id: "work", label: "Work" },
  { id: "research", label: "Studies" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Awards" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 30,
    restDelta: 0.001,
  });
  const reduce = useReducedMotion();
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const { personal } = data;

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onDesktop = (event) => {
      if (event.matches) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onDesktop);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open]);

  return (
    <>
      {!reduce ? (
        <motion.div
          aria-hidden="true"
          className="fixed inset-x-0 top-0 z-[60] h-px origin-left"
          style={{ scaleX, background: "var(--mark)" }}
        />
      ) : null}

      <header
        className="fixed inset-x-0 top-0 z-50 border-b"
        style={{
          background: "var(--nav-bg)",
          borderColor: "var(--line)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <div className="wrap flex h-16 items-center justify-between gap-6">
          <a
            href="#home"
            title={personal.name}
            aria-label={`${personal.name} — back to top`}
            className="brand min-w-0 max-w-[46vw] sm:max-w-none"
          >
            {personal.name}
          </a>

          <nav className="hidden min-w-0 items-center gap-5 xl:flex xl:gap-6" aria-label="Sections">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="nav-link"
                aria-current={active === link.id ? "true" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn ghost hidden !px-3 !py-2 !text-[12px] sm:inline-flex"
            >
              CV
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[3px] border border-[var(--line)] text-[var(--ink)] xl:hidden"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: reduce ? 0.01 : 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-t xl:hidden"
              style={{ borderColor: "var(--line)", background: "var(--nav-bg)" }}
            >
              <nav className="wrap flex flex-col py-3" aria-label="Sections">
                {links.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="nav-link py-3"
                    aria-current={active === link.id ? "true" : undefined}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
}
