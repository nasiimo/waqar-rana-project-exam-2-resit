import axios from "axios";

export default {
  getData: () =>
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
      }),
};
/* axios({
  url: "https://api.igdb.com/v4/company_websites",
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Client-ID: Client ID',
      'Authorization: Bearer access_token',
  },
  data: "fields category,checksum,trusted,url;"
})
  .then(response => {
      console.log(response.data);
  })
  .catch(err => {
      console.error(err);
  }); */
