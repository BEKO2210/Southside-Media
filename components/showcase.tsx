import { content } from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Showcase() {
  const { showcase } = content;
  return (
    <section className="section">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-glow opacity-50" />
      <div className="container-x">
        <SectionHeading
          eyebrow={showcase.eyebrow}
          heading={showcase.heading}
          subtitle={showcase.subtitle}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {showcase.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <figure className="group glass h-full overflow-hidden rounded-3xl shadow-glass transition-colors duration-300 hover:border-brand/30">
                <div className="relative aspect-[4/3] overflow-hidden bg-ink-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                </div>
                <figcaption className="p-6">
                  <h3 className="font-display text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {item.text}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
