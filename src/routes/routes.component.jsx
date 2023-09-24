// Modules
import React from "react";

// Components
import { Routes as Switch, Route } from "react-router-dom";

// Layouts
import { DefaultLayout } from "../layouts";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<DefaultLayout />}></Route>
    </Switch>
  );
};
