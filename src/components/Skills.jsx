import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/portfolio";

const Skills = () => {
  return (
    <section id="skills" aria-labelledby="skills-title" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading id="skills-title" index="02" eyebrow="Toolkit" title="Skills & technologies" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.id}
            delay={(index % 3) * 80}
            className="rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/50"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-line bg-elevated px-2.5 py-1 text-sm text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;
