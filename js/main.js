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

    // Modal
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
    $('.modal-request__form-footer .button').click(function () {
        $('.modal-request__form').iziModal('next');
    });
    $('.popup-request').click(function () {
        $('.modal-request__form').iziModal('open');
    });
    $('.modal-request__label input, .modal-request__label-textarea textarea').focusin(function () {
        $(this).parent().addClass('focus');
    }).focusout(function () {
        $(this).parent().removeClass('focus');
    });

});