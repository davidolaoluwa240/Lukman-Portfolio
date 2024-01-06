// Images
import lukmanPic from "../../assets/images/lukman-pic.png";

// Styles
import { AboutHeroContainer, AboutHeroHeading } from "./about-hero.styles";

export const AboutHero = () => {
  return (
    <AboutHeroContainer>
      <AboutHeroHeading>
        I have a passion for problem-solving and connecting the dots through
        design.
      </AboutHeroHeading>
      <img src={lukmanPic} alt="My Photo" />
    </AboutHeroContainer>
  );
};
