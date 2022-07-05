import React from "react";
import { useInView } from "react-hook-inview";

import "./Experience.scss";
import ExperienceElement from "./subcomponents/ExperienceElement";
import { DiHtml5, DiCss3, DiSass, DiJqueryLogo } from "react-icons/di";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Experience = () => {
  const [ref, isVisible] = useInView({
    threshold: 1,
    unobserveOnEnter: true,
  });

  return (
    <section id="experience">
      <h5>Technologie w których mam</h5>
      <h3>Doświadczenie</h3>

      <div
        ref={ref}
        className={`container experience__container ${
          isVisible ? "active" : ""
        }`}
      >
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <ExperienceElement title={"HTML"} icon={<DiHtml5 />} level={60} />
            <ExperienceElement title={"CSS"} icon={<DiCss3 />} level={60} />
            <ExperienceElement
              title={"JavaScript"}
              icon={<IoLogoJavascript />}
              level={60}
            />
            <ExperienceElement
              title={"React.js"}
              icon={<FaReact />}
              level={50}
            />
            <ExperienceElement title={"Sass"} icon={<DiSass />} level={60} />
            <ExperienceElement
              title={"JQuery"}
              icon={<DiJqueryLogo />}
              level={50}
            />
          </div>
        </div>

        {/* End of FRONTEND */}
        <div className="experience__backend">
          <h3>Inne</h3>
          <div className="experience__content">
            <ExperienceElement
              title={"Node.js"}
              icon={<IoLogoNodejs />}
              level={20}
            />
            <ExperienceElement title={"Git"} icon={<BsGithub />} level={50} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
