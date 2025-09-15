export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto max-w-6xl px-4 py-8 text-sm text-[color:var(--color-muted-foreground)]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} just.example. All rights reserved.</p>
        <nav className="flex flex-wrap items-center gap-4">
          <a href="#home" className="hover:underline">Example</a>
          <a href="#features" className="hover:underline">Features</a>
          <a href="#showcase" className="hover:underline">Showcase</a>
          <a href="#testimonials" className="hover:underline">Testimonials</a>
        </nav>
      </div>
    </footer>
  );
}
