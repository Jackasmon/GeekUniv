const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.close'),
    menuOverlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

hamburger.addEventListener('click', () => {
    menuOverlay.classList.add('active');
});

hamburger.addEventListener('click', () => {
    menuOverlay.classList.add('over');
});

menuOverlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuOverlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuOverlay.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
});
menuOverlay.addEventListener('click', () => {
    menuOverlay.classList.remove('over');
});




var swiper = new Swiper(".mySwiper", {
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper2 = new Swiper(".mySwiper2", {
    direction: "vertical",
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});