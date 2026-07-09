import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolio";

const principles = [
  {
    id: "ownership",
    title: "End-to-end ownership",
    body: "I take modules from architecture and state management through API integration, performance, and observability.",
  },
  {
    id: "product",
    title: "Product-minded",
    body: "I care about the user outcome, not just the ticket — shipping scalable, maintainable, and genuinely usable interfaces.",
  },
  {
    id: "collaboration",
    title: "Cross-team delivery",
    body: "I partner closely with backend, QA, and design to ship reliably in fast-paced startup environments.",
  },
];

const About = () => {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading id="about-title" index="01" eyebrow="About" title="Frontend, owned end to end." />

      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <p className="text-lg leading-relaxed text-ink md:text-xl">{profile.summary}</p>
        </Reveal>

        <div className="grid gap-4 lg:col-span-5">
          {principles.map((item, index) => (
            <Reveal
              key={item.id}
              delay={index * 90}
              className="rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-accent/50"
            >
              <h3 className="font-display text-base font-bold text-ink">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
