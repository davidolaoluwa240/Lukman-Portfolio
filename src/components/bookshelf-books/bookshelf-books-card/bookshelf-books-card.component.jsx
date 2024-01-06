// Styles
import { BookshelfBooksCardWrapper } from "./bookshelf-books-card.styles";

export const BookshelfBooksCard = ({ img, name }) => {
  return (
    <BookshelfBooksCardWrapper>
      <img src={img} alt={name} />
    </BookshelfBooksCardWrapper>
  );
};
