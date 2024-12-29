import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import emailjs
import "../styles/Form.css";

const Form = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields.");
      return; // Stop submission if any field is empty
    }

    // Send email via EmailJS
    emailjs
      .sendForm(
        "service_9phtu9l", // Your Service ID (this is correct)
        "template_q9x9uua", // Replace with your actual Template ID from EmailJS
        e.target, // The form data will be passed here
        "jwhDaZvlzkfzW5iE1" // Replace with your EmailJS User ID (this is NOT your email)
      )
      .then(
        (result) => {
          console.log(result.text); // Log success
          alert("Message Sent!");
          onClose(); // Close the form after successful submission
        },
        (error) => {
          console.log(error.text); // Log error
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="form-container">
      <h2>Fill the Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button className="button-92" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
