import React from "react";

const Buttons = ({
  shapedText,
  shapedHref,
  primaryText,
  primaryHref,
  target = "",
  rel = "",
  primaryVisible = true,
}) => {
  return (
    <div className="action-btns">
      <a href={shapedHref} className="btn-shaped">
        <svg height="53" width="125" xmlns="http://www.w3.org/2000/svg">
          <rect className="shape" height="53" width="125" />
        </svg>
        <div className="text" target={target} rel={rel}>
          {shapedText}
        </div>
      </a>
      {primaryVisible ? (
        <a
          href={primaryHref}
          className="btn btn-primary"
          target={target}
          rel={rel}
        >
          {primaryText}
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export default Buttons;
