import type { ReactNode } from "react";

export function CvSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="cv-section" aria-labelledby={`${id}-title`}>
      <div className="section-heading">
        <p className="section-kicker">CV section</p>
        <h2 id={`${id}-title`}>{title}</h2>
      </div>
      <div>{children}</div>
    </section>
  );
}
