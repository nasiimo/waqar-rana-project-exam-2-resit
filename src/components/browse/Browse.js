import React from "react";
import Banner from "../layout/Banner";
import axios from "axios";
/* import GetGames from "./GetGames"; */

function getGames() {
  axios({
    url: "https://api.igdb.com/v4/games",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "e3l9ba3mly88sp4zahv6tu1qf3fp9v",
      Authorization: "Bearer tfukvraqvvpmw12c1g44hwxhjqbw6e",
    },
    data: "fields name,genres.name,slug; where screenshots != null;",
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.error(err);
    });
}

export default function Browse() {
  function getGames() {
    axios({
      url: "https://api.igdb.com/v4/games",
      method: "POST",
      headers: {
        crossDomain: true,
        Accept: "application/json",
        "Client-ID": "e3l9ba3mly88sp4zahv6tu1qf3fp9v",
        Authorization: "Bearer tfukvraqvvpmw12c1g44hwxhjqbw6e",
      },
      data: "fields name,genres.name,slug; where screenshots != null;",
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }
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
      <button onClick={getGames} id="tabFormButton">
        Login
      </button>
    </>
  );
}
