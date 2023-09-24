// Modules
import React from "react";

// Images
// import

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
        {/* <NavbarBrand aria-label=""/> */}

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
            <NavbarLink to="/resume">Resume</NavbarLink>
          </NavbarItem>
        </NavbarList>
      </NavbarContainer>
    </NavbarWrapper>
  );
};
