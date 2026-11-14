"use client";
import { ArrowUpRight, FileText, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import FadeIn from "@/components/FadeIn";
import data from "@/data/portfolio.json";

export default function Contact() {
  const { personal } = data;

  const socials = [
    { label: "LinkedIn", href: personal.social.linkedin, icon: FaLinkedinIn },
    { label: "GitHub", href: personal.social.github, icon: FaGithub },
    { label: "Medium", href: personal.social.medium, icon: FaMediumM },
    { label: "LeetCode", href: personal.social.leetcode, icon: SiLeetcode },
    { label: "Résumé", href: personal.resumeUrl, icon: FileText },
  ];

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <div className="border-t pt-10" style={{ borderColor: "var(--line)" }}>
          <FadeIn>
            <span className="eyebrow" style={{ "--eyebrow-color": "#7fc9e8" }}>
              Contact
            </span>

            <h2 className="section-title mt-6 max-w-3xl font-display text-[clamp(2.2rem,6vw,4.5rem)] leading-[1] tracking-[-0.01em]">
              Let&apos;s build something <span className="italic">dependable</span>.
            </h2>

            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[var(--muted)]">
              {personal.availability}. If you are working on medical AI, multimodal learning
              or model evaluation, I would like to hear about it.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href={`mailto:${personal.email}`} className="btn">
                <Mail size={14} /> {personal.email}
              </a>
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn ghost"
              >
                Download CV <ArrowUpRight size={14} />
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap gap-2">
              {socials.map((social) => {
                if (!social.href) return null;
                const Icon = social.icon;
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-[3px] border border-[var(--line)] px-3 py-2 font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--ink)] transition-colors hover:border-[var(--mark)] hover:text-[var(--mark)]"
                    >
                      <Icon size={12} />
                      {social.label}
                      <ArrowUpRight size={10} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
