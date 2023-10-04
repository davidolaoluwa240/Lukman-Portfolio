// Modules
import React from "react";

// Components
import FooterImg from "../../assets/images/footer-img.svg?react";
import EmailIcon from "../../assets/images/email-icon.svg?react";
import InstagramIcon from "../../assets/images/instagram-icon.svg?react";
import LinkedinIcon from "../../assets/images/linkedIn-icon.svg?react";
import DribbleIcon from "../../assets/images/dribble-icon.svg?react";

// Styles
import {
  FooterContainer,
  FooterHeading,
  FooterContent,
  FooterSocialsGroup,
  FooterContentGroup,
} from "./footer.styles";

export const Footer = () => {
  return (
    <footer>
      <FooterContainer>
        <FooterContentGroup>
          <FooterHeading>Let’s push boundaries</FooterHeading>
          <FooterContent>
            We should chat. Whether it’s a one-manned mission, or a group
            effort, I’m standing by.
          </FooterContent>

          <FooterSocialsGroup>
            <a target="_blank" href="mailto:lukmann.design@gmail.com">
              <EmailIcon aria-label="Contact Me On Email" />
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/lukmansuleiman/"
            >
              <LinkedinIcon aria-label="Contact Me On Linkedin" />
            </a>

            <a
              target="_blank"
              href="https://www.instagram.com/lukmansuleiman_/"
            >
              <InstagramIcon aria-label="Contact Me On Instagram" />
            </a>

            <a target="_blank" href="https://dribbble.com/Lukmandesign/about">
              <DribbleIcon aria-label="Contact Me On Instagram" />
            </a>
          </FooterSocialsGroup>
        </FooterContentGroup>
        <FooterImg />
      </FooterContainer>
    </footer>
  );
};
