// Modules
import React from "react";

// Components
import {
  AboutHero,
  AboutInfo,
  AboutGallery,
  Experience,
} from "../../components";

// Styles
import { AboutWrapper } from "./about.styles";

export const About = () => {
  return (
    <AboutWrapper>
      <AboutHero />
      <AboutInfo />
      <AboutGallery />
      <Experience />
    </AboutWrapper>
  );
};
