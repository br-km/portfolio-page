import React, { useState, useEffect } from "react";
import { ThemeContext, themes } from "./ThemeContext";

export default function ThemeContextWrapper({ children }) {
  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");
        break;
      case themes.dark:
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");
        break;
      default:
        document.body.classList.remove("dark-theme");
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}
