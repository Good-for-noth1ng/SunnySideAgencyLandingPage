const hamburger = document.querySelector("#btnHamburger");
const mobileMenu = document.querySelector(".header__mobile");
const header = document.querySelector("#header");
hamburger.addEventListener('click', function() {
    if (hamburger.classList.contains('open')) {
        hamburger.classList.remove('open');
        mobileMenu.classList.add('fade');
        header.classList.remove('hide');
    } else {
        hamburger.classList.add('open');
        mobileMenu.classList.remove('fade');
        header.classList.add('hide');
    }
});