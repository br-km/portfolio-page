import React from "react";
import Socials from "../subcomponents/Socials";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <ul className="navlinks">
        <li>
          <a href="#">Początek</a>
        </li>
        <li>
          <a href="#about">O mnie</a>
        </li>
        <li>
          <a href="#qualifications">Kwalifikacje</a>
        </li>
        <li>
          <a href="#experience">Doświadczenie</a>
        </li>
        <li>
          <a href="#portfolio">Projekty</a>
        </li>
        <li>
          <a href="#contact">Kontakt</a>
        </li>
      </ul>
      <div className="footer__socials">
        <Socials />
      </div>
      <div className="footer__copyright">
        <small>&copy; Copyright 2022 | K.Malesa</small>
      </div>
    </footer>
  );
};

export default Footer;
