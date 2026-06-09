import { content } from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { Icon } from "./icon";
import { SpotlightCard } from "./spotlight-card";

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
              <SpotlightCard className="group h-full p-7">
                <div className="inline-flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  {"image" in item && item.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.image}
                      alt=""
                      width={64}
                      height={64}
                      className="h-16 w-16 object-contain drop-shadow-[0_6px_20px_rgba(255,106,43,0.35)]"
                      loading="lazy"
                    />
                  ) : (
                    <span className="inline-flex rounded-xl border border-white/10 bg-white/[0.04] p-3 text-brand">
                      <Icon name={item.icon} className="h-6 w-6" />
                    </span>
                  )}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                  {item.text}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
