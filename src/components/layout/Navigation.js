import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import Browse from "../browse/Browse";
import Cart from "../cart/Cart";
import Checkout from "../checkout/checkout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

function Navigation() {
  return (
    <Router>
      {/*  <Navbar expand="lg">
        <NavLink to="/" exact>
          <Navbar.Brand> Bits & Bots</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to="/" exact className="nav-link">
              Home
            </NavLink>
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
      {/* <Container> */}
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/login" component={Login} /> */}
      </Switch>
      {/* </Container> */}
    </Router>
  );
}

export default Navigation;
