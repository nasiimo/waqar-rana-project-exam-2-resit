import React from "react";
import Banner from "../layout/Banner";
import CheckoutForm from "../forms/CheckoutForm";
import Container from "react-bootstrap/Container";

function Checkout() {
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
        <CheckoutForm />
      </Container>
    </>
  );
}

export default Checkout;
