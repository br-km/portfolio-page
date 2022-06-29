import ReactDOM from "react-dom/client";
import ContextWrapper from "./contexts/ContextWrapper";
import App from "./App";

import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextWrapper>
    <App />
  </ContextWrapper>
);
