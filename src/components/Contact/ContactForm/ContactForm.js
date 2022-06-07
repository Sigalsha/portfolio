import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <form className="contact-form">
      <label for="name"></label>
      <input
        className="contact-input"
        type="text"
        name="name"
        placeholder="name"
        autoComplete="off"
        id="name"
        required
      />
      <label for="email"></label>
      <input
        className="contact-input"
        type="email"
        name="email"
        placeholder="email"
        autoComplete="off"
        id="email"
        required
      />
      <label for="textMessage"></label>
      <textarea
        className="contact-input"
        name="textMessage"
        placeholder="your message"
        autoComplete="off"
        id="message"
        required
      />
      <button type="submit">send message</button>
    </form>
  );
};

export default ContactForm;
