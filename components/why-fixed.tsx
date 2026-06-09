import { content } from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function WhyFixed() {
  const { whyFixed } = content;
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading eyebrow={whyFixed.eyebrow} heading={whyFixed.heading} />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {whyFixed.points.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <div className="glass h-full rounded-2xl p-8 text-center shadow-glass">
                <div className="font-display text-3xl font-extrabold text-gradient">
                  {p.stat}
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
