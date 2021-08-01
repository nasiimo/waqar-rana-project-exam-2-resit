import React from "react";
import Banner from "../layout/Banner";
import CheckoutForm from "../forms/CheckoutForm";
import Container from "react-bootstrap/Container";
import { getExistingGames } from "../localStorage/localStorage";

function Checkout() {
  const numberOfGamesInCart = getExistingGames();

  return (
    <>
      <Banner
        color="white"
        paddingTop="100px"
        minHeight="15vh"
        heading="Checkout"
        backgroundColor="#410275"
        textAlign="center"
      />
      <Container>
        <p>Total number of games in cart: {numberOfGamesInCart.length}</p>
        <CheckoutForm />
      </Container>
    </>
  );
}

export default Checkout;
