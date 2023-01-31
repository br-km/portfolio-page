import React from "react";
import { useInView } from "react-hook-inview";

import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from "react-icons/fa";

import "./Qualification.scss";

const Qualification = () => {
  const [refEducation, isVisibleEducation] = useInView({
    threshold: 1,
    unobserveOnEnter: true,
  });

  const [refWork, isVisibleWork] = useInView({
    threshold: 1,
    unobserveOnEnter: true,
  });

  return (
    <section id="qualifications">
      <h5>Moje</h5>
      <h3>Kwalifikacje</h3>
      <div className="container qualifications__container">
        <div ref={refEducation}>
          <div
            className={`qualification__education ${
              isVisibleEducation ? "active" : ""
            }`}
          >
            <div className="qualification__desc">
              <FaGraduationCap /> Edukacja
            </div>
            {/* Content 1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Automatyka i Robotyka</h3>
                <span className="qualification__subtitle">
                  Systemy Produkcyjne
                </span>
                <span className="qualification__place">
                  Politechnika Wrocławska
                </span>
                <div className="qualification__calendar">
                  <FaCalendarAlt /> 2018-2019
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* Content 2 */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
              </div>
              <div>
                <h3 className="qualification__title">Automatyka i Robotyka</h3>
                <span className="qualification__subtitle">
                  Automatyka Przemysłowa
                </span>
                <span className="qualification__place">
                  Politechnika Świętokrzyska
                </span>
                <div className="qualification__calendar">
                  <FaCalendarAlt /> 2014-2018
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={refWork}>
          <div
            className={`qualification__work ${isVisibleWork ? "active" : ""}`}
          >
            <div className="qualification__desc">
              <FaBriefcase /> Praca
            </div>
            {/* Content 1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Programista JavaScript</h3>
                <span className="qualification__place">Toya S.A.</span>
                <div className="qualification__calendar">
                  <FaCalendarAlt /> 12.2022 -
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* Content 2 */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Programista systemów automatyki
                </h3>
                <span className="qualification__place">
                  Blue Robotics Sp. z o.o.
                </span>
                <div className="qualification__calendar">
                  <FaCalendarAlt /> 12.2018 - 12.2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
