import React from "react";
import Banner from "../layout/Banner";
import GetGames from "./GetGames";

function Browse() {
  return (
    <>
      <Banner
        color="white"
        paddingTop="100px"
        minHeight="50vh"
        heading="Browse our games"
        backgroundColor="#410275"
        textAlign="center"
      />

      <GetGames />
    </>
  );
}

export default Browse;
