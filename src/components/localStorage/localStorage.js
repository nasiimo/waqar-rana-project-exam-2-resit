export function addToCart(games) {
  localStorage.setItem("cart", JSON.stringify(games));
}

export function getExistingGames() {
  const games = localStorage.getItem("cart");

  if (!games) {
    return [];
  } else {
    return JSON.parse(games);
  }
}

export function handleGames() {
  const addToCartButtons = document.querySelectorAll(".displayGames i");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", handle);
  });
  function handle() {
    this.classList.toggle("fa");
    this.classList.toggle("far");

    const id = this.dataset.id;
    const name = this.dataset.name;

    const currentGames = getExistingGames();

    const gameExists = currentGames.find(function (game) {
      return game.id === id;
    });

    if (!gameExists) {
      const game = { id: id, name: name };
      currentGames.push(game);
      addToCart(currentGames);
    } else {
      const newGames = currentGames.filter((game) => game.id !== id);
      addToCart(newGames);
    }
  }
}
