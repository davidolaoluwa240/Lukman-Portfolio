// Modules
import React from "react";

// Hooks
import { useStaticData } from "../../hooks";

// Components
import { BookshelfBooksList } from "../";

// Styles
import { BookshelfBooksContainer } from "./bookshelf-books.styles";

export const BookshelfBooks = () => {
  const { BOOKSHELF_BOOKS_ITEMS: bookshelfBooksItems } = useStaticData();

  return (
    <BookshelfBooksContainer>
      <BookshelfBooksList items={bookshelfBooksItems} />
    </BookshelfBooksContainer>
  );
};
