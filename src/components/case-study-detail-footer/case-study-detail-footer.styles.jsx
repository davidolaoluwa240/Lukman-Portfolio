// Modules
import styled from "styled-components";

// Components
import { CaseStudyCardCaption } from "../case-study-card-base/case-study-card/case-study-card.styles";
import LogoSVG from "../../assets/images/logo.svg?react";

export const CaseStudyDetailFooterUpNext = styled.p`
  margin-bottom: 6.4rem;

  svg {
    margin-left: 0.8rem;
  }
`;

export const CaseStudyDetailFooterWrapper = styled.footer`
  background: var(--primary-color);
  padding: 5.6rem 0;
  position: relative;

  ${CaseStudyDetailFooterUpNext} {
    color: var(--white-color);
    font-family: Studio Feixen Edgy TRIAL, serif;
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 36px;
  }
`;

export const CaseStudyDetailFooterContent = styled.div`
  max-width: 370px;
  margin: 0 auto;

  ${CaseStudyCardCaption} {
    p:first-child {
      line-height: 27px;
    }
  }
`;

export const CaseStudyDetailFooterLogo = styled(LogoSVG)`
  display: block;
  margin: 6.4rem auto 0 auto;
  cursor: pointer;

  * {
    fill: rgba(238, 238, 238, 1);
  }
`;

export const CaseStudyDetailFooterMoveToTopArrow = styled.button`
  border: none;
  padding: 1.08rem;
  position: absolute;
  top: 8rem;
  right: 9.08rem;
  cursor: pointer;
  border-radius: 9999px;
  background: transparent;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: var(--white-color);

    svg {
      color: var(--primary-color);
    }
  }

  svg {
    font-size: 2.536rem;
    transition: color 0.3s ease-in-out;
    color: var(--white-color);
  }
`;
