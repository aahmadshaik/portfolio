import React from "react";
import Timeline from "./Timeline";
const Experience = () => {
  const experience = [
    {
      title: "Frontend Developer (Full-time)",
      subtitle: "DigiDxDoc",
      period: "Aug 2025 - Present",
    },
    {
      title: "Frontend Developer (Internship)",
      subtitle: "DigiDxDoc",
      period: "Apr 2025 - Aug 2025",
    },
    {
      title: "Front-End Intern",
      subtitle: "Sense Semiconductor & IT Solutions Pvt. Ltd.",
      period: "Jun 2024 - Mar 2025",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-xl font-bold mb-8">Experience</h3>
      <Timeline items={experience} />
    </section>
  );
};

export default Experience;
