// Components
import { AboutHero } from "../../components/about-hero/about-hero.component";
import { AboutInfo } from "../../components/about-info/about-info.component";
import { AboutGallery } from "../../components/about-gallery/about-gallery.component";
import { Experience } from "../../components/experience/experience.component";

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
