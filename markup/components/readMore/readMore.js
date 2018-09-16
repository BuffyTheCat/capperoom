$('.readMore').on('click', function () {
    $(this).parent().toggleClass('opened');
    let $this = $(this),
        text = $this.text(),
        parent = $this.parent();
    if (text === 'Читать далее') {
        $this.text('Свернуть текст');
    } else {
        $this.text('Читать далее');
    }
});
