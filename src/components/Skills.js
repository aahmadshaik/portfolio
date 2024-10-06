import React from "react";
import "../Skills.css";

const skills = [
  { name: "HTML", level: "80%" },
  { name: "CSS", level: "80%" },
  { name: "Bootstrap", level: "70%" },
  { name: "JavaScript", level: "70%" },
  { name: "React", level: "40%" },
  { name: "GitHub", level: "80%" },
  { name: "DSA", level: "70%" },
  { name: "SDLC", level: "80%" },
  { name: "Web Development", level: "80%" },
  { name: "English", level: "80%" },
  { name: "Hindi", level: "80%" },
  { name: "Telugu", level: "80%" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills & Proficiencies</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <div key={skill.name} className="skill">
            <h4>{skill.name}</h4>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: skill.level }}>
                {/* {skill.level} */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
