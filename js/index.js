const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelector('.navbar');
const menu = document.querySelectorAll('.menu a');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('cross');
    menuItems.classList.toggle('open');
    let display;
    if (menuBtn.classList.contains('cross')) {
        display = "block";
    } else {
        display = "none";
    }
    handleNavbar(display);
});

let mediaQuery = window.matchMedia("(min-width: 1100px)");
mediaQuery.addEventListener('change', () => {
    let display;
    if (mediaQuery.matches) {
        display = "block";
    } else if (menuBtn.classList.contains('cross')){
        display = "block";
    } else {
        display = "none";
    }
    handleNavbar(display);
});

function handleNavbar(display) {
    menu.forEach(a => a.style.display = display);
}