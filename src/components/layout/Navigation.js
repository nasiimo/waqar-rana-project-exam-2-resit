import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

function Navigation(props) {
  if (props.show) {
    return (
      <Navbar expand="lg">
        <NavLink to="/browse" exact>
          <Navbar.Brand> Bits & Bots</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to="/browse" exact className="nav-link">
              Browse
            </NavLink>
            {/*  <NavLink to="/checkout" className="nav-link">
              Checkout
            </NavLink> */}
            <NavLink to="/cart" className="nav-link">
              Cart
            </NavLink>
            <NavLink onClick={logOut} to="/landingPage" className="nav-link">
              Logout
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  } else {
    return <div></div>;
  }
}

export default Navigation;

function logOut() {
  localStorage.clear();
  sessionStorage.clear();
  window.location = "/";
}
