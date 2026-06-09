"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { content } from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

export function Faq() {
  const { faq } = content;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section border-t border-white/5 bg-white/[0.02]">
      <div className="container-x">
        <SectionHeading eyebrow={faq.eyebrow} heading={faq.heading} />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.q} delay={i * 0.04}>
                <div className="glass overflow-hidden rounded-2xl">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-medium text-white">
                      {item.q}
                    </span>
                    <Plus
                      className={cn(
                        "h-5 w-5 flex-shrink-0 text-brand transition-transform duration-300",
                        isOpen && "rotate-45"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-zinc-400">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
