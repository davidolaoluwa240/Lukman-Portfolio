// Modules
import React from "react";

// Hooks
import { useStaticData } from "../../../hooks";

// Components
import { Fragment } from "react";
import {
  CaseStudyDetailHero,
  CaseStudyDetailFooter,
  QuoteBox,
} from "../../../components";
import {
  CaseStudyDetail,
  Container as CaseStudyDetailContainer,
} from "../../../assets/styles/common.styles";

export const AsusuCaseStudy = () => {
  const {
    CASE_STUDY_DETAIL_HERO_ITEMS: caseStudyDetailHeroItems,
    CASE_STUDY_ITEMS: caseStudyItems,
  } = useStaticData();

  return (
    <Fragment>
      <CaseStudyDetailHero {...caseStudyDetailHeroItems.asusu} />
      <CaseStudyDetailContainer></CaseStudyDetailContainer>
      <CaseStudyDetail>
        <QuoteBox
          className="mt-xl is-bg-accent-200"
          quote={`Over the years, I've had the pleasure of collaborating with Lukman on several exhilarating projects. Among the multitude of exceptional designers I've worked with in various agencies and software companies, his work consistently shines and remains at the pinnacle. The delivery of assets and communication is consistently outstanding, while his design systems exude professionalism and provide developers with a delightful experience."`}
          citeName="Bardeson Lucky"
          citeRole="CTO @ asusu"
        />
      </CaseStudyDetail>
      <CaseStudyDetailFooter item={caseStudyItems[1].cards[1]} />
    </Fragment>
  );
};
