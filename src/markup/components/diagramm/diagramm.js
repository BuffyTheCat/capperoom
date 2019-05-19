let diagrammValue = $('.diagramm__value').html();

$('.diagramm_grey').find('.diagramm__circle').circliful({
    animationStep: 5,
    foregroundBorderWidth: 22,
    backgroundBorderWidth: 22,
    percent: diagrammValue,
    pointSize: 0,
    foregroundColor: '#c5c5c5',
    backgroundColor: '#7f7f7f'
});

$('.diagramm_bigGrey').find('.diagramm__circle').circliful({
    animationStep: 5,
    foregroundBorderWidth: 22,
    backgroundBorderWidth: 22,
    pointSize: 10,
    percent: diagrammValue,
    foregroundColor: '#c5c5c5',
    backgroundColor: '#7f7f7f'
});

$('.diagramm_orange').find('.diagramm__circle').circliful({
    animationStep: 5,
    foregroundBorderWidth: 22,
    backgroundBorderWidth: 22,
    percent: diagrammValue,
    pointSize: 0,
    foregroundColor: '#ffba00',
    backgroundColor: '#7f7f7f'
});

$('.diagramm_black').find('.diagramm__circle').circliful({
    animationStep: 5,
    foregroundBorderWidth: 22,
    backgroundBorderWidth: 22,
    percent: diagrammValue,
    pointSize: 0,
    foregroundColor: '#ffba00',
    backgroundColor: '#1e2126'
});
