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
    $('.js-popup').css('top', position + 40 + 'px');
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

function openPopUp(Event) {
    initScrollHandler();
    Event.stopPropagation();
    let popup = $(this).data('src');
    $('.popup').removeClass('opened');
    $(popup).addClass('opened');
    $('.overlay').addClass('active');
}

$('.js-open').on('click', openPopUp);
$('.popup__close').on('click', closePopUp);
$('.overlay').on('click', closePopUp);

$('.prize__desc').mCustomScrollbar({
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


$('.select_white').select2({
    minimumResultsForSearch: Infinity,
    containerCssClass: 'dropdown_white'
});

$('.catalogue__sport-details').mCustomScrollbar({
    axis: 'y',
    setLeft: 0
});

$('.filter__sport-details').mCustomScrollbar({
    axis: 'y',
    setLeft: 0
});

$('.catalogue__sport .checkbox__button').on('click', function () {
    $(this).closest('.checkbox').toggleClass('opened');
});

$('.filter__sport .checkbox__button').on('click', function () {
    $(this).closest('.checkbox').toggleClass('opened');
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
        $('.personalRating__correct-like').find('.personalRating__infographics-scale').css( 'height', correctPercent + 'px' );
    } else {
        $('.personalRating__correct-like').find('.personalRating__infographics-scale').css( 'height', '100px' );
        let correctPercent = correctLike / correctPrediction;
        $('.personalRating__correct-prediction').find('.personalRating__infographics-scale').css( 'height', correctPercent + 'px' );
    }

    if (incorrectPrediction > incorrectLike ) {
        $('.personalRating__incorrect-prediction').find('.personalRating__infographics-scale').css( 'height', '100px' );
        let incorrectPercent = incorrectPrediction / incorrectLike;
        $('.personalRating__incorrect-like').find('.personalRating__infographics-scale').css( 'height', incorrectPercent + 'px' );
    } else {
        $('.personalRating__incorrect-like').find('.personalRating__infographics-scale').css( 'height', '100px' );
        let incorrectPercent = incorrectLike / incorrectPrediction;
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

$('.ligue').on('click', '.ligue__item', function () {
    $(this).addClass('active').siblings().removeClass('active');
});

$('.matches').on('click', '.matches__command-heading', function () {
    $(this).closest('.matches__command').toggleClass('opened').siblings().removeClass('opened');
    let parent = $(this).closest('.matches__command');
    let list = $(parent).find('.matches__command-list');
    let offset = $(parent).offset().top;
    let outer = $(parent).outerHeight();
    let offsetTop = offset + outer - 105;
    $(list).css('top', offsetTop);
});

$('.matches__command-filter').on('click', function () {
    $(this).toggleClass('matches__command-filter_filtred');
});

$('.subscription__type').on('click', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('.subscription').find('.subscription__info').removeClass('active').eq($(this).index()).addClass('active');
    if ($('.subscription__type').first().is('.active')) {
        $('.subscription__info.active').css('border-radius', '5px 5px 5px 0');
    } else if ($('.subscription__type').last().is('.active')) {
        $('.subscription__info.active').css('border-radius', '5px 5px 0 5px');
    } else {
        $('.subscription__info.active').css('border-radius', '5px 5px 5px 5px');
    }
});

// var Inputmask = require('inputmask/dist/inputmask/jquery.inputmask.js');
//
// var selector = document.getElementById('phone');
// var im = new Inputmask('99-9999999');
// im.mask(selector);

// $('input[type=number]').inputmask({
//     'mask': '+7 999 999-99-99',
//     showMaskOnHover: false,
//     showMaskOnFocus: true
// });
