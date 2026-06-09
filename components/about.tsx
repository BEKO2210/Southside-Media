import { content } from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function About() {
  const { about } = content;
  return (
    <section id="ueber-uns" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow={about.eyebrow}
          heading={about.heading}
          subtitle={about.text}
        />

        <div className="mx-auto mt-14 grid max-w-3xl gap-5 sm:grid-cols-2">
          {about.team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08}>
              <article className="glass h-full rounded-2xl p-7 shadow-glass">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient font-display text-lg font-bold text-white shadow-brand-glow">
                    {member.initials}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm text-brand">{member.role}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-zinc-400">
                  {member.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
