// Modules
import styled from "styled-components";

// Components
import { ExperienceCardWrapper } from "../experience-card/experience-card.styles";

export const ExperienceListWrapper = styled.ul`
  ${ExperienceCardWrapper}:not(:last-child) {
    margin-bottom: 4.8rem;
  }
`;
