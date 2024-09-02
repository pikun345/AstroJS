"use strict";
let lastScrollTop = 0;
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // Scrolling down
        navbar === null || navbar === void 0 ? void 0 : navbar.classList.add('navbar-hidden');
    }
    else {
        // Scrolling up
        navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove('navbar-hidden');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For mobile or negative scrolling
});
