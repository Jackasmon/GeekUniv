const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.close'),
    menuOverlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active'),
        menuOverlay.classList.add('over'),
        menuOverlay.classList.add('active');
});

menuOverlay.addEventListener('click', () => {
    menu.classList.remove('active'),
        menuOverlay.classList.remove('active'),
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