import Image from "next/image";
import { Download, Link2, Mail } from "lucide-react";
import { facts, profile, workingOn } from "@/data/profile";

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
          <p className="eyebrow">AI / ML · Software Engineering</p>
          <h1 id="intro-title">{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="intro">{profile.intro}</p>
          <div className="button-row">
            <a className="button button-primary" href="/cv.pdf" download>
              <Download size={16} aria-hidden="true" /> Download CV
            </a>
            <a className="button" href={profile.links.github} target="_blank" rel="noreferrer">
              <Link2 size={16} aria-hidden="true" /> GitHub
            </a>
            <a className="button" href={profile.links.linkedin} target="_blank" rel="noreferrer">
              <Link2 size={16} aria-hidden="true" /> LinkedIn
            </a>
            <a className="button" href={`mailto:${profile.email}`}>
              <Mail size={16} aria-hidden="true" /> Email
            </a>
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

      <section className="working-section" aria-labelledby="working-title">
        <div>
          <p className="section-kicker">Current focus</p>
          <h2 id="working-title">What I&apos;m working on</h2>
        </div>
        <ul className="focus-list">
          {workingOn.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

    </>
  );
}
