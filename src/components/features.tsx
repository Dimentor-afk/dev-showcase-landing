"use client";
import { Zap, Radio, Layers, GitBranch, Accessibility, Code2, Copy, Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";

const FEATURES = [
  {
    title: "Performance",
    desc: "Core Web Vitals obsessed: fast loads, smooth interactions.",
    Icon: Zap,
  },
  {
    title: "Real-time",
    desc: "Live updates with WebSockets and event-driven patterns.",
    Icon: Radio,
  },
  {
    title: "Clean Architecture",
    desc: "Well-structured, testable, scalable codebases.",
    Icon: Layers,
  },
  { title: "CI/CD", desc: "Automated quality gates and deploys.", Icon: GitBranch },
  {
    title: "A11y",
    desc: "Accessible UIs that work for everyone.",
    Icon: Accessibility,
  },
  { title: "DX", desc: "Developer joy through great tooling.", Icon: Code2 },
];

export default function Features() {
  const [copied, setCopied] = React.useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        "Next.js • TypeScript • Tailwind • shadcn/ui • Prisma • Vercel"
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };
  return (
    <section id="features" aria-labelledby="features-heading" className="mx-auto max-w-6xl px-4">
      <div className="mb-8 flex items-center justify-between gap-3">
        <h2 id="features-heading" className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Features</h2>
        <Button variant="secondary" size="sm" onClick={onCopy} aria-label="Copy stack">
          {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
          Copy stack
        </Button>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ title, desc, Icon }) => (
          <Card
            key={title}
            className="transition-transform hover:-translate-y-1 hover:shadow-soft relative overflow-hidden rounded-3xl p-7"
          >
            <div aria-hidden className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/20 to-fuchsia-500/20 blur-2xl" />
            <CardHeader>
              <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600/15 to-violet-600/15">
                  <Icon className="h-5 w-5" />
                  </span>
                <CardTitle>{title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>{desc}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
