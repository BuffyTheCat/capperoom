$('.createPopup').on('change', 'input[type=radio]', function () {
    let active = $('.createPopup').find('.popup__content.active');
    let title = $('.createPopup').find('.popup__title');


    if (!$(active).hasClass('popup__content_fourthStep')) {
        $(active).removeClass('active').next().addClass('active');
    }

    active = $('.createPopup').find('.popup__content.active');

    if (!$(active).hasClass('popup__content_firstStep')) {
        $('.createPopup__prev').css('display', 'flex');
    } else {
        $('.createPopup__prev').css('display', 'none');
    }

    if ($(active).hasClass('popup__content_secondStep')) {
        $(title).text('ШАг 2:   Выберите лигу футбола');
    } else if ($(active).hasClass('popup__content_thirdStep')) {
        $(title).text('ШАг 3:   Выберите матч');
    } else if ($(active).hasClass('popup__content_fourthStep')) {
        $(title).text('ШАг 4:   Выберите событие');
    } else {
        $(title).text('ШАг 1:   Выберите нужный вид спорта');
    }

    if ($(active).hasClass('popup__content_thirdStep')) {
        $('.select2').show();
    } else {
        $('.select2').hide();
    }

    if ($(active).hasClass('popup__content_fourthStep')) {
        $('.createPopup__submit').show();
    } else {
        $('.createPopup__submit').hide();
    }
});

$('.createPopup__prev').on('click', function () {
    let active = $('.createPopup').find('.popup__content.active');
    let title = $('.createPopup').find('.popup__title');

    if (!$(active).hasClass('popup__content_firstStep')) {
        $(active).removeClass('active').prev().addClass('active');
    }
    active = $('.createPopup').find('.popup__content.active');

    if ($(active).hasClass('popup__content_secondStep')) {
        $(title).text('ШАг 2:   Выберите лигу футбола');
    } else if ($(active).hasClass('popup__content_thirdStep')) {
        $(title).text('ШАг 3:   Выберите матч');
    } else if ($(active).hasClass('popup__content_fourthStep')) {
        $(title).text('ШАг 4:   Выберите событие');
    } else {
        $(title).text('ШАг 1:   Выберите нужный вид спорта');
    }

    if (!$(active).hasClass('popup__content_firstStep')) {
        $('.createPopup__prev').css('display', 'flex');
    } else {
        $('.createPopup__prev').css('display', 'none');
    }

    if ($(active).hasClass('popup__content_thirdStep')) {
        $('.select2').show();
    } else {
        $('.select2').hide();
    }

    if ($(active).hasClass('popup__content_fourthStep')) {
        $('.createPopup__submit').show();
    } else {
        $('.createPopup__submit').hide();
    }
});

$('.popup__content').mCustomScrollbar({
    axis: 'y'
});

$('.createPopup__events-heading').on('click', function () {
    $(this).closest('.createPopup__events').toggleClass('active');
});
