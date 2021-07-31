import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import React from "react";
import {
  getGamesInFightingGenre,
  getGamesInShooterGenre,
  getGamesInMusicGenre,
  getGamesInPlatformGenre,
  getGamesInPuzzleGenre,
  allGames,
} from "../../json/games";
import RenderGames from "../games/RenderGames";
import { genres } from "../../json/genres";

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
                    <RenderGames games={allGames} />
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    <RenderGames games={getGamesInFightingGenre} />
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    <RenderGames games={getGamesInShooterGenre} />
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <Row>
                    <RenderGames games={getGamesInMusicGenre} />
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <Row>
                    <RenderGames games={getGamesInPlatformGenre} />
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="sixth">
                  <Row>
                    <RenderGames games={getGamesInPuzzleGenre} />
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
}

export default RenderGenres;
