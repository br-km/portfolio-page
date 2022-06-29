import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

import { HiOutlineMail } from "react-icons/hi";

import { BsLinkedin } from "react-icons/bs";

import ContactOption from "./subcomponents/ContactOption";

const Contact = () => {
  const form = useRef();

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
        },
        (error) => {
          console.log(error.text);
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
      href: "https://www.linkedin.com/in/kamil-malesa-564b2b1b8/",
    },
    // {
    //   id: 3,
    //   title: "WhatsApp",
    //   icon: <BsGithub />,
    //   name: "+123456789",
    //   href: "https://api.whatsapp.com/send?phone=123456789",
    // },
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

  return (
    <section id="contact">
      <h5>Jeśli chodzi o</h5>
      <h3>Kontakt</h3>
      <div className="container contact__container">
        <div className="contact__options">{contacts}</div>
        <form ref={form} onSubmit={handleSendEmail} action="">
          <input
            type="text"
            name="name"
            placeholder="Twoje imię i nazwisko"
            id=""
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Twój adres email"
            id=""
            required
          />
          <textarea
            name="message"
            rows="10"
            placeholder="Twoja wiadomość"
            id=""
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Wyślij wiadomość
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
