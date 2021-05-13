const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.header-nav__list');

if (burgerMenu) {
    burgerMenu.addEventListener('click', function () {
        burgerMenu.classList.toggle('active');
        menu.classList.toggle('active');
    });
}