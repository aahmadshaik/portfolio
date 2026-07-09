import { AcademicCapIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { certifications, education } from "../data/portfolio";

const Education = () => {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="mx-auto max-w-6xl px-6 py-20 md:py-28"
    >
      <SectionHeading
        id="education-title"
        index="05"
        eyebrow="Foundations"
        title="Education & certifications"
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {education.map((item) => (
          <Reveal key={item.id} className="rounded-2xl border border-line bg-surface p-6">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <AcademicCapIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">{item.degree}</h3>
                <p className="text-sm text-muted">{item.institution}</p>
                <p className="mt-0.5 font-mono text-xs uppercase tracking-[0.14em] text-muted">
                  {item.period}
                </p>
              </div>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {item.coursework.map((course) => (
                <li
                  key={course}
                  className="rounded-md border border-line bg-elevated px-2.5 py-1 text-xs text-ink"
                >
                  {course}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}

        <Reveal delay={80} className="rounded-2xl border border-line bg-surface p-6">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <CheckBadgeIcon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-display text-lg font-bold text-ink">Certifications</h3>
              <p className="text-sm text-muted">Continuous learning</p>
            </div>
          </div>
          <ul className="mt-5 space-y-3">
            {certifications.map((cert) => (
              <li
                key={cert.id}
                className="flex items-center justify-between gap-3 rounded-xl border border-line bg-elevated px-4 py-3"
              >
                <span className="text-sm font-medium text-ink">{cert.title}</span>
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                  {cert.issuer}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default Education;
