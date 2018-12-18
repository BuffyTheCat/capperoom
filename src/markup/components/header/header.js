$('.header__sublinks').mCustomScrollbar({
    axis: 'y'
});

$('.header__search .search__button').on('click', function () {
    $('.header__link').fadeOut();
    $('.hamburger').fadeIn();
    $('.search__input').addClass('active');
});


$('.hamburger').on('click', function () {
    $('.search__input').removeClass('active');
    $('.hamburger').fadeOut();
    $('.header__link').fadeIn();
});
