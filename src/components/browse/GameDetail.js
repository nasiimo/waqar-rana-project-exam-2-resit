import React from "react";
import Banner from "../layout/Banner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import StockImage from "../../img/gameMachines.jpeg";

function GameDetail(props) {
  const game = props.location.state.game;
  console.log(props);
  const customStyle = {
    lineHeight: "3em",
  };
  return (
    <div className="gamedetail">
      <Banner
        color="white"
        paddingTop="100px"
        minHeight="30vh"
        heading={game.name}
        backgroundColor="#410275"
        textAlign="center"
      />
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <div className="info-container" style={customStyle}>
              <h3>Game details</h3>
              <hr id="divider"></hr>
              <h5>Id: {game.id}</h5>
              <h5>Name: {game.name}</h5>
              <h5>Genre Id: {game.genres[0].id}</h5>
              <h5>Genre name: {game.genres[0].name}</h5>
              <h5>Slug: {game.slug}</h5>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className="img-container">
              <Image alt="game specific details image" src={StockImage} fluid />
              <button id="tabFormButton">
                Add to cart
                <i
                  className="far fa-heart"
                  data-id={game.id}
                  data-name={game.name}
                ></i>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GameDetail;
