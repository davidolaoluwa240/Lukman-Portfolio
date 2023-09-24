// Modules
import React from "react";
import ReactDOM from "react-dom/client";

// Components
import { BrowserRouter } from "react-router-dom";
import { App } from "./app/app.component";

// Mount React To DOM
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
