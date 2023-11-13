// Modules
import React from "react";

// Hooks
import { useStaticData } from "../../../hooks";

// Components
import { Fragment } from "react";
import { CaseStudyDetailHero } from "../../../components";

export const AsusuCaseStudy = () => {
  const { CASE_STUDY_DETAIL_HERO_ITEMS: caseStudyDetailHeroItems } =
    useStaticData();

  return (
    <Fragment>
      <CaseStudyDetailHero {...caseStudyDetailHeroItems.asusu} />
    </Fragment>
  );
};
