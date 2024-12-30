import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        I am a passionate front-end developer skilled in HTML, CSS, JavaScript,
        and React, with a strong focus on creating responsive, user-friendly web
        applications. I have experience in developing and deploying dynamic
        projects that deliver impactful digital experiences. Constantly learning
        and adapting, I strive to write clean code and craft thoughtful designs.
        My goal is to contribute to innovative teams and build solutions that
        exceed expectations.
      </p>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/aahmadshaik/Resume/blob/main/Ahmad%20Aslam%20FrontEnd%20Resume.pdf"
      >
        <button class="resume">Resume</button>
      </a>
    </section>
  );
};

export default About;
