import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { handleGames } from "../localStorage/localStorage";
import GamingControl from "../../img/gamingControl.jpeg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function RenderGames(props) {
  return props.games.map(function (game) {
    return (
      <div className="displayGames">
        <Col>
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" alt="gaming-control" src={GamingControl} />
            <Card.Body>
              <Card.Title>
                <Link
                  key={game.id}
                  to={{
                    pathname: `/detail/${game.id}`,
                    state: { game },
                  }}
                >
                  {game.name}
                </Link>
              </Card.Title>
              <Card.Text>
                <Link
                  key={game.id}
                  to={{
                    pathname: `/detail/${game.id}`,
                    state: { game },
                  }}
                >
                  {game.slug}
                </Link>
              </Card.Text>
              <Button id="tabFormButton">
                Add to cart
                <i
                  className="far fa-heart"
                  data-id={game.id}
                  data-name={game.name}
                ></i>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  });
}

export default RenderGames;

setTimeout(handleGames, 250);
