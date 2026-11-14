"use client";
import SectionIntro from "@/components/SectionIntro";
import FadeIn from "@/components/FadeIn";
import data from "@/data/portfolio.json";

export default function Skills() {
  const { skills } = data;

  return (
    <section id="skills" className="section">
      <div className="wrap">
        <SectionIntro
          index="05"
          label="Skills"
          title="The stack behind the work."
          description="No proficiency bars — just the tools that actually appear in the repositories above."
          meta="By category"
        />

        <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, index) => (
            <FadeIn key={group.category} delay={index * 0.05}>
              <div>
                <h3
                  className="border-b pb-3 font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--ink)]"
                  style={{ borderColor: "var(--line)" }}
                >
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="pill">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}