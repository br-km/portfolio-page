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
            <ExperienceElement
              title={"HTML"}
              exp={"Zaawansowany"}
              icon={<DiHtml5 />}
              level={60}
            />
            <ExperienceElement
              title={"CSS"}
              exp={"Zaawansowany"}
              icon={<DiCss3 />}
              level={60}
            />
            <ExperienceElement
              title={"JavaScript"}
              exp={"Zaawansowany"}
              icon={<IoLogoJavascript />}
              level={60}
            />
            <ExperienceElement
              title={"React"}
              exp={"Zaawansowany"}
              icon={<FaReact />}
              level={40}
            />
            <ExperienceElement
              title={"Sass"}
              exp={"Zaawansowany"}
              icon={<DiSass />}
              level={70}
            />
            <ExperienceElement
              title={"JQuery"}
              exp={"Zaawansowany"}
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
              title={"Node JS"}
              exp={"Początkujący"}
              icon={<IoLogoNodejs />}
              level={20}
            />
            <ExperienceElement
              title={"Git"}
              exp={"Średnio zaawansowany"}
              icon={<BsGithub />}
              level={60}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
