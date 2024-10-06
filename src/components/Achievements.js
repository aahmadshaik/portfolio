import React from "react";
import "../Achievements.css";
const certifications = [
  {
    name: "Responsive Web Design - freeCodeCamp",
    link: "https://freecodecamp.org/certification/aahmadshaik/responsive-web-design",
    image: "",
    description:
      "Focuses on HTML and CSS, teaching how to create responsive, mobile-friendly web layouts using media queries, flexbox, and grid.",
  },
  {
    name: "Front End Development - Udemy",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-f1924047-4d05-41ba-b247-da3a9f962928.jpg",
    image: "",
    description:
      "This course teaches HTML, CSS, and JavaScript to build responsive, interactive websites, focusing on practical projects and modern web development techniques",
  },
  {
    name: "Java Script - freeCodeCamp",
    link: "",
    image: "",
    description:
      "Covers core JavaScript concepts like functions, arrays, and DOM manipulation, enabling users to build dynamic and interactive web applications.",
  },
  {
    name: "TCS iON Career Edge - Young Professional - TCS ",
    link: "",
    image: "",
    description:
      "A course designed to enhance soft skills, communication, and digital literacy, preparing young professionals for the modern workplace.",
  },
  {
    name: "NCC C Certificate - Naval Wing",
    link: "",
    image: "",
    description:
      "A youth development program that focuses on discipline, leadership, and physical training, including activities like parades, camps, and community service. It aims to foster qualities of leadership, camaraderie, and a sense of duty toward the nation.",
  },
];
const Achievements = () => {
  return (
    <section id="certificates" className="ceertificates">
      <h2> certifications </h2>
      <div className="certificate-container">
        {certifications.map((certificate) => (
          <div key={certificate.name} className="certificate">
            {/* <img src={certificate.image} alt={certificate.name} /> */}
            <div className="certificates-details">
              <a href={certificate.link} target="_blank" rel="noreferrer">
                <h3>{certificate.name}</h3>
              </a>
              <p>{certificate.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
