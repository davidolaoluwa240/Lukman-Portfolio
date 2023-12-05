// Components
import { ExperienceCard } from "../experience-card/experience-card.component";

// Styles
import { ExperienceListWrapper } from "./experience-list.styles";

export const ExperienceList = ({ items }) => {
  // Experience Card Items
  const experienceCardItems = items.map(({ id, ...restItem }) => (
    <ExperienceCard key={id} {...restItem} />
  ));

  return <ExperienceListWrapper>{experienceCardItems}</ExperienceListWrapper>;
};
