let data = {
    forecastCard: {
        commercial: {
            modifier: 'forecastCard_commercial',
            diagramm: fullData => fullData.diagramm,
            tooltip: fullData => fullData.tooltip
        },
        mini: {
            modifier: 'forecastCard_mini',
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
        }
    }
};
