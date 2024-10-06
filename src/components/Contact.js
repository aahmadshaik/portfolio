import React from "react";
import "../Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form
        name="form"
        id="form"
        action="mailto:shaikahmadaslam@gmail.com"
        method="POST"
        encType="text/plain"
      >
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit" className="cnt-btn">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
