"use client";

import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { content } from "@/lib/content";
import { Reveal } from "./reveal";

export function Contact() {
  const { contact } = content;
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Anfrage von ${form.name || "Website-Besucher"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
        `E-Mail: ${form.email}\n` +
        `Unternehmen: ${form.company}\n\n` +
        `${form.message}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-brand/50 focus:bg-white/[0.06]";

  return (
    <section id="kontakt" className="section">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-glass backdrop-blur-xl sm:p-12">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-glow" />

          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Linke Spalte: Text */}
            <div>
              <Reveal>
                <span className="pill mb-5">{contact.eyebrow}</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                  {contact.heading}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 text-base leading-relaxed text-zinc-400">
                  {contact.text}
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-7 inline-flex items-center gap-2.5 text-sm font-medium text-white"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-brand">
                    <Mail className="h-5 w-5" />
                  </span>
                  {contact.email}
                </a>
              </Reveal>
            </div>

            {/* Rechte Spalte: Formular */}
            <Reveal delay={0.1}>
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    className={field}
                    placeholder={contact.form.name}
                    aria-label={contact.form.name}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <input
                    required
                    type="email"
                    className={field}
                    placeholder={contact.form.email}
                    aria-label={contact.form.email}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <input
                  className={field}
                  placeholder={contact.form.company}
                  aria-label={contact.form.company}
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                />
                <textarea
                  required
                  rows={4}
                  className={`${field} resize-none`}
                  placeholder={contact.form.message}
                  aria-label={contact.form.message}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                <button type="submit" className="btn-primary group w-full">
                  {contact.form.submit}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-xs leading-relaxed text-zinc-500">
                  {contact.form.privacyNote}
                </p>
                <p className="text-xs leading-relaxed text-zinc-600">
                  {contact.form.note}
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
