export function saveFavs(favs) {
  localStorage.setItem("favourites", JSON.stringify(favs));
}
