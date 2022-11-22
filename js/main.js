'use strict'

$(document).ready(function () {

    $('.header__list').parent().find('a').click(function (e) {
        e.preventDefault();
    });
    $('.header__menu-item').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active').find('.header__list').slideUp();
        } else {
            $('.header__menu-item.active').removeClass('active').find('.header__list').slideUp();
            $(this).toggleClass('active').find('.header__list').slideToggle();
        }
    });
    $('.header__language-btn').click(function () {
        $(this).toggleClass('active');
        $('.header__language-list').slideToggle();
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

});