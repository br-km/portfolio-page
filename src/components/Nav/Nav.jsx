import React, { useState, useEffect } from "react";
import "./Nav.scss";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";

import { BiMessageDetail, BiBookOpen } from "react-icons/bi";

import useWindowDimensions from "../../helpers/WindowsDimensions";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  const {
    height,
    scroll,
    aboutHeight,
    aboutOffset,
    experienceHeight,
    experienceOffset,
    portfolioHeight,
    portfolioOffset,
    contactHeight,
    contactOffset,
  } = useWindowDimensions();

  console.log(`Offset: ${aboutOffset}`);
  console.log(`Height: ${aboutHeight}`);
  console.log(`Window: ${height}`);
  console.log(`Scroll: ${scroll}`);
  console.log(`Wynik: ${aboutOffset * aboutHeight - height}`);
  useEffect(() => {
    if (scroll < 100) {
      setActiveNav("#");
    } else {
      if (scroll > aboutOffset * aboutHeight - height) {
        setActiveNav("#about");
      }

      if (scroll > experienceOffset * experienceHeight - height) {
        setActiveNav("#experience");
      }

      if (scroll > portfolioOffset * portfolioHeight - height) {
        setActiveNav("#portfolio");
      }

      if (scroll > contactOffset * contactHeight - height) {
        setActiveNav("#contact");
      }
    }
  }, [scroll]);

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBookOpen />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <AiOutlineFundProjectionScreen />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Nav;
