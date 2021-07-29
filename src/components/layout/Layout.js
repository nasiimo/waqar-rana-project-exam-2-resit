import React from "react";
import Browse from "../browse/Browse";
import Checkout from "../checkout/Checkout";
import Cart from "../cart/Cart";
import LandingPage from "../landingPage/LandingPage";
import GameDetail from "../browse/GameDetail";
import Navigation from "./Navigation";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { isLoggedIn } from "../../auth/auth.service";

function Layout() {
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());
  return (
    <>
      <Router>
        <Navigation show={loggedIn} />
        <Switch>
          <Route exact path="/browse" component={Browse} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/" component={LandingPage} />
          <Route path="/detail/:id" component={GameDetail} />
        </Switch>
      </Router>
    </>
  );
}

export default Layout;
