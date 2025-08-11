import React from "react";

const Projects = ({ theme }) => {
  const projects = [
    {
      title: "Alertr - Alert & Complaint Platform",
      company: "DigiDxDoc",
      desc: "Role-based dashboards, multi-tenant modules, media uploads, and responsive design.",
      link: "https://app.myalertr.com/",
    },

    {
      title: "Image Flow Radiology",
      company: "DigiDxDoc",
      desc: "Developing multi-tenant modules for radiology image management with role-based access and organization-specific workflows.",
      link: "https://medxrad-staging.digidxdoc.com/",
    },
    {
      title: "Physiomax (Client)",
      company: "Sense Semiconductor & IT Solutions Pvt. Ltd.",
      desc: "Healthcare UI — responsive React build converted from Figma.",
      link: "#projects",
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-bold mb-6">Selected Projects</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className={`rounded-xl p-5 ring-1 ${
              theme === "dark"
                ? "bg-gradient-to-br from-[#05102a] to-black ring-white/5"
                : "bg-white ring-slate-200 shadow-sm"
            }`}
          >
            <h4 className="font-semibold text-lg">{p.title}</h4>
            {p.company && (
              <span
                className={`block text-xs mt-1 ${
                  theme === "dark" ? "text-slate-400" : "text-slate-500"
                }`}
              >
                {p.company}
              </span>
            )}
            <p
              className={`mt-2 text-sm ${
                theme === "dark" ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {p.desc}
            </p>
            <a
              href={p.link}
              className="mt-4 inline-block text-sm underline hover:text-[#78a9ff]"
            >
              View
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
