import React from "react";
import "../styles/Projects.css";
import quiz from "../assests/Quiz-App pic.png";
import weather from "../assests/weather app pic.png";
import game from "../assests/four games photo.png";
import UI from "../assests/student portal UI pic .png";

const projects = [
  {
    name: "Real time weather monitoring app",
    liveLink: "https://real-time-weather-monitoring-system.vercel.app/",
    gitHubLink:
      "https://github.com/aahmadshaik/Real-Time-Weather-Monitoring-System.git",
    description:
      "Fetched data from an external API to display the weather of major cities. Users can set a threshold, and updates are shown on the screen when the threshold is crossed.",
    technologies: "React, CSS, JavaScript",
    image: weather, // Ensure the image path is correct
  },
  {
    name: "Student portal UI",
    liveLink: "https://student-portal-ui-wheat.vercel.app/",
    gitHubLink: "https://github.com/aahmadshaik/Student-Portal-UI.git",
    description:
      "Pixel-perfect implementation of a Figma design for a student portal interface.",
    technologies: "React, CSS, Figma",
    image: UI, // Ensure the image path is correct
  },
  {
    name: "Quiz App",
    liveLink: "https://quiz-app-de4x.vercel.app/",
    gitHubLink: "https://github.com/aahmadshaik/Quiz-App.git",
    description:
      "Fetches data from the Trivia API, displays categories, number of questions, and difficulty levels. Calculates and displays the score percentage after answering.",
    technologies: "React, CSS, Third-party UI",
    image: quiz, // Ensure the image path is correct
  },
  {
    name: "Connect four game",
    liveLink: "https://connect-4-game-bay.vercel.app/",
    gitHubLink: "https://github.com/aahmadshaik/Connect-4-Game.git",
    description: " A classic two-player strategy game built with React.",
    technologies: "React, CSS",
    image: game, // Ensure the image path is correct
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2> Works & Personal Projects </h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.name} className="project">
            <img src={project.image} alt={project.name} />
            <div className="project-details">
              <h3>{project.name}</h3>
              <p>
                <b>Description : </b>
                {project.description}
              </p>
              <p>
                {" "}
                <b>Technologies used : </b>
                {project.technologies}
              </p>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="pr-btn"
              >
                <button class="button">
                  <span class="shadow"></span>
                  <span class="edge"></span>
                  <div class="front">
                    <span>Live Demo</span>
                  </div>
                </button>
              </a>
              <a
                href={project.gitHubLink}
                target="_blank"
                rel="noreferrer"
                className="pr-btn"
              >
                <button class="button">
                  <span class="shadow"></span>
                  <span class="edge"></span>
                  <div class="front">
                    <span>GitHub</span>
                  </div>
                </button>
              </a>
            </div>
          </div>
        ))}
        <div className="button-div">
          <a
            href="https://github.com/aahmadshaik"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="animated-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="arr-2"
                viewBox="0 0 24 24"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span class="text">More</span>
              <span class="circle"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="arr-1"
                viewBox="0 0 24 24"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
