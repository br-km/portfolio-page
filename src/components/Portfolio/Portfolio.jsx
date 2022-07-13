import React from "react";

import "./Portfolio.scss";

import Project from "./subcomponents/Project";

import image1 from "../../assets/br-website2.png";
import image2 from "../../assets/game2.png";
import image3 from "../../assets/shop2.png";
import image4 from "../../assets/manager.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Strona automatyka przemysłowa",
      hrefCode: "https://github.com/mlska/bluerobotics",
      hrefDemo: "https://mlska.github.io/bluerobotics/index.html",
      image: image1,
      text: "Przykładowa strona główna firmy zajmującej się automatyką przemysłową wykonana w czystym html i css",
      livePreview: true,
    },
    {
      id: 2,
      title: 'Gra "papier, kamień, nożyce" ',
      hrefCode: "https://github.com/mlska/rock-paper-scissors",
      hrefDemo: "http://github.com",
      image: image2,
      text: "Prosta i lubiana przez każdego gra zaprogramowana w JavaScript",
      livePreview: false,
    },
    {
      id: 3,
      title: "Manager urlopów",
      hrefCode: "https://github.com/mlska/holiday-manager",
      hrefDemo: "http://github.com",
      image: image4,
      text: "Aplikacja służąca do zarządzania wnioskami urlopowymi. Wykonana w React.js przy użyciu Microsoft Graph API oraz biblioteki Bootstrap.",
      livePreview: false,
    },
  ];

  const myProjects = projects.map(
    ({ id, image, hrefCode, hrefDemo, title, text, livePreview }) => {
      return (
        <Project
          key={id}
          image={image}
          hrefCode={hrefCode}
          hrefDemo={hrefDemo}
          title={title}
          text={text}
          livePreview={livePreview}
        />
      );
    }
  );

  return (
    <section id="portfolio">
      <h5>Niektóre</h5>
      <h3>Projekty</h3>
      <div className="container portfolio__container">{myProjects}</div>
    </section>
  );
};

export default Portfolio;
