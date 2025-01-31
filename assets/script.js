const navMenu = document.querySelector('.nav__menu');
const navItems = document.querySelectorAll('.nav__item');
const navClose = document.querySelector('.nav__close');
const navOpen = document.querySelector('.nav__open');
const overlay = document.querySelector('.overlay');

navOpen.addEventListener('click', () => {
    navMenu.classList.add('open');
    overlay.classList.add('open');
});

navClose.addEventListener('click', () => {
    navMenu.classList.remove('open');
    overlay.classList.remove('open');
});

navItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
            overlay.classList.remove('open');
        }
    })
});

overlay.addEventListener('click', () => {
    navMenu.classList.remove('open');
    overlay.classList.remove('open');
});