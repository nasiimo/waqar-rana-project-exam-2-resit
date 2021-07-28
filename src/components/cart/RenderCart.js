import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import React from "react";
import getExistingFavs from "./getCartItems";
import gamingControl from "../../img/gamingControl3.jpeg";
import Payments from "../../img/payments.jpeg";
import { useState } from "react";
import { saveFavs } from "../localStorage/localStorage";

function RenderCart() {
  const [favourites, setFavs] = useState(getExistingFavs());
  function removeFromCart(id) {
    const filteredFavourites = favourites.filter(
      (favourite) => favourite.id !== id
    );
    saveFavs(filteredFavourites);
    setFavs(filteredFavourites);
  }

  const [disabled, setDisabled] = useState(false);
  function toCheckout() {
    if (favourites.length === 0) {
      setDisabled(true);
    } else {
      window.location = "/checkout";
    }
  }

  function checkCart() {
    if (favourites.length === 0) {
      //display "cart is empty"
    } else {
      //load all games from ls
    }
  }
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={8}>
            <div className="cart-container">
              {favourites.map((favourite) => {
                return (
                  <div className="cart-item-container">
                    <div className="cart-item-img">
                      <img src={gamingControl} />
                    </div>
                    <div className="cart-item-info">
                      <h5>{favourite.name}</h5>
                      <button
                        class="remove"
                        onClick={() => removeFromCart(favourite.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
          <Col xs={12} md={12} lg={4}>
            <div className="toCheckout">
              <h5>Proceed to checkout</h5>
              <button
                className="to-checkout"
                disabled={disabled}
                onClick={toCheckout}
                id="tabFormButton"
              >
                Checkout
              </button>
              <img alt="payment-icons" src={Payments} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RenderCart;
