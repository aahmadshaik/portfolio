import React from "react";
import "../Projects.css";
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
                Live Demo
              </a>
              <a
                href={project.gitHubLink}
                target="_blank"
                rel="noreferrer"
                className="pr-btn"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
