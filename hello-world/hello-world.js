// window:load event for Javascript to run after HTML
// because this Javascript is injected into the document head
window.addEventListener('load', function () {
    // Javascript code to execute after DOM content

    var toggleSwitch = document.querySelector('#chartOrientationToggle input');
    var toggleLabel = document.querySelector('#chartOrientationToggle p');
    let chartType = 'bar';

    let series1Color = '#4d80a6';
    let series2Color = '#70cfeb';
    let series3Color = '#8ee9de';

    // full ZingChart schema can be found here:
    // https://www.zingchart.com/docs/api/json-configuration/
    const myConfig = {
        type: chartType,
        title: {
            text: 'Hello World Demo',
            fontSize: 24,
            color: '#5d7d9a'
        },
        legend: {
            draggable: true,
        },
        scaleX: {
            // set scale label
            label: {
                text: 'Days'
            },
            // convert text on scale indices
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        scaleY: {
            // scale label with unicode character
            label: {
                text: 'Temperature (°F)'
            }
        },
        plot: {
            // animation docs here:
            // https://www.zingchart.com/docs/tutorials/design-and-styling/chart-animation/#animation__effect
            animation: {
                effect: 'ANIMATION_EXPAND_BOTTOM',
                method: 'ANIMATION_STRONG_EASE_OUT',
                sequence: 'ANIMATION_BY_NODE',
                speed: 275,
            }
        },
        series: [{
            // plot 1 values, linear data
            values: [23, 20, 27, 29, 25, 17, 15],
            text: 'Week 1',
            backgroundColor: series1Color
        },
        {
            // plot 2 values, linear data
            values: [35, 42, 33, 49, 35, 47, 35],
            text: 'Week 2',
            backgroundColor: series2Color
        },
        {
            // plot 2 values, linear data
            values: [15, 22, 13, 33, 44, 27, 31],
            text: 'Week 3',
            backgroundColor: series3Color
        }
        ]
    };

    zingchart.render({
        id: 'myChart',
        data: myConfig,
        height: '100%',
        width: '100%'
    });

    toggleSwitch.addEventListener('change', function () {
        var isChecked = toggleSwitch.checked;

        if(isChecked){
            chartType = 'hbar';
            toggleLabel.textContent = "Horizontal Bar Chart";
            document.body.setAttribute('data-theme', 'horizontal');
            series1Color = '#ffb52c';
            series2Color = '#dca1ff';
            series3Color = '#ffb3e9';

        }

        else {
            chartType = 'vbar';
            toggleLabel.textContent = "Vertical Bar Chart";
            document.body.setAttribute('data-theme', 'vertical');
            series1Color = '#4d80a6';
            series2Color = '#70cfeb';
            series3Color = '#8ee9de';
        }

    
        myConfig.type = chartType;  // passing the updated toggle value to the chart type in the config object

        myConfig.series[0].backgroundColor = series1Color;
        myConfig.series[1].backgroundColor = series2Color;
        myConfig.series[2].backgroundColor = series3Color;

        myConfig.title.color = series1Color;

        zingchart.render({
            id: 'myChart',
            data: myConfig,
            height: '100%',
            width: '100%'
        });
    });

});