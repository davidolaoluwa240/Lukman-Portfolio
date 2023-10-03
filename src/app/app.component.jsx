// Modules
import React from "react";

// Components
import { Suspense, Fragment } from "react";
import { Routes } from "../routes/routes.component";

// Styles
import { GlobalStyle } from "./app.styles";

export const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Suspense fallback={<div>Loading Spinner Goes Here...</div>}>
        <Routes />
      </Suspense>
    </Fragment>
  );
};
