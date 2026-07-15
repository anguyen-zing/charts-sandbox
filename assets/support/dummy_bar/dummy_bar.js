window.addEventListener('load', async () => {
    const response = await fetch('/assets/support/dummy_bar/replicate.json');
    const data = await response.json();

    var myConfig = {
        graphset: [{
            type: "hbar",
            
            backgroundColor: "white",

            plot: {
                stacked: false,
                "bar-width": "100%",   // "bar-width: 17" change to % 
                showZero: false,
                "value-box": {
                    text: "%data-risk-owner",
                    "font-color": "black",
                    placement: "bottom-in"
                },
                "bars-space-left": 0.15,    // group spacing 
                "bars-space-right": 0.15,
                barsOverlap: 0
            },

            plotarea: {
                "adjust-layout": true
            },

            scaleY: {
                label: {
                    text: "Count of Action Items"
                },
                minValue: 0,
                maxValue: 60,
                step: 5,
                itemsOverlap: true,
                maxItems: 15
            },

            "scale-x": {
                labels: data.labels,
                autoFit: false,
                itemsOverlap: false
            },

            tooltip: {
                text: "%data-risk-owner: %data-actual-value",
                decimals: 2
            },

            series: data.datasets.map(dataset => ({
                values: dataset.values.map(value => Number(value)),
                styles: dataset.colors.map(color => ({
                    "background-color": color
                })),
                "data-risk-owner": dataset.riskOwners,
                "data-actual-value": dataset.actualValues
            }))
        }]
    };

    zingchart.render({
        id: "myChart",
        data: myConfig,
        height: "100%",
        width: "100%"
    });
});