"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, type TargetAndTransition } from "framer-motion";

/**
 * Interaktiver Hero-Hintergrund (Dev21/21st.dev, an Marke angepasst):
 * - dezentes animiertes Punkt-/Liniengitter (Canvas)
 * - langsam driftende Aurora-Blobs in Orange→Rot
 * - weicher Spotlight, der dem Mauszeiger folgt (relativ zum Hero)
 * Transparent (überlagert das Hero-Video), pointer-events-none, performant,
 * respektiert prefers-reduced-motion.
 */
export function AuroraBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null);
  const reduce = useReducedMotion();

  // Animiertes Gitter + Funkeln
  useEffect(() => {
    if (reduce) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let raf = 0;
    let dots: { x: number; y: number; o: number; d: number }[] = [];

    const resize = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      dots = Array.from({ length: 90 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        o: Math.random() * 0.3,
        d: Math.random() > 0.5 ? 1 : -1,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Gitter
      const g = 44;
      ctx.strokeStyle = "rgba(255,255,255,0.025)";
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += g) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += g) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      // Funkelnde Punkte (alle 2 Frames für Performance)
      frame++;
      for (const dot of dots) {
        dot.o += dot.d * 0.0022;
        if (dot.o <= 0 || dot.o >= 0.32) dot.d *= -1;
        ctx.fillStyle = `rgba(255,170,120,${dot.o})`;
        ctx.fillRect(dot.x, dot.y, 1.4, 1.4);
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [reduce]);

  // Cursor-Tracking relativ zum Hero
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      if (x < -300 || y < -300 || x > r.width + 300 || y > r.height + 300) {
        setMouse(null);
        return;
      }
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const blob = (
    extra: string,
    style: React.CSSProperties,
    anim: TargetAndTransition
  ) =>
    reduce ? (
      <div className={`absolute rounded-full ${extra}`} style={style} />
    ) : (
      <motion.div
        className={`absolute rounded-full ${extra}`}
        style={style}
        animate={anim}
        transition={{
          duration: 28,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
    );

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {blob(
        "-left-1/4 -top-1/4 h-[700px] w-[700px] opacity-30",
        {
          background:
            "radial-gradient(circle, #ff6a2b 0%, #e5371a 40%, transparent 70%)",
          filter: "blur(90px)",
        },
        { x: [-80, 80, -80], y: [-40, 50, -40], scale: [1, 1.2, 1] }
      )}

      {blob(
        "right-0 top-1/4 h-[620px] w-[620px] opacity-25",
        {
          background:
            "radial-gradient(circle, #e5371a 0%, #ff6a2b 45%, transparent 70%)",
          filter: "blur(100px)",
        },
        { x: [90, -90, 90], y: [40, -50, 40], scale: [1, 1.25, 1] }
      )}

      {/* Cursor-Spotlight */}
      <div
        className="absolute h-[420px] w-[420px] rounded-full transition-opacity duration-500"
        style={{
          left: (mouse?.x ?? 0) - 210,
          top: (mouse?.y ?? 0) - 210,
          background:
            "radial-gradient(circle, rgba(255,138,61,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
          opacity: mouse ? 1 : 0,
        }}
      />
    </div>
  );
}
