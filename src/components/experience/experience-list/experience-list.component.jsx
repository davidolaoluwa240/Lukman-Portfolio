// Modules
import React from "react";

// Components
import { ExperienceCard } from "../../";

// Styles
import { ExperienceListWrapper } from "./experience-list.styles";

export const ExperienceList = ({ items }) => {
  // Experience Card Items
  const experienceCardItems = items.map(({ id, ...restItem }) => (
    <ExperienceCard key={id} {...restItem} />
  ));

  return <ExperienceListWrapper>{experienceCardItems}</ExperienceListWrapper>;
};
