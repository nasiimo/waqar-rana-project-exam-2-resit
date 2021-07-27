import React from "react";
import Banner from "../layout/Banner";
import RenderCart from "./RenderCart";

function Cart() {
  return (
    <>
      <Banner
        color="white"
        paddingTop="100px"
        minHeight="30vh"
        heading="Cart"
        backgroundColor="#410275"
        textAlign="center"
      />

      <RenderCart />
    </>
  );
}

export default Cart;
