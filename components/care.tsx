import { content } from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Care() {
  const { care } = content;
  return (
    <section className="section border-t border-white/5 bg-white/[0.02]">
      <div className="container-x">
        <SectionHeading
          eyebrow={care.eyebrow}
          heading={care.heading}
          subtitle={care.subtitle}
        />

        {/* Care-Pläne */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {care.plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.06}>
              <div className="glass h-full rounded-2xl p-7 shadow-glass">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-base font-semibold text-white">
                    {plan.name}
                  </h3>
                  <div className="text-right">
                    <span className="font-display text-2xl font-extrabold text-gradient">
                      {plan.price}
                    </span>
                    <span className="ml-1 text-xs text-zinc-500">
                      {plan.interval}
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {plan.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Add-ons */}
        <Reveal delay={0.1}>
          <div className="mt-12 glass rounded-3xl p-8 shadow-glass">
            <h3 className="font-display text-lg font-semibold text-white">
              {care.addonsHeading}
            </h3>
            <p className="mt-1 text-sm text-zinc-400">{care.addonsSubtitle}</p>
            <ul className="mt-6 grid gap-x-10 gap-y-1 sm:grid-cols-2">
              {care.addons.map((a) => (
                <li
                  key={a.label}
                  className="flex items-center justify-between gap-4 border-b border-dashed border-white/10 py-3 text-sm"
                >
                  <span className="text-zinc-300">{a.label}</span>
                  <span className="whitespace-nowrap font-medium text-brand">
                    {a.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
