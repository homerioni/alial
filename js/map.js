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
            iconImageSize: [55, 75],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-28, -68]
        });

    myMap.geoObjects.add(myPlacemark);
});