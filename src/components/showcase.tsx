"use client";
import React from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Project = {
  id: string;
  title: string;
  badges: string[];
  summary: string;
};

const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Ecommerce Platform",
    badges: ["Next.js", "Stripe", "Prisma"],
    summary:
      "A production-grade ecommerce with SSR product pages, Stripe checkout, and admin dashboards.",
  },
  {
    id: "p2",
    title: "Realtime Chat",
    badges: ["WebSockets", "Next.js"],
    summary:
      "Low-latency chat with presence, typing indicators, and optimistic UI state.",
  },
  {
    id: "p3",
    title: "SaaS Analytics",
    badges: ["Next.js", "Vercel", "Edge"],
    summary:
      "Usage analytics rendered at the edge with streaming and caching for speed.",
  },
  {
    id: "p4",
    title: "Subscriptions Billing",
    badges: ["Next.js", "Stripe"],
    summary:
      "Tiered subscription flows, Stripe webhooks, and proration logic handled cleanly.",
  },
];

function useSlashFocus<T extends HTMLElement>() {
  const ref = React.useRef<T>(null);
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement !== ref.current) {
        e.preventDefault();
        ref.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return ref;
}

export default function Showcase() {
  const [query, setQuery] = React.useState("");
  const inputRef = useSlashFocus<HTMLInputElement>();
  const filtered = PROJECTS.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section id="showcase" aria-labelledby="showcase-heading" className="mx-auto max-w-6xl px-4">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 id="showcase-heading" className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Showcase</h2>
          <p className="text-sm text-[color:var(--color-muted-foreground)]">Press “/” to search projects</p>
        </div>
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects..."
          aria-label="Search projects"
          className="h-11 w-full sm:w-80 rounded-2xl border border-[color:var(--color-border)] bg-white/70 dark:bg-black/20 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setTilt({ x: (py - 0.5) * -6, y: (px - 0.5) * 6 });
  };
  const reset = () => setTilt({ x: 0, y: 0 });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card
          className="group cursor-pointer overflow-hidden p-0"
          onMouseMove={onMove}
          onMouseLeave={reset}
          style={{ transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        >
          <div className="relative h-40">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-fuchsia-500/20"
              initial={{ scale: 1.05 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
            />
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2">
              {project.badges.map((b) => (
                <span key={b} className="rounded-full border border-[color:var(--color-border)] bg-foreground/5 px-2 py-1 text-foreground/80 text-xs">
                  {b}
                </span>
              ))}
            </div>
            <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
            <div className="mt-4">
              <Button variant="outline" size="sm">View case study</Button>
            </div>
          </div>
        </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.summary}</DialogDescription>
        </DialogHeader>
        <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-fuchsia-500/20" />
      </DialogContent>
    </Dialog>
  );
}
