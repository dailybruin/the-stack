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
    var f = curr_filter == "donators" ? "Donators" : "Amount";
    var val = curr_filter == "donators" ? d.y : "$" + d.y.toFixed(2);
    return "<strong>College:</strong> <span style='color:red'>" + d.name.toUpperCase() + "</span><br><strong>" + f + ":</strong> <span style='color:red'>" + val + "</span>";
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

var curr_cand = 0;
var curr_filter = "donators";

// Get the data again
d3.json("/datasets/presidential-campaign-donations/result.json", function(error, data) {

  $('#hori-dropdown').dropdown({
    onChange: function (val) {
      curr_cand = val-1;
      update();

    }
  });

  $('#d2').dropdown({
    onChange: function (val) {
      if (val == "Donators") {
        curr_filter = "donators";
      }
      else {
        curr_filter = "total";
      }
      update();

    }
  });

  data_structure = data;

  function update() {

    var data = data_structure[curr_cand];

    if (data.colleges.length == 0) {
      new_layers = [
        [
          {
            x : 0,
            y: 0
          }
        ]
      ];
    }
    var colleges = data.colleges.map(function(c) { return c.name });

    var new_layers = d3.layout.stack()(colleges.map(function(c) {

      return data.jobs.map(function(d, i) {
        if (typeof d.colleges[c] == 'undefined') {
          return( { x : i, y : 0 })
        }
        return( { x : i, y : d.colleges[c][curr_filter], name : c } );
      });
    }));

    x.domain(new_layers[0].map(function(d) { return d.x }));
    y.domain([0, d3.max(new_layers[new_layers.length - 1], function(d) { return d.y0 + d.y; })]).nice()

    svg.select(".y.axis").remove()
    svg.select(".x.axis").remove()

    svg.select(".y.axis")
      .transition().duration(300)
      .call(yAxis);

    svg.select(".x.axis")
      .transition().duration(300)
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)

    svg.selectAll(".layer").remove();

    var new_layer = svg.selectAll(".layer")
      .data(new_layers)
      .enter().append("g")
      .attr("class", "layer")
      .style("fill", function(d, i) {
        return color(i);
      });

    new_layer.selectAll("rect")
      .data(function(d) { return d; })
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
