// Modules
import React from "react";

// Components
import { Fragment } from "react";
import { HomeHero, CaseStudiesCardBase, SideProjectsBase } from "../components";

export const Home = () => {
  return (
    <Fragment>
      <HomeHero />
      <CaseStudiesCardBase />
      <SideProjectsBase />
    </Fragment>
  );
};
