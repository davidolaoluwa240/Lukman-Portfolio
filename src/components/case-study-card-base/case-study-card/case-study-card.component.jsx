// Styles
import {
  CaseStudyCardCaption,
  CaseStudyCardWrapper,
  CaseStudyCardLink,
} from "./case-study-card.styles";

export const CaseStudyCard = ({
  img,
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
      <img src={img} alt={title} />
      <CaseStudyCardCaption>
        <p>{role}</p>
        <p>{title}</p>
      </CaseStudyCardCaption>
    </CaseStudyCardWrapper>
  );
};
