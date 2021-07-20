import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import LandingPage from "../landingPage/LandingPage";
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
            <NavLink to="/checkout" className="nav-link">
              Checkout
            </NavLink>
            <NavLink to="/cart" className="nav-link">
              Cart
            </NavLink>
            <NavLink to="/landingPage" className="nav-link">
              Logout
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <Container> */}
      <Switch>
        <Route exact path="/browse" component={Browse} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/" component={LandingPage} />
      </Switch>
      {/* </Container> */}
    </Router>
  );
}

export default Navigation;
