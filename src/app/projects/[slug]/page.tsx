import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="detail-page container">
      <Link className="back-link" href="/#technical-projects">← Back to projects</Link>
      <p className="section-kicker">Technical project · {project.category}</p>
      <h1>{project.title}</h1>
      <p className="detail-lede">{project.subtitle}. {project.outcome}</p>
      <section className="detail-block"><h2>Project details</h2><ul className="bullet-list">{project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></section>
      <section className="detail-block"><h2>Tools and methods</h2><div className="tag-row">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></section>
      {project.links && <section className="detail-block"><h2>Links</h2><div className="button-row">{project.links.map((link) => <a className="button" href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label} <ExternalLink size={14} /></a>)}</div></section>}
    </main>
  );
}
