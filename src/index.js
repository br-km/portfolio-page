import ReactDOM from "react-dom/client";
import ThemeContextWrapper from "./contexts/ThemeContextWrapper";
import App from "./App";

import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContextWrapper>
    <App />
  </ThemeContextWrapper>
);
