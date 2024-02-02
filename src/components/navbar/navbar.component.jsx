// Components
import { Link } from "react-router-dom";

// Images
import NavbarLogo from "../../assets/images/logo.svg?react";

// Styles
import {
  NavbarWrapper,
  NavbarContainer,
  NavbarList,
  NavbarItem,
  NavbarLink,
} from "./navbar.styles";

export const Navbar = ({ color }) => {
  return (
    <NavbarWrapper $color={color}>
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
              href="https://drive.google.com/file/d/1nvaIwkgkc60Prjujm02gI_DAfAD0WVl-/view"
            >
              Resume
            </NavbarLink>
          </NavbarItem>
        </NavbarList>
      </NavbarContainer>
    </NavbarWrapper>
  );
};
