import { Check } from "lucide-react";
import { content } from "@/lib/content";
import { Reveal } from "./reveal";

export function TrustBar() {
  const { trust } = content;
  return (
    <section className="border-y border-white/5 bg-white/[0.02]">
      <div className="container-x py-8">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.2em] text-zinc-500">
            {trust.label}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {trust.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-zinc-300"
              >
                <Check className="h-4 w-4 text-brand" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
