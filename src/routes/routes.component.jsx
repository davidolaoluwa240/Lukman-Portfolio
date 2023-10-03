// Modules
import React from "react";

// Components
import { Routes as Switch, Route } from "react-router-dom";

// Pages
import { Home, About, Bookshelf } from "../pages";

// Layouts
import { DefaultLayout } from "../layouts";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="bookshelf" element={<Bookshelf />} />
      </Route>
    </Switch>
  );
};
