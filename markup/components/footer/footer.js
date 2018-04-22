

function initScrollHandler() {
    let position = $(window).scrollTop();
    $('.js-popup').css('top', position + 50 + 'px');
    $(document).on('scroll', function () {
        position = $(window).scrollTop();
        $('.js-popup').css('top', position + 50 + 'px');
    });
}

function removeScrollHandler() {
    $(document).off();
}

function closePopUp() {
    removeScrollHandler();
    $('.js-popup').removeClass('opened');
    $('.overlay').removeClass('active');
}

function openPopUp() {
    initScrollHandler();
    let popup = $(this).data('src');
    $(popup).addClass('opened');
    $('.overlay').addClass('active');

}

$('.js-open').on('click', openPopUp);
$('.popup__close').on('click', closePopUp);
$('.overlay').on('click', closePopUp);

$('.prize__desc').mCustomScrollbar({
    axis: 'y'
});

$('.analist__forecasts-list').mCustomScrollbar({
    axis: 'y'
});

