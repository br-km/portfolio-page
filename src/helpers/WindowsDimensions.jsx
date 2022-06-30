import { useState, useEffect } from "react";

function getElementDimensions(name) {
  const element = document.getElementById(`${name}`);
  let height = 0,
    offset = 0;
  if (element) {
    height = element.getBoundingClientRect().height;
    offset = element.getBoundingClientRect().top;
  }
  return { height, offset };
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height, scrollY: scroll } = window;

  const { height: aboutHeight, offset: aboutOffset } =
    getElementDimensions("about");

  const { height: experienceHeight, offset: experienceOffset } =
    getElementDimensions("experience");

  const { height: portfolioHeight, offset: portfolioOffset } =
    getElementDimensions("portfolio");

  const { height: contactHeight, offset: contactOffset } =
    getElementDimensions("contact");

  return {
    width,
    height,
    scroll,
    aboutHeight,
    aboutOffset,
    experienceHeight,
    experienceOffset,
    portfolioHeight,
    portfolioOffset,
    contactHeight,
    contactOffset,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  return windowDimensions;
}
