import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

export default (props) => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand
          className="nav-brand"
          onClick={(_) => {
            props.setPage(0);
          }}
        >
          JP Cafe
        </NavbarBrand>
        <Navbar>
          <NavLink className="nav-text" href="">Home</NavLink>
          <NavLink className="nav-text" href="#About">About</NavLink>
          <NavLink className="nav-text" href="#Contact">Contact</NavLink>
        </Navbar>
      </Navbar>
    </div>
  );
};
