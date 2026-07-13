window.addEventListener('load', async () => {

    const response = await fetch("/assets/data_samples/constellations.json");
    const data = await response.json();


    const chartTitle = data.title;
    const xAxisLabel = data.xAxis.label;
    const yAxisLabel = data.yAxis.label;


    let myConfig4 = {
        "type": "scatter",
        title: {
            text: chartTitle,
            adjustLayout: true
        },
        scaleX: {
            item: {
                fontSize: '13px',
                fontWeight: 'bold'
            },
            label: {
                text: xAxisLabel
            },
            lineWidth: 0,
            offset: 0,
            placement: 'opposite',
            tick: {
                visible: false
            },
            "min-value": data.xAxis.min,
            "max-value": data.xAxis.max

        },
        scaleY: {
            guide: {
                visible: true
            },
            label: {
                text: yAxisLabel
            },
            lineColor: '#aaa',
            offset: 0,
            tick: {
                lineColor: '#aaa'
            },
            "min-value": data.yAxis.min,
            "max-value": data.yAxis.max
        },

        "series": [{
            "values": data.series[0].values,
            "marker": {type: 'star9'}
        },
        {
            "values": data.series[1].values,
            "marker": {type: 'star5'}
        },
        {
            "values": data.series[2].values,
            "marker": {type: 'star6'}
        },
        {
            "values": data.series[3].values,
            "marker": {type: 'star4'}
        }
        ]
    };

    zingchart.render({
        id: 'myChart',
        data: myConfig4,
        height: 400,
        width: "100%"
    });
});


