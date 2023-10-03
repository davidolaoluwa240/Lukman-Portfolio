// Modules
import React from "react";

// Components
import { Fragment } from "react";
import { BookshelfHero, BookshelfBooks } from "../../components";

const Bookshelf = () => {
  return (
    <Fragment>
      <BookshelfHero />
      <BookshelfBooks />
    </Fragment>
  );
};

export default Bookshelf;
