"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import data from "@/data/portfolio.json";

export default function Hero() {
  const { personal } = data;
  const reduce = useReducedMotion();

  const fade = (delay) => ({
    initial: { opacity: 0, y: reduce ? 0 : 18 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduce ? 0.01 : 1.4,
      ease: [0.16, 1, 0.3, 1],
      delay: reduce ? 0 : delay,
    },
  });

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="wrap relative z-10 pb-16 pt-28 md:pb-24 md:pt-36">
        <div className="grid items-start gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
          <div>
            <motion.p className="eyebrow" {...fade(0)}>
              {personal.title}
            </motion.p>

            <motion.div
              className="mt-5 flex items-center gap-5 md:gap-7"
              {...fade(0.08)}
            >
              <div className="hero-avatar">
                <img src="/headshot.jpg" alt="Muhammad Rumman Aslam" />
              </div>

              <h1 className="min-w-0 font-display text-[clamp(2.6rem,7.2vw,5.4rem)] leading-[0.94] tracking-[-0.02em]">
                Muhammad
                <br />
                <span className="italic">Rumman</span> Aslam
              </h1>
            </motion.div>

            <motion.p
              className="mt-7 max-w-xl text-[17px] leading-[1.65] text-[var(--muted)]"
              {...fade(0.16)}
            >
              {personal.tagline}
            </motion.p>

            <motion.div className="mt-9 flex flex-wrap items-center gap-3" {...fade(0.24)}>
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Download CV <ArrowUpRight size={14} />
              </a>
              <a href={personal.social.email} className="btn ghost">
                Email me
              </a>
              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn ghost"
              >
                GitHub
              </a>
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn ghost"
              >
                LinkedIn
              </a>
              <a
                href={personal.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="btn ghost"
              >
                LeetCode
              </a>
            </motion.div>
          </div>

          <motion.aside className="card p-6 md:p-7" {...fade(0.32)}>
            <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--ink)]">
              Currently
            </p>

            <p className="mt-3 text-sm leading-relaxed">{personal.availability}</p>

            <div
              className="mt-5 border-t pt-5"
              style={{ borderColor: "var(--line)" }}
            >
              <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--ink)]">
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
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
