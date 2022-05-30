import React, { useState } from "react";
import Title from "../shared/Title";
import ContactInfo from "../shared/ContactInfo";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <Title title="Let's Connect" />
      <ContactInfo />
    </div>
  );
};

export default Contact;
