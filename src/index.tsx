import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { MeuContexto } from "./Context/MeuContexto";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MeuContexto>
      <App />
    </MeuContexto>
  </React.StrictMode>
);
