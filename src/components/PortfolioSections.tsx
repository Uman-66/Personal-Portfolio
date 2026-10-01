import Link from "next/link";
import { ArrowUpRight, ExternalLink, Mail } from "lucide-react";
import { CvSection } from "./CvSection";
import { ProjectCards } from "./ProjectCards";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { research } from "@/data/research";
import { achievements } from "@/data/achievements";
import { skills } from "@/data/skills";
import { certifications } from "@/data/certifications";
import { profile } from "@/data/profile";
import { CopyEmailButton } from "./CopyEmailButton";

export function PortfolioSections() {
  return (
    <>
      <CvSection id="education" title="Education">
        <div className="timeline-card"><div><h3>{education.institution}</h3><p>{education.degree}</p></div><span className="date-label">{education.expected}</span><p>{education.gpa}<br />{education.recentGpa}</p><p className="muted">{education.location}</p></div>
      </CvSection>
      <CvSection id="experience" title="Experience">
        <div className="timeline-card"><div><h3>{experience.company}</h3><p>{experience.title}</p></div><span className="date-label">{experience.dates}</span><p className="muted">{experience.location}</p><ul className="bullet-list">{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div>
      </CvSection>
      <CvSection id="research-projects" title="Research Projects">
        <div className="card-grid">{research.map((study) => <article className="content-card" key={study.slug}><div className="card-topline"><span className="status">{study.status}</span><span className="mono-label">Independent research</span></div><h3>{study.title}</h3><p>{study.summary}</p><div className="tag-row">{study.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div><div className="card-links"><Link href={`/research/${study.slug}`}>Study details <ArrowUpRight size={14} /></Link></div></article>)}</div>
      </CvSection>
      <CvSection id="technical-projects" title="Technical Projects"><ProjectCards /></CvSection>
      <CvSection id="volunteering-and-teaching" title="Volunteering and Teaching">
        <div className="timeline-card"><div><h3>iCodeGuru</h3><p>Lead Machine Learning Instructor</p></div><span className="date-label">2026</span><p className="muted">Remote</p><ul className="bullet-list"><li>Selected as Lead Instructor among a 4-person team to teach a month-long ML course to a cohort of 20+ undergraduate students.</li><li>Taught core fundamentals of Python, TensorFlow, Scikit-learn, and deep neural architectures, mentoring students through active code implementation and systematic debugging.</li></ul></div>
      </CvSection>
      <CvSection id="leadership-and-achievements" title="Leadership and Achievements"><div className="achievement-list">{achievements.map((item) => <article className="achievement-item" key={item.label}><h3>{item.label}</h3><p>{item.text}</p></article>)}</div></CvSection>
      <CvSection id="expert-technical-skills" title="Expert Technical Skills"><div className="skills-grid">{skills.map((skill) => <article className="skill-card" key={skill.name}><h3>{skill.name}</h3><p>{skill.description}</p><div className="tag-row">{skill.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div></article>)}</div></CvSection>
      <CvSection id="certifications" title="Certifications"><div className="cert-list">{certifications.map((cert) => <div className="cert-item" key={cert.name}><span>{cert.name}</span>{cert.issuer && <span className="muted">{cert.issuer}</span>}</div>)}</div></CvSection>
      <section id="contact" className="contact-section" aria-labelledby="contact-title"><div><p className="section-kicker">Contact</p><h2 id="contact-title">Let&apos;s connect</h2><p className="muted">Email is the best way to reach me about research, engineering, or seeking opportunities.</p></div><div className="contact-links"><a className="button button-primary" href={`mailto:${profile.email}`}><Mail size={16} /> {profile.email}</a><CopyEmailButton email={profile.email} /><a className="button" href={profile.links.github} target="_blank" rel="noreferrer">GitHub <ExternalLink size={14} /></a><a className="button" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={14} /></a><a className="button" href={profile.links.medium} target="_blank" rel="noreferrer">Medium <ExternalLink size={14} /></a></div></section>
      <footer className="site-footer"><span>© {profile.name}</span><a href="#top">Back to top <ArrowUpRight size={14} /></a><span>Last updated October 2026</span></footer>
    </>
  );
}
