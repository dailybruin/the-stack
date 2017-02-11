// Set the dimensions of the canvas / graph
var margin = {top: 30, right: 20, bottom: 30, left: 50},
width = 650 - margin.left - margin.right,
height = 350 - margin.top - margin.bottom;

var svg = d3.select("#line-chart-wrapper")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleLinear()
          .rangeRound([0, width - 50]);

var y = d3.scaleLinear()
          .rangeRound([height - 10, 0]);

var line = d3.line()
    .x(function(d) {return x(d.year);})
    .y(function(d) {return y(d.total);});

d3.json("/datasets/research-funding/dummy.json", function(err, data) {
    initLineChart(data);
})

// Dropdown function - invokes update
$('#lineChartDropdown').change(function(option) {
    updateData();
});