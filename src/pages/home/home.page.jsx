// Modules
import React from "react";

// Components
import { Fragment } from "react";
import {
  HomeHero,
  CaseStudiesCardBase,
  SideProjectsBase,
} from "../../components";

const Home = () => {
  return (
    <Fragment>
      <HomeHero />
      <CaseStudiesCardBase />
      <SideProjectsBase />
    </Fragment>
  );
};

export default Home;
