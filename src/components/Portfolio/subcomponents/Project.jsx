import React from "react";
import Buttons from "../../subcomponents/Buttons";

const Project = ({ image, hrefCode, hrefDemo, title, text }) => {
  return (
    <article className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="portfolio__item-btns">
        <Buttons
          shapedHref={hrefCode}
          shapedText="Zobacz kod"
          primaryHref={hrefDemo}
          primaryText="Podgląd live"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </article>
  );
};

export default Project;
