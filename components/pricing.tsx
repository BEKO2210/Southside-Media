import Link from "next/link";
import { Check } from "lucide-react";
import { content } from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

export function Pricing() {
  const { pricing } = content;
  return (
    <section id="pakete" className="section">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-glow opacity-60" />
      <div className="container-x">
        <SectionHeading
          eyebrow={pricing.eyebrow}
          heading={pricing.heading}
          subtitle={pricing.subtitle}
        />

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {pricing.tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.07}>
              <article
                className={cn(
                  "relative h-full rounded-3xl p-8 shadow-glass",
                  tier.highlight
                    ? "glass-strong border-brand/40 ring-1 ring-brand/30"
                    : "glass"
                )}
              >
                {tier.highlight && tier.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-gradient px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-brand-glow">
                    {tier.badge}
                  </span>
                )}

                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                  {tier.name}
                </h3>

                <div className="mt-4 flex items-end gap-1.5">
                  <span className="font-display text-4xl font-extrabold text-white">
                    {tier.price}
                  </span>
                </div>
                <p className="mt-1 text-sm text-zinc-500">{tier.priceNote}</p>

                <p className="mt-5 border-t border-white/10 pt-5 text-sm text-zinc-300">
                  {tier.audience}
                </p>

                <ul className="mt-6 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-xs uppercase tracking-[0.16em] text-zinc-500">
                  {tier.delivery}
                </p>

                <Link
                  href={tier.cta.href}
                  className={cn(
                    "mt-6 w-full",
                    tier.highlight ? "btn-primary" : "btn-ghost"
                  )}
                >
                  {tier.cta.label}
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
