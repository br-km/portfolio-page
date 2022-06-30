import React from "react";
import "./About.scss";
import myPhoto from "../../assets/me-about.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Kilka słów</h5>
      <h3>O mnie</h3>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={myPhoto} alt="about me" />
          </div>
        </div>
        <div className="about__content">
          <p>
            Cześć, jestem Kamil, mam 27 lat i aktualnie mieszkam we Wrocławiu.
            Na co dzień zajmuje się programowaniem robotów i systemów automatyki
            przemysłowej, oraz projektuje również panele operatorskie HMI/SCADA.
            Moje zainteresowanie frontendem zaczęło się w zeszłym roku i wynika
            z technologii przemysłowych w których aktualnie pracuje. W wolnych
            chwilach lubię grzebać przy aucie, oraz chętnie gram w MMORPG. Od
            czasu do czasu zdarza mi się poszarpać za struny w gitarze
            elektrycznej, oraz pokopać piłkę. Interesuje się sportem,
            motoryzacją, kinem, oraz elektroniką. Poszukuję miejsca pracy, gdzie
            mógłbym rozwinąć swoje umiejętności frontendowe jak również inne
            technologie z tym związane.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
