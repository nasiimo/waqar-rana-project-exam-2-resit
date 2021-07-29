/*  function getGames() {
    axios({
      url: "https://api.igdb.com/v4/genres",
      method: "POST",
      headers: {
        crossDomain: true,
        Accept: "application/json",
        "Client-ID": "e3l9ba3mly88sp4zahv6tu1qf3fp9v",
        Authorization: "Bearer tfukvraqvvpmw12c1g44hwxhjqbw6e",
      },
      data: "fields *; fields id,name; genres; limit 5;",
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  } */ //The json below is from a general query to fetch 5 genres
export var genres = [
  {
    id: 4,
    name: "Fighting",
  },
  {
    id: 5,
    name: "Shooter",
  },
  {
    id: 7,
    name: "Music",
  },
  {
    id: 8,
    name: "Platform",
  },
  {
    id: 9,
    name: "Puzzle",
  },
];
