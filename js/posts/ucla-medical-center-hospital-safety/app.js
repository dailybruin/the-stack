(function(){
  var dataUrl = '/datasets/ucla-medical-center-hospital-safety/scores.json';
  $.getJSON(dataUrl, function(jdata) {
    var data =jdata;
    var chart = RadarChart.chart();
    var cfg = chart.config();
    chart.config({w:500,h:500,axisText: false});
    var svg = d3.select('#chart-container').append('svg')
      .attr('width', 500)
      .attr('height', 500);
    svg.append('g').classed('focus', 1).datum(data).call(chart);
    // many radars
    var chart_index = 0;
    function render() {
    $.getJSON(dataUrl, function(jdata) {
      var chart = RadarChart.chart();
      var data = [jdata[chart_index%3]];
      chart.config({w: 250, h:250, axisText: false, levels: 0, circles: false});
      cfg = chart.config();
      d3.select('.intro-radar svg').remove();
      //var svg = d3.select('.intro-radar').append('svg')
      //  .attr('width', 900)
      //  .attr('height', 250);
      //svg.append('g').classed('focus', 1).datum(data).call(chart);
      setTimeout(render, 2000);
        chart_index+=1;
      });
    }
    render();
  });
})();
