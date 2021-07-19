import React from "react";
import Browse from "../browse/Browse";
import Checkout from "../checkout/checkout";
import Cart from "../cart/Cart";
import LandingPage from "../landingPage/LandingPage";

function Layout() {
  return (
    <Router>
      {/* HERE THE IF CONDITION OF IS LOGGED/!IF LOGGED IN APPLIES */}
      <Switch>
        <Route exact path="/browse" component={Browse} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default Layout;
