// Modules
import React from "react";

// Styles
import {
  BookshelfHeroContainer,
  BookshelfHeading,
} from "./bookshelf-hero.styles";

export const BookshelfHero = () => {
  return (
    <BookshelfHeroContainer>
      <BookshelfHeading>
        These books left an indelible mark on my journey through life, offering
        both knowledge and solace.
      </BookshelfHeading>

      <p>
        My favourite quote “Everything can be taken from a man but one thing:
        the last of the human freedoms—to choose one’s attitude in any given set
        of circumstances, to choose one’s own way.”― Viktor E. Frankl, Man's
        Search for Meaning
      </p>
    </BookshelfHeroContainer>
  );
};
