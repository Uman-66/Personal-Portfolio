import Link from "next/link";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export function ProjectCards() {
  return (
    <>
      <div className="card-grid">
        {projects.map((project) => (
          <article className="content-card project-card" key={project.slug}>
            <h3>{project.title}</h3>
            <p className="card-subtitle">{project.subtitle}</p>
            <p>{project.outcome}</p>
            <div className="tag-row">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
            <div className="card-links">
              <Link href={`/projects/${project.slug}`}>Details <ArrowUpRight size={14} /></Link>
              {project.links?.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} <ExternalLink size={14} /></a>)}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
