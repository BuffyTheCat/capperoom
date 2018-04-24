

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

function getSrc() {
    let srcImage = $('.prize__gallery').find('.slick-current').find('img').attr('src');
    $('.prize__view').attr('src', srcImage);
}

function slickNext() {
    $('.slick-next').on('click', function () {
        getSrc();
    });
}

function slickPrev() {
    $('.slick-prev').on('click', function () {
        getSrc();
    });
}

$('.competition__prize').on('click', function () {
    $('.prize__gallery').slick('refresh');
    getSrc();
    slickNext();
    slickPrev();
});

$('.prize__gallery').slick({
    slidesToScroll: 1,
    infinite: true,
    slidesToShow: 3,
    centerMode: true,
    variableWidth: true
});

$('.analist__select').select2({
    minimumResultsForSearch: Infinity,
    dropdownCssClass: 'dropdown_blue'
});
