import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkSquare,
  faLink
} from "@fortawesome/free-solid-svg-icons";
import { contactLinks } from "../../../constants/contactLinks";
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-info-wrapper">
      {contactLinks.map((link) => {
        return (
          <a className="contact-link" href={link.path} key={link.id}>
            <img src={link.src} alt={`${link.name} - logo`} />
          </a>
        );
      })}
    </div>
  );
};

export default ContactInfo;
