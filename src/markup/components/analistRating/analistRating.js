

$('.analistRating__filter').on('click', '.analistRating__filter-item:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('.analistRating').find('.analistList__heading').removeClass('active').eq($(this).index()).addClass('active');
});
