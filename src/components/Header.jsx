import ThemeToggle from "./ThemeToggle";
import { navLinks, profile } from "../data/portfolio";

const Header = ({ mode, setMode }) => {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-canvas/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="group flex items-center gap-3" aria-label="Aslam Shaik — home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-elevated font-display text-sm font-extrabold tracking-tight text-accent transition-colors group-hover:border-accent/60">
            AS
          </span>
          <span className="hidden sm:block">
            <span className="block font-display text-sm font-bold text-ink">{profile.name}</span>
            <span className="block font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
              {profile.role}
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-accent-soft hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle mode={mode} setMode={setMode} />
          <a
            href="#contact"
            className="hidden rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-accent-contrast transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
