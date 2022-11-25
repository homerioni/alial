ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.752977, 37.713045],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            balloonContent: 'Sanuvox'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-icon.svg',
            // Размеры метки.
            iconImageSize: [rem(5.5), rem(7.5)],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [rem(-2.8), rem(-6.8)]
        });

    myMap.geoObjects.add(myPlacemark);
});