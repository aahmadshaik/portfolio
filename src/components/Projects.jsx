import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/portfolio";

const Projects = () => {
  return (
    <section id="work" aria-labelledby="work-title" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading id="work-title" index="03" eyebrow="Selected work" title="Things I've shipped" />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal
            key={project.id}
            delay={(index % 3) * 80}
            as="article"
            className="group flex flex-col rounded-2xl border border-line bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/50"
          >
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
              {project.company} · {project.year}
            </span>

            <h3 className="mt-3 font-display text-xl font-bold text-ink">{project.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.desc}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
