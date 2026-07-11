ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"];

window.addEventListener('load', async () => {
  const response = await fetch('/assets/data_samples/moods.json');
  const data = await response.json();
  const moods = data.moods;

  let palette = [ '#FFD872', '#00B0BA', '#4DD091', '#6C88C4',
                  '#FF5768', '#C05780', '#b8e4d6', '#CFF800',
                  '#00CDAC', '#FFA23A'];

  const moodSeries = moods.map((m, i) => ({
    text: m.label,
    values: [m.value],
    backgroundColor: palette[i % palette.length]
  }));

  var myConfig = {
    type: "pie",
    plot: {
      borderColor: "#2B313B",
      borderWidth: 3,
      valueBox: {
        placement: 'fixed=70%;50%',
        text: '%t\n%npv%',
        fontFamily: "Open Sans"
      },
      tooltip: {
        fontSize: '18',
        fontFamily: "Open Sans",
        padding: "5 10",
        text: "%npv%"
      },
      animation: {
        effect: 2,
        method: 5,
        speed: 900,
        sequence: 1,
        delay: 3000
      },
      pieTransform: 'droplet',
      slice: 0
    },
    source: {
      text: 'gs.statcounter.com',
      fontColor: "#8e99a9",
      fontFamily: "Open Sans"
    },
    title: {
      "fontColor": "#8e99a9",
      "text": 'Mood Flower Pie Chart',
      "align": "left",
      "offsetX": 10,
      "fontFamily": "Open Sans",
      "fontSize": 25,
      "visible": false
    },
    "subtitle": {
      "offsetX": 10,
      "offsetY": 10,
      "fontColor": "#8e99a9",
      "fontFamily": "Open Sans",
      "fontSize": "16",
      "text": 'Forget-Mood-Nots',
      "align": "left",
      "visible": false
    },
    "plotarea": {
      margin: "20 0 0 0"
    },
    "series": moodSeries
  };

  zingchart.render({
    id: 'flowerChart',
    data: myConfig,
    height: '300px',
    width: '300px'
  });
});

