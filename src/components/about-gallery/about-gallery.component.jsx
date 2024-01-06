// Images
import lukmanGallery1 from "../../assets/images/lukman-gallery-1.png";
import lukmanGallery2 from "../../assets/images/lukman-gallery-2.png";
import lukmanGallery3 from "../../assets/images/lukman-gallery-3.png";

// Styles
import { AboutGalleryContainer } from "./about-gallery.styles";

export const AboutGallery = () => {
  return (
    <AboutGalleryContainer>
      <img src={lukmanGallery1} alt="Lukman Gallery 1" />
      <img src={lukmanGallery2} alt="Lukman Gallery 2" />
      <img src={lukmanGallery3} alt="Lukman Gallery 3" />
    </AboutGalleryContainer>
  );
};
