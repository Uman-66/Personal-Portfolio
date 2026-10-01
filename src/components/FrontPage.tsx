import Image from "next/image";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { facts, profile } from "@/data/profile";
import { BrandIcon } from "./BrandIcon";

export function FrontPage() {
  return (
    <>
      <section className="hero" aria-labelledby="intro-title">
        <div className="portrait-wrap">
          <Image
            src="/profile.jpeg"
            alt="Muhammad Rumman Aslam"
            width={160}
            height={160}
            priority
            className="portrait"
          />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">AI/ML Engineer · Software Engineering Undergraduate</p>
          <h1 id="intro-title">{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="intro">{profile.intro}</p>
          <div className="hero-actions">
            <a className="cv-download" href="/Resume.pdf" download>
              <span className="cv-download-mark"><Download size={17} aria-hidden="true" /></span>
              <span>Download CV</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <div className="social-links" aria-label="Social and contact links">
              <a className="social-link" href={`mailto:${profile.email}`}>
                <Mail size={18} aria-hidden="true" /><span>Email</span>
              </a>
              <a className="social-link" href={profile.links.github} target="_blank" rel="noreferrer">
                <BrandIcon name="github" /><span>GitHub</span>
              </a>
              <a className="social-link" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                <BrandIcon name="linkedin" /><span>LinkedIn</span>
              </a>
              <a className="social-link" href={profile.links.medium} target="_blank" rel="noreferrer">
                <BrandIcon name="medium" /><span>Medium</span>
              </a>
              <a className="social-link" href={profile.links.leetcode} target="_blank" rel="noreferrer">
                <BrandIcon name="leetcode" /><span>LeetCode</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="facts-grid" aria-label="Profile facts">
        {facts.map((fact) => (
          <div className="fact-card" key={fact.label}>
            <span className="mono-label">{fact.label}</span>
            <strong>{fact.value}</strong>
          </div>
        ))}
      </section>
    </>
  );
}
