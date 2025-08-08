import React from "react";

const Hero = ({ theme }) => {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "ReactJS",
    "Redux",
    "Context API",
    "REST APIs",
    "Axios",
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    "Git",
    "GitHub",
    "Vercel",
    "Figma",
    "Responsive Design",
    "Cross-Browser Compatibility",
    "Performance Optimization",
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-300 mb-2">
              Frontend Developer at <strong>DigiDxDoc</strong> — Full-time
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              I build beautiful, responsive interfaces with{" "}
              <span className="text-[#78a9ff]">React</span>.
            </h2>
            <p className="mt-6 text-slate-500 dark:text-slate-300 max-w-xl">
              I’m Ahmad — a front-end developer from Bengaluru. I craft
              pixel-perfect designs into fast, accessible React applications and
              ship them with CI/CD. I focus on clean code, responsive layouts,
              and solid UX.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#projects"
                className={`px-4 py-2 rounded-md border ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-[#0e2a4a] to-[#06162a] border-white/5"
                    : "bg-slate-100 border-slate-200"
                }`}
              >
                See Projects
              </a>
              <a
                href="#contact"
                className={`${
                  theme === "dark" ? "bg-white/10" : "bg-white"
                } px-4 py-2 rounded-md`}
              >
                Hire Me
              </a>
            </div>
          </div>
          <div className="relative">
            <div
              className={`w-full h-72 md:h-80 rounded-2xl p-6 ring-1 ${
                theme === "dark"
                  ? "bg-gradient-to-br from-[#071229] to-[#071022] ring-white/5"
                  : "bg-white ring-slate-200 shadow-sm"
              }`}
            >
              <h3 className="text-lg font-semibold mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className={`px-2 py-1 text-xs rounded-md ${
                      theme === "dark" ? "bg-white/5" : "bg-slate-100"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
