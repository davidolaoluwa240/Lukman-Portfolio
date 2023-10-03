// Modules
import React from "react";

// Components
import { Routes as Switch, Route } from "react-router-dom";

// Pages
import { Home, About } from "../pages";

// Layouts
import { DefaultLayout } from "../layouts";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Switch>
  );
};
