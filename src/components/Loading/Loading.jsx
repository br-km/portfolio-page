import React from "react";

import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading__wrapper">
      <div className="loading__container on">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className="tv"></div>
      </div>
    </div>
  );
};

export default Loading;
