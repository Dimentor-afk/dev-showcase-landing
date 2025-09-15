"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative min-h-[92vh] flex items-center">
      {/* Animated background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-blue-500/30 to-fuchsia-500/30 blur-3xl"
          animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-violet-500/25 to-cyan-500/25 blur-3xl"
          animate={{ x: [0, -40, 40, 0], y: [0, 30, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 md:grid-cols-[220px_1fr_220px]">
        {/* Left ribbon */}
        <div aria-label="left ribbon" className="hidden md:block">
          <div className="marquee-v h-[420px] overflow-hidden rounded-3xl border border-[color:var(--color-border)] glass p-3">
            <div className="inner">
              {Array(2)
                .fill(0)
                .flatMap(() => [
                  "Scroll",
                  "Motion",
                  "Theme",
                  "Grid",
                  "Dialog",
                  "Cards",
                  "Icons",
                  "Glows",
                ])
                .map((t, i) => (
                  <div key={i} className="mb-2 rounded-2xl bg-gradient-to-r from-blue-500/15 via-violet-500/15 to-fuchsia-500/15 px-4 py-3 text-sm font-medium">
                    {t}
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Center title */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 id="hero-heading" className="text-6xl sm:text-8xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
            Just Example
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-[color:var(--color-muted-foreground)]">
            A colorful UI playground showing motion, gradients, and components.
          </p>
        </div>

        {/* Right orb */}
        <div aria-label="right orb" className="hidden md:flex items-center justify-center">
          <div className="relative h-[220px] w-[220px]">
            <motion.div
              className="absolute inset-0 rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-blue-500 via-violet-500 to-fuchsia-500 opacity-60"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-[18%] rounded-full bg-background shadow-soft" />
            <motion.div
              className="absolute left-6 top-6 h-6 w-6 rounded-full bg-blue-500/70"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute right-8 bottom-8 h-6 w-6 rounded-full bg-fuchsia-500/70"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 2.2, repeat: Infinity }}
            />
            <motion.div
              className="absolute right-10 top-10 h-4 w-4 rounded-full bg-violet-500/70"
              animate={{ x: [0, -10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
