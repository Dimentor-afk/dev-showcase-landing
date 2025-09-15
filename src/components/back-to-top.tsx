"use client";
import { ArrowUp } from "lucide-react";
import { useScrollY } from "@/components/hooks";

export default function BackToTop() {
  const y = useScrollY();
  const visible = y > 400;
  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-soft transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"
      }`}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}

