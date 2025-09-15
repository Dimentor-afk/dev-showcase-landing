export default function Callouts() {
  return (
    <section aria-labelledby="callouts-heading" className="mx-auto max-w-6xl px-4">
      <h2 id="callouts-heading" className="mb-8 text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Callouts</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { title: "Quality scroll", desc: "Smooth scrolling with tasteful section snapping where it fits." },
          { title: "Solid buttons", desc: "Primary, secondary, and ghost variants with focus states." },
          { title: "Print-ready", desc: "Clean typography and minimal ink use when printing." },
        ].map((c) => (
          <div key={c.title} className="glass rounded-3xl border border-[color:var(--color-border)] p-7 shadow-soft">
            <div className="text-xl font-semibold">{c.title}</div>
            <p className="mt-2 text-base text-[color:var(--color-muted-foreground)]">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
