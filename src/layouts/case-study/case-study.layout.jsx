// Components
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/navbar/navbar.component";

export const CaseStudyLayout = () => {
  return (
    <Fragment>
      <Navbar color="#D7EDFF" />
      <Outlet />
    </Fragment>
  );
};
