// Hooks
import { useStaticData } from "../../hooks";

// Components
import { CaseStudyCardList } from "./case-study-card-list/case-study-card-list.component";

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
