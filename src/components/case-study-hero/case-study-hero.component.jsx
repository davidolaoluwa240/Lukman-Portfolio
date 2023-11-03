// Modules
import React from "react";

// Components
import { Fragment } from "react";
import { ExperiencePreview } from "..";

// Styles
import {
  CaseStudyHeroWrapper,
  CaseStudyHeroContainer,
  CaseStudyHeroHeading,
  CaseStudyHeroSubHeading,
  CaseStudyHeroLink,
  CaseStudyHeroImage,
  CaseStudyHeroLeft,
} from "./case-study-hero.styles";

export const CaseStudyHero = ({
  title,
  to,
  role,
  expertise,
  year,
  platforms,
  imageComponent,
}) => {
  return (
    <Fragment>
      <CaseStudyHeroWrapper>
        <CaseStudyHeroContainer>
          <CaseStudyHeroLeft>
            <CaseStudyHeroSubHeading>Case study</CaseStudyHeroSubHeading>
            <CaseStudyHeroHeading>{title}</CaseStudyHeroHeading>
            <CaseStudyHeroLink href={to} target="_blank">
              Go to Website
            </CaseStudyHeroLink>
          </CaseStudyHeroLeft>
          <CaseStudyHeroImage as={imageComponent} aria-label={title} />
        </CaseStudyHeroContainer>
      </CaseStudyHeroWrapper>

      <ExperiencePreview
        expertise={expertise}
        role={role}
        platforms={platforms}
        year={year}
      />
    </Fragment>
  );
};
