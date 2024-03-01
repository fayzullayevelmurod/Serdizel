// partnerslider
var swiper = new Swiper(".partnerSwiper", {
    pagination: {
        el: ".partner-pagination",
        clickable: true,
    },
    breakpoints: {
        360: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        650: {
            slidesPerView: 5,
            spaceBetween: 12,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
    },
});
// partnerslider

// burger
let menu_burger = document.querySelector('.menu_burger');
let mobile_link = document.querySelector('.mobile_link');
let mobile_menu = document.querySelector('.mobile_menu');

menu_burger.addEventListener('click', () => {
    menu_burger.classList.toggle('active')
    mobile_link.classList.toggle('active')
    mobile_menu.classList.toggle('active')
})
// burger