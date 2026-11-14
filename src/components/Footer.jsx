import data from "@/data/portfolio.json";
import { FaGithub, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { FileText } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

const moreLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "credentials", label: "Credentials" },
  { id: "writing", label: "Writing" },
];

export default function Footer() {
  const { personal } = data;

  const socials = [
    { icon: FaGithub, href: personal.social.github, label: "GitHub" },
    { icon: FaLinkedinIn, href: personal.social.linkedin, label: "LinkedIn" },
    { icon: FaMediumM, href: personal.social.medium, label: "Medium" },
    { icon: SiLeetcode, href: personal.social.leetcode, label: "LeetCode" },
    { icon: FileText, href: personal.resumeUrl, label: "Résumé" },
  ];

  return (
    <footer className="relative z-10 border-t" style={{ borderColor: "var(--line)" }}>
      <div className="wrap flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-xl leading-tight">{personal.name}</p>
          <p className="mt-1.5 font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--muted)]">
            {personal.title} · {personal.location}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {socials.map((social) => {
            if (!social.href) return null;
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-[3px] border border-[var(--line)] text-[var(--muted)] transition-colors hover:border-[var(--mark)] hover:text-[var(--mark)]"
              >
                <Icon size={14} />
              </a>
            );
          })}
        </div>
      </div>

      <div
        className="wrap flex flex-wrap items-center gap-x-6 gap-y-2 border-t py-4"
        style={{ borderColor: "var(--line)" }}
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
          Elsewhere
        </span>
        {moreLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="nav-link !text-[12px] !tracking-[0.14em]"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="wrap flex flex-col gap-2 border-t py-5 text-[12px] text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: "var(--line)" }}>
        <span className="font-mono uppercase tracking-[0.14em]">
          © {new Date().getFullYear()} {personal.name}
        </span>
        <span className="font-mono uppercase tracking-[0.14em]">
          Next.js · Tailwind · Framer Motion
        </span>
      </div>
    </footer>
  );
}
