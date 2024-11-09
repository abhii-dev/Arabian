
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

cartIcon=document.querySelector(".cart-icon");
cartPage=document.querySelector(".cart-page");
cartBack=document.querySelector(".cart-back");

cartIcon.addEventListener("click",()=>{
    cartPage.classList.add("show");
    document.getElementsByTagName("body")[0].style.overflow = "hidden";

})
cartBack.addEventListener("click",()=>{
    cartPage.classList.remove("show");
    document.getElementsByTagName("body")[0].style.overflow = "scroll"
})

// js for adding items in cart

/*cartItems=[{
    image : 'images/menu-burger.jpg',
    name : 'Chicken Pizza - Non Veg',
    price : 'Rs: 299/-'
}];

cartItemHTML = '';

cartItems.array.forEach(element => {
    cartItemHTML+= `<div class="cart-page-items">
                       <div class="cart-img-div">
                           <img src=`` alt="">
                        </div>
                       <div class="cart-item-info">
                           <p>${cartItems.name}</p>
                           <h2>${cartItems.price}</h2>
                       </div>
                    </div>`;

});

cartPage.innerHTML = cartItemHTML;*/



//js for cart 


const cartItems =[{
    id : 'item1',
    name : 'Nuggets, Coke & Fries',
    price : 299,
    image: 'images/Combo-chicken and Coke.png'
},{
    id : 'item2',
    name : 'Chicken Burger & Coke',
    price : 399,
    image: 'images/Combo-chicken and Coke.png' 
},{
    id : 'item2',
    name : 'Veg Sandwich & Coke',
    price : 499,
    image: 'images/Combo-chicken and Coke.png' 
    
}
    

]


let itemContainer = '';
cartItems.forEach((item)=>{
    itemContainer += `
    <div class="square">
        <div class="square-img">
            <img src="${item.image}">
        </div>
    <h2 class="square-heading">${item.name}</h2>
        <p class="price-combo"> ${item.price} </p>
    <button class="square-button">Add To Cart</button>
    </div>
    `;
})

console.log(itemContainer);

document.querySelector('.js-scroll-items').innerHTML = itemContainer;