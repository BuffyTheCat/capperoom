let data = {
    comment: {
        agree: {
            modifier: 'comment_agree',
            diagramm: fullData => fullData.diagramm
        },
        disagree: {
            modifier: 'comment_disagree',
            diagramm: fullData => fullData.diagramm
        },
        nostatus: {
            modifier: 'comment_nostatus',
            diagramm: fullData => fullData.diagramm
        }
    }
};
