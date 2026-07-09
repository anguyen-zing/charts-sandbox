var cdata = {
  type: 'radar',
  heatmap: {},
  plotarea: {
    margin: 10
  },
  scale: {
    sizeFactor: 0.9
  },
  scaleV: {
    offsetStart: 40,
    offsetEnd: 0,
    values: '0:100:25'
  },
  scaleK: {
    aspect: 'circle',
    values: '0:355:5',
    maxItems: 12
  },
  tooltip: {},
  plot: {},
  series: [{}]
};
 
var MAX = 100;
var aData = [];
zingchart.bind('zc', 'load', function() {
  var l, k, v;
  var iMaxPoints = 512;
  for (l = 0; l < iMaxPoints; l++) {
    k = 5 * Math.round(((iMaxPoints - l) % 300) / 5) + 350;
    v = 5 * Math.round((l % 100) / 5) + 250;
    aData.push([k, v, MAX]);
  }
  zingchart.exec('zc', 'heatmap.setdata', {
    data: aData
  });
});
 
zingchart.loadModules('heatmap', function() {
  zingchart.render({
    id: 'zc',
    width: '100%',
    height: 500,
    output: 'svg',
    data: cdata,
    modules: 'heatmap,color-scale'
  });
});