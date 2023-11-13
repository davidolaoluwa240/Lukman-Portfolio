// Modules
import styled from "styled-components";

// Components
import { Link } from "react-router-dom";

export const CaseStudyCardWrapper = styled.figure`
  min-height: 517px;
  background: ${({ $background }) => $background};
  padding-top: 3rem;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const CaseStudyCardCaption = styled.figcaption`
  margin-top: 1.96rem;
  padding: 2.3rem 2.4rem 2.45rem 2.4rem;

  p:first-of-type {
    margin-bottom: 0.45rem;
    font-size: 1.6rem;
    line-height: 24px;
    color: rgba(33, 33, 33, 0.7);
  }

  p:last-of-type {
    color: var(--primary-color);
    font-size: 2rem;
    font-weight: 600;
    line-height: 28px;
  }
`;

export const CaseStudyCardLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
`;
