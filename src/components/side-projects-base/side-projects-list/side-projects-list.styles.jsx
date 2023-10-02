// Modules
import styled from "styled-components";

// Components
import { SideProjectsCardWrapper } from "../side-projects-card/side-projects-card.styles";

export const SideProjectsListWrapper = styled.ul`
  ${SideProjectsCardWrapper}:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
