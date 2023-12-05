// Components
import { ExperiencePreviewCard } from "./experience-preview-card/experience-preview-card.component";

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
