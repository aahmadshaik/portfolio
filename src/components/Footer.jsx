import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { ArrowUpRightIcon, EnvelopeIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Reveal from "./Reveal";
import { profile } from "../data/portfolio";

const socials = [
  { id: "github", label: "GitHub", href: profile.links.github, Icon: FaGithub },
  { id: "linkedin", label: "LinkedIn", href: profile.links.linkedin, Icon: FaLinkedin },
  { id: "whatsapp", label: "WhatsApp", href: `https://wa.me/${profile.whatsapp}`, Icon: FaWhatsapp },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="mx-auto max-w-6xl px-6 pb-12 pt-20 md:pt-28">
      <Reveal className="overflow-hidden rounded-3xl border border-line bg-surface p-8 md:p-14">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Get in touch</p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
          Let's build something fast, accessible, and genuinely good.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          {profile.available
            ? "I'm open to frontend roles and interesting product work. The fastest way to reach me is email."
            : "Always happy to talk frontend, product, and interesting problems."}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-xl bg-accent h-11 px-5 text-sm font-semibold text-accent-contrast transition-transform hover:-translate-y-0.5"
          >
            <EnvelopeIcon className="h-4 w-4" aria-hidden="true" />
            {profile.email}
          </a>
          <a
            href={`tel:+${profile.whatsapp}`}
            className="inline-flex items-center gap-2 rounded-xl border border-line bg-elevated h-11 px-5 text-sm font-semibold text-ink transition-colors hover:border-accent/60"
          >
            {profile.phoneDisplay}
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-line bg-elevated h-11 px-5 text-sm font-semibold text-ink transition-colors hover:border-accent/60"
          >
            <ArrowDownTrayIcon className="h-4 w-4" aria-hidden="true" />
            Résumé
          </a>
        </div>

        <ul className="mt-8 flex flex-wrap gap-3 border-t border-line pt-8">
          {socials.map((social) => {
            const Icon = social.Icon;
            return (
              <li key={social.id}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl border border-line bg-elevated px-4 py-2.5 text-sm text-ink transition-colors hover:border-accent/60 hover:text-accent"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {social.label}
                  <ArrowUpRightIcon
                    className="h-3.5 w-3.5 text-muted transition-colors group-hover:text-accent"
                    aria-hidden="true"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </Reveal>

      <div className="mt-8 flex flex-col items-center justify-between gap-3 text-xs text-muted sm:flex-row">
        <p>
          © {year} {profile.name}. Designed & built with React and Tailwind CSS.
        </p>
        <a href="#top" className="transition-colors hover:text-accent">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
