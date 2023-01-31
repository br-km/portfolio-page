import React from "react";

import "./Portfolio.scss";

import Project from "./subcomponents/Project";

import image1 from "../../assets/br-website2.png";
import image2 from "../../assets/crypto-wallet.png";
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
      title: "Portfel kryptowalut",
      hrefCode: "https://github.com/mlska/crypto-wallet",
      hrefDemo: "https://mlska.github.io/crypto-wallet/",
      image: image2,
      text: "Aplikacja symulująca giełdę kryptowalut. Wykorzystująca React.js, RestAPI, Store, Webpack, Axios",
      livePreview: true,
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
