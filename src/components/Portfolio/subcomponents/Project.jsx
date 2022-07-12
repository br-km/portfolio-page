import React from "react";
import Buttons from "../../subcomponents/Buttons";

const Project = ({
  image,
  hrefCode,
  hrefDemo,
  title,
  text,
  livePreview = true,
}) => {
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
          primaryText="Podgląd"
          target="_blank"
          rel="noopener noreferrer"
          primaryVisible={livePreview}
        />
      </div>
    </article>
  );
};

export default Project;
