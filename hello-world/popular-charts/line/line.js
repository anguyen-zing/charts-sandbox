window.addEventListener('load', async () => {

    const response = await fetch('/assets/data_samples/racing_times.json');
    const data = await response.json();

    const colors = [
        { line: '#82bdd4', border: '#82bdd4' },
        { line: '#dea0c8', border: '#dea0c8' },
        { line: '#83e298', border: '#83e298' }
    ];

    const numberWords = ['one', 'two', 'three'];

    const raceSeries = data.runners.map((runner, i) => {
        const imagePath = `/assets/pictures/runner-${numberWords[i]}.png`;
        const markerImg = `${imagePath}`;

        return {
            "values": runner.elapsedSeconds,
            "text": runner.name,
            "line-color": colors[i].line,
            "legend-item": {
                "background-color": colors[i].line,
                "borderRadius": 5,
                "font-color": "white"
            },
            "legend-marker": { "visible": true },
            "marker": {
                "background-color": 'none',
                "background-image": markerImg,
                "background-repeat": 'no-repeat',
                "background-scale": 0.1,
                "size": '75px'
            },
            "highlight-marker": {
                "size": 1,
                "background-image": markerImg
            }
        };
    });

    var myConfig = {
        "type": "line",
        "utc": true,
        "title": {
            "text": "A Marathon Championship Race",
            "font-size": "24px",
            "adjust-layout": true
        },
        "plotarea": {
            "margin": "dynamic 45 60 dynamic"
        },
        "legend": {
            "layout": "float",
            "background-color": "none",
            "border-width": 0,
            "shadow": 0,
            "align": "center",
            "adjust-layout": true,
            "toggle-action": "remove",
            "item": {
                "padding": 7,
                "marginRight": 17,
                "cursor": "hand"
            }
        },
        "scale-x": {
            "values": data.distanceKm,
            "shadow": 0,
            "step": 5,
            "max-value": 45,
            "label": {
                "text": "Distance in KM"
            },
            "minor-ticks": 0
        },
        "scale-y": {
            "line-color": "#f6f7f8",
            "min-value": 800,
            "max-value": 8000,
            "shadow": 0,
            "step": 800,
            "guide": {
                "line-style": "dashed"
            },
            "label": {
                "text": "Time Elapsed in Seconds"
            },
            "minor-ticks": 0,
            "thousands-separator": ","
        },
        "crosshair-x": {
            "line-color": "#efefef",
            "plot-label": {
                "border-radius": "5px",
                "border-width": "1px",
                "border-color": "#f6f7f8",
                "padding": "10px",
                "font-weight": "bold"
            },
            "scale-label": {
                "font-color": "#000",
                "background-color": "#f6f7f8",
                "border-radius": "5px"
            }
        },
        "tooltip": {
            "visible": false
        },
        "plot": {
            "highlight": true,
            "tooltip-text": "%t: %v sec<br>%k km",
            "shadow": 0,
            "line-width": "2px",
            "highlight-state": {
                "line-width": 3
            },
           

            "animation": {
                "sequence": 2,
                "speed": 1,
                "method": 0
            }
        },
        "series": raceSeries
    };

    zingchart.render({
        id: 'myChart',
        data: myConfig,
        height: '100%',
        width: '100%',
        output: 'svg'
    });

});