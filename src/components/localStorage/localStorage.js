/* This function is for saving games in ls */
export function saveFavs(favs) {
  localStorage.setItem("favourites", JSON.stringify(favs));
}

/* This function is to retrieve the array of games stored in ls */
export function getExistingFavs() {
  const favs = localStorage.getItem("favourites");

  if (!favs) {
    return [];
  } else {
    return JSON.parse(favs);
  }
}

/* This function is executed on the browse page to make a
 button for saving games in ls */
export function handleFavs() {
  const favButtons = document.querySelectorAll(".displayGames i");

  favButtons.forEach((button) => {
    button.addEventListener("click", handle);
  });

  function handle() {
    this.classList.toggle("fa");
    this.classList.toggle("far");

    const id = this.dataset.id;
    const name = this.dataset.name;

    const currentFavs = getExistingFavs();

    const productExists = currentFavs.find(function (fav) {
      return fav.id === id;
    });

    if (!productExists) {
      const product = { id: id, name: name };
      currentFavs.push(product);
      saveFavs(currentFavs);
    } else {
      const newFavs = currentFavs.filter((fav) => fav.id !== id);
      saveFavs(newFavs);
    }
  }
}
