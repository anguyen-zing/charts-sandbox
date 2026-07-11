window.addEventListener('load', async () => {

    const response = await fetch('/assets/data_samples/moods.json');
    const data = await response.json();
    const stem = data.verticalMoods;

    const colors = [
        { line: '#FFD872', border: '#FFD872' },
        { line: '#00B0BA', border: '#00B0BA' },
        { line: '#4DD091', border: '#4DD091' },
        { line: '#6C88C4', border: '#6C88C4' },
        { line: '#FF5768', border: '#FF5768' },
        { line: '#C05780', border: '#C05780' },
        { line: '#b8e4d6', border: '#b8e4d6' },
        { line: '#CFF800', border: '#CFF800' },
        { line: '#00CDAC', border: '#00CDAC' },
        { line: '#FFA23A', border: '#FFA23A' }
    ];

    const stemMoodSeries = stem.map((mood, i) => {
        const imagePath = `/assets/pictures/leaf.png`;
        const markerImg = `${imagePath}`;

        const values = mood.path.x.map((x, index) => [ x, mood.path.y[index]]);

        return {
            "text": stem[i].label,
            "values": values,
            "line-color": colors[i].line,
            "legend-marker": { "visible": false},
            "marker": {
                "background-color": 'none',
                "background-image": markerImg,
                "background-repeat": 'no-repeat',
                "background-scale": 0.1,
                "size": '30px'
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
            "text": "Mood Stem",
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
            "shadow": 0,
            "step": 1,
            "min-value": -10,
            "max-value": 10,
          
            "minor-ticks": 0
        },
        "scale-y": {
            "line-color": "#f6f7f8",
            "min-value": 0,
            "max-value": 75,
            "shadow": 0,
            "step": 5,
            "guide": {
                "line-style": "dashed"
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
        "series": stemMoodSeries
    };

    zingchart.render({
        id: 'myChart',
        data: myConfig,
        height: '1000px',
        width: '1000px',
        output: 'svg'
    });

});
