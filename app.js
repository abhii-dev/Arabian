// js for login page

formContainer = document.querySelector(".form-container");
loginA = document.querySelector(".loginA");
cross = document.querySelector(".cross");

loginA.addEventListener("click", ()=>{
    formContainer.classList.add("show");
})

cross.addEventListener("click", ()=>{
    formContainer.classList.remove("show");
})

// js for sign up page

formContainer2 = document.querySelector(".form-container2");
signUpA = document.querySelector(".signupA");
cross2 = document.querySelector(".cross2");

signUpA.addEventListener("click", ()=>{
    formContainer2.classList.add("show");
})

cross2.addEventListener("click", ()=>{
    formContainer2.classList.remove("show");
})

  