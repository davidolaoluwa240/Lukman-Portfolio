// Modules
import React from "react";

// Components
import { CaseStudiesCard } from "../../";

// Styles
import {
  CaseStudiesCardListWrapper,
  CaseStudiesCardListGroup,
} from "./case-studies-card-list.styles";

export const CaseStudiesCardList = ({ items }) => {
  // Rendered Case Studies Card Items
  const renderedCaseStudiesCardItems = items.map(
    ({ id, applyMargin, cards }) => (
      <CaseStudiesCardListGroup key={id} $applyMargin={applyMargin}>
        {cards.map(({ id, ...restCard }) => (
          <CaseStudiesCard key={id} id={id} {...restCard} />
        ))}
      </CaseStudiesCardListGroup>
    )
  );

  return (
    <CaseStudiesCardListWrapper>
      {renderedCaseStudiesCardItems}
    </CaseStudiesCardListWrapper>
  );
};
