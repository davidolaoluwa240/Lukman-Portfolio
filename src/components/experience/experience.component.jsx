// Hooks
import { useStaticData } from "../../hooks";

// Components
import { SectionGroup } from "../section-group/section-group.component";
import { ExperienceList } from "./experience-list/experience-list.component";

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
