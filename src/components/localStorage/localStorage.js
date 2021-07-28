export function saveFavs(favs) {
  localStorage.setItem("favourites", JSON.stringify(favs));
}

export function getExistingFavs() {
  const favs = localStorage.getItem("favourites");

  if (!favs) {
    return [];
  } else {
    return JSON.parse(favs);
  }
}
