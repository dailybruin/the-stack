var margin = {top: 40, right: 20, bottom: 30, left: 40},
    width = 720 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Donators:</strong> <span style='color:red'>" + d.y + "</span>\n<strong>College:</strong> <span style='color:red'>" + d.name.toUpperCase() + "</span>";
  })

var svg = d3.select("#vertical-bar").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr('class', 'wrapper')
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.call(tip);

// stacked bar chart colors
var color = d3.scale.category20();

var data_structure = []

// Get the data again
d3.json("/datasets/presidential-campaign-donations/result.json", function(error, data) {

  $('#option > input').on('click', function() {
    update(2)
  });

  data_structure = data; 

  function update(index) {

    var data = data_structure[index];

    var colleges = data.colleges.map(function(c) { return c.name });

    var new_layers = d3.layout.stack()(colleges.map(function(c) {

      return data.jobs.map(function(d, i) {
        if (typeof d.colleges[c] == 'undefined') {
          return( { x : i, y : 0 })
        }
        return( { x : i, y : d.colleges[c].donators, name : c } );
      });
    }));

    x.domain(new_layers[0].map(function(d) { return d.x }));
    y.domain([0, d3.max(new_layers[new_layers.length - 1], function(d) { return d.y0 + d.y; })]).nice()

    var layers = svg.selectAll(".layer")

    svg.selectAll(".y.axis")
      .transition().duration(300)
      .call(yAxis);

    svg.selectAll(".x.axis")
      .transition().duration(300)
      .call(xAxis);

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)

    

    layers.selectAll("rect")
      .data(new_layers)
      .exit()
      .transition()
        .duration(300)
      .attr("y", function(d) { return -1 * y(d.y + d.y0); })
      .remove();

    layers
      .transition()
        .duration(300)
      .remove()



    var new_layer = svg.selectAll(".layer")
      .data(new_layers)
    .enter().append("g")
      .attr("class", "layer")
      .style("fill", function(d, i) { 
        return color(i); 
      });

    new_layer.selectAll("rect")
      .data(function(d) { console.log(d); return d; })
    .enter().append("rect")
      .attr("x", function(d) { return x(d.x); })
      .attr("y", function(d) { return y(d.y + d.y0); })
      .attr("height", function(d) { return y(d.y0) - y(d.y + d.y0); })
      .attr("width", x.rangeBand() - 1)
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);
  }

  update(0);
});