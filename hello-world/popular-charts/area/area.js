
window.addEventListener('load', async () => {

    const response = await fetch('/assets/data_samples/stock_sample.json');
    const data = await response.json();
    const stocks = data.stocks;

    console.log(stocks);    // checking if json is being fetched correctly

    if (!Array.isArray(stocks) || stocks.length === 0) {
        console.error('No stock data found in JSON');
        return;
    }

    const scaleXLabel = stocks.map(stock => stock.symbol || stock.company || 'N/A');
    const initialPrices = stocks.map(stock => Number(stock.initial_price) || 0);
    const pricesIn2002 = stocks.map(stock => Number(stock.price_2002) || 0);
    const pricesIn2007 = stocks.map(stock => Number(stock.price_2007) || 0);
    
    var myConfig = {
        "globals": {
            "font-family": "Roboto"
        },

        "graphset": [{
            "type": "area",
            "background-color": "#fff",
            "utc": true,
            "title": {
                "y": "15px",
                "text": "Stocks Price Performance",
                "background-color": "none",
                "font-color": "#05636c",
                "font-size": "24px",
                "height": "25px",
                "adjust-layout": true
            },
            "plotarea": {
                "margin-top": "10%",
                "margin-right": "dynamic",
                "margin-bottom": "dynamic",
                "margin-left": "dynamic",
                "adjust-layout": true
            },
            "labels": [{
                "text": "Initial Price: %plot-2-value",
                "default-value": "",
                "color": "#19c24c",
                "x": "20%",
                "y": 50.,
                "width": 120,
                "text-align": "left",
                "bold": 0,
                "font-size": "14px",
                "font-weight": "bold"
            },
            {
                "text": "Price in 2002: %plot-1-value",
                "default-value": "",
                "color": "#9366c2",
                "x": "45%",
                "y": 50,
                "width": 120,
                "text-align": "left",
                "bold": 0,
                "font-size": "14px",
                "font-weight": "bold"
            },
            {
                "text": "Price in 2007: %plot-0-value",
                "default-value": "",
                "color": "#294dc2",
                "x": "70%",
                "y": 50,
                "width": 120,
                "text-align": "left",
                "bold": 0,
                "font-size": "14px",
                "font-weight": "bold"
            }
            ],
            "scale-x": {
                "label": {
                    "text": "Companies",
                    "font-size": "14px",
                    "font-weight": "normal",
                    "offset-x": "10%",
                    "font-angle": 360
                },
                "item": {
                    "text-align": "center",
                    "font-color": "#05636c"
                },
                "zooming": 1,
                "max-labels": 25,
                "labels": scaleXLabel,
                "max-items": 25,
                "items-overlap": true,
                "guide": {
                    "line-width": "0px"
                },
                "tick": {
                    "line-width": "2px"
                },
            },
            "crosshair-x": {
                "line-color": "#fff",
                "line-width": 1,
                "plot-label": {
                    "visible": false
                }
            },
            "scale-y": {
                "values": "0:250:50",
                "item": {
                    "font-color": "#05636c",
                    "font-weight": "normal"
                },
                "label": {
                    "text": "Prices",
                    "font-size": "14px"
                },
                "guide": {
                    "line-width": "0px",
                    "alpha": 0.2,
                    "line-style": "dashed"
                }
            },
            "plot": {
                "line-width": 2,
                "marker": {
                    "size": 1,
                    "visible": false
                },
                "tooltip": {
                    "font-family": "Roboto",
                    "font-size": "15px",
                    "text": "%t of %v for %data-days",
                    "text-align": "left",
                    "border-radius": 5,
                    "padding": 10
                }
            },
            "series": [{
                    "values": initialPrices,
                    "data-days": scaleXLabel,
                    "line-color": "#19c24c",
                    "aspect": "spline",
                    "background-color": "#19c24c",
                    "alpha-area": ".5",
                    "font-family": "Roboto",
                    "font-size": "14px",
                    "text": "Initial Price"
                },
                {
                    "values": pricesIn2002 ,
                    "data-days": scaleXLabel ,
                    "line-color": "#9366c2",
                    "background-color": "#9366c2",
                    "alpha-area": ".3",
                    "text": "2002 Price",
                    "aspect": "spline",
                    "font-family": "Roboto",
                    "font-size": "14px"
                },
                {
                    "values": pricesIn2007,
                    "data-days": scaleXLabel,
                    "line-color": "#294dc2",
                    "background-color": "#294dc2",
                    "aspect": "spline",
                    "alpha-area": "0.2",
                    "text": "2007 Price",
                    "font-family": "Roboto",
                    "font-size": "14px"
                }]
        }]
    };

    zingchart.render({
        id: 'myChart',
        data: myConfig,
        height: '100%',
        width: '100%'
    });

});







