'use strict'

$(document).ready(function () {

    // Header menu mob
    $('.header__list').parent().find('a').click(function (e) {
        if ($(window).width() <= 768) {
            e.preventDefault();
        }
    });
    $('.header__menu-item').click(function () {
        if ($(window).width() <= 768) {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active').find('.header__list').slideUp();
            } else {
                $('.header__menu-item.active').removeClass('active').find('.header__list').slideUp();
                $(this).toggleClass('active').find('.header__list').slideToggle();
            }
        }
    });
    $('.header__language-btn').click(function () {
        if ($(window).width() <= 768) {
            $(this).toggleClass('active');
            $('.header__language-list').slideToggle();
        }
    });
    $('.header__close-btn, .header__burger-bg').click(function () {
        $('body').removeClass('lock');
        $('.header__burger-bg').fadeOut();
        $('.header__content').removeClass('active');
    });
    $('.header__burger').click(function () {
        $('body').addClass('lock');
        $('.header__burger-bg').fadeIn();
        $('.header__content').addClass('active');
    });

    // Catalog
    $('.catalog__filter-label input').change(function () {
        $(this).parent().toggleClass('active');
    });
    $('.catalog__tab input').change(function () {
        $(this).parent().siblings('.catalog__tab').removeClass('active');
        $(this).parent().addClass('active');
    });

    // Contacts
    $('.contacts__label input, .contacts__label-textarea textarea').focusin(function () {
        $(this).parent().addClass('focus');
    }).focusout(function () {
        $(this).parent().removeClass('focus');
    });

    // Modal
    // Request
    $('.modal-request__form').iziModal({
        overlayColor: 'rgba(0, 3, 21, 0.5)',
        width: '108rem',
        zindex: 30,
        group: 'request',
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
    $('.modal-request__complete').iziModal({
        overlayColor: 'rgba(0, 3, 21, 0.5)',
        width: '69rem',
        zindex: 30,
        group: 'request',
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
    $('.popup-request').click(function () {
        $('.modal-request__form').iziModal('open');
    });
    $('.popup-request-complete').click(function () {
        $('.modal-request__complete').iziModal('open');
    });
    $('.modal-request__label input, .modal-request__label-textarea textarea').focusin(function () {
        $(this).parent().addClass('focus');
    }).focusout(function () {
        $(this).parent().removeClass('focus');
    });

    // Modal
    // Work1
    $('.modal-work1').iziModal({
        overlayColor: 'rgba(0, 3, 21, 0.5)',
        width: '108rem',
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
    $('.popup-work1').click(function () {
        $('.modal-work1').iziModal('open');
    });

    // Modal
    // Work2
    $('.modal-work2').iziModal({
        overlayColor: 'rgba(0, 3, 21, 0.5)',
        width: '108rem',
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
    $('.popup-work2').click(function () {
        $('.modal-work2').iziModal('open');
    });

    // Modal
    // Licenses
    $('.popup-licenses').click(function () {
        $('.modal-licenses').iziModal('open');
    });
    $('.licenses__slide').click(function () {
        modal_licenses_slider.slideToLoop($(this).index());
        $('.modal-licenses').iziModal('open');
    });

    // Modal
    // Realized
    $('.popup-realized').click(function () {
        $('.modal-realized').iziModal('open');
    });
    modal_realized_slider.removeAllSlides();
    modal_realized_slider.update();
    $('.realized__img-box').click(function () {
        modal_realized_slider.removeAllSlides();
        $(this).parent().find('.realized__img-box').each(function () {
            modal_realized_slider.appendSlide('<div class="modal-realized__slide swiper-slide"><img src="'+ $(this).find('img').attr('src') +'" alt=""></div>');
        });
        modal_realized_slider.slideToLoop($(this).index());
        $('.modal-realized').iziModal('open');
        modal_realized_slider.update();
    });

    // Article
    $('.article__tab input').change(function () {
        $(this).parent().siblings('.article__tab').removeClass('active')
        $(this).parent().addClass('active')
    })

    // Product-info
    $('.product-info__tab input').change(function () {
        $(this).parent().siblings('.product-info__tab').removeClass('active');
        $(this).parent().addClass('active');
    })

    document.querySelectorAll('.product-info__tab').forEach(function (tabBtn) {
        tabBtn.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path

            document
                .querySelectorAll('.product-info__panel')
                .forEach(function (tabContent) {
                    tabContent.classList.remove('active')
                })
            document.querySelector(`[data-target="${path}"]`).classList.add('active')
        })
    })

});