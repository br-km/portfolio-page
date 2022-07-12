import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

import { HiOutlineMail } from "react-icons/hi";

import { BsLinkedin } from "react-icons/bs";

import ContactOption from "./subcomponents/ContactOption";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const handleSendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dvy86jh",
        "template_8g6zfoj",
        form.current,
        "ZMhLu-rwBeH0CodGA"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Wiadomość wysłana poprawnie");
          setTimeout(() => {
            setMessage("");
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setMessage("Błąd wysyłania wiadomości");
          setTimeout(() => {
            setMessage("");
          }, 5000);
        }
      );

    e.target.reset();
  };

  const options = [
    {
      id: 1,
      title: "Email",
      icon: <HiOutlineMail />,
      name: "kamil.malesa1@gmail.com",
      href: "mailto:kamil.malesa1@gmail.com",
    },
    {
      id: 2,
      title: "LinkedIn",
      icon: <BsLinkedin />,
      name: "Kamil Malesa",
      href: "https://www.linkedin.com/in/kamil-malesa/",
    },
  ];

  const contacts = options.map(({ id, icon, title, name, href }) => {
    return (
      <ContactOption
        key={id}
        icon={icon}
        title={title}
        name={name}
        href={href}
      />
    );
  });
  console.log(form);
  return (
    <section id="contact">
      <h5>Jeśli chodzi o</h5>
      <h3>Kontakt</h3>
      <div className="container contact__container">
        <div className="contact__options">{contacts}</div>
        <form ref={form} onSubmit={handleSendEmail} action="">
          <div className="form__group">
            <label>Imię i nazwisko</label>
            <input
              type="text"
              name="name"
              placeholder="Imię i nazwisko"
              id=""
              required
            />
          </div>
          <div className="form__group">
            <label>Adres email</label>
            <input
              type="email"
              name="email"
              placeholder="Adres email"
              id=""
              required
            />
          </div>
          <div className="form__group">
            <label>Wiadomość</label>
            <textarea
              name="message"
              rows="10"
              placeholder="Wiadomość"
              id=""
              required
            ></textarea>
          </div>
          <div className="form__message">{message}</div>
          <button type="submit" className="btn btn-primary">
            Wyślij wiadomość
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
