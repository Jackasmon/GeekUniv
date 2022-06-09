const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    menuOverlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuOverlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percents = document.querySelectorAll('.what-use__cani-percent'),
    lines = document.querySelectorAll('.what-use__cani-divider_fill');

percents.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
})