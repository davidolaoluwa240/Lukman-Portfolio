// Components
import { CaseStudyCard } from "../case-study-card/case-study-card.component";

// Styles
import {
  CaseStudyCardListWrapper,
  CaseStudyCardListGroup,
} from "./case-study-card-list.styles";

export const CaseStudyCardList = ({ items }) => {
  // Rendered Case Study Card Items
  const renderedCaseStudyCardItems = items.map(({ id, applyMargin, cards }) => (
    <CaseStudyCardListGroup key={id} $applyMargin={applyMargin}>
      {cards.map(({ id, ...restCard }) => (
        <CaseStudyCard key={id} id={id} {...restCard} />
      ))}
    </CaseStudyCardListGroup>
  ));

  return (
    <CaseStudyCardListWrapper>
      {renderedCaseStudyCardItems}
    </CaseStudyCardListWrapper>
  );
};
