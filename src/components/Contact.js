import React from "react";
import "../styles/Contact.css";
import { useState } from "react";
import Form from "../components/Form";

const Contact = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleButtonClick = () => {
    setFormVisible(true); // Show the Form component when the button is clicked
  };

  const handleCloseForm = () => {
    setFormVisible(false); // Hide the Form component when closed
  };
  const mobileNumber = "+91 9701924456";
  const emailAddress = "shaikahmadaslam@gmail.com";
  return (
    <section id="contact" className="contact">
      <h2>Reach Out</h2>
      <div className="contact-info">
        <h1>Shaik Ahmad Aslam</h1>
        <a href={`tel:${mobileNumber}`} className="contact-link">
          <span className="material-symbols-outlined logo">call</span>
          {mobileNumber}
        </a>
        <a href={`mailto:${emailAddress}`} className="contact-link">
          <span className="material-symbols-outlined logo">email</span>
          {emailAddress}
        </a>
      </div>
      <div className="connect">
        <h1>CONNECT WITH ME </h1>
        <a href="https://www.linkedin.com/in/ahmad-shaik-web-developer">
          <img
            src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
            alt="linkedin logo"
          ></img>
        </a>
        <a href="https://github.com/aahmadshaik">
          <img
            src="https://img.icons8.com/?size=100&id=SzgQDfObXUbA&format=png&color=000000"
            alt="GitHub logo"
          ></img>
        </a>
        <a href="dm.wa.link/zh7ieh">
          <img
            src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000"
            alt="Wap logo"
          ></img>
        </a>
      </div>
      <button onClick={handleButtonClick} class="button-54" role="button">
        Send Message
      </button>
      {isFormVisible && <Form onClose={handleCloseForm} />}
    </section>
  );
};

export default Contact;
