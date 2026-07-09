import { TrophyIcon } from "@heroicons/react/24/solid";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/portfolio";

const Experience = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="mx-auto max-w-6xl px-6 py-20 md:py-28"
    >
      <SectionHeading id="experience-title" index="04" eyebrow="Career" title="Where I've worked" />

      <ol className="relative">
        {experience.map((role, index) => {
          const isLast = index === experience.length - 1;

          return (
            <Reveal
              key={role.id}
              as="li"
              delay={index * 80}
              className="relative flex gap-5 sm:gap-7"
            >
              {/* Rail: connector line + step node */}
              <div className="relative flex w-9 shrink-0 justify-center">
                {!isLast && (
                  <span
                    className="absolute bottom-0 left-1/2 top-9 w-px -translate-x-1/2 bg-gradient-to-b from-accent/50 to-accent/20"
                    aria-hidden="true"
                  />
                )}
                <span
                  className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full border ${
                    role.current
                      ? "border-accent/50 bg-accent-soft"
                      : "border-line bg-elevated"
                  }`}
                >
                  {role.current && (
                    <span
                      className="animate-pulse-dot absolute inset-0 rounded-full ring-2 ring-accent/40"
                      aria-hidden="true"
                    />
                  )}
                  <span
                    className={`h-3 w-3 rounded-full ${role.current ? "bg-accent" : "bg-muted"}`}
                    aria-hidden="true"
                  />
                </span>
              </div>

              {/* Content */}
              <div className={`flex-1 ${isLast ? "" : "pb-12"}`}>
                <div className="flex h-9 flex-wrap items-center gap-x-3 gap-y-1">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                    {role.period}
                  </p>
                  {role.current && (
                    <span className="rounded-md bg-accent-soft px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-accent">
                      Current
                    </span>
                  )}
                </div>

                <div className="mt-2 rounded-2xl border border-line bg-surface p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-black/5 md:p-7">
                  <h3 className="font-display text-xl font-bold text-ink">
                    {role.title} <span className="text-accent">· {role.company}</span>
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {role.type} · {role.location}
                  </p>

                  {role.award && (
                    <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-accent/30 bg-accent-soft px-3.5 py-2.5">
                      <TrophyIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                      <div className="text-sm text-ink">
                        <p>
                          <span className="font-semibold">{role.award.name}</span> —{" "}
                          {role.award.detail}
                        </p>
                        {role.award.certificate && (
                          <a
                            href={role.award.certificate}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1.5 inline-flex items-center gap-1 font-medium text-accent underline-offset-2 hover:underline"
                          >
                            View certificate
                            <ArrowUpRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  <ul className="mt-4 space-y-2.5">
                    {role.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {role.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-line px-2 py-0.5 font-mono text-xs text-ink"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          );
        })}
      </ol>
    </section>
  );
};

export default Experience;
