// Modules
import React from "react";

// Hooks
import { useNavigate } from "react-router-dom";

// Components
import { AiOutlineArrowUp } from "react-icons/ai";
import { CaseStudyCard } from "../";
import { Container as CaseStudyDetailFooterContainer } from "../../assets/styles/common.styles";
import UpNextArrowSVG from "../../assets/images/up-next-arrow.svg?react";

// Styles
import {
  CaseStudyDetailFooterWrapper,
  CaseStudyDetailFooterUpNext,
  CaseStudyDetailFooterContent,
  CaseStudyDetailFooterLogo,
  CaseStudyDetailFooterMoveToTopArrow,
} from "./case-study-detail-footer.styles";

export const CaseStudyDetailFooter = ({ item }) => {
  const navigate = useNavigate();

  /**
   * Handle Navigate To Homepage
   */
  const handleNavigateToHome = () => navigate("/");

  /**
   * Handle Move To Top Of The Page
   */
  const handleMoveToTop = () =>
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

  return (
    <CaseStudyDetailFooterWrapper>
      <CaseStudyDetailFooterContainer>
        <CaseStudyDetailFooterUpNext>
          Up next <UpNextArrowSVG />
        </CaseStudyDetailFooterUpNext>

        <CaseStudyDetailFooterContent>
          <CaseStudyCard {...item} />
        </CaseStudyDetailFooterContent>

        <CaseStudyDetailFooterLogo
          aria-label="Lukman Portfolio Logo"
          onClick={handleNavigateToHome}
        />
      </CaseStudyDetailFooterContainer>

      <CaseStudyDetailFooterMoveToTopArrow onClick={handleMoveToTop}>
        <AiOutlineArrowUp arial-label="Move to top" />
      </CaseStudyDetailFooterMoveToTopArrow>
    </CaseStudyDetailFooterWrapper>
  );
};
