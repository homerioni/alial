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

const services_slider = new Swiper('.services__slider', {
    direction: 'horizontal',
    spaceBetween: rem(3),
    slidesPerView: 1,
    speed: 500,
    effect: 'creative',
    loop: true,

    creativeEffect: {
        prev: {
            opacity: 0,
        },
        next: {
            opacity: 0,
        },
    },

    pagination: {
        el: ".services__pagination",
        type: 'bullets',
        clickable: true,
    },

    autoplay: {
        delay: 12000,
    },

    on: {
        slideChange: function (slider) {
            $('.services__tab').removeClass('active');
            $('.services__tab:nth-child('+ (slider.realIndex + 1) +')').addClass('active');
        },
    },
});

$('.services__tab').click(function () {
    services_slider.slideTo($(this).index() + 1);
});

const partners_slider = new Swiper('.partners__slider', {
    direction: 'horizontal',
    loop: true,

    breakpoints: {
        0: {
            slidesPerView: 1.454,
            spaceBetween: rem(2),
        },
        769: {
            slidesPerView: 4,
            spaceBetween: rem(3),
        },
    },

    navigation: {
        nextEl: '.partners .next',
        prevEl: '.partners .prev',
    },

    autoplay: {
        delay: 12000,
    },
});

const realized_slider = new Swiper('.realized-slider__slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    speed: 500,
    effect: 'creative',

    creativeEffect: {
        prev: {
            opacity: 0,
            translate: [rem(4), 0, 0],
        },
        next: {
            opacity: 0,
            translate: [rem(4), 0, 0],
        },
    },

    navigation: {
        nextEl: '.realized-slider .next',
        prevEl: '.realized-slider .prev',
    },
});

const licenses_slider = new Swiper('.licenses__slider', {
    direction: 'horizontal',
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
        nextEl: '.licenses .next',
        prevEl: '.licenses .prev',
    },
});

$('.modal-licenses').iziModal({
    overlayColor: 'rgba(0, 3, 21, 0.5)',
    width: '100%',
    zindex: 30,
    transitionIn: 'fadeInUp',
    transitionOut: 'comingOut',
    navigateArrows: false,
    navigateCaption: false,
    onOpening: function() {
        $('body').width($('body').width()).addClass('lock');
    },
    onClosing: function() {
        $('body').width('').removeClass('lock');
    },
});

const modal_licenses_slider = new Swiper('.modal-licenses__slider', {
    direction: 'horizontal',
    spaceBetween: rem(4),
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    speed: 700,
    effect: 'creative',

    creativeEffect: {
        limitProgress: 3,
        prev: {
            translate: ['-100%', 0, 0],
            scale: 0.85,
        },
        next: {
            translate: ['100%', 0, 0],
            scale: 0.85,
        },
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        769: {
            slidesPerView: 2.6,
        },
    },

    pagination: {
        el: ".modal-licenses .page-pagination__numbers",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="page-pagination__link ' + className + '"><span>'+ (index + 1) +'</span></span>';
        },
    },

    navigation: {
        nextEl: '.modal-licenses .next',
        prevEl: '.modal-licenses .prev',
    },
});

const catalog_intro_slider = new Swiper('.catalog-intro__slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    speed: 700,
    effect: 'creative',

    creativeEffect: {
        prev: {
            opacity: 0,
            translate: [rem(4), 0, 0],
        },
        next: {
            opacity: 0,
            translate: [rem(4), 0, 0],
        },
    },

    breakpoints: {
        0: {
            pagination: {
                el: ".catalog-intro .slider-nav__pagination.mobile",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="page-pagination__link ' + className + '"></span>';
                },
            },
        },
        769: {
            pagination: {
                el: ".catalog-intro .slider-nav__pagination.desktop",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="page-pagination__link ' + className + '"></span>';
                },
            },
        },
    },

    navigation: {
        nextEl: '.catalog-intro .next',
        prevEl: '.catalog-intro .prev',
    },

    autoplay: {
        delay: 15000,
    },
});