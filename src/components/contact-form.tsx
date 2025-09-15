"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function ContactForm() {
  const [agree, setAgree] = React.useState(true);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form).entries());
    console.log("contact_submit", { ...data, agree });
  };
  return (
    <section id="contact" aria-labelledby="contact-heading" className="mx-auto max-w-3xl px-4">
      <div className="text-center">
        <h2 id="contact-heading" className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Contact</h2>
        <p className="mt-2 text-[color:var(--color-muted-foreground)]">Small demo form (name, email, message).</p>
      </div>
      <form onSubmit={onSubmit} className="mt-8 space-y-4 rounded-3xl border border-[color:var(--color-border)] glass p-7 shadow-soft">
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium">Name</label>
            <Input id="name" name="name" placeholder="Your name" required aria-required />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">Email</label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" required aria-required />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium">Message</label>
          <Textarea id="message" name="message" placeholder="How can I help?" required aria-required />
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Switch id="agree" checked={agree} onCheckedChange={(v) => setAgree(!!v)} aria-label="Agree to privacy policy" />
            <label htmlFor="agree" className="text-sm text-[color:var(--color-muted-foreground)]">I agree to the privacy policy</label>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://github.com" aria-label="GitHub" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/10 hover:bg-foreground/15"><Github className="h-4 w-4" /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/10 hover:bg-foreground/15"><Linkedin className="h-4 w-4" /></a>
            <a href="https://x.com" aria-label="X" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/10 hover:bg-foreground/15"><Twitter className="h-4 w-4" /></a>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-3">
          <Button type="submit">Send message</Button>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center justify-center rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none shadow-soft h-11 px-5 bg-foreground/10 text-foreground hover:bg-foreground/15 focus-visible:ring-foreground/40"
          >
            Email me
          </a>
        </div>
      </form>
    </section>
  );
}
