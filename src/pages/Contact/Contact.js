import React, { useState } from "react";
import Title from "../../components/shared/Title";
import ContactInfo from "../../components/shared/ContactInfo";
import ContactForm from "../../components/ContactForm/ContactForm";
import Alert from "../../components/shared/Alert";
import "./Contact.css";

const Contact = () => {
  const [isFormSubmit, setFormSubmit] = useState(false);
  const [isSubmitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmitContactForm = (isSubmit, isSuccess) => {
    setFormSubmit(isSubmit);
    setSubmitSuccess(isSuccess);
  };

  const alertAfterSubmit = (
    <Alert
      isSuccess={isSubmitSuccess}
      headerText={`${isSubmitSuccess ? "Great!" : "Oh no..."}`}
      text={`${
        isSubmitSuccess
          ? "message was sent!"
          : "Something went wrong, please try again"
      }`}
      toggleAlert={() => setFormSubmit(!isFormSubmit)}
    />
  );

  return (
    <div className="page-container">
      <Title title="Let's Connect" />
      <div className={`contact-wrapper${isFormSubmit ? " with-alert" : ""}`}>
        <ContactInfo className={`${isFormSubmit ? "" : "contact-page-info"}`} />
        {isFormSubmit ? (
          alertAfterSubmit
        ) : (
          <ContactForm handleSubmitContactForm={handleSubmitContactForm} />
        )}
      </div>
    </div>
  );
};

export default Contact;
