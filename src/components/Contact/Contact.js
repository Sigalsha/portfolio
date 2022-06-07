import React, { useState } from "react";
import Title from "../shared/Title";
import ContactInfo from "../shared/ContactInfo";
import "./Contact.css";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className="contact-container">
      <Title title="Let's Connect" />
      <div className="contact-wrapper">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
