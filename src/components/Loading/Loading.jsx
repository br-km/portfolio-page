import React from "react";

import "./Loading.scss";

const Loading = () => {
  return (
    <>
      <div className="loading__wrapper">
        <div className="loading__container">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="tv__wrapper">
        <div className="tv tv__top"></div>
        <div className="tv tv__bottom"></div>
      </div>
    </>
  );
};

export default Loading;
