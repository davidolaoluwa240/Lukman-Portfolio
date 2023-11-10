// Modules
import React from "react";

// Components
import { Container as QuoteBoxContainer } from "../../assets/styles/common.styles";
import QuoteSVG from "../../assets/images/quote.svg?react";

// Styles
import {
  QuoteBoxWrapper,
  QuoteBoxQuote,
  QuoteBoxFooter,
} from "./quote-box.styles";

export const QuoteBox = ({ quote, citeName, citeRole, ...restProp }) => {
  return (
    <QuoteBoxWrapper {...restProp}>
      <QuoteBoxContainer as="article">
        <QuoteSVG />

        <div>
          <QuoteBoxQuote>{quote}</QuoteBoxQuote>

          <QuoteBoxFooter>
            <p>{citeName}</p>
            <p>{citeRole}</p>
          </QuoteBoxFooter>
        </div>
      </QuoteBoxContainer>
    </QuoteBoxWrapper>
  );
};
