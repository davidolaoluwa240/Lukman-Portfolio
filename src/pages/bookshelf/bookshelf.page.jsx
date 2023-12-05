// Components
import { BookshelfBooks } from "../../components/bookshelf-books/bookshelft-books.component";
import { BookshelfHero } from "../../components/bookshelf-hero/bookshelf-hero.component";

// Styles
import { BookshelfWrapper } from "./bookshelf.styles";

const Bookshelf = () => {
  return (
    <BookshelfWrapper>
      <BookshelfHero />
      <BookshelfBooks />
    </BookshelfWrapper>
  );
};

export default Bookshelf;
