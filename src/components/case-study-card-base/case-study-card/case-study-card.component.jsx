// Styles
import {
  CaseStudyCardCaption,
  CaseStudyCardWrapper,
  CaseStudyCardLink,
} from "./case-study-card.styles";

export const CaseStudyCard = ({
  img: CaseStudyCardImage,
  role,
  title,
  bgColor,
  to,
  id,
  ...restProps
}) => {
  return (
    <CaseStudyCardWrapper $background={bgColor} {...restProps}>
      <CaseStudyCardLink to={`${to}/${id}`} />
      <CaseStudyCardImage aria-label={title} />
      <CaseStudyCardCaption>
        <p>{role}</p>
        <p>{title}</p>
      </CaseStudyCardCaption>
    </CaseStudyCardWrapper>
  );
};
