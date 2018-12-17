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
        },
        paid: {
            modifier: 'forecastCard_paid',
            diagramm: fullData => fullData.diagramm,
            tooltip: fullData => fullData.tooltip
        },
        paidtrue: {
            modifier: 'forecastCard_paid forecastCard_paid_true',
            diagramm: fullData => fullData.diagramm,
            tooltip: fullData => fullData.tooltip
        },
        paidfalse: {
            modifier: 'forecastCard_paid forecastCard_paid_false',
            diagramm: fullData => fullData.diagramm,
            tooltip: fullData => fullData.tooltip
        }
    }
};
