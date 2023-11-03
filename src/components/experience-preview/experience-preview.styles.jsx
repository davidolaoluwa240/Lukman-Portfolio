// Modules
import styled from "styled-components";

// Components
import { ExperiencePreviewCardWrapper } from "./experience-preview-card/experience-preview-card.styles";

export const ExperiencePreviewWrapper = styled.div`
  margin-top: -3%;
  display: flex;
  justify-content: center;

  ${ExperiencePreviewCardWrapper}:not(:last-child) {
    margin-right: 2.4rem;
  }
`;

export const ExperiencePreviewGroup = styled.div`
  display: inline-flex;
  min-width: 60%;
  justify-content: space-between;
  align-items: center;
  background: var(--white-color);
  padding: 1.3rem 2.4rem 4.1rem 2.4rem;
`;
