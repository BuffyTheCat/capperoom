$('.about__item-heading').on('click', function () {
    let heading = $(this);
    heading.closest('.about__item').siblings().removeClass('opened');
    heading.closest('.about__item').toggleClass('opened');
    $('html, body').animate({
        scrollTop: heading.offset().top
    }, 500);
});
