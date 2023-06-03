const favoriteRow = document.querySelector(".favorite-row");

favoriteProducts.forEach(pr => {
  favoriteRow.innerHTML += page_boxes(pr);
})