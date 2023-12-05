// Images
import LukmanGallery1 from "../../assets/images/lukman-gallery-1.svg?react";
import LukmanGallery2 from "../../assets/images/lukman-gallery-2.svg?react";
import LukmanGallery3 from "../../assets/images/lukman-gallery-3.svg?react";

// Styles
import { AboutGalleryContainer } from "./about-gallery.styles";

export const AboutGallery = () => {
  return (
    <AboutGalleryContainer>
      <LukmanGallery1 aria-label="Lukman Gallery 1" />
      <LukmanGallery2 aria-label="Lukman Gallery 2" />
      <LukmanGallery3 aria-label="Lukman Gallery 3" />
    </AboutGalleryContainer>
  );
};
