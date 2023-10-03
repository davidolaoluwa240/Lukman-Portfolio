// Modules
import React from "react";

// Styles
import { BookshelfBooksCardWrapper } from "./bookshelf-books-card.styles";

export const BookshelfBooksCard = ({ img: Img, name }) => {
  return (
    <BookshelfBooksCardWrapper>
      <Img aria-label={name} />
    </BookshelfBooksCardWrapper>
  );
};
