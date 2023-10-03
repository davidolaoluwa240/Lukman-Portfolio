// Modules
import React from "react";

// Styles
import { ExperienceCardWrapper } from "./experience-card.styles";

export const ExperienceCard = ({ name, role, dateRange, to }) => {
  return (
    <ExperienceCardWrapper>
      <a target="_blank" href={to}>
        {name}
      </a>
      <p>{role}</p>
      <p>{dateRange}</p>
    </ExperienceCardWrapper>
  );
};
