import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/*  function getGames() {
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
  } */ //The json below is from a general query to fetch game objects
export var getGames = [
  {
    id: 54522,
    genres: [
      {
        id: 12,
        name: "Role-playing (RPG)",
      },
      {
        id: 32,
        name: "Indie",
      },
    ],
    name: "Gangs of Space",
    slug: "gangs-of-space",
  },
  {
    id: 24037,
    genres: [
      {
        id: 9,
        name: "Puzzle",
      },
      {
        id: 32,
        name: "Indie",
      },
    ],
    name: "Three Digits",
    slug: "three-digits",
  },
  {
    id: 68841,
    genres: [
      {
        id: 15,
        name: "Strategy",
      },
      {
        id: 16,
        name: "Turn-based strategy (TBS)",
      },
    ],
    name: "Captivus",
    slug: "captivus",
  },
  {
    id: 33284,
    genres: [
      {
        id: 32,
        name: "Indie",
      },
    ],
    name: "One way to exit",
    slug: "one-way-to-exit",
  },
  {
    id: 146815,
    genres: [
      {
        id: 9,
        name: "Puzzle",
      },
    ],
    name: "Parking Lot Maze",
    slug: "parking-lot-maze",
  },
  {
    id: 139538,
    genres: [
      {
        id: 32,
        name: "Indie",
      },
    ],
    name: "sun machine",
    slug: "sun-machine",
  },
  {
    id: 74857,
    genres: [
      {
        id: 8,
        name: "Platform",
      },
      {
        id: 9,
        name: "Puzzle",
      },
      {
        id: 12,
        name: "Role-playing (RPG)",
      },
      {
        id: 31,
        name: "Adventure",
      },
      {
        id: 32,
        name: "Indie",
      },
    ],
    name: "Transcend",
    slug: "transcend",
  },
  {
    id: 132972,
    genres: [
      {
        id: 25,
        name: "Hack and slash/Beat 'em up",
      },
    ],
    name: "One Piece: Pirate Warriors 4 - Deluxe Edition",
    slug: "one-piece-pirate-warriors-4-deluxe-edition",
  },
  {
    id: 63721,
    genres: [
      {
        id: 13,
        name: "Simulator",
      },
      {
        id: 14,
        name: "Sport",
      },
      {
        id: 32,
        name: "Indie",
      },
    ],
    name: "KENDAMVR - Virtual Reality Kendama",
    slug: "kendamvr-virtual-reality-kendama",
  },
  {
    id: 78193,
    genres: [
      {
        id: 10,
        name: "Racing",
      },
    ],
    name: "Test Drive",
    slug: "test-drive--1",
  },
];

/*  function getGamesInFightingGenre() {
    axios({
      url: "https://api.igdb.com/v4/games",
      method: "POST",
      headers: {
        crossDomain: true,
        Accept: "application/json",
        "Client-ID": "e3l9ba3mly88sp4zahv6tu1qf3fp9v",
        Authorization: "Bearer tfukvraqvvpmw12c1g44hwxhjqbw6e",
      },
      data: "fields name,genres.name,slug; where screenshots != null; where genres = 4;",
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  } */ //The json below is from a query to fetch games from the fighting genre
export var getGamesInFightingGenre = [
  {
    id: 48123,
    genres: [
      {
        id: 4,
        name: "Fighting",
      },
    ],
    name: "Joy Mech Fight",
    slug: "joy-mech-fight",
  },
  {
    id: 45191,
    genres: [
      {
        id: 4,
        name: "Fighting",
      },
    ],
    name: "Street Fighter II DASH",
    slug: "street-fighter-ii-dash",
  },
  {
    id: 91788,
    genres: [
      {
        id: 4,
        name: "Fighting",
      },
    ],
    name: "Touki Denshou Angel Eyes",
    slug: "touki-denshou-angel-eyes",
  },
  {
    id: 40094,
    genres: [
      {
        id: 4,
        name: "Fighting",
      },
    ],
    name: "Fujiyama Buster",
    slug: "fujiyama-buster",
  },
  {
    id: 60269,
    genres: [
      {
        id: 4,
        name: "Fighting",
      },
    ],
    name: "Mighty Fighter: Challenge World Warrior",
    slug: "mighty-fighter-challenge-world-warrior",
  },
  {
    id: 133835,
    genres: [
      {
        id: 4,
        name: "Fighting",
      },
    ],
    name: "Super Smash Bros. Ultimate: Challenger Pack 6",
    slug: "super-smash-bros-ultimate-challenger-pack-6",
  },
  {
    id: 128866,
    genres: [
      {
        id: 4,
        name: "Fighting",
      },
    ],
    name: "Street Fighter V: Collector's Edition",
    slug: "street-fighter-v-collectors-edition",
  },
  {
    id: 67297,
    genres: [
      {
        id: 4,
        name: "Fighting",
      },
    ],
    name: "KrabbitWorld Origins",
    slug: "krabbitworld-origins",
  },
  {
    id: 43666,
    genres: [
      {
        id: 4,
        name: "Fighting",
      },
    ],
    name: "Street Fighter III: Third Strike Limited Edition",
    slug: "street-fighter-iii-third-strike-limited-edition",
  },
  {
    id: 3899,
    genres: [
      {
        id: 4,
        name: "Fighting",
      },
    ],
    name: "DreamMix TV World Fighters",
    slug: "dreammix-tv-world-fighters",
  },
];

/*  function getGamesInShooterGenre() {
    axios({
      url: "https://api.igdb.com/v4/games",
      method: "POST",
      headers: {
        crossDomain: true,
        Accept: "application/json",
        "Client-ID": "e3l9ba3mly88sp4zahv6tu1qf3fp9v",
        Authorization: "Bearer tfukvraqvvpmw12c1g44hwxhjqbw6e",
      },
      data: "fields name,genres.name,slug; where screenshots != null; where genres = 5;",
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  } */ //The json below is from a query to fetch games from the shooter genre
export var getGamesInShooterGenre = [
  {
    id: 40104,
    genres: [
      {
        id: 5,
        name: "Shooter",
      },
    ],
    name: "Dogou Souken",
    slug: "dogou-souken",
  },
  {
    id: 87751,
    genres: [
      {
        id: 5,
        name: "Shooter",
      },
    ],
    name: "Counter-Strike Avalon",
    slug: "counter-strike-avalon",
  },
  {
    id: 39058,
    genres: [
      {
        id: 5,
        name: "Shooter",
      },
    ],
    name: "Gryzor",
    slug: "gryzor",
  },
  {
    id: 13010,
    genres: [
      {
        id: 5,
        name: "Shooter",
      },
    ],
    name: "Kat Trap: Planet of the Cat-Men",
    slug: "kat-trap-planet-of-the-cat-men",
  },
  {
    id: 136976,
    genres: [
      {
        id: 5,
        name: "Shooter",
      },
    ],
    name: "Call Of Duty: Modern Warfare - Season 5",
    slug: "call-of-duty-modern-warfare-season-5",
  },
  {
    id: 125216,
    genres: [
      {
        id: 5,
        name: "Shooter",
      },
    ],
    name: "Bicqlo Vader",
    slug: "bicqlo-vader",
  },
  {
    id: 39911,
    genres: [
      {
        id: 5,
        name: "Shooter",
      },
    ],
    name: "Swat Police",
    slug: "swat-police",
  },
  {
    id: 41146,
    genres: [
      {
        id: 5,
        name: "Shooter",
      },
    ],
    name: "Bug Blitz",
    slug: "bug-blitz",
  },
  {
    id: 47058,
    genres: [
      {
        id: 5,
        name: "Shooter",
      },
    ],
    name: "Porkpolis",
    slug: "porkpolis",
  },
  {
    id: 99767,
    genres: [
      {
        id: 5,
        name: "Shooter",
      },
    ],
    name: "Evolve: Ultimate Edition",
    slug: "evolve-ultimate-edition",
  },
];

/*  function getGamesInMusicGenre() {
    axios({
      url: "https://api.igdb.com/v4/games",
      method: "POST",
      headers: {
        crossDomain: true,
        Accept: "application/json",
        "Client-ID": "e3l9ba3mly88sp4zahv6tu1qf3fp9v",
        Authorization: "Bearer tfukvraqvvpmw12c1g44hwxhjqbw6e",
      },
      data: "fields name,genres.name,slug; where screenshots != null; where genres = 7;",
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  } */ //The json below is from a query to fetch games from the music genre
export var getGamesInMusicGenre = [
  {
    id: 86080,
    genres: [
      {
        id: 7,
        name: "Music",
      },
    ],
    name: "SingStar: Frozen",
    slug: "singstar-frozen",
  },
  {
    id: 56167,
    genres: [
      {
        id: 7,
        name: "Music",
      },
    ],
    name: "8 beat Story",
    slug: "8-beat-story",
  },
  {
    id: 83509,
    genres: [
      {
        id: 7,
        name: "Music",
      },
    ],
    name: "Disney Fantasia: Music Evolved",
    slug: "disney-fantasia-music-evolved",
  },
  {
    id: 67099,
    genres: [
      {
        id: 7,
        name: "Music",
      },
    ],
    name: "Guitar Freaks & DrumMania: Masterpiece Silver",
    slug: "guitar-freaks-and-drummania-masterpiece-silver",
  },
  {
    id: 82421,
    genres: [
      {
        id: 7,
        name: "Music",
      },
    ],
    name: "Rock Band 4: Rivals Bundle",
    slug: "rock-band-4-rivals-bundle",
  },
  {
    id: 72846,
    genres: [
      {
        id: 7,
        name: "Music",
      },
    ],
    name: "pop'n music ANIMATION MELODY",
    slug: "popn-music-animation-melody",
  },
  {
    id: 72880,
    genres: [
      {
        id: 7,
        name: "Music",
      },
    ],
    name: "Pop'n Music 11",
    slug: "popn-music-11",
  },
  {
    id: 6831,
    genres: [
      {
        id: 7,
        name: "Music",
      },
    ],
    name: "Jewelpet: Magical Dance in Style Deco!",
    slug: "jewelpet-magical-dance-in-style-deco",
  },
  {
    id: 79575,
    genres: [
      {
        id: 7,
        name: "Music",
      },
    ],
    name: "Justin Bieber Revenge",
    slug: "justin-bieber-revenge",
  },
  {
    id: 94744,
    genres: [
      {
        id: 7,
        name: "Music",
      },
    ],
    name: "beatmania complete MIX",
    slug: "beatmania-complete-mix",
  },
];

/*  function getGamesInPlatformGenre() {
    axios({
      url: "https://api.igdb.com/v4/games",
      method: "POST",
      headers: {
        crossDomain: true,
        Accept: "application/json",
        "Client-ID": "e3l9ba3mly88sp4zahv6tu1qf3fp9v",
        Authorization: "Bearer tfukvraqvvpmw12c1g44hwxhjqbw6e",
      },
      data: "fields name,genres.name,slug; where screenshots != null; where genres = 8;",
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  } */ //The json below is from a query to fetch games from the platform genre
export var getGamesInPlatformGenre = [
  {
    id: 154633,
    genres: [
      {
        id: 8,
        name: "Platform",
      },
    ],
    name: "RE:RUN",
    slug: "re-run",
  },
  {
    id: 19261,
    genres: [
      {
        id: 8,
        name: "Platform",
      },
    ],
    name: "Sonic Rush Adventure",
    slug: "sonic-rush-adventure",
  },
  {
    id: 66161,
    genres: [
      {
        id: 8,
        name: "Platform",
      },
    ],
    name: "Panic Attack - Devil's Favorite",
    slug: "panic-attack-devils-favorite",
  },
  {
    id: 68440,
    genres: [
      {
        id: 8,
        name: "Platform",
      },
    ],
    name: "Superman",
    slug: "superman--2",
  },
  {
    id: 50559,
    genres: [
      {
        id: 8,
        name: "Platform",
      },
    ],
    name: "Ottifanten: Kommando Stortebeker",
    slug: "ottifanten-kommando-stortebeker",
  },
  {
    id: 60905,
    genres: [
      {
        id: 8,
        name: "Platform",
      },
    ],
    name: "Adventure Time: Game Wizard",
    slug: "adventure-time-game-wizard",
  },
  {
    id: 83287,
    genres: [
      {
        id: 8,
        name: "Platform",
      },
    ],
    name: "Flat Pack",
    slug: "flat-pack",
  },
  {
    id: 113466,
    genres: [
      {
        id: 8,
        name: "Platform",
      },
    ],
    name: "I Wanna Kill The Kamilia 3",
    slug: "i-wanna-kill-the-kamilia-3",
  },
  {
    id: 146279,
    genres: [
      {
        id: 8,
        name: "Platform",
      },
    ],
    name: "New Super Mario Bros. 5: Clone Tag Team 2",
    slug: "new-super-mario-bros-5-clone-tag-team-2",
  },
  {
    id: 146278,
    genres: [
      {
        id: 8,
        name: "Platform",
      },
    ],
    name: "New Super Mario Bros. 5: Clone Tag Team",
    slug: "new-super-mario-bros-5-clone-tag-team",
  },
];

/*  function getGamesInPuzzleGenre() {
    axios({
      url: "https://api.igdb.com/v4/games",
      method: "POST",
      headers: {
        crossDomain: true,
        Accept: "application/json",
        "Client-ID": "e3l9ba3mly88sp4zahv6tu1qf3fp9v",
        Authorization: "Bearer tfukvraqvvpmw12c1g44hwxhjqbw6e",
      },
      data: "fields name,genres.name,slug; where screenshots != null; where genres = 9;",
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  } */ //The json below is from a query to fetch games from the puzzle genre
export var getGamesInPuzzleGenre = [
  {
    id: 146815,
    genres: [
      {
        id: 9,
        name: "Puzzle",
      },
    ],
    name: "Parking Lot Maze",
    slug: "parking-lot-maze",
  },
  {
    id: 57729,
    genres: [
      {
        id: 9,
        name: "Puzzle",
      },
    ],
    name: "Laserbreak: Esacpe",
    slug: "laserbreak-esacpe",
  },
  {
    id: 78105,
    genres: [
      {
        id: 9,
        name: "Puzzle",
      },
    ],
    name: "Puzzle Guzzle",
    slug: "puzzle-guzzle",
  },
  {
    id: 42529,
    genres: [
      {
        id: 9,
        name: "Puzzle",
      },
    ],
    name: "Dharma Doujou",
    slug: "dharma-doujou",
  },
  {
    id: 70882,
    genres: [
      {
        id: 9,
        name: "Puzzle",
      },
    ],
    name: "Cubistry",
    slug: "cubistry--1",
  },
  {
    id: 61106,
    genres: [
      {
        id: 9,
        name: "Puzzle",
      },
    ],
    name: "Happy Vikings",
    slug: "happy-vikings",
  },
  {
    id: 120626,
    genres: [
      {
        id: 9,
        name: "Puzzle",
      },
    ],
    name: "Dark Tales: Edgar Allan Poe's Murders in the Rue Morgue",
    slug: "dark-tales-edgar-allan-poes-murders-in-the-rue-morgue",
  },
  {
    id: 139253,
    genres: [
      {
        id: 9,
        name: "Puzzle",
      },
    ],
    name: "Picross for a Cause",
    slug: "picross-for-a-cause",
  },
  {
    id: 81416,
    genres: [
      {
        id: 9,
        name: "Puzzle",
      },
    ],
    name: "Mind Games",
    slug: "mind-games--1",
  },
  {
    id: 37278,
    genres: [
      {
        id: 9,
        name: "Puzzle",
      },
    ],
    name: "Aqua",
    slug: "aqua",
  },
];

export var allGames = [
  getGamesInFightingGenre,
  getGamesInShooterGenre,
  getGamesInMusicGenre,
  getGamesInPlatformGenre,
  getGamesInPuzzleGenre,
];

export function PlatformGames() {
  return getGamesInPlatformGenre.map(function (game) {
    return (
      <Link
        key={game.id}
        to={{
          pathname: `/game/detail/${game.id}`,
          game,
        }}
      >
        <Col>
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>
                <h3>{game.name}</h3>
              </Card.Title>
              <Card.Text>Slug</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Link>
    );
  });
}
