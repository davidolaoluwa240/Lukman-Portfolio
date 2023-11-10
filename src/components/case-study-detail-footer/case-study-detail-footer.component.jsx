// Modules
import React from "react";

// Components
import { CaseStudiesCard } from "../";
import UpNextArrowSVG from "../../assets/images/up-next-arrow.svg?react";
import LogoSVG from "../../assets/images/logo";

export const CaseStudyDetailFooter = ({ item }) => {
  return (
    <CaseStudyDetailFooterWrapper>
      <CaseStudyDetailFooterContainer>
        <CaseStudyDetailFooterUpNext>
          Up next <UpNextArrowSVG />
        </CaseStudyDetailFooterUpNext>

        <CaseStudyDetailContent></CaseStudyDetailContent>

        <LogoSVG />
      </CaseStudyDetailFooterContainer>
    </CaseStudyDetailFooterWrapper>
  );
};
