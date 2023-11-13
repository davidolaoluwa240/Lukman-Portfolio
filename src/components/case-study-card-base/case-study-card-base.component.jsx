// Modules
import React from "react";

// Hooks
import { useStaticData } from "../../hooks";

// Components
import { CaseStudyCardList } from "..";

// Styles
import {
  CaseStudyCardBaseContainer,
  CaseStudyCardBaseHeading,
} from "./case-study-card-base.styles";

export const CaseStudyCardBase = () => {
  const { CASE_STUDY_ITEMS: caseStudyItems } = useStaticData();

  return (
    <CaseStudyCardBaseContainer>
      <CaseStudyCardBaseHeading>Case studies</CaseStudyCardBaseHeading>
      <CaseStudyCardList items={caseStudyItems} />
    </CaseStudyCardBaseContainer>
  );
};
