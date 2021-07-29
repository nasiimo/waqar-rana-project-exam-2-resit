import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { getExistingFavs } from "../localStorage/localStorage";
import Payments from "../../img/payments.jpeg";
import { useState } from "react";
import CartContainer from "./CartContainer";

function RenderCart() {
  const [favourites, setFavs] = useState(getExistingFavs());

  const [disabled, setDisabled] = useState(false);
  function toCheckout() {
    if (favourites.length === 0) {
      setDisabled(true);
    } else {
      window.location = "/checkout";
    }
  }

  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={8}>
            <CartContainer />
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
