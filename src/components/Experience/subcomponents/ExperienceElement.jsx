import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const ExperienceElement = ({ title, icon, level }) => {
  return (
    <article className="experience__details">
      <div className="experience__details-icon">{icon}</div>
      <div className="experience__details-desc">
        <h4>{title}</h4>
        {/* <div className="bar">
          <ProgressBar
            completed={level}
            bgColor="#2978b5"
            animateOnRender={Boolean(true)}
            height="16px"
            labelClassName="bar-label"
          />
        </div> */}
      </div>
    </article>
  );
};

export default ExperienceElement;
