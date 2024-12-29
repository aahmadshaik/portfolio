import React from "react";
import "../styles/Projects.css";
import spotifyimg from "../assests/spotifyimg.jpg";
import calimg from "../assests/calimg.png";
import brandimg from "../assests/brandimg.png";

const projects = [
  {
    name: "Spotify Clone",
    liveLink: "https://spotify-c-flame.vercel.app/",
    gitHubLink: "https://github.com/aahmadshaik/Spotify-C.git",
    description:
      "Built with React and Spotify API for real-time data fetching.",
    technologies: "React, TailwindCss, JavaScript ",
    image: spotifyimg, // Ensure the image path is correct
  },
  {
    name: "Brand Landing Page",
    liveLink: "https://brand-landing-page-tan.vercel.app/",
    gitHubLink: "https://github.com/aahmadshaik/Brand-Landing-Page.git",
    description: "Responsive landing page using Flexbox and CSS Grid.",
    technologies: "React, CSS, JavaScript ",
    image: brandimg, // Ensure the image path is correct
  },
  {
    name: "Calculator",
    liveLink: "https://calculator-three-ruddy.vercel.app/",
    gitHubLink: "https://github.com/aahmadshaik/Calculator.git",
    description: "Interactive calculator built using React.",
    technologies: "React, CSS, JavaScript ",
    image: calimg, // Ensure the image path is correct
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
              <p>{project.description}</p>
              <p> Technologies used : {project.technologies}</p>
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
