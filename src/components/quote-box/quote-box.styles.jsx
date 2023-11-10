// Modules
import styled from "styled-components";

// Components
import { Container } from "../../assets/styles/common.styles";

export const QuoteBoxWrapper = styled.section`
  background-color: var(--secondary-color);
  padding: 9.6rem 0;

  ${Container} {
    display: flex;
    line-height: 42.667px;

    svg {
      width: 64px;
      height: 53.132px;
      margin-right: 6.4rem;
      flex-basis: 54%;
    }
  }
`;

export const QuoteBoxQuote = styled.blockquote`
  color: var(--dark-gray);
  font-family: Studio Feixen Sans TRIAL;
  font-size: 2.4rem;
  font-style: normal;
`;

export const QuoteBoxFooter = styled.footer`
  margin-top: 3.2rem;

  p {
    font-size: 2rem;
    font-style: normal;
  }

  p:first-child {
    color: var(--primary-color);
    font-weight: 500;
  }

  p:last-child {
    color: rgba(33, 33, 33, 0.5);
  }
`;
