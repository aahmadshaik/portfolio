import React from "react";

const Certifications = ({ theme }) => {
  const certifications = [
    { title: "Front End Development", subtitle: "Udemy", period: "2024" },
    {
      title: "Responsive Web Design",
      subtitle: "freeCodeCamp",
      period: "2024",
    },
    { title: "JavaScript", subtitle: "freeCodeCamp", period: "2024" },
    { title: "Introduction to CS50", subtitle: "edX", period: "2024" },
    { title: "React 19", subtitle: "Scrimba", period: "2024" },
  ];
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-xl font-bold mb-8">Certifications</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className={`p-5 rounded-lg ring-1 ${
              theme === "dark"
                ? "bg-gradient-to-br from-[#05102a] to-black ring-white/5"
                : "bg-white ring-slate-200 shadow-sm"
            }`}
          >
            <h4 className="font-semibold">{cert.title}</h4>
            <p
              className={`${
                theme === "dark" ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {cert.subtitle}
            </p>
            <span
              className={`${
                theme === "dark" ? "text-slate-400" : "text-slate-500"
              } text-xs`}
            >
              {cert.period}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
