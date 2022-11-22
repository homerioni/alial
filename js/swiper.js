// Пересчет rem в px для swiper
const rem = function (rem) {
    if ($(window).width() > 768) {
        return 0.005208335 * $(window).width() * rem;
    } else {
        // где 375 это ширина моб версии макета
        return (100/375) * (0.1 * $(window).width()) * rem;
    }
}

const main_intro_slider = new Swiper('.main-intro__slider', {
    direction: 'horizontal',
    centeredSlides: true,
    grabCursor: true,
    speed: 500,
    effect: "creative",

    breakpoints: {
        0: {
            slidesPerView: 1.31,

            pagination: {
                el: ".main-intro .slider-nav__pagination.mobile",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"></span>';
                },
            },

            creativeEffect: {
                prev: {
                    translate: [rem(-7), 0, 0],
                    scale: [0.8],
                },
                next: {
                    translate: [rem(7), 0, 0],
                    scale: [0.8],
                },
            },
        },
        769: {
            slidesPerView: 1.53,

            pagination: {
                el: ".main-intro .slider-nav__pagination.desktop",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"></span>';
                },
            },

            creativeEffect: {
                prev: {
                    translate: [rem(-15), 0, 0],
                    scale: [0.75],
                },
                next: {
                    translate: [rem(15), 0, 0],
                    scale: [0.75],
                },
            },
        },
    },

    navigation: {
        nextEl: '.main-intro .next',
        prevEl: '.main-intro .prev',
    },

    autoplay: {
        delay: 7000,
    },

});

const sales_leader_slider = new Swiper('.sales-leader__slider', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: rem(3),

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        769: {
            slidesPerView: 4,
        },
    },

    navigation: {
        nextEl: '.sales-leader .next',
        prevEl: '.sales-leader .prev',
    },

    autoplay: {
        delay: 12000,
    },

});