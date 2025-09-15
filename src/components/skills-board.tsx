"use client";
import { motion } from "framer-motion";
import React from "react";

const SKILLS = [
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "AWS",
  "WebSockets",
];

export default function SkillsBoard() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / (el.clientWidth * 0.8));
      setActive(Math.min(SKILLS.length - 1, Math.max(0, idx)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="skills" aria-labelledby="skills-heading" className="mx-auto max-w-6xl px-4">
      <h2 id="skills-heading" className="mb-6 text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Skills</h2>
      <div
        ref={ref}
        className="relative flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
        aria-label="Skill cards"
      >
        {SKILLS.map((skill) => (
          <motion.div
            key={skill}
            drag="x"
            dragElastic={0.5}
            dragConstraints={{ left: -30, right: 30 }}
            whileTap={{ cursor: "grabbing" }}
            className="snap-start shrink-0 basis-[80%] sm:basis-[40%] md:basis-[30%] lg:basis-[25%]"
          >
            <div className="glass rounded-3xl border border-[color:var(--color-border)] p-7 shadow-soft">
              <div className="text-xl font-semibold">{skill}</div>
              <p className="mt-2 text-base text-[color:var(--color-muted-foreground)]">
                Hands-on, production-ready experience with {skill}.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-center gap-2.5">
        {SKILLS.map((_, i) => (
          <span
            key={i}
            aria-hidden
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              active === i ? "bg-blue-600" : "bg-foreground/20"
            }`}
          />)
        )}
      </div>
    </section>
  );
}
