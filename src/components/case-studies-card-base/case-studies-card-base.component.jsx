// Modules
import React from "react";

// Hooks
import { useStaticData } from "../../hooks";

// Components
import { CaseStudiesCardList } from "../";

// Styles
import {
  CaseStudiesCardBaseContainer,
  CaseStudiesCardBaseHeading,
} from "./case-studies-card-base.styles";

export const CaseStudiesCardBase = () => {
  const { CASE_STUDIES_ITEMS: caseStudiesItems } = useStaticData();

  return (
    <CaseStudiesCardBaseContainer>
      <CaseStudiesCardBaseHeading>Case studies</CaseStudiesCardBaseHeading>
      <CaseStudiesCardList items={caseStudiesItems} />
    </CaseStudiesCardBaseContainer>
  );
};
