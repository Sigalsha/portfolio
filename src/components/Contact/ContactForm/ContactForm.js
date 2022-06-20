import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../../shared/Button";
import Alert from "../../shared/Alert";
import "./ContactForm.css";

const ContactForm = ({ handleSubmitContactForm }) => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs
      .sendForm(
        "service_ro8wu2v",
        "template_bjzulut",
        form.current,
        "oRgRLGEYziipt67gK"
      )
      .then(
        (result) => {
          console.log(result);
          handleSubmitContactForm(true, true);
        },
        (error) => {
          console.log(error.text);
          handleSubmitContactForm(true, false);
        }
      );
    e.target.reset();
  };

  return (
    <form ref={form} className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name"></label>
      <input
        className="contact-input"
        type="text"
        name="name"
        placeholder="name"
        autoComplete="off"
        id="name"
        required
      />
      <label htmlFor="email"></label>
      <input
        className="contact-input"
        type="email"
        name="email"
        placeholder="email"
        autoComplete="off"
        id="email"
        required
      />
      <label htmlFor="message"></label>
      <textarea
        className="contact-input"
        name="message"
        placeholder="your message"
        autoComplete="off"
        id="message"
        required
      />
      <Button type="submit" btnTxt="send" />
    </form>
  );
};

export default ContactForm;
