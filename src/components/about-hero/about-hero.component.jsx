// Images
import LukmanPhoto from "../../assets/images/lukman-pic.svg?react";

// Styles
import { AboutHeroContainer, AboutHeroHeading } from "./about-hero.styles";

export const AboutHero = () => {
  return (
    <AboutHeroContainer>
      <AboutHeroHeading>
        I have a passion for problem-solving and connecting the dots through
        design.
      </AboutHeroHeading>
      <LukmanPhoto aria-label="My Photo" />
    </AboutHeroContainer>
  );
};
