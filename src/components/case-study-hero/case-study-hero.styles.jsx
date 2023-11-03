// Modules
import styled from "styled-components";

// Components
import {
  Container,
  PrimaryHeading,
  SecondaryHeading,
} from "../../assets/styles/common.styles";

// Images
import heroLinesSvg from "../../assets/images/hero-lines.svg";

export const CaseStudyHeroWrapper = styled.div`
  background-color: var(--secondary-color);
  background-image: url(${heroLinesSvg});
  background-repeat: no-repeat;
  padding-bottom: 9rem;
`;

export const CaseStudyHeroContainer = styled(Container)`
  height: 486px;
  display: flex;
  align-items: center;
  font-family: Studio Feixen Sans TRIAL;
  position: relative;
`;

export const CaseStudyHeroHeading = styled(PrimaryHeading)`
  font-family: inherit;
  letter-spacing: normal;
  font-weight: 600;
  margin-top: 0.8rem;
  margin-bottom: 3.2rem;
`;

export const CaseStudyHeroSubHeading = styled(SecondaryHeading)`
  line-height: 30px;
  font-family: Studio Feixen Edgy TRIAL;
  color: rgba(33, 33, 33, 0.7);
`;

export const CaseStudyHeroLink = styled.a`
  font-weight: 800;
`;

export const CaseStudyHeroImage = styled.svg`
  position: absolute;
  right: -43.7%;
`;

export const CaseStudyHeroLeft = styled.div`
  max-width: 400px;
`;
