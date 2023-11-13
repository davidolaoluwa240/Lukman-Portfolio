// Modules
import React from "react";

// Components
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components";

export const CaseStudyLayout = () => {
  return (
    <Fragment>
      <Navbar color="#D7EDFF" />
      <Outlet />
    </Fragment>
  );
};
