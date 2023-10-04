// Modules
import React from "react";

// Components
import { Link } from "react-router-dom";
import NavbarLogo from "../../assets/images/logo.svg?react";

// Styles
import {
  NavbarWrapper,
  NavbarContainer,
  NavbarList,
  NavbarItem,
  NavbarLink,
} from "./navbar.styles";

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <Link to="/">
          <NavbarLogo aria-label="Lukman Portfolio Logo" />
        </Link>

        <NavbarList>
          <NavbarItem>
            <NavbarLink to="/">Home</NavbarLink>
          </NavbarItem>

          <NavbarItem>
            <NavbarLink to="/about">About</NavbarLink>
          </NavbarItem>

          <NavbarItem>
            <NavbarLink to="/bookshelf">Bookshelf</NavbarLink>
          </NavbarItem>

          <NavbarItem>
            <NavbarLink
              as="a"
              target="_blank"
              href="https://drive.google.com/file/d/13U4t4lr6T_ydrKNZ-zohZ2B950oyudqh/view?usp=sharing"
            >
              Resume
            </NavbarLink>
          </NavbarItem>
        </NavbarList>
      </NavbarContainer>
    </NavbarWrapper>
  );
};
