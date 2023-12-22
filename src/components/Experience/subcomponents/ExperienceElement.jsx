import React from "react";

const ExperienceElement = ({ title, icon, level }) => {
  return (
    <article className="experience__details">
      <div className="experience__details-icon">{icon}</div>
      <div className="experience__details-desc">
        <h4>{title}</h4>
      </div>
    </article>
  );
};

export default ExperienceElement;
