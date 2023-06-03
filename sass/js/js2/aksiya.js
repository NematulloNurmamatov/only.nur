const products = [
    {
        "category": "Kolbasa",
        "description": "",
        "price": 44.5,
        "skidka":50,
        "rating": 2,
        "discount":2,
        "images": "images/image4.png",
    },
    {
        "category": "meats",
        "description": "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
        "price": 49.39,
        "skidka":30,
        "rating": 3,
        "discount":2,
        "images": "images/imagee3.png",
    },
    {
        "category": "meats",
        "description": "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
        "price": 44.50,
        "skidka":10,
        "rating": 5,
        "discount":3,
        "images": "images/imagee3.png",
    },
    {
        "category": "milks",
        "description": "Конфеты очень вкусный и приятный десерт",
        "price": 30,
        "skidka":20,
        "rating": 4,
        "discount":4,
        "images": "images/imagee2.png",
    },
        {
        "category": "Kolbasa",
        "description": "",
        "price": 44.5,
        "skidka":50,
        "rating": 2,
        "discount":2,
        "images": "images/image.png",
    },
]


// PROJECT
let card1 = document.querySelector(".sec2 .product");
function productCard({ images, price, description }) {
  let box = `
                <div class="box">
                <div class="ras">
                    <img class="s" src=${images} alt="">
                    <img class="po" src="./images/Shape (Stroke).png" alt="">
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
                        <a href="" class="button">Button</a>
                      </div>
                </div>
                </div>
            `;

  return box;
}

let element1 = products.slice(-5, -1).filter((el) => el.discount > 0);
let cardValue1 = "";
for (box of element1) {
  cardValue += productCard(box);
}

card1.innerHTML = cardValue1;



const novinka = [
  {
    category: "Kolbasa",
    description: "",
    price: 44.5,
    skidka: 50,
    rating: 2,
    discount: 2,
    images: "images/image4.png",
  },
  {
    category: "meats",
    description: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
    price: 49.39,
    skidka: 30,
    rating: 3,
    discount: 2,
    images: "images/imagee3.png",
  },
  {
    category: "meats",
    description: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    price: 44.5,
    skidka: 10,
    rating: 5,
    discount: 3,
    images: "images/imagee3.png",
  },
  {
    category: "milks",
    description: "Конфеты очень вкусный и приятный десерт",
    price: 30,
    skidka: 20,
    rating: 4,
    discount: 4,
    images: "images/imagee2.png",
  },
  {
    category: "Kolbasa",
    description: "",
    price: 44.5,
    skidka: 50,
    rating: 2,
    discount: 2,
    images: "images/image.png",
  },
];

// PROJECT
let card1 = document.querySelector(".sec2 .product");
function productCard({ images, price, description }) {
  let box = `
                <div class="box">
                <div class="ras">
                    <img class="s" src=${images} alt="">
                    <img class="po" src="./images/Shape (Stroke).png" alt="">
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
                        <a href="" class="button">Button</a>
                      </div>
                </div>
                </div>
            `;

  return box;
}

let element = novinka.slice(-5, -1).filter((el) => el.discount > 0);
let cardValue = "";
for (box of element) {
  cardValue += productCard(box);
}

card1.innerHTML = cardValue;
