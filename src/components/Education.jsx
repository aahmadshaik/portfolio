import React from "react";
import Timeline from "./Timeline";

const Education = () => {
  const education = [
    {
      title: "B.Sc. Computer Science",
      subtitle: "Adi Kavi Nannaya University",
      period: "Jun 2021 - May 2024",
    },
    {
      title: "Intermediate (MPC)",
      subtitle: "Educare Junior College",
      period: "Jun 2019 - Apr 2021",
    },
  ];
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-xl font-bold mb-8">Education</h3>
      <Timeline items={education} />
    </section>
  );
};

export default Education;
