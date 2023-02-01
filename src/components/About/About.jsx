import React from "react";
import "./About.scss";
import myPhoto from "../../assets/photo.jpg";

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
            Jestem Kamil, mam 27 lat i aktualnie mieszkam we Wrocławiu. Na co
            dzień zajmuje się programowaniem aplikacji webowych we frameworku
            SAPUI5. W wolnych chwilach lubię majsterkować przy aucie, jak
            również chętnie gram w gry komputerowe. Od czasu do czasu zdarza mi
            się pokopać piłkę lub pobiegać. Interesuje się głównie sportem i
            motoryzacją, ale dobry film lub serial potrafi mnie równie mocno
            wciągnąć. Staram się rozwijać swoje umiejętności frontendowe, a
            także chętnie klikam coś na backendzie.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
