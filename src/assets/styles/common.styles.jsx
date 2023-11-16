// Modules
import styled from "styled-components";

export const Container = styled.div`
  max-width: 768px;
  height: 100%;
  margin: 0 auto;
`;

export const PrimaryHeading = styled.h1`
  font-family: Cirka;
  font-size: 3.4rem;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -0.34px;
`;

export const SecondaryHeading = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: rgba(33, 33, 33, 0.5);
  font-family: inherit;
  line-height: inherit;
`;

export const CaseStudyDetail = styled.main`
  margin-top: 9.6rem;

  section:not(:last-of-type) {
    margin-bottom: 4rem;
  }

  h2 {
    font-feature-settings: "clig" off, "liga" off;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 40.8px;
    margin-bottom: 0.5rem;
  }

  p,
  li,
  h3 {
    color: rgba(33, 33, 33, 0.7);
    font: 300 1.8rem/170% Studio Feixen Sans TRIAL, serif;
    font-feature-settings: "clig" off, "liga" off;
  }

  ul {
    list-style-type: initial;
  }

  ol {
    list-style-type: decimal;
  }

  .ml-sm {
    margin-left: 0.7rem;
  }

  .ml-md {
    margin-left: 2.4rem;
  }

  .mb-sm {
    margin-bottom: 0.7rem;
  }

  .mb-md {
    margin-bottom: 2.4rem;
  }

  .mb-l {
    margin-bottom: 4rem;
  }

  .mb-xl {
    margin-top: 9.6rem;
  }

  .mt-md {
    margin-top: 2.4rem;
  }

  .mt-l {
    margin-top: 4rem;
  }

  .mt-xl {
    margin-top: 9.6rem;
  }

  .list-marker-primary {
    &::marker {
      color: var(--primary-color);
      font-size: 2rem;
      font-weight: 800;
    }
  }

  .heading-underline,
  .rect-underline-left {
    position: relative;
    display: inline-block;
    box-sizing: content-box;
    padding: 0 0.6rem 0 0.3rem;
  }

  .heading-underline::after,
  .rect-underline-left::after {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    width: 100%;
    display: block;
    height: 12px;
    background: var(--heading-underline-color);
  }

  .rect-underline-left {
    padding: 0.3rem 0 0.6rem 0;
    max-width: 96%;
  }

  .rect-underline-left::after {
    width: 12px;
    height: 100%;
    left: -13px;
    z-index: 2;
  }
`;
