import React from "react";
import "../Education.css";

const Education = () => {
  return (
    <section id="education" className="education">
      <h2> Experience & Education </h2>
      <div className="education-item">
        <h3>Bachelor's Degree in Computer Science</h3>
        <h4 className="clgname">
          Sree Konaseema Banoji Ramars College (2021 - 2024)
        </h4>
        <p>
          I completed my Bachelor's in Computer Science 2019 - 2024 from SKBR
          College, affiliated with Adikavi Nannaya University (AKNU). My
          education provided me with a strong foundation in programming, data
          structures, web development, and database management.{" "}
        </p>
      </div>
      <div className="education-item">
        <h3>Intermediate in MPC</h3>
        <h4 className="clgname">Educare Group Of Institutions (2019 - 2021)</h4>
        <p>
          I completed my Intermediate education between 2019 - 2021 in the MPC
          (Mathematics, Physics, and Chemistry) stream at Educare Group of
          Institutions. This foundation strengthened my analytical and
          problem-solving skills.
        </p>
      </div>
    </section>
  );
};

export default Education;
