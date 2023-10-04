// Modules
import React from "react";

// Components
import { Fragment } from "react";
import { BookshelfHero, BookshelfBooks } from "../../components";

export const Bookshelf = () => {
  return (
    <Fragment>
      <BookshelfHero />
      <BookshelfBooks />
    </Fragment>
  );
};
