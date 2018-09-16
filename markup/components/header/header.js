$('.header__sublinks').mCustomScrollbar({
    axis: 'y'
});

$('.header__search .search__button').on('click', function () {
    $('.header__link').hide();
    $('.hamburger').show();
    $('.search__input').show();
    $('.search__input').addClass('active');
});


$('.hamburger').on('click', function () {
    $('.search__input').hide();
    $('.search__input').removeClass('active');
    $('.hamburger').hide();
    $('.header__link').show();
});
