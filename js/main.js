// partnerslider
var swiper = new Swiper(".partnerSwiper", {
    spaceBetween: 10,
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

// enginesslider
var swiper = new Swiper(".enginesSwiper", {
    spaceBetween: 10,
    pagination: {
        el: ".engines-pagination",
        clickable: true,
    },
    breakpoints: {
        360: {
            slidesPerView: 1.10,
            spaceBetween: 10,
        },
        650: {
            slidesPerView: 1.20,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 1.35,
            spaceBetween: 20,
        },
    },
});
// enginesslider

// enginesslider
var swiper = new Swiper(".servicesSwiper", {
    spaceBetween: 10,
    pagination: {
        el: ".services-pagination",
        clickable: true,
    },
    breakpoints: {
        280: {
            slidesPerView: 1.20,
            spaceBetween: 10,
        },
    },
});
// enginesslider

// partnerslider
var swiper = new Swiper(".reviewsSwiper", {
    spaceBetween: 10,
    pagination: {
        el: ".reviews-pagination",
        clickable: true,
    },
    breakpoints: {
        360: {
            slidesPerView: 2.25,
            spaceBetween: 10,
        },
        650: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
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

// modal
let sign_up = document.querySelectorAll('.sign_up');
let modal_bg = document.querySelector('.modal_bg');
let modal = document.querySelector('.modal');
let modal_close = document.querySelector('.modal_close');

sign_up.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.toggle('active')
        modal_bg.classList.toggle('active')
    })
})

modal_bg.addEventListener('click', () => {
    modal.classList.remove('active')
    modal_bg.classList.remove('active')
})

modal_close.addEventListener('click', () => {
    modal.classList.remove('active')
    modal_bg.classList.remove('active')
})
// modal