// Modules
import React from "react";

// Components
import { Fragment } from "react";
import { BookshelfHero, BookshelfBooks } from "../../components";

// Styles
import { BookshelfWrapper } from "./bookshelf.styles";

export const Bookshelf = () => {
  return (
    <BookshelfWrapper>
      <BookshelfHero />
      <BookshelfBooks />
    </BookshelfWrapper>
  );
};
