import { content } from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { Icon } from "./icon";

export function Services() {
  const { services } = content;
  return (
    <section id="leistungen" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow={services.eyebrow}
          heading={services.heading}
          subtitle={services.subtitle}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <article className="group glass h-full rounded-2xl p-7 shadow-glass transition-colors duration-300 hover:border-brand/30 hover:bg-white/[0.06]">
                <div className="inline-flex rounded-xl border border-white/10 bg-white/[0.04] p-3 text-brand transition-transform duration-300 group-hover:scale-110">
                  <Icon name={item.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
