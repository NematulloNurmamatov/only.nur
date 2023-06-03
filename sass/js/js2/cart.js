const cartLengthContent = document.querySelector(".cart_length .count");

// getting card json and parsing to array 
let  cartProductsJson = localStorage.getItem(CART);
let cartProducts = JSON.parse(cartProductsJson) || [];



function getCartLength(){
  cartLengthContent.innerHTML = cartProducts.length;
}

getCartLength();

function addToCard (id){
  let product = products.find((el) => el.id === id);
  let check = cartProducts.find((el) => el.id === id);
  if (check){
    product.quantity++;
    cartProducts = cartProducts.map(el =>{
      if(el.id == id){
        return product;
      }else{
        return el
      }
      return el.id === id ? product : el;
    })
  }else{
    product.quantity = 1;
    cartProducts.push(product);
  }
  localStorage.setItem(CART, JSON.stringify(cartProducts))
  getCartLength();
}


