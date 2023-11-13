// Modules
import React from "react";

// Components
import {
  HomeHero,
  CaseStudyCardBase,
  SideProjectsBase,
} from "../../components";

// Styles
import { HomeWrapper } from "./home.styles";

export const Home = () => {
  return (
    <HomeWrapper>
      <HomeHero />
      <CaseStudyCardBase />
      <SideProjectsBase />
    </HomeWrapper>
  );
};
