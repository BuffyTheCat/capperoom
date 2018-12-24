let data = {
    expressCard: {
        commercial: {
            modifier: 'expressCard_commercial',
            diagramm: fullData => fullData.diagramm,
            tooltip: fullData => fullData.tooltip
        },
        mini: {
            modifier: 'expressCard_mini',
            diagramm: fullData => fullData.diagramm,
            tooltip: fullData => fullData.tooltip
        },
        basketmini: {
            mix: 'basket__item',
            modifier: 'expressCard_mini expressCard_basket',
            diagramm: fullData => fullData.diagramm,
            tooltip: fullData => fullData.tooltip
        },
        basketminimultiple: {
            mix: 'basket__item',
            modifier: 'expressCard_mini expressCard_basket expressCard_multiple',
            jsOpen: 'js-open',
            popup: '.multiple',
            diagramm: fullData => fullData.diagramm,
            tooltip: fullData => fullData.tooltip
        },
        minimultiple: {
            modifier: 'expressCard_mini expressCard_multiple',
            jsOpen: 'js-open',
            popup: '.multiple',
            diagramm: fullData => fullData.diagramm,
            tooltip: fullData => fullData.tooltip
        },
        opened: {
            modifier: 'expressCard_opened',
            status: 'Ожидаем',
            diagramm: fullData => fullData.diagramm,
            tooltip: fullData => fullData.tooltip
        },
        openedtrue: {
            modifier: 'expressCard_opened expressCard_opened_true',
            status: 'Верно',
            diagramm: fullData => fullData.diagramm,
            tooltip: fullData => fullData.tooltip
        },
        openedfalse: {
            modifier: 'expressCard_opened expressCard_opened_false',
            status: 'Ошибся',
            diagramm: fullData => fullData.diagramm,
            tooltip: fullData => fullData.tooltip
        },
        personalopened: {
            modifier: 'expressCard_opened expressCard_personal',
            status: 'Ожидаем',
            diagramm: fullData => fullData.diagramm,
            tooltip: fullData => fullData.tooltip
        },
        personalopenedtrue: {
            modifier: 'expressCard_opened expressCard_personal expressCard_opened_true',
            status: 'Верно',
            diagramm: fullData => fullData.diagramm,
            tooltip: fullData => fullData.tooltip
        },
        personalopenedfalse: {
            modifier: 'expressCard_opened expressCard_personal expressCard_opened_false',
            status: 'Ошибся',
            diagramm: fullData => fullData.diagramm,
            tooltip: fullData => fullData.tooltip
        }
    }
};
