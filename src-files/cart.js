let cartProductDiv = document.querySelector(".main-cart-box");
let updateIncrement=document.getElementById("updationKeyIncrement");
let updateDecrement=document.getElementById("updationKeysDecrement");


let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
    let cartIcon = document.querySelector(".cart-value");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  };
  
  calculation();
  
  let generateCartItems = () => {
    if (basket.length !== 0) {
      return (cartProductDiv.innerHTML = basket
        .map((x) => {
          let { id, item } = x;
          let search = cartItems.find((x) => x.id === id) || [];
          let { name,price,image } = search;
          return `
          <div class="cart-box">
          <div class="cart-image">
          <p>ORDER SUMMARY</p>
          <img src="${image}" alt="">
          </div>
          <div class="cart-info">
          <p class="cart-product-name">${name}</p>
          <p class="cart-recent-sold">Sold xxxx products</p>
          <p class="cart-product-prize">Rs ${price} /-</p>
          <div class="cart-product-quantity">
          <h2>PRICE:Rs ${item * price}/-</h2>
          <div class="quantity-buttons">
          <i onclick="decrement(${id})" class="fa-solid fa-minus" id="dec"></i>
          <div id="${id}">${item}</div>
          <i onclick="increment(${id})" class="fa-solid fa-plus" id="inc"></i>
          </div>
          </div>
          </div>
          
          </div>
          `
        })
        .join(""));
      } else {
        //   ShoppingCart.innerHTML = "";
        cartProductDiv.innerHTML = `
        <h2>Cart is Empty</h2>
        <a href="index.html">
        <button class="HomeBtn">Back to Home</button>
        </a>
        `;
      }
    };
    generateCartItems();
    
    let increment = (id) => {
      console.log("increment");
      let selectedItem = id;
      let search = basket.find((x) => x.id === selectedItem.id);
    
      if (search === undefined) {
        basket.push({
          id: selectedItem.id,
          item: 1,
        });
      } else {
        search.item += 1;
      }
    
      generateCartItems();
      update(selectedItem.id);
      localStorage.setItem("data", JSON.stringify(basket));
    };
    
    
    
    let decrement = (id) => {
      console.log("decrement");
      let selectedItem = id;
      let search = basket.find((x) => x.id === selectedItem.id);
    
      if (search === undefined) return;
      else if (search.item === 0) return;
      else {
        search.item -= 1;
      }
    
      update(selectedItem.id);
      basket = basket.filter((x) => x.item !== 0);
      generateCartItems();
      localStorage.setItem("data", JSON.stringify(basket));
    };
    
    
    
    let update = (id) => {
      let search = basket.find((x) => x.id === id);
      document.getElementById(id).innerHTML = search.item;
      calculation();
    };
