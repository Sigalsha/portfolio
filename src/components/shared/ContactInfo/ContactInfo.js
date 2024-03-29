import React, { useState } from "react";
import { CONTACT_LINKS } from "../../../constants/contactLinks";
import "./ContactInfo.css";

const ContactInfo = ({ className }) => {
  return (
    <div className={`${className ? className : ""} contact-info-wrapper`}>
      {CONTACT_LINKS.map((link) => {
        return (
          <a
            className="contact-link"
            href={link.path}
            key={link.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="contact-icon"
              src={link.src}
              alt={`${link.name} - logo`}
            />
          </a>
        );
      })}
    </div>
  );
};

export default ContactInfo;
