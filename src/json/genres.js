import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import React from "react";
import RenderGames from "./games";
import { PlatformGames } from "./games";

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

function RenderGenres() {
  return (
    <div className="genre-presentation">
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">All games</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">{genres[0].name}</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">{genres[1].name}</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">{genres[2].name}</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">{genres[3].name}</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sixth">{genres[4].name}</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    <PlatformGames />
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">two</Tab.Pane>
                <Tab.Pane eventKey="third">three</Tab.Pane>
                <Tab.Pane eventKey="fourth">four</Tab.Pane>
                <Tab.Pane eventKey="fifth">five</Tab.Pane>
                <Tab.Pane eventKey="sixth">five</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
}

export default RenderGenres;
