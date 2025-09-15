"use client";
import React from "react";

const ITEMS = [
  {
    name: "Alex Carter",
    role: "CTO, FintechCo",
    quote: "Delivered ahead of schedule with flawless performance.",
  },
  {
    name: "Sofia Nguyen",
    role: "Product Lead, SaaSly",
    quote: "Design and UX quality exceeded expectations.",
  },
  {
    name: "David Kim",
    role: "Founder, RealtimeHQ",
    quote: "Rock-solid realtime infra and clean architecture.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="mx-auto max-w-6xl px-4">
      <h2 id="testimonials-heading" className="mb-8 text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Testimonials</h2>
      <div className="marquee-h relative overflow-hidden rounded-2xl border border-[color:var(--color-border)] glass p-4">
        <div className="inner flex gap-4 will-change-transform">
          {[...ITEMS, ...ITEMS].map((t, i) => (
            <figure key={i} className="min-w-[300px] shrink-0 rounded-2xl border border-[color:var(--color-border)] bg-foreground/5 p-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500/40 to-fuchsia-500/40" aria-hidden />
                <figcaption>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-[color:var(--color-muted-foreground)]">{t.role}</div>
                </figcaption>
              </div>
              <blockquote className="mt-3 text-sm">“{t.quote}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
