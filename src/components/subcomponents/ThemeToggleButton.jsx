import React, { useContext, useState } from "react";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
import "./ThemeToggleButton.scss";
import { ThemeContext, themes } from "../../contexts/ThemeContext";

const ThemeToggleButton = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useContext(ThemeContext);

  const handleChange = () => {
    setDarkMode(!darkMode);
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  };

  return (
    <div>
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        checked={darkMode}
        onChange={handleChange}
      />
      <label htmlFor="checkbox" className="label">
        <BsMoonFill className="moon" />
        <BsFillSunFill className="sun" />
        <div className="ball" />
      </label>
    </div>
  );
};

export default ThemeToggleButton;
