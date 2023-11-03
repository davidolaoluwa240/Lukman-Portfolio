// Modules
import React from "react";

// Styles
import {
  CaseStudiesCardCaption,
  CaseStudiesCardWrapper,
  CaseStudiesCardLink,
} from "./case-studies-card.styles";

export const CaseStudiesCard = ({
  imageComponent: CaseStudiesCardImage,
  role,
  title,
  bgColor,
  to,
  id,
  ...restProps
}) => {
  return (
    <CaseStudiesCardWrapper $background={bgColor} {...restProps}>
      <CaseStudiesCardLink to={`${to}/${id}`} />
      <CaseStudiesCardImage aria-label={title} />
      <CaseStudiesCardCaption>
        <p>{role}</p>
        <p>{title}</p>
      </CaseStudiesCardCaption>
    </CaseStudiesCardWrapper>
  );
};
