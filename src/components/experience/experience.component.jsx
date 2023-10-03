// Modules
import React from "react";

// Hooks
import { useStaticData } from "../../hooks";

// Components
import { SectionGroup, ExperienceList } from "../";

// Styles
import { ExperienceWrapper } from "./experience.styles";

export const Experience = () => {
  const { EXPERIENCES_ITEMS: experiencesItems } = useStaticData();

  return (
    <ExperienceWrapper>
      <SectionGroup name="Experience">
        <ExperienceList items={experiencesItems} />
      </SectionGroup>
    </ExperienceWrapper>
  );
};
