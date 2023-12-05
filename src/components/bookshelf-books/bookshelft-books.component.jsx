// Hooks
import { useStaticData } from "../../hooks";

// Components
import { BookshelfBooksList } from "./bookshelf-books-list/bookshelf-books-list.component";

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
