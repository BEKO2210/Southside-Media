"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { content } from "@/lib/content";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "ssm-consent-v1";

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

/**
 * Hier würden im Live-Betrieb die jeweiligen Tracker geladen.
 * Aktuell simuliert: Skripte feuern NUR, wenn die Kategorie zugestimmt wurde.
 */
function applyConsent(consent: Consent) {
  if (typeof window === "undefined") return;
  if (consent.analytics) {
    // z. B. Plausible / Matomo / GA4 hier initialisieren
    console.info("[Consent] Statistik aktiviert – Analytics-Skript würde jetzt laden.");
  }
  if (consent.marketing) {
    console.info("[Consent] Marketing aktiviert – Marketing-Skript würde jetzt laden.");
  }
  // Eigenes Event, an das sich Integrationen hängen können:
  window.dispatchEvent(new CustomEvent("ssm:consent", { detail: consent }));
}

export function CookieBanner() {
  const { cookie } = content;
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as Consent;
        setAnalytics(parsed.analytics);
        setMarketing(parsed.marketing);
        applyConsent(parsed);
      } else {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const save = (consent: Consent) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    applyConsent(consent);
    setVisible(false);
    setShowSettings(false);
  };

  const acceptAll = () =>
    save({ necessary: true, analytics: true, marketing: true });
  const declineAll = () =>
    save({ necessary: true, analytics: false, marketing: false });
  const saveSelection = () =>
    save({ necessary: true, analytics, marketing });

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6">
      <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-ink/90 p-6 shadow-glass backdrop-blur-2xl">
        <div className="flex items-start gap-4">
          <span className="hidden flex-shrink-0 rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-brand sm:inline-flex">
            <Cookie className="h-5 w-5" />
          </span>
          <div className="flex-1">
            <h2 className="font-display text-base font-semibold text-white">
              {cookie.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {cookie.text}{" "}
              <Link
                href={cookie.privacyLink.href}
                className="text-brand underline-offset-2 hover:underline"
              >
                {cookie.privacyLink.label}
              </Link>
            </p>

            {/* Detaillierte Einstellungen */}
            {showSettings && (
              <div className="mt-4 space-y-2.5">
                {cookie.categories.map((cat) => {
                  const checked =
                    cat.key === "necessary"
                      ? true
                      : cat.key === "analytics"
                        ? analytics
                        : marketing;
                  return (
                    <label
                      key={cat.key}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3"
                    >
                      <input
                        type="checkbox"
                        className="mt-0.5 h-4 w-4 accent-brand"
                        checked={checked}
                        disabled={cat.locked}
                        onChange={(e) => {
                          if (cat.key === "analytics") setAnalytics(e.target.checked);
                          if (cat.key === "marketing") setMarketing(e.target.checked);
                        }}
                      />
                      <span>
                        <span className="block text-sm font-medium text-white">
                          {cat.label}
                          {cat.locked && (
                            <span className="ml-2 text-xs text-zinc-500">
                              (immer aktiv)
                            </span>
                          )}
                        </span>
                        <span className="block text-xs text-zinc-400">
                          {cat.text}
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
            )}

            <div className="mt-5 flex flex-wrap gap-3">
              <button onClick={acceptAll} className="btn-primary !px-5 !py-2.5">
                {cookie.accept}
              </button>
              {showSettings ? (
                <button
                  onClick={saveSelection}
                  className="btn-ghost !px-5 !py-2.5"
                >
                  Auswahl speichern
                </button>
              ) : (
                <button
                  onClick={() => setShowSettings(true)}
                  className="btn-ghost !px-5 !py-2.5"
                >
                  {cookie.settings}
                </button>
              )}
              <button
                onClick={declineAll}
                className={cn(
                  "px-5 py-2.5 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                )}
              >
                {cookie.decline}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
