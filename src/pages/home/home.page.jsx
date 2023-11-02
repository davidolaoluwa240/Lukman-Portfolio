// Modules
import React from "react";

// Components
import {
  HomeHero,
  CaseStudiesCardBase,
  SideProjectsBase,
} from "../../components";

// Styles
import { HomeWrapper } from "./home.styles";

export const Home = () => {
  return (
    <HomeWrapper>
      <HomeHero />
      <CaseStudiesCardBase />
      <SideProjectsBase />
    </HomeWrapper>
  );
};
