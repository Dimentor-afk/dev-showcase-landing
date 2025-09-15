"use client";
import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
import { useActiveSection, useScrollY } from "@/components/hooks";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const active = useActiveSection(["home", "features", "showcase", "testimonials"]);
  const y = useScrollY();
  return (
    <header className={cn("sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:glass", y > 8 && "border-b border-[color:var(--color-border)]") }>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="#home" className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent" aria-label="just.example home">
          just.example
        </Link>
        <div className="hidden md:flex items-center gap-1.5 rounded-full border border-[color:var(--color-border)] glass px-3 py-2">
          {[
            { id: "home", label: "Example" },
            { id: "features", label: "Features" },
            { id: "showcase", label: "Showcase" },
            { id: "testimonials", label: "Testimonials" },
          ].map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-colors",
                active === l.id ? "bg-foreground/10" : "hover:bg-foreground/5"
              )}
              aria-current={active === l.id ? "page" : undefined}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
