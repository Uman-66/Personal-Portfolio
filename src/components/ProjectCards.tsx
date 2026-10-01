"use client";

import Link from "next/link";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { projects } from "@/data/projects";

const filters = ["All", "Research", "ML", "Full-stack", "Hackathon"] as const;

export function ProjectCards() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = projects.filter((project) => filter === "All" || filter === project.category || (filter === "Hackathon" && project.slug === "livora-ai"));

  return (
    <>
      <div className="filter-row" aria-label="Project filters">
        {filters.map((item) => (
          <button key={item} type="button" className={`filter-chip ${filter === item ? "active" : ""}`} onClick={() => setFilter(item)}>
            {item}
          </button>
        ))}
      </div>
      <div className="card-grid">
        {visible.map((project) => (
          <article className="content-card project-card" key={project.slug}>
            <p className="mono-label">{project.category}</p>
            <h3>{project.title}</h3>
            <p className="card-subtitle">{project.subtitle}</p>
            <p>{project.outcome}</p>
            <div className="tag-row">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
            <div className="card-links">
              <Link href={`/projects/${project.slug}`}>Details <ArrowUpRight size={14} /></Link>
              {project.links?.slice(0, 1).map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} <ExternalLink size={14} /></a>)}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
