import React from "react";

import "./Portfolio.scss";

import Project from "./subcomponents/Project";

import image1 from "../../assets/br-website.png";
import image2 from "../../assets/game.png";
import image3 from "../../assets/shop.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Strona automatyka przemysłowa",
      hrefCode: "https://github.com/br-km/bluerobotics",
      hrefDemo: "https://br-km.github.io/bluerobotics/index.html",
      image: image1,
    },
    {
      id: 2,
      title: "Gra kamień papier nożyczki",
      hrefCode: "http://github.com",
      hrefDemo: "http://github.com",
      image: image2,
    },
    {
      id: 3,
      title: "Symulator sklepu",
      hrefCode: "http://github.com",
      hrefDemo: "http://github.com",
      image: image3,
    },
  ];

  const myProjects = projects.map(
    ({ id, image, hrefCode, hrefDemo, title }) => {
      return (
        <Project
          key={id}
          image={image}
          hrefCode={hrefCode}
          hrefDemo={hrefDemo}
          title={title}
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
