"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Verzögerung in Sekunden (für gestaffelte Animationen). */
  delay?: number;
  className?: string;
  /** Bewegungsrichtung beim Einblenden. */
  y?: number;
};

/**
 * Sanftes Fade-/Slide-In beim Scrollen.
 * Respektiert prefers-reduced-motion über die globale CSS-Regel.
 */
export function Reveal({ children, delay = 0, className, y = 20 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
