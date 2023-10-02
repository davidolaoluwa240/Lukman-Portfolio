// Modules
import styled from "styled-components";

// Components
import { CaseStudiesCardWrapper } from "../case-studies-card/case-studies-card.styles";

export const CaseStudiesCardListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2.8rem;
`;

export const CaseStudiesCardListGroup = styled.div`
  margin-top: ${({ $applyMargin }) => $applyMargin && "6.4rem"};

  ${CaseStudiesCardWrapper}:not(:last-child) {
    margin-bottom: 2.9rem;
  }
`;
