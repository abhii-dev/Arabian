console.log("helloo");
// js for login page

formContainer = document.querySelector(".form-container");
loginA = document.querySelector(".loginA");
cross = document.querySelector(".cross");
alreadyHaveAccount=document.querySelector(".alreadyyy");

loginA.addEventListener("click", ()=>{
    formContainer.classList.add("show");
})

cross.addEventListener("click", ()=>{
    formContainer.classList.remove("show");
})

alreadyHaveAccount.addEventListener("click",()=>{
    formContainer.classList.add("show");
    formContainer2.classList.remove("show");
    console.log("clicked")
})

// js for sign up page

formContainer2 = document.querySelector(".form-container2");
signUpA = document.querySelector(".signupA");
cross2 = document.querySelector(".cross2");
dontHaveAccount=document.querySelector(".dont");


signUpA.addEventListener("click", ()=>{
    formContainer2.classList.add("show");
})

cross2.addEventListener("click", ()=>{
    formContainer2.classList.remove("show");
})
dontHaveAccount.addEventListener("click",()=>{
    formContainer2.classList.add("show");
    formContainer.classList.remove("show");
    console.log("clicked")
})



//js for scrolling menu

const scrollContainer = document.querySelector(".scroll-items");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
     
});

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900; 
});


// js for cart page

// cartIcon=document.querySelector(".cart-icon");
// cartPage=document.querySelector(".cart-page");
// cartBack=document.querySelector(".cart-back");

// cartIcon.addEventListener("click",()=>{
//     cartPage.classList.add("show");
//     document.getElementsByTagName("body")[0].style.overflow = "hidden";

// })
// cartBack.addEventListener("click",()=>{
//     cartPage.classList.remove("show");
//     document.getElementsByTagName("body")[0].style.overflow = "scroll"
// })



//js for adding to cart in scrollable Menu

let shopp=document.querySelector('.js-scroll-items');

let basket= JSON.parse(localStorage.getItem("data")) || [];

let itemContainer = '';
       // generating html
let generateShopItems = ()=>{
    
    cartItems.forEach((x)=>{
        let { id, name, price, image } = x;
        let search = basket.find((y) => y.id === id) || [];
        itemContainer += `
        <div id=product-id-${id} class="square">
            <div class="square-img">
                <img src="${image}">
            </div>
        <h2 class="square-heading">${name}</h2>
            <p class="price-combo">Rs: ${price}/- </p>
        <button class="square-button">Add To Cart</button>
        <div class="quantityButtons">
        <i onclick="decrement(${id})" class="fa-solid fa-minus downQ"></i>
        <div id=${id} class="quantity">${
            search.item === undefined ? 0 : search.item
          }</div>
        <i onclick="increment(${id})" class="fa-solid fa-plus upQ"></i>
        </div>
        </div>
        `;
    })
    shopp.innerHTML = itemContainer;

}
generateShopItems();
       //function for increasing quantity
let increment = (id) => {
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
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
  };
        //function for decreasing quantity
  let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
  
    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
      search.item -= 1;
    }
  
    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0);
    console.log(basket);
    localStorage.setItem("data", JSON.stringify(basket));
  };
       //function for updating quantity in the div
  let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
  };
      //function for calculating total number of items added in cart
  let calculation = () => {
    let cartIcon = document.querySelector(".cart-value");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  };
  
  calculation();