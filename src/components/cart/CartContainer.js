import gamingControl from "../../img/gamingControl3.jpeg";
import { useState } from "react";
import { addToCart } from "../localStorage/localStorage";
import {
  /* getExistingFavs */ getExistingGames,
} from "../localStorage/localStorage";

function CartContainer() {
  const [games, setGames] = useState(/* getExistingFavs */ getExistingGames());
  function removeFromCart(id) {
    const filteredGames = games.filter((game) => game.id !== id);
    addToCart(filteredGames);
    setGames(filteredGames);
  }

  if (games && games.length) {
    return (
      <div className="cart-container">
        {games.map((game) => {
          return (
            <div className="cart-item-container">
              <div className="cart-item-img">
                <img alt="game-image" src={gamingControl} />
              </div>
              <div className="cart-item-info">
                <h5>{game.name}</h5>
                <button class="remove" onClick={() => removeFromCart(game.id)}>
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div className="cart-container"> Your cart is empty</div>;
  }
}

export default CartContainer;
