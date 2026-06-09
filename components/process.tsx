import { content } from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Process() {
  const { process } = content;
  return (
    <section id="ablauf" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow={process.eyebrow}
          heading={process.heading}
          subtitle={process.subtitle}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.07}>
              <div className="glass relative h-full rounded-2xl p-7 shadow-glass">
                <span className="font-display text-4xl font-extrabold text-white/10">
                  {step.step}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                  {step.text}
                </p>
                {i < process.steps.length - 1 && (
                  <span className="absolute right-6 top-8 hidden h-px w-8 bg-gradient-to-r from-brand/60 to-transparent lg:block" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
