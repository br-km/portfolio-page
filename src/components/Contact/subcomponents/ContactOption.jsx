import React from "react";

const ContactOption = ({ icon, title, name, href }) => {
  return (
    <article className="contact__option">
      <div className="contact__option-icon">{icon}</div>
      <h4>{title}</h4>
      <h5>{name}</h5>
      <a href={href} target="_blank" rel="noopener noreferrer">
        Wyślij wiadomość
      </a>
    </article>
  );
};

export default ContactOption;
