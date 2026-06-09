import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

type Section = { heading: string; lines: string[] };

export function LegalPage({
  title,
  intro,
  sections,
  disclaimer,
}: {
  title: string;
  intro: string;
  sections: Section[];
  disclaimer?: string;
}) {
  return (
    <>
      <Navbar />
      <main className="relative pt-32 sm:pt-40">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-radial-glow" />
        <div className="container-x max-w-3xl pb-24">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>

          <h1 className="mt-8 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-zinc-400">{intro}</p>

          {disclaimer && (
            <div className="mt-8 rounded-2xl border border-brand/20 bg-brand/[0.06] p-5 text-sm leading-relaxed text-brand-100">
              {disclaimer}
            </div>
          )}

          <div className="mt-10 space-y-10">
            {sections.map((s) => (
              <section key={s.heading}>
                <h2 className="font-display text-xl font-semibold text-white">
                  {s.heading}
                </h2>
                <div className="mt-3 space-y-2">
                  {s.lines.map((line, i) => (
                    <p
                      key={i}
                      className="text-sm leading-relaxed text-zinc-400"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
