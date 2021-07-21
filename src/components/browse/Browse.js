import React from "react";
import Banner from "../layout/Banner";
import { allGames } from "../../json/games";
import { getGamesInPlatformGenre } from "../../json/games";
import RenderGames from "../../json/games";
import RenderGenres from "../../json/genres";

export default function Browse() {
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
      {/* <RenderGames /> */}
      <RenderGenres />
    </>
  );
}
