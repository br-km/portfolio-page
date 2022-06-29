import React from "react";

import Buttons from "../subcomponents/Buttons";
import Socials from "../subcomponents/Socials";
import ThemeToggleButton from "../subcomponents/ThemeToggleButton";
// import { ReactComponent as Photo } from "../../assets/header-photo-animated.svg";
import { ReactComponent as Photo } from "../../assets/picture.svg";
import CV from "../../assets/cv.pdf";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header__nav">
          <ThemeToggleButton />
        </div>
        <div className="header__wrapper">
          <div className="header__texts">
            <h1>
              Cześć, jestem <span>Kamil Malesa.</span>
            </h1>
            <h2 className="text-dark">Frontend Developer</h2>
            <div className="header__socials">
              <Socials />
            </div>
            <Buttons
              shapedHref={CV}
              shapedText="Pobierz CV"
              primaryHref="#contact"
              primaryText="Porozmawiajmy"
            />
          </div>
          <div className="header__photo">
            <Photo />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
