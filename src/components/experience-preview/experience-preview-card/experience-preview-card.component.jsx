// Modules
import React from "react";

// Styles
import { ExperiencePreviewCardWrapper } from "./experience-preview-card.styles";

export const ExperiencePreviewCard = ({ heading, content }) => {
  return (
    <ExperiencePreviewCardWrapper>
      <p>{heading}</p>
      <p>{content}</p>
    </ExperiencePreviewCardWrapper>
  );
};
