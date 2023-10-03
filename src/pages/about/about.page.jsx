// Modules
import React from "react";

// Components
import { Fragment } from "react";
import {
  AboutHero,
  AboutInfo,
  AboutGallery,
  Experience,
} from "../../components";

export const About = () => {
  return (
    <Fragment>
      <AboutHero />
      <AboutInfo />
      <AboutGallery />
      <Experience />
    </Fragment>
  );
};
