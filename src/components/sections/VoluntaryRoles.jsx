"use client";
import SectionIntro from "@/components/SectionIntro";
import FadeIn from "@/components/FadeIn";
import data from "@/data/portfolio.json";

export default function VoluntaryRoles() {
  const { voluntaryRoles } = data;

  return (
    <section id="voluntary" className="section">
      <div className="wrap">
        <SectionIntro
          label="Community & teaching"
          title="Teaching what I had to learn the hard way."
          description="Volunteer instruction and mentoring: turning the same material I struggled with into something a beginner can act on."
          meta={`${voluntaryRoles.length} roles`}
        />

        <div className="grid gap-6 border-t pt-8 md:grid-cols-2 md:gap-10" style={{ borderColor: "var(--line)" }}>
          {voluntaryRoles.map((role, index) => (
            <FadeIn key={`${role.title}-${role.institution}`} delay={index * 0.06}>
              <div className="h-full">
                <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--mark)]">
                  {role.institution}
                  {role.period ? ` · ${role.period}` : ""}
                </p>

                <h3 className="mt-2 font-display text-[clamp(1.6rem,2vw,1.95rem)] leading-[1.12]">
                  {role.title}
                </h3>

                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[var(--muted)]">
                  {role.description}
                </p>

                {role.tech?.length ? (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {role.tech.map((item) => (
                      <span key={item} className="pill">
                        {item}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
