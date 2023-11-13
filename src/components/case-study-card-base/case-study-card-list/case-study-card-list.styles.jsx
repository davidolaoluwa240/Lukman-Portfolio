// Modules
import styled from "styled-components";

// Components
import { CaseStudyCardWrapper } from "../case-study-card/case-study-card.styles";

export const CaseStudyCardListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2.8rem;
`;

export const CaseStudyCardListGroup = styled.div`
  margin-top: ${({ $applyMargin }) => $applyMargin && "6.4rem"};

  ${CaseStudyCardWrapper}:not(:last-child) {
    margin-bottom: 2.9rem;
  }
`;
