let data = {
    forecastCard: {
        commercial: {
            modifier: 'forecastCard_commercial',
            diagramm: fullData => fullData.diagramm,
            tooltip: fullData => fullData.tooltip
        },
        multiple: {
            modifier: ' forecastCard_multiple',
            diagramm: fullData => fullData.diagramm,
            tooltip: fullData => fullData.tooltip
        },
        mini: {
            modifier: 'forecastCard_mini',
            diagramm: fullData => fullData.diagramm,
            tooltip: fullData => fullData.tooltip
        },
        basketmini: {
            mix: 'basket__item',
            modifier: 'forecastCard_mini forecastCard_basket',
            diagramm: fullData => fullData.diagramm,
            tooltip: fullData => fullData.tooltip
        },
        basketminimultiple: {
            popup: '.multiple',
            jsOpen: 'js-open',
            mix: 'basket__item',
            modifier: 'forecastCard_mini forecastCard_multiple forecastCard_basket',
            diagramm: fullData => fullData.diagramm,
            tooltip: fullData => fullData.tooltip
        },
        minimultiple: {
            modifier: 'forecastCard_mini forecastCard_multiple',
            jsOpen: 'js-open',
            popup: '.multiple',
            diagramm: fullData => fullData.diagramm,
            tooltip: fullData => fullData.tooltip
        },
        minicommercial: {
            modifier: 'forecastCard_mini forecastCard_commercial',
            diagramm: fullData => fullData.diagramm,
            tooltip: fullData => fullData.tooltip
        },
        opened: {
            modifier: 'forecastCard_opened',
            status: 'Ожидаем',
            diagramm: fullData => fullData.diagramm,
            tooltip: fullData => fullData.tooltip
        },
        openedtrue: {
            modifier: 'forecastCard_opened forecastCard_opened_true',
            status: 'Верно',
            diagramm: fullData => fullData.diagramm,
            tooltip: fullData => fullData.tooltip
        },
        openedfalse: {
            modifier: 'forecastCard_opened forecastCard_opened_false',
            status: 'Ошибся ',
            diagramm: fullData => fullData.diagramm,
            tooltip: fullData => fullData.tooltip
        },
        personalopened: {
            modifier: 'forecastCard_opened forecastCard_personal',
            status: 'Ожидаем',
            diagramm: fullData => fullData.diagramm,
            tooltip: fullData => fullData.tooltip
        },
        personalopenedtrue: {
            modifier: 'forecastCard_opened forecastCard_personal forecastCard_opened_true',
            status: 'Верно',
            diagramm: fullData => fullData.diagramm,
            tooltip: fullData => fullData.tooltip
        },
        personalopenedfalse: {
            modifier: 'forecastCard_opened forecastCard_personal forecastCard_opened_false',
            status: 'Ошибся ',
            diagramm: fullData => fullData.diagramm,
            tooltip: fullData => fullData.tooltip
        }
    }
};
