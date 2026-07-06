import ZingChart from 'zingchart-web-component'; 

customElements.define('zing-chart', ZingChart); 

window.chartRendered = function() {  console.log('The chart is rendered!');}