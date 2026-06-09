"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { content } from "@/lib/content";
import { AuroraBackground } from "@/components/aurora-background";

export function Hero() {
  const { hero } = content;

  return (
    <section className="relative overflow-hidden pt-32 sm:pt-40">
      {/* Hintergrund: Higgsfield-Video + interaktive Aurora (Dev21) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Higgsfield-Video-Loop, Bild als Poster/Fallback */}
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-[0.18] mix-blend-screen"
          autoPlay
          muted
          loop
          playsInline
          poster="/media/hero.jpg"
          preload="metadata"
        >
          <source src="/media/hero-loop.mp4" type="video/mp4" />
        </video>
        {/* Interaktive Aurora + Cursor-Spotlight + Gitter */}
        <AuroraBackground />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/30 to-ink" />
      </div>

      <div className="container-x pb-20 text-center sm:pb-28">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pill"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-gradient" />
          {hero.badge}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mx-auto mt-7 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          {hero.titlePre}{" "}
          <span className="text-gradient">{hero.titleHighlight}</span>{" "}
          {hero.titlePost}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link href={hero.ctaPrimary.href} className="btn-primary group">
            {hero.ctaPrimary.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href={hero.ctaSecondary.href} className="btn-ghost">
            {hero.ctaSecondary.label}
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.dl
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {hero.stats.map((s) => (
            <div
              key={s.value}
              className="glass rounded-2xl px-6 py-5 text-center shadow-glass"
            >
              <dt className="font-display text-xl font-bold text-gradient">
                {s.value}
              </dt>
              <dd className="mt-1 text-sm text-zinc-400">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
