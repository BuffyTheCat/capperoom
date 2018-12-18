$('.forecastDetail__track').on('click', function () {
    $(this).toggleClass('active');
});
$('.forecastDetail__agree').on('click', function () {
    $(this).toggleClass('active');
});
$('.forecastDetail__disagree').on('click', function () {
    $(this).toggleClass('active');
});

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
    if (!$(this).parent().hasClass('js-open')) {
        let popup = $(this).data('src');
        $('.popup').removeClass('opened');
        $(popup).addClass('opened');
        $('.overlay').addClass('active');
    }
    return false;
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

$('.multiple .popup__content').mCustomScrollbar({
    axis: 'y'
});

$('.rating .popup__content').mCustomScrollbar({
    axis: 'y'
});

let development = {
    name: 'разработчик Святослав Журавлев',
    contacts: 'buffythecat@yandex.ru',
    true: 'Теперь и ты знаешь что Саша болячка'
};

let разработка = development.name;
let контакты = development.contacts;
let александр = development.true;

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

function slickGoTo() {
    $('.slick-slide').on('click', function () {
        let index = $(this).attr('data-slick-index');
        console.log(index);
        $('.prize__gallery').slick('slickGoTo', index, false);
        getSrc();
    });
}

$('.competition__prize').on('click', function () {
    $('.prize__gallery').slick('refresh');
    getSrc();
    slickNext();
    slickPrev();
    slickGoTo();
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

$('.select_white').select2({
    minimumResultsForSearch: Infinity,
    containerCssClass: 'dropdown_white'
});

$('.catalogue__sport-details').mCustomScrollbar({
    axis: 'y',
    setLeft: 0
});

$('.catalogue__sport .checkbox__button').on('click', function () {
    $(this).closest('.checkbox').toggleClass('opened');
});

$('.analistRating__filter-item').on('click', function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
});

$('.personalData__changepass').on('click', function () {
    $(this).toggleClass('personalData__changepass_opened');
    $(this).next('.personalData__pass-form').toggleClass('opened');
});

function infographics() {
    let correctPrediction = $('.personalRating__correct-prediction').find('.personalRating__infographics-percent').find('span').html();
    let correctLike = $('.personalRating__correct-like').find('.personalRating__infographics-percent').find('span').html();
    let incorrectPrediction = $('.personalRating__incorrect-prediction').find('.personalRating__infographics-percent').find('span').html();
    let incorrectLike = $('.personalRating__incorrect-like').find('.personalRating__infographics-percent').find('span').html();
    correctPrediction = Number(correctPrediction);
    correctLike = Number(correctLike);
    incorrectPrediction = Number(incorrectPrediction);
    incorrectLike = Number(incorrectLike);

    if (correctPrediction > correctLike ) {
        $('.personalRating__correct-prediction').find('.personalRating__infographics-scale').css( 'height', '100px' );
        let correctPercent = correctPrediction / correctLike;
        console.log(correctPercent);
        $('.personalRating__correct-like').find('.personalRating__infographics-scale').css( 'height', correctPercent + 'px' );
    } else {
        $('.personalRating__correct-like').find('.personalRating__infographics-scale').css( 'height', '100px' );
        let correctPercent = correctLike / correctPrediction;
        console.log(correctPercent);
        $('.personalRating__correct-prediction').find('.personalRating__infographics-scale').css( 'height', correctPercent + 'px' );
    }

    if (incorrectPrediction > incorrectLike ) {
        $('.personalRating__incorrect-prediction').find('.personalRating__infographics-scale').css( 'height', '100px' );
        let incorrectPercent = incorrectPrediction / incorrectLike;
        console.log(incorrectPercent);
        $('.personalRating__incorrect-like').find('.personalRating__infographics-scale').css( 'height', incorrectPercent + 'px' );
    } else {
        $('.personalRating__incorrect-like').find('.personalRating__infographics-scale').css( 'height', '100px' );
        let incorrectPercent = incorrectLike / incorrectPrediction;
        console.log(incorrectPercent);
        $('.personalRating__incorrect-prediction').find('.personalRating__infographics-scale').css( 'height', incorrectPercent + 'px' );
    }
}

infographics();

$('.balance-add__tab').on('click', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('.balance-add__forms').find('.balance-add__form').removeClass('active').eq($(this).index()).addClass('active');
});

$('.balance-withdraw__tab').on('click', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('.balance-withdraw__forms').find('.balance-withdraw__form').removeClass('active').eq($(this).index()).addClass('active');
});
