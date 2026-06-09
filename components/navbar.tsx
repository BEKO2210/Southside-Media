"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { content } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { nav } = content;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "border-b border-white/10 bg-ink/70 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <nav className="container-x flex h-16 items-center justify-between sm:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-sm font-semibold tracking-[0.14em] text-white"
            aria-label={content.meta.siteName}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/logo.png"
              alt={content.meta.siteName}
              width={32}
              height={32}
              className="h-8 w-8 object-contain transition-transform group-hover:scale-110"
            />
            <span className="hidden sm:inline">{nav.logo}</span>
          </Link>

          {/* Desktop-Links */}
          <ul className="hidden items-center gap-8 md:flex">
            {nav.links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-zinc-300 transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Link href={nav.cta.href} className="btn-primary !px-6 !py-2.5">
              {nav.cta.label}
            </Link>
          </div>

          {/* Mobile-Toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] p-2 text-zinc-200 md:hidden"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile-Menü */}
      {open && (
        <div className="border-b border-white/10 bg-ink/95 backdrop-blur-xl md:hidden">
          <ul className="container-x flex flex-col gap-1 py-4">
            {nav.links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base text-zinc-200 hover:bg-white/5"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href={nav.cta.href}
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                {nav.cta.label}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
