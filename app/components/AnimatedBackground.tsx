"use client";

import { useState, useEffect } from "react";

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<Array<{
    id: number;
    left: string;
    size: number;
    duration: number;
    delay: number;
    shape: string;
  }>>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 25 }, (_, i) => ({
        id: i,
        left: `${(i * 4.3 + 5) % 100}%`,
        size: (i * 2.1 + 6) % 14 + 8,
        duration: (i * 3.1 + 15) % 20 + 15,
        delay: (i * 1.7) % 12,
        shape: i % 3 === 0 ? "circle" : i % 3 === 1 ? "square" : "code",
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Animated blobs - very subtle, purely decorative */}
      <div
        className="absolute w-[600px] h-[600px] -top-60 -left-60 bg-[#9670df]/[0.06] dark:bg-[#b28ff1]/[0.04] rounded-full filter blur-[200px] animate-blob"
        style={{ willChange: "transform", transform: "translateZ(0)" }}
      />
      <div
        className="absolute w-[600px] h-[600px] top-1/4 -right-40 bg-blue-400/[0.06] dark:bg-blue-500/[0.04] rounded-full filter blur-[200px] animate-blob animation-delay-2000"
        style={{ willChange: "transform", transform: "translateZ(0)" }}
      />
      <div
        className="absolute w-[600px] h-[600px] top-2/3 left-1/4 bg-emerald-400/[0.06] dark:bg-emerald-500/[0.04] rounded-full filter blur-[200px] animate-blob animation-delay-4000"
        style={{ willChange: "transform", transform: "translateZ(0)" }}
      />
      <div
        className="absolute w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 bg-rose-400/[0.05] dark:bg-rose-500/[0.03] rounded-full filter blur-[180px] animate-blob animation-delay-2000"
        style={{ willChange: "transform", transform: "translateZ(0)" }}
      />

      {/* Grid pattern - very faint */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Floating particles - very subtle */}
      {particles.length > 0 && (
        <div className="absolute inset-0">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute animate-float-up opacity-10 dark:opacity-[0.06]"
              style={{
                left: p.left,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
              }}
            >
              {p.shape === "circle" ? (
                <div
                  className="rounded-full bg-[#b28ff1]"
                  style={{ width: p.size, height: p.size }}
                />
              ) : p.shape === "square" ? (
                <div
                  className="rounded-sm bg-blue-400"
                  style={{ width: p.size, height: p.size }}
                />
              ) : (
                <span
                  className="text-emerald-400 font-mono font-bold"
                  style={{ fontSize: p.size }}
                >
                  {"</>"}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
