// Modules
import React from "react";

// Components
import { Routes as Switch, Route } from "react-router-dom";

// Pages
import {
  Home,
  About,
  Bookshelf,
  BongaloCaseStudy,
  FreteriumCaseStudy,
  AsusuCaseStudy,
  SwimmoCaseStudy,
} from "../pages";

// Layouts
import { DefaultLayout, CaseStudyLayout } from "../layouts";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="bookshelf" element={<Bookshelf />} />
      </Route>
      <Route path="/case-study" element={<CaseStudyLayout />}>
        <Route path="bongalo" element={<BongaloCaseStudy />} />
        <Route path="asusu" element={<AsusuCaseStudy />} />
        <Route path="freterium" element={<FreteriumCaseStudy />} />
        <Route path="swimmo" element={<SwimmoCaseStudy />} />
      </Route>
    </Switch>
  );
};
