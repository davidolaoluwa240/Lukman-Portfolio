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

const About = () => {
  return (
    <Fragment>
      <AboutHero />
      <AboutInfo />
      <AboutGallery />
      <Experience />
    </Fragment>
  );
};

export default About;
