import React, { useState, useEffect } from "react";
import { Context, themes } from "./Context";

export default function ContextWrapper({ children }) {
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
    <Context.Provider value={[theme, setTheme]}>{children}</Context.Provider>
  );
}
