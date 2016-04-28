var margin = {top: 40, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
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
    return "<strong>Donators:</strong> <span style='color:red'>" + d.donators + "</span>\n<strong>Occupation:</strong> <span style='color:red'>" + d.title + "</span>";
  })

var svg = d3.select("#viz").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.call(tip);

// stacked bar chart colors
var color = d3.scale.ordinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

d3.json("/datasets/presidential-campaign-donations/result.json", function(error, data) {
	if (error)
		throw error

	data = data[0];

  // data["jobs"] = {};
  // var jobs = d3.nest()
  // .key(function(d) { return d.title })
  // .entries(data)

  console.log(data);


  x.domain(d3.range(data["jobs"].length));
  y.domain([0, 500]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    // .append("text")
    //   .attr("transform", "rotate(-90)")
    //   .attr("y", 6)
    //   .attr("dy", ".71em")
    //   .style("text-anchor", "end")
    //   .text("Frequency");

  svg.selectAll(".bar")
      .data(function(){
        return data["jobs"]
      	// return data["colleges"][0]["jobs"]
      })
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d, i) {
      	return x(i);
      })
      .attr("width", x.rangeBand())
      .attr("y", function(d) {
      	return y(d.donators);
      })
      .attr("height", function(d) { return height - y(d.donators); })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)

});
