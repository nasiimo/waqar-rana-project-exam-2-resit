import gamingControl from "../../img/gamingControl3.jpeg";
import { useState } from "react";
import { saveFavs } from "../localStorage/localStorage";
import { getExistingFavs } from "../localStorage/localStorage";

function CartContainer() {
  const [favourites, setFavs] = useState(getExistingFavs());
  function removeFromCart(id) {
    const filteredFavourites = favourites.filter(
      (favourite) => favourite.id !== id
    );
    saveFavs(filteredFavourites);
    setFavs(filteredFavourites);
  }

  if (favourites && favourites.length) {
    return (
      <div className="cart-container">
        {favourites.map((favourite) => {
          return (
            <div className="cart-item-container">
              <div className="cart-item-img">
                <img src={gamingControl} />
              </div>
              <div className="cart-item-info">
                <h5>{favourite.name}</h5>
                <button
                  class="remove"
                  onClick={() => removeFromCart(favourite.id)}
                >
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
