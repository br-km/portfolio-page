import React from "react";

import "./Portfolio.scss";

import Project from "./subcomponents/Project";

import image1 from "../../assets/br-website2.png";
import image2 from "../../assets/game2.png";
import image3 from "../../assets/shop2.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Strona automatyka przemysłowa",
      hrefCode: "https://github.com/br-km/bluerobotics",
      hrefDemo: "https://br-km.github.io/bluerobotics/index.html",
      image: image1,
      text: "Przykładowa strona główna firmy zajmującej się automatyką przemysłową wykonana w czystym html i css",
    },
    {
      id: 2,
      title: 'Gra "papier, kamień, nożyczki" ',
      hrefCode: "http://github.com",
      hrefDemo: "http://github.com",
      image: image2,
      text: "Prosta i lubiana przez każdego gra zaprogramowana w JavaScript",
    },
    {
      id: 3,
      title: "Symulator sklepu",
      hrefCode: "http://github.com",
      hrefDemo: "http://github.com",
      image: image3,
      text: "Projekt będący symulatorem sklepu napisany w React, wykorzystujący serwer node.js do pobierania danych",
    },
  ];

  const myProjects = projects.map(
    ({ id, image, hrefCode, hrefDemo, title, text }) => {
      return (
        <Project
          key={id}
          image={image}
          hrefCode={hrefCode}
          hrefDemo={hrefDemo}
          title={title}
          text={text}
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
