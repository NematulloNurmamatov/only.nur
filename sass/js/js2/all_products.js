let card = document.querySelector(".card");
let search = document.querySelector(".search .tex");

console.log(search);
let paginition = document.querySelector(".paginition");

let limit = 10,active = 0, search_value = "";


function productCard({ image, price, description, id}) {
    let box = `
          <div class="box">
                <div class="ras">
                    <img class="s" src=${image} alt="">
                    <img onclick="addToFavourite(${id})" class="po" src="./images/Shape (Stroke).png" alt="">
                    <p class="tx">-50%</p>
                </div>
                <div class="pastki">
                    <div class="fle">
                        <div>
                            <h3>${price} ₽</h3>
                        </div>
                   
                    </div>
                    <p style="padding-top: 14px; padding-bottom: 13px;">${description}</p>
                    <img style="padding-bottom: 14px;" src="./images/rating.png" alt="">
                    <div class="profile-details">
                        <button onclick="addToCard(${id})" class="button">Button ${id}</button>
                      </div>
                </div>
            </div>       
    `;

    return box;
}

function page_boxes() {
    let searchProducts = products.filter((el) =>
        el.description.toLowerCase().includes(search_value)
    );
    let start = active * limit;
    
    card.innerHTML = "";
    
    searchProducts.slice(start, start + limit).forEach((el) => {
        card.innerHTML += productCard(el);
    });
    
    
    let  pages_count = Math.ceil(searchProducts.length / limit);

    let item;
    if(active != 0){
        item = `<li  class="page-item">
        <span class="page-link">Previous</span>
      </li>`;
    }
    else{
        item = `<li class="page-item disabled">
        <span class="page-link">Previous</span>
      </li>`
    }
    

    for (let i = 0; i < pages_count; i++) {
        item += `<li onclick="getPage(${i})" class="page-item ${
            i == active ? "active" : ""
          }"><span class="page-link">${i + 1}</span></li>`
    }

    item += `<li class="page-item">
    <span class="page-link">Next</span>
    </li>`

    paginition.innerHTML = item;

}

page_boxes();

search.addEventListener("keyup", function () {
    search_value = this.value.trim().toLowerCase();
    page_boxes();
  });
  
  function getPage(page) {
    active = page;
    page_boxes();
  }

function addToFavourite(id) {
  let product = products.find((el) => el.id === id);
  let checkFavorite = favoriteProducts.find((el) => el.id === id);
  if (checkFavorite) {
    favoriteProducts = favoriteProducts.filter((el) => el.id != id);
  } else {
    favoriteProducts.push(product);
  }
  localStorage.setItem(FAVORITE, JSON.stringify(favoriteProducts));
  getFavoriteNumber();
}