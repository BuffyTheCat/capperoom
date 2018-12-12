$('.comment__read-next').on('click', function () {
    $(this).parent().prev().toggleClass('opened');
    $(this).toggleClass('arrow-rotate');
    let $this = $(this),
        text = $this.text();
    if (text === 'Читать далее') {
        $this.text('Свернуть текст');
    } else {
        $this.text('Читать далее');
    }
});
