import Link from "next/link";
import { content } from "@/lib/content";

export function Footer() {
  const { footer, nav, company } = content;
  const year = 2026;

  return (
    <footer className="border-t border-white/10 bg-ink-900">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          {/* Marke */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2.5 text-sm font-semibold tracking-[0.14em] text-white"
            >
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-brand-gradient" />
              {nav.logo}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
              {footer.tagline}
            </p>
            <a
              href={`mailto:${company.email}`}
              className="mt-4 inline-block text-sm text-zinc-400 transition-colors hover:text-brand"
            >
              {company.email}
            </a>
          </div>

          {/* Spalten */}
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Preis-Disclaimer */}
        <p className="mt-12 border-t border-white/10 pt-8 text-xs leading-relaxed text-zinc-600">
          {footer.priceDisclaimer}
        </p>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-zinc-500">
            © {year} {footer.copyright}
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/impressum"
              className="text-xs text-zinc-500 transition-colors hover:text-white"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-xs text-zinc-500 transition-colors hover:text-white"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
