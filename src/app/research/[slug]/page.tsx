import Link from "next/link";
import { notFound } from "next/navigation";
import { research } from "@/data/research";

export function generateStaticParams() {
  return research.map((study) => ({ slug: study.slug }));
}

export default async function ResearchDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = research.find((item) => item.slug === slug);
  if (!study) notFound();

  return (
    <main className="detail-page container">
      <Link className="back-link" href="/#research-projects">← Back to research</Link>
      <p className="section-kicker">Research project · {study.status}</p>
      <h1>{study.title}</h1>
      <p className="detail-lede">{study.summary}</p>
      <div className="detail-grid">
        <section><h2>Problem</h2><p>{study.summary}</p></section>
        <section><h2>Method</h2><ul className="bullet-list">{study.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></section>
        <section><h2>Results</h2><p>{study.result}</p><div className="metric-row"><span className="metric-chip">Status: {study.status}</span>{study.tags.slice(0, 2).map((tag) => <span className="metric-chip" key={tag}>{tag}</span>)}</div></section>
        <section><h2>Limitations / Lessons</h2><p>{study.limitations}</p></section>
      </div>
    </main>
  );
}
