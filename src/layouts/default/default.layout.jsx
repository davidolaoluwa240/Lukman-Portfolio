// Components
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/navbar/navbar.component";
import { Footer } from "../../components/footer/footer.component";

export const DefaultLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </Fragment>
  );
};
