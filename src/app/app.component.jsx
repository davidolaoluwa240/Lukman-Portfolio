// Modules
import React from "react";

// Components
import { Fragment } from "react";
import { Routes } from "../routes/routes.component";

// Styles
import { GlobalStyle } from "./app.styles";

export const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Routes />
    </Fragment>
  );
};
