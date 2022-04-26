// khi click chuột vào menu-btn thì hiện ra bản navbar
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = ()=>{
    navbar.classList.toggle('active');
    seachForm.classList.remove('active');
    cartItem.classList.remove('active');
}

// khi click chuột vào menu-btn thì hiện ra bản navbar
let seachForm = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = ()=>{
    seachForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

// khi click chuột vào menu-btn thì hiện ra bản navbar
let cartItem = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = ()=>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    seachForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    seachForm.classList.remove('active');
    cartItem.classList.remove('active');


}