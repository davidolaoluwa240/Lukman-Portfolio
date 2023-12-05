// Components
import { Fragment } from "react";
import { ExperiencePreview } from "../experience-preview/experience-preview.component";

// Styles
import {
  CaseStudyDetailHeroWrapper,
  CaseStudyDetailHeroContainer,
  CaseStudyDetailHeroHeading,
  CaseStudyDetailHeroSubHeading,
  CaseStudyDetailHeroLink,
  CaseStudyDetailHeroImage,
  CaseStudyDetailHeroLeft,
} from "./case-study-detail-hero.styles";

export const CaseStudyDetailHero = ({
  title,
  to,
  role,
  expertise,
  year,
  platforms,
  img,
}) => {
  return (
    <Fragment>
      <CaseStudyDetailHeroWrapper>
        <CaseStudyDetailHeroContainer>
          <CaseStudyDetailHeroLeft>
            <CaseStudyDetailHeroSubHeading>
              Case study
            </CaseStudyDetailHeroSubHeading>
            <CaseStudyDetailHeroHeading>{title}</CaseStudyDetailHeroHeading>
            <CaseStudyDetailHeroLink href={to} target="_blank">
              Go to Website
            </CaseStudyDetailHeroLink>
          </CaseStudyDetailHeroLeft>
          <CaseStudyDetailHeroImage as={img} aria-label={title} />
        </CaseStudyDetailHeroContainer>
      </CaseStudyDetailHeroWrapper>

      <ExperiencePreview
        expertise={expertise}
        role={role}
        platforms={platforms}
        year={year}
      />
    </Fragment>
  );
};
