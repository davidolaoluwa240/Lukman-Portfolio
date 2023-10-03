// Modules
import React from "react";

// Components
import { Suspense } from "react";
import { Routes } from "../routes/routes.component";

// Styles
import { GlobalStyle } from "./app.styles";

export const App = () => {
  return (
    <Suspense fallback={<div>Loading Spinner Goes Here...</div>}>
      <GlobalStyle />
      <Routes />
    </Suspense>
  );
};
