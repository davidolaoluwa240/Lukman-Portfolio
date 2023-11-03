// Modules
import React from "react";

// Components
import { ExperiencePreviewCard } from "../";

// Styles
import {
  ExperiencePreviewWrapper,
  ExperiencePreviewGroup,
} from "./experience-preview.styles";

export const ExperiencePreview = ({ expertise, role, year, platforms }) => {
  return (
    <ExperiencePreviewWrapper>
      <ExperiencePreviewGroup>
        <ExperiencePreviewCard heading="Expertise" content={expertise} />
        <ExperiencePreviewCard heading="Platforms" content={platforms} />
        <ExperiencePreviewCard heading="Role" content={role} />
        <ExperiencePreviewCard heading="Year" content={year} />
      </ExperiencePreviewGroup>
    </ExperiencePreviewWrapper>
  );
};
