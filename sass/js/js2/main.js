const favoriteNumber = document.querySelector(".favorite .count");

let favoriteProductsJson = localStorage.getItem(FAVORITE);
let favoriteProducts = JSON.parse(favoriteProductsJson) || [];

function getFavoriteNumber() {
  favoriteNumber.textContent = favoriteProducts.length;
}

getFavoriteNumber();

