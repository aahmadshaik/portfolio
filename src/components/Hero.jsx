import { ArrowDownRightIcon, ArrowUpRightIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile, stats } from "../data/portfolio";

const Hero = () => {
  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="animate-enter flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              <span className="relative flex h-2 w-2">
                {profile.available && (
                  <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                )}
                <span
                  className={`relative inline-flex h-2 w-2 rounded-full ${
                    profile.available ? "bg-emerald-500" : "bg-muted"
                  }`}
                />
              </span>
              {profile.available ? "Open to frontend roles" : "Currently heads-down"}
            </p>

            <h1 className="animate-enter mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl [animation-delay:80ms]">
              I build fast, accessible{" "}
              <span className="text-accent">React</span> interfaces —
              <br className="hidden sm:block" /> shipped to production.
            </h1>

            <p className="animate-enter mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg [animation-delay:160ms]">
              I'm {profile.name.split(" ")[0]} — a {profile.role} in {profile.location.split(",")[0]}.
              I own modules end to end at {profile.currentCompany}, from architecture and real-time
              UI to performance and observability.
            </p>

            <div className="animate-enter mt-8 flex flex-wrap items-center gap-3 [animation-delay:240ms]">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-xl bg-accent h-11 px-5 text-sm font-semibold text-accent-contrast transition-transform hover:-translate-y-0.5"
              >
                View selected work
                <ArrowDownRightIcon className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border border-line bg-elevated h-11 px-5 text-sm font-semibold text-ink transition-colors hover:border-accent/60"
              >
                <ArrowDownTrayIcon className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                Résumé
              </a>
              <div className="flex items-center gap-1 pl-1">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-elevated text-ink transition-colors hover:border-accent/60 hover:text-accent"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-elevated text-ink transition-colors hover:border-accent/60 hover:text-accent"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="animate-enter lg:col-span-5 [animation-delay:320ms]">
            <div className="rounded-2xl border border-line bg-surface/80 p-1.5 shadow-2xl shadow-black/5 backdrop-blur">
              <div className="flex items-center gap-2 px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" aria-hidden="true" />
                <span className="ml-2 font-mono text-xs text-muted">aslam — profile.ts</span>
              </div>
              <dl className="space-y-3 rounded-xl bg-elevated p-5 font-mono text-sm">
                <ConsoleRow label="role" value={profile.role} accent />
                <ConsoleRow label="focus" value={profile.focus} />
                <ConsoleRow label="based" value={profile.location} />
                <ConsoleRow label="now" value={`building @ ${profile.currentCompany}`} />
              </dl>
            </div>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-3 gap-4 border-t border-line pt-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-3xl font-bold text-ink sm:text-4xl">{stat.value}</dd>
              <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </dl>
      </div>

      <a
        href="#about"
        className="mx-auto flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent"
      >
        Scroll <ArrowUpRightIcon className="h-3.5 w-3.5 rotate-90" />
      </a>
    </section>
  );
};

const ConsoleRow = ({ label, value, accent = false }) => (
  <div className="flex items-baseline gap-3">
    <dt className="w-16 shrink-0 text-muted">{label}</dt>
    <dd className={accent ? "font-semibold text-accent" : "text-ink"}>{value}</dd>
  </div>
);

export default Hero;
